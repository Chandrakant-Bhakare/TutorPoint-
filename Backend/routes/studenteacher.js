import express, { request, response } from 'express';
import { db } from '../db.js';
const studentteachers=express.Router();
studentteachers.post('/studentteachers/:id',(request,response)=>{
const {id}=request.params;
const {tid}=request.body;
const statement=`insert into studentteachers values(${id},${tid})`;
db.query(statement,(error,data)=>{
    if(error){
        console.log(error);
        response.status(400).send({message:'data not inserted'});
    }
    else{
        response.status(200).send({message:data});
    }
})
})
studentteachers.get('/student/filter/:id',(request,response)=>{
    console.log("Filter");
    const {id}=request.params;
    const statement=`select * from teachers where tid != all(select tid from studentteachers where sid=${id})`;
    db.query(statement,(error,data)=>{
        console.log(data)
        if(error){
            console.log(error);
            response.status(400).send({message:'data not inserted'});
        }
        else{
            console.log(response);
            response.status(200).send({message:data});
        }
    })
    })
    studentteachers.get('/studentteachers/Amt/:id',(request,response)=>{
    const {id}=request.params;
    const statement=`select Sum(t.tution_fee) as total from studentteachers st inner join teachers t on t.tid=st.tid where sid=${id}`;
    db.execute(statement,(error,data)=>{
        if(error){
            response.status(400).send({message:'data not inserted'});
        }
        else{
            response.status(200).send({message:data});
        }
    })
})

    studentteachers.get('/studentteachers/:id',(request,response)=>{
        const{id}= request.params;
        const statement = `select t.name,t.exp,t.subject,t.rating, t.tution_fee, t.Contact  from studentteachers st inner join teachers t on t.tid=st.tid where st.sid=${id}`;
        db.query(statement,(error,data)=>{
            if(error){
                response.status(400).send({message:'data not inserted'});
            }
            else{
                response.status(200).send({message:data})
            }
        })
    })
    export default studentteachers