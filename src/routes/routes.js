const express = require('express')
const router = express.Router()

const conexionmysql = require('../database')


router.get('/products', (req, res) => {
    conexionmysql.query('SELECT * FROM productos', (err,rows,fields) => {
        if (!err) {
            res.status(200).send(rows);
        } else {
            console.log(err)
        }
    })
})
router.get('/products/:id', (req, res) => {
    let id = req.params.id
    conexionmysql.query('SELECT * FROM productos WHERE codigo = ?', [id], (err,rows,fields) => {
        if (!err) {
            res.json(rows)
        } else {
            console.log(err)
        }
    })
    
})
module.exports = router 