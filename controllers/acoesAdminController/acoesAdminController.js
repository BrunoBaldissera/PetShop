var mongoose = require('mongoose');

// Importa admin model
var Admin = require('../../models/adminModel/admin.js');

//Lida com ações do índice
exports.index = function (req, res) {
    Admin.get(function (err, admins) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }

        else res.json({
            status: "success",
            message: "Admins retrieved successfully",
            data: admins
        });
    });
};

/*Cria novos admin
exports.new = function (req, res) {
    let admin = new Admin();

    admin.nome = req.body.nome;
    admin.id = req.body.id;
    admin.telefone = req.body.telefone;
    admin.email = req.body.email;
    admin.perfil_path = req.body.perfil_path;

    // salva o admin, check por errors
    admin.save(function (err) {
        // if (err)
        //     res.json(err);
    res.json({
            message: 'New admin created!',
            data: admin
        });
    });
};*/

/* Handle view admin info
exports.view = function (req, res) {
    let admin = new Admin();
    Admin.findById(req.params.admin_id, function (err, admin) {
        if (err)
            res.send(err);
        else res.json({
            message: 'Admin details loading..',
            data: admin
        });
    });
};*/

/* Handle update admin info
exports.update = function (req, res) {
    let admin = new Admin();
    Admin.findById(req.params.admin_id, function (err, admin) {
        if (err)
            res.send(err);

        admin.nome = req.body.nome;
        admin.id = req.body.id;
        admin.telefone = req.body.telefone;
        admin.email = req.body.email;
        admin.perfil_path = req.body.perfil_path;
        

// save the admin and check for errors
        admin.save(function (err) {
            if (err)
                res.json(err);
            else res.json({
                message: 'Admin Info updated',
                data: admin
            });
        });
    });
};*/

/* Handle delete admin
exports.delete = function (req, res) {
    let admin = new Admin();
    Admin.remove({
        _id: req.params.admin_id
    }, function (err, admin) {
        if (err)
            res.send(err);
        else res.json({
            status: "success",
            message: 'Admin deleted'
        });
    });
};*/