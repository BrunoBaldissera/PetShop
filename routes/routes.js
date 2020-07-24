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
    var acoesAdminController = require('../controllers/acoesAdminController/acoesAdminController.js');
    //admin routes
    // Contact routes
    router.route('/admins')
        .get(acoesAdminController.index);
        //.post(acoesAdminController.new);

    router.route('/admins/:admin_id')
        .get(acoesAdminController.view);
        //.patch(acoesAdminController.update)
        //.put(acoesAdminController.update)
        //.delete(acoesAdminController.delete)

// exportamos as rotas da api
module.exports = router;