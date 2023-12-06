const { response } = require('express');
const express = require('express');
const app = express();
const PORT = 8001;
const Fake = require('./classes/Fake');




// express route
// verb url  callback
app.get("/", (request, response) => {
    response.json({'message': "Hello world!"});
})

app.get("/weird", (req, res) => {
    console.log(req);
    res.json({"message": "You have gotten to a weird place!"})
})

app.get("/fake", (req, res) => {
    res.json(new Fake());
})

// listener
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})