const { Person } = require('../models/person.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

// The method below is new
module.exports.createPerson = (request, response) => {
    const { firstName, lastName } = request.body; // { admin: true }
    Person.create({
        firstName,
        lastName
    })
        .then(person => response.json(person))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllPeople = (request, response) => {
    Person.find({})
        .then(persons => response.json(persons))
        .catch(err => response.json(err))
}