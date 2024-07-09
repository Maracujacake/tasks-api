TarefasController = require('../controllers/ControllerTarefa');
const express = require('express');
const router = express.Router();
const authNecessaria = require('../middlewares/loginRequired');


router.post('/add', authNecessaria, TarefasController.criaTarefa);
router.get('/tarefas', authNecessaria, TarefasController.listAll);
router.get('/tarefaUnica/:id', authNecessaria, TarefasController.getById);
router.put('/update/:id', authNecessaria, TarefasController.update);
router.delete('/delete/:id', authNecessaria, TarefasController.delete);

module.exports = router;
