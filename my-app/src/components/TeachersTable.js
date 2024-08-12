import axios from 'axios';
import React, { useEffect, useState } from 'react'
//import TeacherCard from './TeacherCard';

function TeachersTable() {
  const [teachers,setTeachers]=useState({});
  useEffect(()=>{
    const loadTeachers=async()=>{
      const response=await axios(`http://localhost:6900/teachers`);
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
            </tr>
        )
    })}</tbody>
      
    </table>
    
    
  )
}

export default TeachersTable
