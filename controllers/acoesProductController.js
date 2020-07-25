var mongoose = require('mongoose');

// Importa product model
var Product = mongoose.model("Product")

//Lida com ações do índice
exports.index = function (req, res) {
    Product.find({}, function (err, products) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        console.log(products);
        res.json({
            status: "success",
            message: "Products retrieved successfully",
            data: products
        });
    });
};

//Cria novos productes
const debug = exports.new = function (req, res) {
    let product = new Product();

    product.nome = req.body.nome;
    product.id = req.body.id;
    product.descricao = req.body.descricao;
    product.preco = req.body.preco;
    product.qtd_estoque = req.qtd_estoque;
    product.qtd_vedidos = req.qtd_vendidos;
    product.perfil_path = req.perfil_path;

    // salva o producte, check por errors
    product.save(function (err, data) {
        if (err)
            res.json(err);
        console.log(data)
    res.json({
            message: 'New product created!',
            data: product
        });
    });
};

//Handle view product info
exports.view = function (req, res) {
    Product.find({ login: req.body.login }, function (err, product) {
        if (err)
            res.send(err);
        else res.json({
            message: 'product details loading..',
            data: product
        });
    });
};

/* Handle update products info
exports.update = function (req, res) {
    let product = new Product();
    Product.findById(req.params.product_id, function (err, product) {
        if (err)
            res.send(err);

            product.nome = req.body.nome;
            product.id = req.body.id;
            product.descricao = req.body.descricao;
            product.preco = req.body.preco;
            product.qtd_estoque = req.qtd_estoque;
            product.qtd_vedidos = req.qtd_vendidos;
            product.perfil_path = req.perfil_path;
                

// save the product and check for errors
        Product.save(function (err) {
            if (err)
                res.json(err);
            else res.json({
                message: 'Product Info updated',
                data: product
            });
        });
    });
};*/

//Handle delete product
exports.delete = function (req, res) {
    let product = new Product();
    Product.remove({
        _id: req.params.product_id
    }, function (err, product) {
        if (err)
            res.send(err);
        else res.json({
            status: "success",
            message: 'Product deleted'
        });
    });
};