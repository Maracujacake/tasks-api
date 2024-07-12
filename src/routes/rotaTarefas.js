const express = require('express');
const authNecessaria = require('../middlewares/loginRequired');

TarefasController = require('../controllers/ControllerTarefa');
const router = express.Router();

/**
 * @swagger
 * /tarefas/add:
 *   post:
 *    summary: Cria nova tarefa
 *    requestBody:
 *     required: true
 *     content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - titulo
 *               - descricao
 *             properties:
 *               titulo:
 *                 type: string
 *               descricao:
 *                 type: string
 *    responses:
 *       201:
 *         description: Tarefa criada com sucesso
 *       500:
 *         description: Erro no servidor
 */
router.post('/add', authNecessaria, TarefasController.criaTarefa);

/**
 * @swagger
 * /tarefas/listTarefas:
 *   get:
 *    summary: Lista todas as tarefas do usuário
 *    responses:
 *       200:
 *         description: Lista de tarefas retornada com sucesso
 *       500:
 *         description: Erro no servidor
 */
router.get('/listTarefas', authNecessaria, TarefasController.listAll);

/**
 * @swagger
 * /tarefas/tarefaUnica/{id}:
 *   get:
 *    summary: Obtém uma tarefa específica pelo ID
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *       200:
 *         description: Tarefa retornada com sucesso
 *       404:
 *         description: Tarefa não encontrada
 *       500:
 *         description: Erro no servidor
 */
router.get('/tarefaUnica/:id', authNecessaria, TarefasController.getById);

/**
 * @swagger
 * /tarefas/update/{id}:
 *   put:
 *    summary: Atualiza uma tarefa específica pelo ID
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *    requestBody:
 *     required: true
 *     content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - titulo
 *               - descricao
 *               - completado
 *             properties:
 *               titulo:
 *                 type: string
 *               descricao:
 *                 type: string
 *               completado:
 *                 type: integer
 *    responses:
 *       200:
 *         description: Tarefa atualizada com sucesso
 *       404:
 *         description: Tarefa não encontrada
 *       500:
 *         description: Erro no servidor
 */
router.put('/update/:id', authNecessaria, TarefasController.update);

/**
 * @swagger
 * /tarefas/delete/{id}:
 *   delete:
 *    summary: Deleta uma tarefa específica pelo ID
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *       200:
 *         description: Tarefa deletada com sucesso
 *       404:
 *         description: Tarefa não encontrada
 *       500:
 *         description: Erro no servidor
 */
router.delete('/delete/:id', authNecessaria, TarefasController.delete);

module.exports = router;
