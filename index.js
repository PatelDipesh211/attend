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

app.post("/api/post",(req,res)=>{
    const {name,payperday,totaldays}=req.body;
    const sqlinsert="INSERT INTO contact(Name, PayPerDay, TotalDays) VALUES (?,?,?)";
    db.query(sqlinsert,[name,payperday,totaldays],(error,result)=>{
        if(error){
            console.log(error);
        }
    })
});

app.put("/api/addday/:Id",(req,res)=>{
    const {Id}=req.params;
    const {TotalDays}=req.body;
    const sqladdday ="UPDATE contact set TotalDays=TotalDays+1 where Id=?;";
    db.query(sqladdday,Id,(error,result)=>{
        if(error){
            console.log(error);
        }
    })
});

app.put("/api/addhalfday/:Id",(req,res)=>{
    const {Id}=req.params;
    const {TotalDays}=req.body;
    const sqladdhalfday ="UPDATE contact set TotalDays=TotalDays+0.5 where Id=?";
    db.query(sqladdhalfday,Id,(error,result)=>{
        if(error){
            console.log(error);
        }
    })
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