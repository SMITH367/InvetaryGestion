const express = require('express')

const app = express()

app.set('port', 3000)
app.set('address', '129.151.123.58')


//Midelwares
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, authentication, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


app.use(express.json())

app.use(require('./routes/routes'))


app.listen(app.get('port'),()=>{
    console.log('server in the port ',app.get('port'))
})
