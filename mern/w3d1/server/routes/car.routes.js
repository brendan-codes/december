const CarsController = require("../controllers/cars.controller");


module.exports = app => {
    app.get('/api/cars', CarsController.findAll);
    app.get('/api/cars/:id', CarsController.findOne);
    app.post('/api/cars', CarsController.create);
    app.patch('/api/cars/:id', CarsController.update);
    app.delete('/api/cars/:id', CarsController.delete);
}