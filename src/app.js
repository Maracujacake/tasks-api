const express = require ('express');
const app = express();
const setupSwagger = require('./swagger');
const PORT = process.env.PORT ?? 3000; // porta especificada ou 3000 para desenvolvimento

setupSwagger(app);
app.use(express.json());

const rotaTarefas = require('./routes/rotaTarefas');
const rotaUsuario = require('./routes/rotaUsuario');
const { setup } = require('swagger-ui-express');

app.use('/tarefas', rotaTarefas);
app.use('/usuario', rotaUsuario);

app.listen(PORT, () => {
    console.log("tá rodando, graças a Deus");
});