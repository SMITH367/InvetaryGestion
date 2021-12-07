const mysql = require('mysql')

const conexion = mysql.createConnection({
    host: "us-cdbr-east-04.cleardb.com",
    user: "b44fefd355267e",
    password: "ec222173",
    database: "heroku_fabc383a6d56527"
})


//mysql://b44fefd355267e:ec222173@us-cdbr-east-04.cleardb.com/heroku_fabc383a6d56527?reconnect=true
conexion.connect((err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("conected to the database")
    }
})
module.exports = conexion