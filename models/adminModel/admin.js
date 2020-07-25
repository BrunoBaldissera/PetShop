var mongoose = require('mongoose');

var adminSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },

    login: {
        type: String,
        required: false,
        default: "admin"
    },

    password: {
        type: String,
        required: false,
        default: "admin"
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

module.exports = mongoose.model('Admin', adminSchema);

//module.exports.get = Admin.find({});

//module.exports.get = function (callback, limit){
//    Admin.find(callback).limit(limit);
//}
