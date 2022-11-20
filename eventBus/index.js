const express = require('express');
const axios = require('axios');
const config = require('./config');
const cors = require('cors');

const app= express();
app.use(express.json());
app.use(cors())
const eventos  = []

app.post('/login', (req, res) => {
    const evento = req.body;
    eventos.push(evento)
    //envia o evento para o microsserviço de usuarios
    axios.post(`http://localhost:8082/api/login?crm=${evento.crm}`)
    .then((response) => res.status(200).send(response.data))
    .catch((err) => {
        console.log("Microsserviço de usuarios fora do ar.")
        console.log(err)
        res.status(400).send(err.response.data)
    });
});
app.post('/user', (req, res) => {
    const evento = req.body;
    eventos.push(evento)
    //envia o evento para o microsserviço de usuarios
    axios.post('http://localhost:8082/api/user', evento)
    .then((response) => res.status(200).send(response.data))
    .catch((err) => {
        console.log("Microsserviço de usuarios fora do ar.")
        res.status(400).send(err.response.data)
    });
});
app.get('/users', (req, res) => {
    const evento = req.body;
    eventos.push(evento)
    //envia o evento para o microsserviço de usuarios
    axios.get('http://localhost:8082/api/users', evento)
    .then((response) => res.status(200).send(response.data))
    .catch((err) => {
        console.log("Microsserviço de usuarios fora do ar.")
        res.status(400).send(err.response.data)
    });
});
app.get('/user/:id', (req, res) => {
    const evento = req.body;
    eventos.push(evento)
    //envia o evento para o microsserviço de usuarios
    axios.get('http://localhost:8082/api/user/:id', evento)
    .then((response) => res.status(200).send(response.data))
    .catch((err) => {
        console.log("Microsserviço de usuarios fora do ar.")
        res.status(400).send(err.response.data)
    });
});
app.put('/user/:id', (req, res) => {
    const evento = req.body;
    eventos.push(evento)
    //envia o evento para o microsserviço de usuarios
    axios.get('http://localhost:8082/api/user/:id', evento)
    .then((response) => res.status(200).send(response.data))
    .catch((err) => {
        console.log("Microsserviço de usuarios fora do ar.")
        res.status(400).send(err.response.data)
    });
});
app.post('/course', (req, res) => {
    const evento = req.body;
    eventos.push(evento)
    //envia o evento para o microsserviço de cursos
    axios.post('http://localhost:8081/api/course', evento)
    .then((response) => res.status(200).send(response.data))
    .catch((err) => {
        console.log("Microsserviço de cursos fora do ar.")
        res.status(400).send(err.response.data)
    });
});
app.get('/courses', (req, res) => {
    const evento = req.body;
    eventos.push(evento)
    //envia o evento para o microsserviço de cursos
    axios.get('http://localhost:8081/api/courses')
    .then(response => res.status(200).send(response.data))
    .catch((err) => {
        console.log("Microsserviço de cursos fora do ar.",err)
        res.status(400).send(err.response.data)
    });
});
app.get('/course/:id', (req, res) => {
    const evento = req.params.id;
    eventos.push(evento)
    //envia o evento para o microsserviço de cursos
    axios.get(`http://localhost:8081/api/course/${evento}`)
    .then((response) => res.status(200).send(response.data))
    .catch((err) => {
        console.log("Microsserviço de cursos fora do ar.")
        res.status(400).send(err.response.data)
    });
});
app.post('/modules', (req, res) => {
    const evento = req.body;
    eventos.push(evento)
    //envia o evento para o microsserviço de cursos
    axios.post('http://localhost:8081/api/modules', evento)
    .then((response) => res.status(200).send(response.data))
    .catch((err) => {
        console.log("Microsserviço de cursos fora do ar.")
        res.status(400).send(err.response.data)
    });
});
app.get('/modules/:id', (req, res) => {
    const evento = req.body;
    eventos.push(evento)
    //envia o evento para o microsserviço de cursos
    axios.get('http://localhost:8081/api/modules/:id', evento)
    .then((response) => res.status(200).send(response.data))
    .catch((err) => {
        console.log("Microsserviço de cursos fora do ar.")
        res.status(400).send(err.response.data)
    });
});

app.listen(config.port, () => console.log('App listening on url http://localhost:' + config.port));
