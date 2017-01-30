var express = require('express');
var server = require('http').Server(express);
var io = require('socket.io')(server);

var startServer = require('./serverStart');
var message = require('./message');

var app = express();
var port = 2209;

//app.set('view engine','ejs');
app.use(express.static('./public'));

message(app,io);

startServer(app,port);
