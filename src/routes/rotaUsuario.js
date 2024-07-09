const ControllerUsuario = require('../controllers/ControllerUser');
const express = require('express');
const router = express.Router();
const authNecessaria = require('../middlewares/loginRequired');

router.post('/add', ControllerUsuario.create);
router.post('/login', ControllerUsuario.login);
router.put('/update/', authNecessaria, ControllerUsuario.update);
router.delete('/delete/', authNecessaria, ControllerUsuario.delete);

module.exports = router;
