/**
 * Created by chris on 4/8/2017.
 *
 * Source found at http://www.tysoncadenhead.com/blog/using-facebook-authentication-on-a-sails-js-app
 */

exports.init = function() {
  var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy;

  function findById(id, fn) {
    User.findOne(id).done(function (err, user) {
      if (err) {
        return fn(null, null);
      } else {
        return fn(null, user);
      }
    });
  }

  function findByFacebookId(id, fn) {
    User.findOne({
      facebookId: id
    }).done(function (err, user) {
      if (err) {
        return fn(null, null);
      } else {
        return fn(null, user);
      }
    });
  }

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    findById(id, function (err, user) {
      done(err, user);
    });
  });

  passport.use(new FacebookStrategy({
      clientID: "YOUR-FACEBOOK-CLIENT-ID",
      clientSecret: "YOUR-FACEBOOK-CLIENT-SECRET",
      callbackURL: "http://localhost:1337/user/facebook/callback",
      enableProof: false
    }, function (accessToken, refreshToken, profile, done) {

      findByFacebookId(profile.id, function (err, user) {

        // Create a new User if it doesn't exist yet
        if (!user) {
          User.create({

            facebookId: profile.id

            // You can also add any other data you are getting back from Facebook here
            // as long as it is in your model

          }).done(function (err, user) {
            if (user) {
              return done(null, user, {
                message: 'Logged In Successfully'
              });
            } else {
              return done(err, null, {
                message: 'There was an error logging you in with Facebook'
              });
            }
          });

          // If there is already a user, return it
        } else {
          return done(null, user, {
            message: 'Logged In Successfully'
          });
        }
      });
    }
  ));

}

