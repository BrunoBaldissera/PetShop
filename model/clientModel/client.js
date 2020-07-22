var mongoose = require("mongoose");

var clientSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },

    nome: {
        type: String,
        required: true,
    },

    endereco: {
        type: String,
        required: true,
    },

    telefone: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    perfil_path: {
        type: String,
        required: true,
    },

    array_pets: [{
        type: String
    }]

});

module.exports = mongoose.model('client', clientSchema);


//{
//   "id": "12325453",
//   "nome": "Ceneman Gazoni",
//   "endereco": "Sao carlos rua lalala numero 32124",
//   "telefone": "32323232",
//   "email": "e@ma.il",
//   "perfil_path": "/bin/src/perfil/blablalb",
//   "array_pets": ["dogaum", "doguinho"]
//}