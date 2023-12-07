const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT;

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({extended: true}));

const CarRouter = require('./routes/car.routes');
CarRouter(app);


app.listen(port, () => {
    console.log(`You are running on port ${port}!!`)
})