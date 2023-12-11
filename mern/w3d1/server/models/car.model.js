const {Schema, model} = require("mongoose");

const CarSchema = new Schema({
    make: {
        type: String,
        require: [true, "{PATH} is required"]
    },
    model: {
        type: String,
        require: [true, "{PATH} is required"]
    },
    color: {
        type: String,
        require: [true, "{PATH} is required"]
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