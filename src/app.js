const express = require ('express');
const app = express();
const PORT = process.env.PORT ?? 3000; // porta especificada ou 3000 para desenvolvimento

app.use(express.json());

const rotaTarefas = require('./routes/rotaTarefas');
const rotaUsuario = require('./routes/rotaUsuario');

app.use('/tarefas', rotaTarefas);
app.use('/usuario', rotaUsuario);

app.listen(PORT, () => {
    console.log("tá rodando, graças a Deus");
});