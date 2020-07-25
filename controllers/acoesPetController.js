var mongoose = require('mongoose');

// Importa pet model
var Pet = mongoose.model("Pet")

//Lida com ações do índice
exports.index = function (req, res) {
    Pet.find({}, function (err, pets) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        console.log(pets);
        res.json({
            status: "success",
            message: "Pets retrieved successfully",
            data: pets
        });
    });
};

//Cria novos petes
const debug = exports.new = function (req, res) {
    let pet = new Pet();

    pet.nome = req.body.nome;
    pet.id = req.body.id;
    pet.nome_dono = req.body.nome_dono;
    pet.raca = req.body.raca;
    pet.perfil_path = req.body.perfil_path;

    // salva o pete, check por errors
    pet.save(function (err, data) {
        if (err)
            res.json(err);
        console.log(data)
    res.json({
            message: 'New pet created!',
            data: pet
        });
    });
};

//Handle view pet info
exports.view = function (req, res) {
    Pet.find({ login: req.body.login }, function (err, pet) {
        if (err)
            res.send(err);
        else res.json({
            message: 'pet details loading..',
            data: pet
        });
    });
};

/* Handle update pets info
exports.update = function (req, res) {
    let pet = new Pet();
    Pet.findById(req.params.pet_id, function (err, pet) {
        if (err)
            res.send(err);

            pet.nome = req.body.nome;
            pet.id = req.body.id;
            pet.nome_dono = req.body.nome_dono;
            pet.raca = req.body.raca;
            pet.perfil_path = req.body.perfil_path;
        

// save the pet and check for errors
        Pet.save(function (err) {
            if (err)
                res.json(err);
            else res.json({
                message: 'Pet Info updated',
                data: pet
            });
        });
    });
};*/

//Handle delete pet
exports.delete = function (req, res) {
    let pet = new Pet();
    Pet.remove({
        _id: req.params.pet_id
    }, function (err, pet) {
        if (err)
            res.send(err);
        else res.json({
            status: "success",
            message: 'Pet deleted'
        });
    });
};