const jwt = require('jsonwebtoken');
const segredo = 'log';

const autenticacao = (req, res, next) => {
    const token = req.headers.authorization;

    if(!token) return res.status(401).json({message: 'Token inválido'});
    
    jwt.verify(token, segredo, (err, user) => {
        if(err) return res.status(401).json({message: 'Token inválido'});
        req.user = user;
        next();
    });
}

module.exports = autenticacao;