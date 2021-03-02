var express = require('express');
var passport = require("passport");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, _next) {
  res.render('index', { title: 'Helpdesk', user: req.user });
});

router.get(
  "/log-in",
  (req, res) => {
    res.render('log_in', { user: req.user, titel: 'Log In' })
  }
);

router.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/"
  })
);

router.get("/log-out", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
