TarefasController = require('../controllers/ControllerTarefa');
const express = require('express');
const router = express.Router();

router.post('/add', TarefasController.criaTarefa);
router.get('/list', TarefasController.listAll);
router.get('/list/:id', TarefasController.getById);
router.put('/update/:id', TarefasController.update);
router.delete('/delete/:id', TarefasController.delete);

module.exports = router;
