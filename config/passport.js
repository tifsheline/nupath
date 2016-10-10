var
  passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  User = require('../models/User.js')

  passport.serializeUser(function(user, done){
    done(null, user.id)
  })

  passport.deserializeUser(function(id, done){
    USer.findById(id, function(err, user){
      done(err, user)
    })
  })

//passport local Strategy:

// local signup:
passport.use('local-signup', new LocalStrategy({
  usernameField: 'name',
  emailField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function(req, name, email, password, done){
  User.findOne({'local.email' :email}, function(err, user){
    //there's a problem:
    if(err) return done(err)
    //email is taken:
    if(user) return done(null, false, req.flash('signupMessage', 'Email taken.  Please use another email address.'))
    //create a user if the above doesnt happen:
    var newUser = new User()
    newUser.local.name = req.body.name
    newUser.local.email = email
    newUser.local.password = newUser.generateHash(password)
    newUser.save(function(err){
      if(err) return console.log(err)
      return done(null, newUser)
    })
  })
}))

// local signin:
passport.use('local-login', new LocalStrategy({
  usernameField: 'name',
  emailField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function(req, name, email, password, done){
  //make sure user exists by searching DB
  User.findOne({'local.email': email}, function(err, user){
    if(err) return done(err)
    //no user found, flash:
    if(!user) return done(null, false)
    //password is invalid:
    if(!user.validPassword(password))
    return done(null, false)
    return done(null, user)
  })
}))

module.exports = passport
