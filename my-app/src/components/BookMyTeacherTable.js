import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function BookMyTeacherTable() {
  const bookTeacherButton=(teacher)=>{
    const insertDataInStudentTeacherTable=async()=>{
    try{
      console.log(teacher.tid);
      const data={
        tid:teacher.tid
      }
       const response=await axios.post(`http://localhost:6900/studentteachers/${localStorage.getItem("id")}`,data);
       console.log(response.status);
       const filterArray=teachers.filter((t)=>t.id!=teacher.id);
       setTeachers(filterArray);
       alert("Booking Successful")
    }
    catch(error){
console.log(error);
    }
    }
    insertDataInStudentTeacherTable();

  }
    const [teachers,setTeachers]=useState({});
    useEffect(()=>{
      const loadTeachers=async()=>{
        const response=await axios.get(`http://localhost:6900/student/filter/${localStorage.getItem("id")}`);// recently edit
        console.log(response.data.message);
        setTeachers(response.data.message);
      }
      loadTeachers();
  
    },[])
    return (
      
    
      Object.keys(teachers).length>0 && <table className="table table-dark table-striped">
        <thead>
        <tr>
        <td>Name</td>
        <td>Subject</td>
        <td>Exp</td>
        <td>Rating</td>
        <td>Tution Fee</td>
        <td>Book</td>
        </tr>
        </thead>
        <tbody>
        {teachers.map((teacher)=>{
          return(
              <tr>
                  <td>{teacher.name}</td>
                  <td>{teacher.subject}</td>
                  <td>{teacher.exp}</td>
                  <td>{teacher.rating}</td>
                  <td>{teacher.tution_fee}</td>
                  <td><button type="button" class="btn btn-success" onClick={()=>{bookTeacherButton(teacher)}}>BookMe</button></td>
              </tr>
          )
      })}</tbody>
        
      </table>
      
      
    )
}

export default BookMyTeacherTable
