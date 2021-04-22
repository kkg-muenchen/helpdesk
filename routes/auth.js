var express = require("express");
var passport = require("passport");
var router = express.Router();

router.get(
  "/login",
  (req, res) => {
    res.render("login", { user: req.user, titel: "Login" })
  }
);

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/"
  })
);

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
