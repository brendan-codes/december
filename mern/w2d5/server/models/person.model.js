const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "{PATH} is required, make sure you add that!"],
        minlength: [2, "{PATH} must be at least 2 characters long!"]
    },
    lastName: {
        type: String,
        required: [true, "{PATH} is required, wouldn't want this to be blank!"],
        minlength: [2, "{PATH} must be at least 2 characters long!"]
    }
}, { timestamps: true });

module.exports.Person = mongoose.model('Person', PersonSchema);