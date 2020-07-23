var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
    
    id: {
        type: String,
        required: true
    },

    nome: {
        type: String,
        required: true,
    },

    descricao: {
        type: String,
        required: true,
    },

    preco: {
        type: Number,
        required: true,
    },
    
    perfil_path: {
        type: String,
        required: true,
    },

});

module.exports = mongoose.model('product', productSchema);
