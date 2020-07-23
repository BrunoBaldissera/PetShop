//routes.js
// inicializamos o router do express
let router = require('express').Router();
// configuramos uma resposta padrão de requisições
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});
// exportamos as rotas da api
module.exports = router;