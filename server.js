const express = require("express");
// const fetch = require("node-fetch");
const redis = require("redis");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

dotenv.config();
//Middleware
app.use(bodyParser.json());
app.use(cors());

//connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("connected to db")
);

//port connection
const PORT = process.env.PORT || 4000;
const REDIS_PORT = process.env.PORT || 6379;
const client = redis.createClient(REDIS_PORT);

//server start
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});
