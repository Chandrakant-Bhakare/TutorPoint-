import express from 'express'
import cors from 'cors'
import studentRouter from './routes/student.js';
import {teacherRouter} from './routes/teacher.js';
import studentteachers from './routes/studenteacher.js';
import { db } from './db.js';
const PORT = 6900;

const app=express();
app.use( cors())
app.use(express.json());
app.use(studentRouter);
app.use(teacherRouter);
app.use(studentteachers);
app.get('/',(request,response)=>{
    response.send('hello');
})

app.listen(PORT,()=>{
    db.connect((error)=>{
        if(error){
            console.log("Error in DB connection");
            console.log(error);
        }
        else{
            console.log("Coneection created");
        }
    })
console.log("Server Connected on PORT",PORT);
});