const sqlite = require('sqlite3').verbose();
const crypto = require('bcrypt');
const db = new sqlite.Database('./src/database/db.sqlite');


db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS Admin(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username varchar(100) NOT NULL,
            password varchar(100) NOT NULL

        )
    `)
});

class Admin {

    // lista todos os usuários cadastrados
    static findAllUsers(callback) {
        const sql = `SELECT * from Users`;
        db.all(sql, [], (err, rows) => {
            if (err) return callback(err);
            else callback(null, rows);
        });
    }


    // procura de todas as tarefas
    static findAllTarefas(callback) {
        const sql = `SELECT * FROM tarefas`;
        db.all(sql, [], (err, rows) => {
            if (err) return callback(err);
            else callback(null, rows);
        });
    }


}

