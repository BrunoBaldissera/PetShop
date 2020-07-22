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
