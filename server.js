'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');

var app = express();
require('dotenv').config();

app.use('/service', express.static(process.cwd() + '/app/service'));

routes(app);

var port = process.env.PORT || 8080;
app.listen(port,  function () {
    console.log('Node.js listening on port ' + port + '...');
});
