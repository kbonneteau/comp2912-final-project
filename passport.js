const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const authController = require("./controller/auth_controller");

const localLogin = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  (email, password, done) => {
    const user = authController.getUserByEmailIdAndPassword(email, password);
    if (user) {
        done(null, user);
    } else {
        done(null, false, { message: "Your login details were invalid"})
    }
  }
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  let user = authController.getUserById(id);
  if (user) {
    done(null, user);
  } else {
    done({ message: "User not found" }, null);
  }
});

module.exports = passport.use(localLogin);
