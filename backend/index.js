const express = require('express');
const cors = require('cors');
const configurations = require('./src/configurations/firebase');
const firebase = require('firebase');

firebase.initializeApp(configurations);
const database = firebase.firestore();
const User = database.collection("users");

const app = express();
app.use(express.json());
app.use(cors());

app.post('/user/register', async (req, res) => {
    const data = req.body;
    await User.add(data);
    res.status(201).send({ msg: "Usuário criado com sucesso!" });
})

app.listen(3000, () => {
    console.log("Servidor ativo http://localhost:3000");
})