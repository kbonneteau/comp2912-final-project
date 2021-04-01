let database = require("../database");
const axios = require('axios');
require('dotenv').config();

let remindersController = {
  list: (req, res) => {
    const currentUser = req.user;  
    res.render("reminder/index", { reminders: currentUser.reminders, userIcon: currentUser.userIcon, currentUser: currentUser });
  },

  new: (req, res) => {
    res.render("reminder/create");
  },

  listOne: (req, res) => {
    const currentUser = req.user;
    let reminderToFind = req.params.id;
    let searchResult = currentUser.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult });
    } else {
      res.render("reminder/index", { reminders: currentUser.reminders, currentUser: currentUser });
    }
  },

  create: (req, res) => {
    const currentUser = req.user;
    let reminder = {
      id: currentUser.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      tasks: req.body.tasks,
      completed: false,
    };
    currentUser.reminders.push(reminder);
    res.redirect("/reminders");
  },

  edit: (req, res) => {
    const currentUser = req.user;
    let reminderToFind = req.params.id;
    let searchResult = currentUser.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    res.render("reminder/edit", { reminderItem: searchResult });
  },

  update: (req, res) => {
    // implement this code
    const currentUser = req.user;
    let reminderToFind = req.params.id;
    let searchResult = currentUser.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    currentUser.reminders.splice(searchResult, 1, {
      id: searchResult.id,
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed === "false" ? false : true
    });
    res.redirect("/reminders");
  },

  delete: (req, res) => {
    // Implement this code
    const currentUser = req.user;
    let reminderToFind = req.params.id;
    let searchResult = currentUser.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    currentUser.reminders.splice(searchResult, 1);
    res.redirect("/reminders");
  },

  // Unsplash API implementation: ping Unsplash for an icon if the user does not have one
  getIcon: (req, res, next) => {
    const currentUser = req.user;
    if(currentUser.userIcon){
      next(); 
    } else {  
      data = axios.get(`https://api.unsplash.com/photos/random?client_id=sc756lLw9chQreHz5Ro16aADdsUKdwATI__ju9iqW9I`)
        .then(function (response) {
          currentUser.userIcon = response.data.urls.thumb;
          next();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },

  getUsers: (req, res) => {
    const currentUser = req.user;
    let userFriends = currentUser.friends;
    let friends = [];
    let nonFriends = [];
    // assign all database items to an array
    let allUsers = Object.values(database);
    // loop through each user to identify if they are a friend. Add to applicable array.
    allUsers.forEach(user => {
      if(userFriends.includes(user.id)) {
        friends.push(user);
        // return console.log(friends[0].firstName);
      } else if (currentUser.id === user.id){
        return;
      } else {
        nonFriends.push(user);
        // return console.log(nonFriends[0].firstName);
      }
    });
    
    res.render("reminder/friends", { 
      currentUser: currentUser, 
      friends: friends, 
      nonFriends: nonFriends 
    });
  },

  addFriend: (req, res) => {
    const currentUser = req.user;
    let newFriend = { id: req.body.friend };
    currentUser.friends.push(newFriend.id);
    res.redirect("/reminder/people");
  }
};

module.exports = remindersController;