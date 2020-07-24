var mongoose = require('mongoose');

var adminSchema = mongoose.Schema({
    
    id: {
        type: String,
        required: true
    },

    nome: {
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

});

var Admin = module.exports = mongoose.model('admin', adminSchema);

module.exports.get = function (callback, limit){
    Admin.find(callback).limit(limit);
}
