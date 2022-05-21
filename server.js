const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose');

const db_config = require('./configs/db.config');
const server_config = require('./configs/server.config');

const app = express();
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

// routing to all the routes of the application
require('./routes/index.route');

// connecting mongodb
mongoose.connect(db_config.db_url, () => {
    console.log("mongodb connected");
});

// setting up server
app.listen(server_config.PORT, () => {
    console.log("Server up and running on PORT:", server_config.PORT);
});