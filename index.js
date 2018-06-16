const express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/buzzer.html');
})

app.get('/master', function (req, res) {
  res.sendFile(__dirname + '/master.html');
})

io.on('connection', function(socket){
  socket.on('team buzzed', function(team){
    io.emit('team buzzed', team);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
