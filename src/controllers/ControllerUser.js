const User = require('../models/Users');
const jwt = require('jsonwebtoken');
const segredo = 'log';


exports.login = (req, res) => {
    const { id, password } = req.body;
    User.getById(id, (err, user) => {
        if(err) return res.status(500).json({message: err.message});
        if(!user) return res.status(404).json({message: 'Usuário não encontrado'});

        User.verificaSenha(password, user.password, (err, match) => {
            if(err) return res.status(500).json({message: err.message});
            if(!match) return res.status(401).json({message: 'Senha inválida ou Usuário não encontrado'});

            const token = jwt.sign({id: user.id}, segredo, {expiresIn: '15m'});
            return res.status(200).json({token});
        });
    });
}

//criação de usuário
exports.create = (req, res) => {
    const {username, password} = req.body;

    User.create(username, password, (err, user) => {
        if(err) return res.status(500).json({message: err.message});
        else return res.status(201).json(user);
    });
}

//lista todos os usuários
exports.listAll = (req, res) => {
    
    User.findAll( (err, Users) => {
        if(err) return res.status(500).json({message: err.message});
        else return res.status(200).json(Users);
    });
}

//busca usuário por id
exports.getByID = (req, res) => {
    const { id } = req.params;
    User.getById( id, (err, user) => {
        if(err) return res.status(500).json({message: err.message});
        else return res.status(200).json(user);
    });
}

// realiza a busca de todas as tarefas do usuário a partir do id adquirido
// pelos parametros da requisicao
exports.getTodasTarefas = (req, res) => {
    const { id } = req.params;
    User.getTarefas(id, (err, tarefas) => {
        if(err) return res.status(500).json({message: err.message});
        else return res.status(200).json(tarefas);
    });

}

// pega todas as tarefas completadas pelo usuário
exports.getTodasTarefasCompletas = (req, res) => {
    const { id } = req.params;
    User.getTarefasCompletadas(id, (err, tarefas) => {
        if(err) return res.status(500).json({message: err.message});
        else return res.status(200).json(tarefas);
    });

}

//atualiza usuário
exports.update = (req, res) => {
    const id = req.user.id;
    const { username, password } = req.body;
    //console.log(username, password);
    User.update( id, username, password, (err, user) => {
        if(err) return res.status(500).json({message: err.message});
        else return res.status(200).json(user);
    });
}

//deleta usuário
exports.delete = (req, res) => {
    const id = req.user.id;
    User.delete( id, (err, user) => {
        if(err) return res.status(500).json({message: err.message});
        else return res.status(200).json(user);
    })
}