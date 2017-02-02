var express = require('express');
var http = require('http').Server(express);
var io = require('socket.io')(http);

var app = express();
var port = 2209;

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

console.log('Server Starting on post ' + port);


app.listen(port);
