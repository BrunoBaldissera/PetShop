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

//Adiciona ao carrinho
exports.add_to_cart = function (req, res) {
    Client.findOne({ email: req.body.email }, function (err, client) {
        if (err) {
            res.json({
                status: "error",
                ok: false,
                message: err,
            });
        }
        else if (!client){
            res.json({
                status: "error",
                ok: false,
                message: "usuario nao existe",
            });
        }
        else {
            client.array_cart.push(req.body.product);
            client.save(function (err, data) {
                if (err) {
                    res.json(err);
                    ok: false
                }
                
                else {
                    res.json({
                        message: 'Item adicionado ao carrinho!',
                        ok: true
                    });
                }
            });
        }
        console.log(client);
    })
}

//Cria novos clientes
const debug = exports.new = function (req, res) {
    let client = new Client();

    client.login = req.body.login;
    client.nome = req.body.nome;
    client.id = req.body.id;
    client.endereco = req.body.endereco;
    client.telefone = req.body.telefone;
    client.email = req.body.email;
    client.perfil_path = req.body.perfil_path;
    client.array_pets = req.body.array_pets;

    client.setPassword(req.body.password);

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

//Handle view client Info
/*exports.view = function (req, res, next) {
    console.log("login eh %s", req.params.login);
    Client.find({ login: req.params.login })
        .then(client => {
            res.status(200).json(client);
        })
        .catch(err => {
            next(err);
        });
    
   
};*/

exports.view = async (req, res, next) => {
    try{
        const client = await Client.find({ login: req.body.login });
        console.log("vc quis printar controller " + req.body.login);
        res.status(200).json(client);
    } catch(err){
        next(err);
    }
};

exports.login = async (req, res, next) => {
    try{
        console.log("vc quis printar controller " + req.body.login);
        await Client.findOne({login: req.body.login})
            .then( (client) => {
                console.log(client);
                console.log(req.body.password);
                var val = false;
                if (client)
                    val = client.validatePassword(req.body.password);
                console.log('validation finished');
                res.json({
                    client: client,
                    val: val
                });
            }) 
    } catch(err){
        next(err);
    }
};

/*exports.view: async (req, res, next) => {
    console.log('Começou');
    await Client.find({ login: req.params.login });
    console.log('Acabou a piada.');
}*/
//Handle view client Info
/*exports.view = function (req, res) {
    console.log("login eh %s", req.params.login);
    Client.find({ login: req.params.login }, function (err, client) {
        if (err)
            res.send(err);
        else {
            res.json({
                message: 'client details loading..',
                data: client
            });
        }
    });
};*/

/*// Handle delete contact
exports.delete = function (req, res) {
    Contact.remove({
        _id: req.params.contact_id
    }, function (err, contact) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};*/

/*// Handle view contact info
exports.view = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: contact
        });
    });
};*/

/* Handle update clients info
exports.update = function (req, res) {
    let client = new Client();
    Client.findById(req.params.client_id, function (err, client) {
        if (err)
            res.send(err);
        client.login = req.body.login;
        client.password = req.body.password;
        client.nome = req.body.nome;
        client.id = req.body.id;
        client.endereco = req.body.endereco;
        client.telefone = req.body.telefone;
        client.email = req.body.email;
        client.perfil_path = req.body.perfil_path;
        client.array_pets = req.body.array_pet;
            
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