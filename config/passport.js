const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const Client = mongoose.model('Client');

passport.use(new LocalStrategy({
  login: 'user[login]',
  password: 'user[password]',
}, (login, password, done) => {
  Client.findOne({ login: login })
    .then((client) => {
      if(!client || !client.validatePassword(password)) {
        return done(null, false, { errors: { 'login or password': 'is invalid' } });
      }

      return done(null, client);
    }).catch(done);
}));