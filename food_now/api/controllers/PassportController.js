'use strict';


var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: '683002218574515',
    clientSecret: '939be090b28e4314a86df8d4e53a9fd5',
    callbackURL: 'http://localhost:1337/facebook/callback',
  },
  function(accessToken, refreshToken, profile, done) {
    //User.findOrCreate(..., function(err, user) {
    //if (err) { return done(err); }
      done(null, user);
    //});
  }
));


module.exports = {

  facebookAuth: function(req, res, next) {
    passport.authenticate('facebook', { scope: ['email', 'user_about_me']})(req, res, next);
  },

  facebookCallback: function(req, res, next) {
    passport.authenticate('facebook', function(err, user) {
      res.json(user);
    })(req, res, next);
  }
}
