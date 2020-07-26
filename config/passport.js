const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const Client = mongoose.model('Client');

passport.use(new LocalStrategy({
  usernameField: 'user[email]',
  passwordField: 'user[password]',
}, (email, password, done) => {
  Client.findOne({ email })
    .then((client) => {
      if(!client || !client.validatePassword(password)) {
        return done(null, false, { errors: { 'email or password': 'is invalid' } });
      }

      return done(null, client);
    }).catch(done);
}));