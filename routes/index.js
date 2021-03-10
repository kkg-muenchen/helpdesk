var express = require("express");
var passport = require("passport");
var router = express.Router();
var auth_router = require("./auth");

/* GET home page. */
router.get("/", function(req, res, _next) {
  res.render("index", { title: "Helpdesk", user: req.user });
});

router.use(auth_router);

module.exports = router;
