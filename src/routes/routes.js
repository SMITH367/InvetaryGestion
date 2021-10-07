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

router.post('/products', (req, res) => {

    let data = req.body
    conexionmysql.query('INSERT INTO productos SET ?', [data], (err, rows, fields) => {
        if (err) res.send(err)
        else {
            res.json("Product added");
        }
    })
})

router.put('/products/:id', (req, res) => {
    let data = req.body
    let id = req.params.id
    console.log(data)
    console.log(id)
    conexionmysql.query('UPDATE productos SET ? WHERE codigo = ? ', [data, id], (err, rows, fields) => {
        if (err) res.send(err);
        else {
            res.json("Update complete")
        }
    })
})
router.delete('/products/:id', (req, res) => {

    let data = req.params.id
    console.log(data)
    conexionmysql.query('DELETE FROM productos WHERE codigo = ?', [data], (err, rows, fields) => {
        if (err) res.send(err)
        else {
            res.json("Product deleted");
        }
    })
})


module.exports = router 