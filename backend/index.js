const express = require('express');
const session = require('express-session');
const cors = require('cors');
const configurations = require('./src/configurations/firebase');
const firebase = require('firebase');
const { request } = require('express');

firebase.initializeApp(configurations);
const database = firebase.firestore();
const User = database.collection("users");

const app = express();
app.use(express.json());
app.use(cors());

//Palavra-chave para começar uma sessão
app.use(session({secret:"teste123"}));

//Login do usuário(Não finalizado)
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/src', express.static(path.join(__dirname, 'src')));
app.set('frontend', path.join(__dirname, '/frontend'));



//Registro de usuário
app.post('/user/register', async (req, res) => {
    const data = req.body;
    await User.add(data);
    res.status(201).send({ msg: "Usuário criado com sucesso!" });
})

app.get('/get-all-users', async (req, res) => {
    const snapshot = await User.get();
    const listUsers = snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()}));
    res.send(listUsers);
})

//Atualização de Usuário

app.put('/user/update/:id', async (req, res) => {
    const id = req.params.id;
    await User.doc(id).update(req.body);
    res.send({msg: "Usuário atualizado com sucesso !"});
})

app.listen(3000, () => {
    console.log("Servidor ativo http://localhost:3000");
})