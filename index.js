const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const mysql=require('mysql2');
const cors =require('cors');
const { error } = require('console');

const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Dipesh@211",
    database:"info"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/api/get",(req,res)=>{
    const sqlGet="SELECT * FROM contact";
    db.query(sqlGet,(error,result)=>{
        res.send(result);
    });
});

app.get("/",(req,res)=>{
    // const sqlinsert="INSERT INTO contact(Name, address, price) VALUES ('yoges','nandurbar',1000)";
    // db.query(sqlinsert,(error,result)=>{
    //     console.log("error",error);
    //     console.log("result",result);
    //     res.send("hellow express");
    // })
})
app.listen(5000,()=>{
    console.log("server running");
})