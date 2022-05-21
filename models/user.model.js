/**
 * This file has model schema for Users
 */

const mongoose = require('mongoose');

/**
 * full name | username | email | password |
 * orders placed - array of references | timestamps
 */

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    orders_placed: {
        type: [mongoose.SchemaTypes.ObjectId]
    },
    created_at: {
        type: Date,
        required: true,
        default: () => Date.now()
    },
    updated_at: {
        type: Date
    }
});

module.exports = mongoose.model("User", UserSchema);