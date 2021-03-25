const express = require("express");
const app = express();
const path = require("path");
const ejsLayouts = require("express-ejs-layouts");
const reminderController = require("./controller/reminder_controller");
const authController = require("./controller/auth_controller");
const port = process.env.PORT || 3000;
const session = require("express-session");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));

app.use(ejsLayouts);

app.set("view engine", "ejs");

app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 24 * 60 * 60 * 1000
  }
}))
const passport = require("./passport");

app.use(passport.initialize())
app.use(passport.session())
// Routes start here

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
      next(); 
  } else{
    res.redirect("/login");
  }
}

// get /reminders, check if user is logged in, check if user has an icon, grab reminders & render reminders index page
app.get("/reminders", isLoggedIn, reminderController.getIcon, reminderController.list);

app.get("/reminder/new", isLoggedIn, reminderController.new);

app.get("/reminder/:id", isLoggedIn, reminderController.listOne);

app.get("/reminder/:id/edit", isLoggedIn, reminderController.edit);

app.post("/reminder/", isLoggedIn, reminderController.create);

// Implement this yourself
app.post("/reminder/update/:id", isLoggedIn, reminderController.update);

// Implement this yourself
app.post("/reminder/delete/:id", isLoggedIn, reminderController.delete);

// Fix this to work with passport! The registration does not need to work, you can use the fake database for this.
app.get("/register", authController.register);
app.get("/login", authController.login);
app.post("/auth/login", passport.authenticate("local", {
  successRedirect: "/reminders",
  failureRedirect:("/login")
}));

app.listen(port, function () {
  console.log(
    "Server running. Visit: localhost:3000/reminders in your browser 🚀"
  );
});
