const Tarefa = require ('../models/Tarefa');

//criação de tarefas
exports.criaTarefa = (req, res) => {

    const {titulo, descricao} = req.body;
    const userID = req.user.id;
    console.log(userID);
    Tarefa.create({titulo, descricao, userID}, (err, tarefa) => {
        if(err) return res.status(500).json({message: err.message});
        else return res.status(201).json(tarefa);
    });

}

//busca de todas as tarefas
exports.listAll = (req, res) => {

    const userID = req.user.id;
    Tarefa.findAllTarefas(userID, (err, tarefas) => {
        if(err) return res.status(500).json({message: err.message});
        else return res.status(200).json(tarefas);
    });

}

//busca tarefa do usuário por id 
exports.getById = (req, res) => {
    const {id} = req.params;
    const userID = req.user.id;

    Tarefa.findById(userID, id, (err, tarefa) => {
        if(err) return res.status(500).json({message: err.message});
        else return res.status(200).json(tarefa);
    });
}


//atualiza tarefa específica
exports.update = (req, res) => {
    const {titulo, descricao, completado} = req.body;
    const id = req.params.id;
    const userID = req.user.id;

    Tarefa.update(userID, id, {titulo, descricao, completado}, (err, tarefa) => {
        if(err) return res.status(500).json({message: err.message});
        else return res.status(200).json(tarefa);
    });
}

//deleta tarefa específica
exports.delete = (req, res) => {
    const {id} = req.params;
    const userID = req.user.id;

    Tarefa.delete(userID, id, (err, tarefa) => {
        if(err) return res.status(500).json({message: err.message});
        else return res.status(200).json(tarefa);
    });
}
