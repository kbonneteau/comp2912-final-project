let database = require("../database");

let remindersController = {
  list: (req, res) => {
    const currentUser = req.user;
    res.render("reminder/index", { reminders: currentUser.reminders, currentUser: currentUser });
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
      res.render("reminder/index", { reminders: currentUser.reminders });
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
  },

  delete: (req, res) => {
    // Implement this code
  },
};

module.exports = remindersController;
