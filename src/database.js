const mysql = require('mysql')

const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"1234",
    database:"productos"
})
conexion.connect((err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("conected to the database")
    }
})
module.exports = conexion