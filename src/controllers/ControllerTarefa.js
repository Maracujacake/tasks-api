const Tarefa = require ('../models/Tarefa');

//criação de tarefas
exports.criaTarefa = (req, res) => {

    const {titulo, descricao, userID} = req.body;
    console.log(userID);
    Tarefa.create({titulo, descricao, userID}, (err, tarefa) => {
        if(err) return res.status(500).json({message: err.message});
        else return res.status(201).json(tarefa);
    });

}

//busca de todas as tarefas
exports.listAll = (req, res) => {

    Tarefa.findAll( (err, tarefas) => {
        if(err) return res.status(500).json({message: err.message});
        else return res.status(200).json(tarefas);
    });

}

//busca tarefa por id
exports.getById = (req, res) => {
    const {id} = req.params;

    Tarefa.findById(id, (err, tarefa) => {
        if(err) return res.status(500).json({message: err.message});
        else return res.status(200).json(tarefa);
    });
}


//atualiza tarefa específica
exports.update = (req, res) => {
    const {id, titulo, descricao, completado} = req.body;

    Tarefa.update(id, {titulo, descricao, completado}, (err, tarefa) => {
        if(err) return res.status(500).json({message: err.message});
        else return res.status(200).json(tarefa);
    });
}

//deleta tarefa específica
exports.delete = (req, res) => {
    const {id} = req.params;

    Tarefa.delete(id, (err, tarefa) => {
        if(err) return res.status(500).json({message: err.message});
        else return res.status(200).json(tarefa);
    });
}
