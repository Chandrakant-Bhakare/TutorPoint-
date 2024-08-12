import express from 'express';
import { db } from '../db.js';
export const teacherRouter=express.Router();

teacherRouter.get('/teachers',(request,response)=>{
    const statement=`select name,exp,subject,rating,tution_fee from teachers`;
    db.query(statement,(error,data)=>{
        if(error){
response.status(400).send({message:'something went wrong!!!'});
        }
        else{
            if(data.length==0){
                response.send({message:'no teachers in list'});
            }
            else{
                response.status(200).send({message:data});
            }
        }
    })


})
