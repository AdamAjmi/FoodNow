/**
 * Created by chris on 4/8/2017.
 *
 *
 * Source found at http://www.tysoncadenhead.com/blog/using-facebook-authentication-on-a-sails-js-app
 */


var passport = require('passport');

module.exports.express = {
  customMiddleware: function(app){

    // Passport
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(function(req, res, next){
      res.locals.user = req.session.user;
      next();
    });

  }
};
