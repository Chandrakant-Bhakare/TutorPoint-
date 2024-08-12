import express from 'express';
import { db } from '../db.js';
import cryptoJs from 'crypto-js';
const studentRouter=express.Router();
studentRouter.get('/students',(request,response)=>{
    const statement=`select firstname,lastname,email from students`;
    db.query(statement,(error,data)=>{
        if(error){
response.status(400).send({message:'something went wrong!!!'});
        }
        else{
            if(data.length==0){
                response.send({message:'no students in list'});
            }
            else{
                response.status(200).send({message:data});
            }
        }
    })


})
studentRouter.post('/students',(request,response)=>{
    const{firstname,lastname,email,password}=request.body;
    const encryptPassword=cryptoJs.SHA256(password);
    const statement=`insert into students(firstname,lastname,email,password)values('${firstname}','${lastname}','${email}','${encryptPassword}')`;
    db.query(statement,(error,data)=>{
        if(error){
            console.log(error);
            response.status(400).send({msg:'something will wrong'});
        }
        else{
            response.status(200).send({message:data});
        }
    })


})
studentRouter.post('/students/signin',(request,response)=>{
    const{email,password}=request.body;
    const encryptPassword=cryptoJs.SHA256(password);
    const statement=`select sid,firstname,lastname,email from students where email='${email}' and password='${encryptPassword}'`;
    db.query(statement,(error,data)=>{
    if(error){
        console.log(error);
response.status(200).send({message:'either invalid email or password'});
    }
    else{
response.status(200).send({message:data});
    }
    })

    


})
studentRouter.get('/students/:id',(request,response)=>{
    const {id}=request.params;
    const statement=`select firstname,lastname,email from students where sid=${id}`;
    db.query(statement,(error,data)=>{
        if(error){
response.status(400).send({message:'something went wrong!!!'});
        }
        else{
            if(data.length==0){
                response.send({message:'invalid student entry'});
            }
            else{
                response.status(200).send({message:data});
            }
        }
    })


})
studentRouter.put('/students/:id',(request,response)=>{
    const {id}=request.params;
    const{firstname,lastname,email,password}=request.body;
    const encryptPassword=cryptoJs.SHA256(password);
    const statement=`update students set firstname='${firstname}',lastname='${lastname}' ,email='${email}',password='${encryptPassword}'where sid=${id}`;
    db.query(statement,(error,data)=>{
        if(error){
            console.log(error);
response.status(400).send({message:'something went wrong!!!'});
        }
        else{
            if(data.length==0){
                response.send({message:'student update failed'});
            }
            else{
                response.status(200).send({message:'student update success'});
            }
        }
    })


})
export default studentRouter;

