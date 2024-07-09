const sqlite = require('sqlite3').verbose();
const crypto = require('bcrypt');
const db = new sqlite.Database('./src/database/db.sqlite');

// criação da tabela no banco.
// atributo completado: 0 - não completado, 1 - completado
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS tarefas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo varchar(100) NOT NULL,
            descricao varchar(255),
            completado INTEGER DEFAULT 0 NOT NULL,
            userID INTEGER,
            FOREIGN KEY (userID) REFERENCES Users(id)
        )
    `);
});

class Tarefa{

    // criação de nova tarefa
    static create({titulo, descricao, userID}, callback){
        // console.log(userID);
        const sql = `INSERT INTO tarefas(titulo, descricao, userID) VALUES(?, ?, ?)`;
        db.run(sql, [titulo, descricao, userID], function(err){
                if(err) return callback(err);
                callback(null, {"lastID" : this.lastID, titulo, descricao, userID});
        });
    }

    // procura de todas as tarefas
    static findAll(callback){
        const sql = `SELECT * FROM tarefas`;
        db.all(sql, [], (err, rows) => {
            if(err) return callback(err);
            else callback(null, rows);
        });
    }

    // procura de tarefa por id
    static findById(id, callback){
        const sql = `SELECT * FROM tarefas WHERE id = ?`;
        db.get(sql, [id], (err, row) => {
            if(err) return callback(err);
            else callback(null, row);
        });
    }

    // atualização de tarefa dado um ID
    static update(id, {titulo, descricao, completado}, callback){
        const sql = `UPDATE tarefas SET titulo = ?, descricao = ?, completado = ? WHERE id = ?`;
        db.run(sql, [titulo, descricao, completado, id], function(err){
            if(err) return callback(err);
            else callback(null, {id, titulo, descricao, completado});
        });
    }

    // deleta uma tarefa dado um ID
    static delete(id, callback){
        const sql = `DELETE FROM tarefas WHERE id = ?`;
        db.run(sql, [id], function(err){
            if(err) return callback(err);
            else callback(null, {id});
        });
    }
}


module.exports = Tarefa;