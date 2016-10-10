var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var postRoutes = require('./routes/posts');

var port = process.env.PORT || 3000

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

// var chatMessagesRoutes = require('./routes/chatMessages.js');
// var postRoutes = require('./routes/posts.js')

// End requiring routers -->

// <-- Start middleware

app.use(logger('dev'));
app.use(bodyParser.json());

// End middleware -->

// <-- Start using routes

// Test route
app.get('/', function(req, res){
  res.json({message: 'Working'});
});

// app.use('/chat', chatMeesagesRoutes);
app.use('/posts', postRoutes);
// end using routes -->

// <-- Start socket io
io.on('connect', function(socket){
  console.log('A user connected in the backend.');

  socket.on('disconnect', function(){
    console.log('A user disconnected in the backend.');
  })
});

// End socket io -->

http.listen(port, function(err){
  if (err) {
    console.log("Error: Could not start server.");
  } else {
    console.log(`Success: Listening on port: ${port}`);
  }
})
