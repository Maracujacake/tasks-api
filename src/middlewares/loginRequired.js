const jwt = require('jsonwebtoken');
const segredo = 'log';

const autenticacao = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if(!token) return res.status(401).json({message: 'Token inválido'});
    
    jwt.verify(token, segredo, (err, user) => {
        if(err) return res.status(401).json({message: 'Token inválido'});
        req.user = user;
        next();
    });
}

module.exports = autenticacao;