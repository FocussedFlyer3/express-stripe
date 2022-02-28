const constant = require('./src/utils/constants');
const express = require('express');
const app = express();
const cors = require('cors')

// setup cors
app.use(cors());

// setup and configure body parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// setup routes
const routes = require('./src/routes');
app.use('/', routes);

// start listening for HTTP/HTTPS request
app.listen(constant.PORT, constant.HOST);
console.log(`Running on http://${constant.HOST}:${constant.PORT}`);
