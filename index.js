const express = require('express');

const user = require('./routes/user_routes');
const app = express();

app.use('/users', user);

let port = 8000;

app.listen(port, ()=>{
    console.log(`Servidor em execução na porta ${port}`);
})
