module.exports = function (app,io){

  // Open Socket Connection 30-01-2017
  app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
  });

  io.on('connection',function(socket){
    socket.emit('news',{hello : 'world'});
    socket.on('my other event', function(data){
      console.log(data);
    });
  });
}
