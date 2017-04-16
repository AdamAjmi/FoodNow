/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 * Source found at http://www.tysoncadenhead.com/blog/using-facebook-authentication-on-a-sails-js-app
 */

module.exports = {

  attributes: {

    connection: 'foodnow_MysqlServer',

    facebookId: {
      provider: 'string',
      uid: 'string',
      name: 'string',
      email: 'string',
      firstname: 'string',
      lastname: 'string'
    }

  }
};

