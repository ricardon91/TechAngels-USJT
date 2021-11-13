require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const UBS = require('./models/ubs');
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Conexão OK")
    }).catch((e) => {
        console.log(e)
    });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type,Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');

    next();
});

app.post('/api/ubs', (req, res, next) => {
    const ubs = new UBS({
        nome: req.body.nome,        
        fone: req.body.fone,
        cep: req.body.cep,
        endereco: req.body.endereco,
        numero: req.body.numero,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        uf: req.body.uf        
    });
    ubs.save();    
    res.status(201).json({ mensagem: 'Ubs inserido' })
});

app.get('/api/ubs', (req, res, next) => {
    UBS.find().then(documents => {
        console.log(documents);
        res.status(200).json(documents);
    })
});

module.exports = app;