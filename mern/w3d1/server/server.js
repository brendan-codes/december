const express = require("express");
const cors = require("cors");
const app = express();

require('dotenv').config();
const port = process.env.PORT;


// configs
require('./config/mongoose.config');

// middleware
app.use(express.json()); // allow incoming JSON
app.use(express.urlencoded({extended: true})); // turn url params into JSON
app.use(cors()); // allows us to send JSON to react clients

// routes
require('./routes/car.routes')(app);


// listener
app.listen(port, () => console.log(`Listening on the magical port of ${port}`));