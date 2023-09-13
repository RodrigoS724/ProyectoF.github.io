import express from "express";
import mysql from "mysql";
const port = "3000";
const app = express();

const connection = mysql.createConnection({
    host:'localhost',
    database:'db_multisales',
    user:'root',
    password:''
});

connection.connect(function(error){
    if(error){
        console.log('error en conexion db', error.stack);
        return;
    }
    console.log('conectado', connection.threadId);
});
