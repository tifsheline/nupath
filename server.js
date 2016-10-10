var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var logger = require('morgan');
var mongoose = require('mongoose');



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

var chatMessagesRoutes = require('./routes/chatMessages.js');

// End requiring routers -->

// <-- Start middleware

app.use(logger('dev'));

// End middleware -->

// <-- Start using routes

// Test route
app.get('/', function(req, res){
  res.json({message: 'Working'});
});

app.use('/chat', chatMeesagesRoutes);
// end using routes -->

// <-- Start socket io
io.on('connect', function(socket){
  console.log('A user connected.');

  socket.on('disconnect', function(){
    console.log('A user disconnected');
  })
});

// End socket io -->

http.listen(3000, function(err){
  if (err) {
    console.log("Error: Could not start server.");
  } else {
    console.log("Success: Listening on port 3000.");
  }
})
