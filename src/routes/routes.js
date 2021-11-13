const express = require('express')
const router = express.Router()

const conexionMysql = require('../database')
const query = require('./querys')



router.get('/products', (req, res) => {
    conexionMysql.query(query.select, (err,rows,fields) => {
        if (!err) {
            res.status(200).send(rows);
        } else {
            console.log(err)
        }
    })
})

router.get('/products/:id', (req, res) => {
    let id = req.params.id
    conexionMysql.query(query.selectByid, [id], (err,rows,fields) => {
        if (!err) {
            res.json(rows)
        } else {
            console.log(err)
        }
    })
})

router.post('/products', (req, res) => {

    let data = req.body
    conexionMysql.query(query.save, [data], (err, rows, fields) => {
        if (err) res.send(err)
        else {
            res.json("Product added");
        }
    })
})

router.put('/products/:id', (req, res) => {
    let data = req.body
    let id = req.params.id
    conexionMysql.query(query.update, [data, id], (err, rows, fields) => {
        if (err) res.send(err);
        else {
            res.json("Update complete")
        }
    })
})
router.delete('/products/:id', (req, res) => {

    let data = req.params.id
    conexionMysql.query(query.clear, [data], (err, rows, fields) => {
        if (err) res.send(err)
        else {
            res.json("Product deleted");
        }
    })
})


module.exports = router 