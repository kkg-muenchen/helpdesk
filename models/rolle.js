var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RolleSchema = new Schema({
    name: { type: String, required: true, maxlength: 100 },
    permissions: [{ type: String, trim: true }]
});

RolleSchema.virtual("url").get(function () {
    return "/rollen/" + this._id;
});

module.exports = mongoose.model("Rolle", RolleSchema);