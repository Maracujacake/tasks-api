const sqlite = require('sqlite3').verbose();
const crypto = require('bcrypt');
const db = new sqlite.Database('./src/database/db.sqlite');

db.serialize( () => {
    db.run(`
        CREATE TABLE IF NOT EXISTS Users(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username varchar(100) NOT NULL,
            password varchar(100) NOT NULL

        )
    `)
});

class Users{

    // compara a senha do usuário com a hash salva no banco
    static verificaSenha(password, hash, callback){
        crypto.compare(password, hash, (err, res) => {
            if(err) return callback(err);
            else callback(null, res);
        });
    }


    // criação de novo usuário
    static create(username, password, callback){

        //debug
        if (typeof callback !== 'function') {
            throw new Error('Callback is not a function');
        }

        crypto.hash(password, 5, (err,hash) => {
            if(err) return callback(err);
            const sql = `INSERT INTO Users (username, password) VALUES (?, ?)`;
            db.run(sql, [username, hash], function(err){
                if(err) return callback(err);
                else callback(null, {"lastID" : this.lastID, username, password});
            });
        });
    }

    // procura usuário por id
    static getById(id, callback){
        const sql = `SELECT * FROM Users WHERE id = ?`;
        db.get(sql, [id], (err, row) => {
            if(err) return callback(err);
            else callback(null, row);
        });
    }

    //procura usuário pelo username
    static getByUsername(username, callback){
        const sql = `SELECT * FROM Users WHERE username = ?`;
        db.get(sql, [username], (err,row) =>  {
            if(err) return callback(err);
            else callback(null, row);
        });
    }

    //procura todas as tarefas do usuário
    static getTarefas(id, callback){
        console.log(id);
        const sql = `SELECT * FROM tarefas WHERE userID = ?`;
        db.all(sql, [id], (err, rows) => {
            if(err) return callback(err);
            else callback(null, rows);
        });
    }

    static getTarefasCompletadas(id, callback){
        const sql = `SELECT * FROM tarefas WHERE userID = ? AND completado = 1`;
        db.all(sql, [id], (err, rows) => {
            if(err) return callback(err);
            else callback(null, rows);
        });
    }

    //atualiza dados do usuário já existente a partir do ID
    static update(id, username, password, callback){
        //console.log(id, username, password);
        const sql = `UPDATE Users set username = ?, password = ? WHERE id = ?`;
        db.run(sql, [username, password, id], function(err){
            if(err) return callback(err);
            else callback(null, {id, username, password});
        });
    }

    // delete um usuário baseado no ID
    static delete(id, callback){
        const sql = `DELETE FROM Users WHERE id = ?`;
        db.run(sql, [id], function(err){
            if(err) return callback(err);
            else callback(null, {id});
        })
    }
}

module.exports = Users;