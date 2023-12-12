const {Schema, model} = require("mongoose");

const CarSchema = new Schema({
    make: {
        type: String,
        require: [true, "{PATH} is required"],
        minlength: [2, "{PATH} must have 2 characters"]
    },  
    model: {
        type: String,
        require: [true, "{PATH} is required"],
        minlength: [2, "{PATH} must have 2 characters"]
    },
    color: {
        type: String,
        require: [true, "{PATH} is required"],
        minlength: [2, "{PATH} must have 2 characters"]
    },
    year: {
        type: Number,
        require: [true, "{PATH} is required"],
        min: [1900, "{PATH} is required"],
        max: [2055, "{PATH} is required"]
    },
}, {timestamps: true})

const Car = model("Car", CarSchema);
module.exports = Car;