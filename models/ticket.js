var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TicketSchema = new Schema({
    status: { type: Number, min: 0, max: 2, default: 0, required: true },
    kategorie: { type: Schema.Types.ObjectId, ref: "Categorie", required: true },
    beschreibung: { type: String, trim: true, required: true },
    raum: { type: String, maxlength: 100, trim: true, required: true },
    autor: { type: Schema.Types.ObjectId, ref: "User", required: true },
    bearbeiter: [{ type: Schema.Types.ObjectId, ref: "User" }],
    datum_eingereicht: { type: Date, default: Date.now() },
    datum_fertigstellung: Date,
    datum_berabeitung: Date,
    prioritaet: { type: Number, min: 0, max: 10, default: 0 },
});

TicketSchema.virtual("url").get(function () {
    return "/tickets/" + this._id;
});

module.exports = mongoose.model("Ticket", TicketSchema);