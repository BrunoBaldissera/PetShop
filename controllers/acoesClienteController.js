var mongoose = require('mongoose');

// Importa client model
var Client = mongoose.model("Client")

//Lida com ações do índice
exports.index = function (req, res) {
    Client.find({}, function (err, clients) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        console.log(clients);
        res.json({
            status: "success",
            message: "Clients retrieved successfully",
            data: clients
        });
    });
};

//Cria novos clientes
const debug = exports.new = function (req, res) {
    let client = new Client();

    client.nome = req.body.nome;
    client.id = req.body.id;
    client.endereco = req.body.endereco;
    client.telefone = req.body.telefone;
    client.email = req.body.email;
    client.perfil_path = req.body.perfil_path;
    client.array_pets = req.body.array_pet;

    // salva o cliente, check por errors
    client.save(function (err, data) {
        if (err)
            res.json(err);
        console.log(data)
    res.json({
            message: 'New client created!',
            data: client
        });
    });
};

//Handle view client info
exports.view = function (req, res) {
    Client.find({ login: req.body.login }, function (err, client) {
        if (err)
            res.send(err);
        else res.json({
            message: 'client details loading..',
            data: client
        });
    });
};

/* Handle update clients info
exports.update = function (req, res) {
    let client = new Client();
    Client.findById(req.params.client_id, function (err, client) {
        if (err)
            res.send(err);

        client.nome = req.body.nome;
        client.id = req.body.id;
        client.telefone = req.body.telefone;
        client.email = req.body.email;
        client.perfil_path = req.body.perfil_path;
        

// save the client and check for errors
        Client.save(function (err) {
            if (err)
                res.json(err);
            else res.json({
                message: 'Client Info updated',
                data: client
            });
        });
    });
};*/

//Handle delete client
exports.delete = function (req, res) {
    let client = new Client();
    Client.remove({
        _id: req.params.client_id
    }, function (err, client) {
        if (err)
            res.send(err);
        else res.json({
            status: "success",
            message: 'Client deleted'
        });
    });
};