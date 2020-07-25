var mongoose = require("mongoose");

var petSchema = mongoose.Schema({
    
    id: {
        type: String,
        required: true
    },

    nome: {
        type: String,
        required: true,
    },

    nome_dono: {
        type: String,
        required: true,
    },

    raca: {
        type: String,
        required: true,
    },

    idade: {
        type: integer,
        required: true,
    },

    perfil_path: {
        type: String,
        required: true,
    },

});

module.exports = mongoose.model('Pet', petSchema);
