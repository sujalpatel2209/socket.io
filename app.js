var express = require('express');
var startServer = require('./controller/serverStart');

var app = express();
var port = 2209;

app.use(express.static('./public'));


// Server Start lister
startServer(app,port);
