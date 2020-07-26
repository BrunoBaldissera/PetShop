var mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

var adminSchema = new mongoose.Schema({
    id: {
        type: String,
        required: false
    },

    login: {
        type: String,
        required: false,
        default: "admin"
    },

    salt: {
        type: String,
        required: true,
    },

    hash: {
        type: String,
        required: true,
    },

    /*password: {
        type: String,
        required: false,
        default: "admin"
    },*/

    nome: {
        type: String,
        required: true,
    },

    telefone: {
        type: String,
        required: false,
    },

    email: {
        type: String,
        required: false,
    },

    token: {
        type: String,
        required: false,
    },

    perfil_path: {
        type: String,
        required: false,
    },	
});

adminSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

adminSchema.methods.validatePassword = function(password) {
  console.log("validating password");
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

module.exports = mongoose.model('Admin', adminSchema);

//module.exports.get = Admin.find({});

//module.exports.get = function (callback, limit){
//    Admin.find(callback).limit(limit);
//}
