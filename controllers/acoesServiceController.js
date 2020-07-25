var mongoose = require('mongoose');

// Importa service model
var Service = mongoose.model("Service")

//Lida com ações do índice
exports.index = function (req, res) {
    Service.find({}, function (err, services) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        console.log(services);
        res.json({
            status: "success",
            message: "Services retrieved successfully",
            data: services
        });
    });
};

//Cria novos servicees
const debug = exports.new = function (req, res) {
    let service = new Service();

    service.nome = req.body.nome;
    service.id = req.body.id;
    service.descricao = req.body.descricao;
    service.preco = req.body.preco;
    service.perfil_path = req.perfil_path;

    // salva o servicee, check por errors
    service.save(function (err, data) {
        if (err)
            res.json(err);
        console.log(data)
    res.json({
            message: 'New service created!',
            data: service
        });
    });
};

//Handle view service info
exports.view = function (req, res) {
    Service.find({ login: req.body.login }, function (err, service) {
        if (err)
            res.send(err);
        else res.json({
            message: 'service details loading..',
            data: service
        });
    });
};

/* Handle update services info
exports.update = function (req, res) {
    let service = new Service();
    Service.findById(req.params.service_id, function (err, service) {
        if (err)
            res.send(err);

            service.nome = req.body.nome;
            service.id = req.body.id;
            service.descricao = req.body.descricao;
            service.preco = req.body.preco;
            service.perfil_path = req.perfil_path;
                

// save the service and check for errors
        Service.save(function (err) {
            if (err)
                res.json(err);
            else res.json({
                message: 'Service Info updated',
                data: service
            });
        });
    });
};*/

//Handle delete service
exports.delete = function (req, res) {
    let service = new Service();
    Service.remove({
        _id: req.params.service_id
    }, function (err, service) {
        if (err)
            res.send(err);
        else res.json({
            status: "success",
            message: 'Service deleted'
        });
    });
};