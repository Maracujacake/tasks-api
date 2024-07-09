const ControllerUsuario = require('../controllers/ControllerUser');
const express = require('express');
const router = express.Router();
const authNecessaria = require('../middlewares/loginRequired');

router.post('/add', ControllerUsuario.create);
router.post('/login', ControllerUsuario.login);
router.get('/list', ControllerUsuario.listAll);
router.get('/getByID/:id', authNecessaria,  ControllerUsuario.getByID);
router.get('/listTarefas/:id', authNecessaria, ControllerUsuario.getTodasTarefas);
router.get('/TarefasCompletadas/:id', authNecessaria, ControllerUsuario.getTodasTarefasCompletas);
router.put('/update/:id', authNecessaria, ControllerUsuario.update);
router.delete('/delete/:id', authNecessaria, ControllerUsuario.delete);

module.exports = router;
