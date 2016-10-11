var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    logger = require('morgan'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    ejs = require('ejs'),
    ejsLayouts = require('express-ejs-layouts'),
    flash = require('connect-flash'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport'),
    passportConfig = require('./config/passport.js'),
    userRoutes = require('./routes/users.js'),
    User = require('./models/User.js')

// Require chat message model
var Message = require('./models/Message.js');


var port = process.env.PORT || 3000;

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

//all users route:
var userRoutes = require('./routes/users.js');
var chatRoutes = require('./routes/messages.js');
var authenticateRoutes = require('./routes/authenticate.js');
var postRoutes = require('./routes/posts.js');
// End requiring routers -->

// <-- Start middleware

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
  secret: 'Tirevo',
  cookie: {maxAge: 6000000},
  resave: true,
  saveUninitialize: false
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Add a current user to be available in every view
app.use(function(req, res, next){
  if(req.user) req.app.locals.currentUser = req.user
  req.app.locals.loggedIn = !!req.user
  next()
})

// EJS configuration
app.set('view engine', 'ejs');
app.use(ejsLayouts);
// End middleware -->

// <-- Start using routes

// Test route
// app.get('/', function(req, res){
//   res.json({message: 'Working'});
// });
//
app.use('/', authenticateRoutes);
app.use('/users', userRoutes);
app.use('/chat-messages', chatRoutes);
app.use('/posts', postRoutes);

// end using routes -->

app.get('/chat', function(req, res){
  if(!io.nsps['/chat']){
    var chat = io.of('/chat');
    chat.on('connect', function(socket){
      console.log('A user has connected.');

      socket.on('new-chat', function(message){
        Message.create({content: message, public: true}, function(err, data){
          if (err){
            chat.emit('broadcast-error', err);
          } else {
            chat.emit('broadcast-chat', message);
          }
        })

      })

      socket.on('disconnect', function(){
        console.log('A user has disconnected.');
      })
    })
  }

  res.sendFile(__dirname + '/public/chat.html');
});
// end using routes -->


http.listen(port, function(err){
  if (err) {
    console.log("Error: Could not start server.");
  } else {
    console.log(`Success: Listening on port: ${port}`);
  }
})
