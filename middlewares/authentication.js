const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models').User;

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.find({where: {id: id}}).then(function(user){
    done(null, user);
  }).error(function(err){
    done(err, null);
  });
});

passport.use(new LocalStrategy(
  function(email, password, done) {
    User.find({ where: { email: email }}).then(function(user) {
      if (!user) {
        done(null, false, { message: 'Unknown user' });
      } else if (password != user.password) {
        done(null, false, { message: 'Invalid password'});
      } else {
        done(null, user);
      }
    }).error(function(err){
      done(err);
    });
  }
));
 
module.exports = passport;
