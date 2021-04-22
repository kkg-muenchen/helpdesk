var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RolleSchema = new Schema({
    name: { type: String, required: true, maxlength: 100 },
    permissions: [{ type: String, trim: true }]
});

RolleSchema.virtual("url").get(function () {
    return "/role/" + this._id;
});

module.exports = mongoose.model("Role", RolleSchema);