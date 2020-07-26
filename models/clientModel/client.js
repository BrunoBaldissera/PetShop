var mongoose = require("mongoose");

var clientSchema = new mongoose.Schema({
    id: {
        type: String,
        required: false
    },

    login: {
        type: String,
        required: false,
    },

    password: {
        type: String,
        required: false
    },

    nome: {
        type: String,
        required: true,
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
    }]

});

module.exports = mongoose.model('Client', clientSchema);

clientSchema.methods.findByToken = function (token, cb) {
    return this.find({
        token: this.token
    }, cb);

//{
//   "id": "12325453",
//   "nome": "Ceneman Gazoni",
//   "endereco": "Sao carlos rua lalala numero 32124",
//   "telefone": "32323232",
//   "email": "e@ma.il",
//   "perfil_path": "/bin/src/perfil/blablalb",
//   "array_pets": ["dogaum", "doguinho"]
//}