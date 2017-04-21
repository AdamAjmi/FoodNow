'use strict';

/* global User: false */
/*
var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  md5 = require('MD5');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findOne({ id: id } , function (err, user) {
    done(err, user);
  });
});

var verifyHandler = function(req ,username, password, done) {
  process.nextTick(function() {
    User.findOne({ username: username }).exec(function(err, user) {
      if (err || !user) {
        return done(err);
      }

      var hashedPassword = md5(password);
      var match = (hashedPassword === user.password);

      if (!match) {
        return done(null, false, {message: 'Invalid Password'});
      }

      else {
        req.logIn(user, function(err) {
          if (err) {
            return done(null, false, {message: err});
          }
          return done(null, user, {message: 'Logged In Successfully'});
        })
      }
    });
  });
};

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true

}, verifyHandler));*/
