const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();
const port = process.env.PORT;
require('./config/mongoose.config'); // This is new

app.use(cors(), express.json(), express.urlencoded({ extended: true }));

require('./routes/person.routes')(app); // This is new

app.listen(port, () => console.log(`Listening on port: ${port}`) );