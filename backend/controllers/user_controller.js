var User = require('../models/user_model');


const database = {
    "name": "jeff",
    "lastname": "claver",
    "birthdate": "19/11/1999",
    "genere": "masculino",
    "crm": "123AS0",
    "password":"123456jeff"
};

exports.test = function(req, res){
    res.send(database);
}


exports.create = function(req, res){
    let user = new User({
        name: req.body.name,
        lastname: req.body.lastname,
        birthdate: req.body.birthdate,
        genere: req.body.genere,
        crm: req.body.crm,
        password: req.body.password
    });
    console.log(user.name);
    user.save(function (err){
        if(err){
            return res.send("Erro");
        }
        res.send("Usuário cadastrado com sucesso!")
    })
}