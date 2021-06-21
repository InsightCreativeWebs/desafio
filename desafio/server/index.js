const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '1022nadi',
    database: 'insightcreative_desafio'
});


app.get('/usuario', (req, res)=>{

})


app.listen(3001, ()=>{
    console.log("O servidor esta rodando na porta 3001")
});