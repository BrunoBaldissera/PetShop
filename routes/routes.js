//routes.js
// inicializamos o router do express
var mongoose = require('mongoose');
let router = require('express').Router();
let bodyParser = require('body-parser');
router.use(bodyParser.json());
const passport = require('passport');
const auth = require('./auth');
const Client = mongoose.model('Client');

//AUTH===========================================================================================================
//POST new user route (optional, everyone has access)
router.post('/reg', auth.optional, (req, res, next) => {
  console.log("registrando usuario com auth");
  const { body: { client } } = req;
  console.log(client);
  console.log("client.email: " + client.email);

  if(!client.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if(!client.login) {
    return res.status(422).json({
      errors: {
        login: 'is required',
      },
    });
  }

  if(!client.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  const finalClient = new Client(client);
  finalClient.setPassword(client.password);
  return finalClient.save()
    .then(() => res.json({ client: finalClient.toAuthJSON() }));
});

//POST login route (optional, everyone has access)
router.post('/login', auth.optional, (req, res, next) => {
  const { body: { client } } = req;
  console.log(client);

  if(!client.login) {
    console.log("login required");
    return res.status(422).json({
      errors: {
        login: 'is required',
      },
    });
  }

  if(!client.password) {
    console.log("password required");
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

   /*passport.authenticate('local', function(err, client, info) {
    if (err) { return next(err); }
    if (!client) { return res.redirect('/login'); }
    //req.logIn(user, function(err) {
    //  if (err) { return next(err); }
    //  return res.redirect('/users/' + user.username);
    //});
  })(req, res, next);*/

   return passport.authenticate('local', { session: false }, (err, passportClient, info) => {
    if(err) {
      return next(err);
    }

    if(passportClient) {
      const client = passportClient;
      client.token = passportClient.generateJWT();

      return res.json({ user: client.toAuthJSON() });
    }
    console.log("chegou ate o final");
    return status(400).info;
  })(req, res, next);
});

//GET current route (required, only authenticated users have access)
router.get('/current', auth.required, (req, res, next) => {
  const { payload: { id } } = req;

  return Client.findById(id)
    .then((client) => {
      if(!client) {
        return res.sendStatus(400);
      }

      return res.json({ client: client.toAuthJSON() });
    });
});
//===========================================================================================================

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

    router.route('/clients/:client_id')
        //.get(acoesClienteController.view);
        //.patch(acoesClientController.update)
        //.put(acoesClientController.update)
        //.delete(acoesClientController.delete)

    
// exportamos as rotas da api
module.exports = router;