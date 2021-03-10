require("dotenv").config();

var mongoose = require("mongoose");
var mongoDB = process.env.DATABASE_URL;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
console.log("Connected");
// var db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));

var User = require("./models/user");
var Rolle = require("./models/rolle");
var Kategorie = require("./models/kategorie");

var admin_rolle = new Rolle({
    name: "Admin",
    permissions: ["admin"]
});
admin_rolle.save(function (err, _) {
    if (err) return console.log("Error creating admin role: " + err);
    console.log("Admin role created");
});

var admin_user = new User({
    username: "Admin",
    password: "VerySafePassword",
    first_name: "Admin",
    last_name: "Default",
    rollen: [admin_rolle._id],
});
admin_user.save(function (err, _) {
    if (err) return console.log("Error creating admin user: " + err);
    console.log("Admin user created");
});

var default_kategorie = new Kategorie({
    name: "Default"
});
default_kategorie.save(function (err, _) {
    if (err) return console.log("Error creating default kategorie: " + err);
    console.log("default kategorie created");
});