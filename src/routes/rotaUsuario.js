const ControllerUsuario = require('../controllers/ControllerUser');
const express = require('express');
const router = express.Router();
const authNecessaria = require('../middlewares/loginRequired');

/**
 * @swagger
 * /usuario/add:
 *   post:
 *     summary: Cria novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       500:
 *         description: Erro no servidor
 */
router.post('/add', ControllerUsuario.create);

/**
 * @swagger
 * /usuario/login:
 *   post:
 *     summary: Autentica um usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - password
 *             properties:
 *               id:
 *                 type: integer
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário autenticado com sucesso
 *       401:
 *         description: Credenciais inválidas
 */
router.post('/login', ControllerUsuario.login);

/**
 * @swagger
 * /usuario/update:
 *   put:
 *     summary: Atualiza algum dado do usuário que realizou a requisição
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       500:
 *         description: Erro no servidor
 */
router.put('/update/', authNecessaria, ControllerUsuario.update);

/**
 * @swagger
 * /usuario/delete:
 *   delete:
 *     summary: Deleta o próprio usuário
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Usuário deletado com sucesso
 *       500:
 *         description: Erro no servidor
 */
router.delete('/delete/', authNecessaria, ControllerUsuario.delete);

module.exports = router;
