const Car = require("../models/car.model");


const car = {
    findAllCars: (req, res) => {
        Car.find()
            .then((data) => {
                console.log(data);
                res.json(data);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    },
    create: (req, res) => {
        const newCar = req.body;
        console.log(req.body);
        Car.create(newCar)
            .then((data) => {
                console.log(data);
                res.json(data);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    }
}

module.exports = car;