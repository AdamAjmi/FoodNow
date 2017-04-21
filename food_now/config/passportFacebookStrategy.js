
/*'use strict';

var passport = require('passport'),
  FacebookStrategy = require('passport-facebook').Strategy,
  request = require('request');


var verifyHandler = function(req, token, tokenSecret, profile, done) {

  process.nextTick(function() {
    var url = 'https://graph.facebook.com/v2.4/me?access_token=%s&fields=id,name,email,first_name,last_name,gender';
    url = url.replace('%s', token);

    var options = {method: 'GET', url: url, json: true};
    request(options, function (err, response) {
      if (err) {
        return done(null, null);
      }

      var data = {
        id: response.body.id,
        first_name: response.body.first_name,  //jshint ignore:line
        last_name: response.body.last_name,    //jshint ignore:line
        email: response.body.email,
        gender: response.body.gender
      };

      return done(null, data);
    });
  });
};


passport.use(new FacebookStrategy({
  clientID: '683002218574515',
  clientSecret: '939be090b28e4314a86df8d4e53a9fd5',
  callbackURL: 'http://localhost:1337/facebook/callback',
  passReqToCallback: true
}, verifyHandler));*/
