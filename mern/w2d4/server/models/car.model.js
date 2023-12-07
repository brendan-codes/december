const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true,
        minLength: [2, "You need a {PATH} of at least 2 characters long!"]
    },    
    model: String,    
    year: {
        type: Number,
        min: 1900
    },    
    runs: {
        type: Boolean,
        default: true
    },    
    color: String    
}, {timestamps: true})

const Car = mongoose.model("Car", CarSchema);
module.exports = Car;