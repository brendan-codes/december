const CarsController = require("../controllers/car.controller");


module.exports = (app) => {
    app.get('/api/cars', CarsController.findAllCars)
    app.post('/api/cars', CarsController.create)

    
    //     verb  urls        controller methods
    // app.get('/api/cars', CarsController.findAllCars)
}