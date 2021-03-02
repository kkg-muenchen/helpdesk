var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var KategorieSchema = new Schema({
    name: { type: String, required: true, maxlength: 100 },
});

KategorieSchema.virtual('url').get(function () {
    return '/kategorien/' + this._id;
});

module.exports = mongoose.model('Kategorie', KategorieSchema);