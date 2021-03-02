var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: { type: String, required: true, maxlength: 100, trim: true },
    password: { type: String, required: true, minlength: 8, maxlength: 256 },
    first_name: { type: String, required: true, maxlength: 100, trim: true },
    last_name: { type: String, required: true, maxlength: 100, trim: true },
    rollen: [{ type: Schema.Types.ObjectId, ref: 'Rolle', required: true }],
    email: { type: String, maxlength: 256, trim: true },
    klasse: { type: String, maxlength: 10, trim: true },
});

UserSchema.virtual('name').get(function () {
    return this.last_name + ', ' + this.first_name;
});

UserSchema.virtual('url').get(function () {
    return '/users/' + this._id;
});

module.exports = mongoose.model('User', UserSchema);