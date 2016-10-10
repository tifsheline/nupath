var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// <-- Start mongoDB connection
mongoose.connect('mongodb://localhost/nupath', function(err, db){
  if (err) {
    console.log("Error: Could not connect to MongoDB.");
  } else {
    console.log("Success: Connected to MongoDB.");
  }
});
// -->

// <-- Start requiring routers

// Users route:
var userRoutes = require('./routes/users.js');
// End requiring routers -->

// <-- Start middleware

app.use(logger('dev'));
app.use(express.static('./public'));
app.use(bodyParser.json());
// End middleware -->

// <-- Start using routes

// Test route
app.get('/', function(req, res){
  res.json({message: 'Working'});
});

app.use('/users', userRoutes);

// end using routes -->

app.get('/chat', function(req, res){
  if(!io.nsps['/chat']){
    var chat = io.of('/chat');
    chat.on('connect', function(socket){
      console.log('A user has connected.');

      socket.on('new-chat', function(message){
        chat.emit('broadcast-chat', message);
      })

      socket.on('disconnect', function(){
        console.log('A user has disconnected.');
      })
    })
  }

  res.sendFile(__dirname + '/public/chat.html');
});
// end using routes -->

// <-- Start socket io

// End socket io -->

http.listen(3000, function(err){
  if (err) {
    console.log("Error: Could not start server.");
  } else {
    console.log("Success: Listening on port 3000.");
  }
})
