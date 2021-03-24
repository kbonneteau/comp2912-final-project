const database = require("../database");

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  getUserByEmailIdAndPassword: (email, password) => {
    for (let emailInDatabase in database) {
      if (email === emailInDatabase) {
        return database[email]
      }
    }
    return null;
  },

  getUserById: (idFromSession) => {
    for (let emailInDatabase in database) {
      let dataAboutUser = database[emailInDatabase];
      if(dataAboutUser.id == idFromSession) {
        return dataAboutUser;
      }
    }
    return null;
  },
};

module.exports = authController;
