const express = require('express')

const app = express()
app.set('port', 3000)
app.set('address','localhost')

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(express.json())

app.use(require('./routes/rutas'))


app.listen(app.get('port'),()=>{
    console.log('server en el puerto ',app.get('port'))
})

