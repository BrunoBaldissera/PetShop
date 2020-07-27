var mongoose = require("mongoose");
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

var clientSchema = new mongoose.Schema({
    id: {
        type: String,
        required: false
    },

    login: {
        type: String,
        required: false,
    },

    /*password: {
        type: String,
        required: false
    },*/

    salt: {
        type: String,
        required: true,
    },

    hash: {
        type: String,
        required: true,
    },

    nome: {
        type: String,
        required: false,
    },

    endereco: {
        type: String,
        required: false,
    },

    telefone: {
        type: String,
        required: false,
    },

    email: {
        type: String,
        required: true,
    },

    perfil_path: {
        type: String,
        required: false,
    },

    token: {
        type: String,
        required: false,
    },

    array_pets: [{
        type: String
    }],

    array_cart: [{
        id: String,
        required: false
    }]

});

clientSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

clientSchema.methods.validatePassword = function(password) {
  console.log("validating password");
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

clientSchema.methods.generateJWT = function() {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign({
    email: this.email,
    id: this._id,
    exp: parseInt(expirationDate.getTime() / 1000, 10),
  }, 'secret');
}

clientSchema.methods.toAuthJSON = function() {
  return {
    _id: this._id,
    email: this.email,
    token: this.generateJWT(),
  };
};

module.exports = mongoose.model('Client', clientSchema);

//{
//   "id": "12325453",
//   "nome": "Ceneman Gazoni",
//   "endereco": "Sao carlos rua lalala numero 32124",
//   "telefone": "32323232",
//   "email": "e@ma.il",
//   "perfil_path": "/bin/src/perfil/blablalb",
//   "array_pets": ["dogaum", "doguinho"]
//}