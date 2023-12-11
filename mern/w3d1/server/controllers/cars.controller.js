const Car = require("../models/car.model");

// READ ALL
module.exports.findAll = (req, res) => {
    Car.find()
        .then(cars => res.json(cars))
        .catch(err => res.status(400).json(err))
};

// READ ONE
module.exports.findOne = (req, res) => {
    Car.findOne({ _id: req.params.id })
        .then(oneCar => res.json(oneCar))
        .catch(err => res.status(400).json(err))
};

// CREATE NEW
module.exports.create = (req, res) => {
    Car.create(req.body)
        .then(newCar => res.json(newCar))
        .catch(err => res.status(400).json(err))
};

// UPDATE BY ID
module.exports.update = (req, res) => {
    Car.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedCar => res.json(updatedCar))
        .catch(err => res.status(400).json(err))
};

// DELETE BY ID
module.exports.delete = (req, res) => {
    Car.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err))
};