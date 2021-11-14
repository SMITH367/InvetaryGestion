const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const conexionMysql = require('../database')
const query = require('./querys')


const verifyLogin = (req, res, next) => {

    console.log(req.body);
    if (req.body.user == "admin" && req.body.password == "admin") {
        next()
    } else {
        res.sendStatus(403)
    }

}

const verifyToken = (req,res, next) => {
    const header = req.headers['authentication']
    if (header != undefined) {
        const token = header.split(" ")[1]
        req.auth = token
        next();
    } else {
        res.sendStatus(403)
    }
}

router.get('/products', verifyToken, (req, res) => {
    
    jwt.verify(req.auth, 'secretKey', (err, data) => {
        if (err) {
            res.send("err");
        } else {
            conexionMysql.query(query.select, (err, rows, fields) => {
                if (!err) {
                    res.status(200).send(rows);
                } else {
                    console.log(err)
                }
            })
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
router.post('/login', verifyLogin, (req, res) => {
    const user = {
        id:1
    }
    jwt.sign({ user }, 'secretKey', (err, token) => {
        
        if (err) return err

        res.json(token);
    })
})

module.exports = router 