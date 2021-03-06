require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Voluntario = require('./models/voluntario');
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

app.post('/api/voluntarios', (req, res, next) => {
    const voluntario = new Voluntario({
        nome: req.body.nome,
        cpf: req.body.cpf,
        email: req.body.email,
        fone: req.body.fone,
        cep: req.body.cep,
        endereco: req.body.endereco,
        numero: req.body.numero,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        uf: req.body.uf,
        complemento: req.body.complemento,
        nascimento: req.body.nascimento,
        sexo: req.body.sexo,
        escolaridade: req.body.escolaridade,
        profissao: req.body.profissao
    });
    voluntario.save();
    console.log(voluntario);
    res.status(201).json({ mensagem: 'Voluntário inserido' })
});

app.get('/api/voluntarios', (req, res, next) => {
    const{page = 1, limit = 10000000000 } = req.query;
    Voluntario.find()
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .then(documents => {
        console.log(documents);
        res.status(200).json({
            total: documents.length,
            mensagem: "sucesso",
            voluntarios: documents
        });
    })
});

app.get('/api/voluntarios-mapa', (req, res, next) => {
    const{page = 1, limit = 10000000000 } = req.query;
    Voluntario.find()
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .then(documents => {
        console.log(documents);
        res.status(200).json(documents);
    })
});

module.exports = app;