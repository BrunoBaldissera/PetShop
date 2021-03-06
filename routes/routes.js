//routes.js
// inicializamos o router do express
let router = require('express').Router();

// configuramos uma resposta padrão de requisições
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to PETSHOP crafted with love!'
    });
});

//ACOESADMIN
    //importar acoesAdmin controller
    var acoesAdminController = require('../controllers/acoesAdminController.js');
    //admin routes
    // Contact routes
    router.route('/admins')
        .get(acoesAdminController.index)
        .post(acoesAdminController.new);

    router.route('/admins/search')
        .post(acoesAdminController.view);

    router.route('/admins/login')
        .post(acoesAdminController.login)

    router.route('/admins/:admin_id')
        .get(acoesAdminController.view);
        //.patch(acoesAdminController.update)
        //.put(acoesAdminController.update)
        //.delete(acoesAdminController.delete)

//CLIENTE
    var acoesClienteController = require('../controllers/acoesClienteController.js')
    router.route('/clients')
        .get(acoesClienteController.index)
        .post(acoesClienteController.new);

    router.route('/clients/search')
        .post(acoesClienteController.view);

    router.route('/clients/add_product')
        .post(acoesClienteController.add_to_cart);

    router.route('/clients/login')
        .post(acoesClienteController.login);

    router.route('/clients/:client_id')
        //.get(acoesClienteController.view);
        //.patch(acoesClientController.update)
        //.put(acoesClientController.update)
        //.delete(acoesClientController.delete)  

// exportamos as rotas da api
module.exports = router;