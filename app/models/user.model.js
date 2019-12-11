const mongoose = require('mongoose'), Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
    userName: String,
    coins: Number,
    location: String,
    status: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);