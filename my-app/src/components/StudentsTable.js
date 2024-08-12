import axios from 'axios';
import React, { useEffect, useState } from 'react'


function StudentsTable() {
  const [students,setStudents]=useState({});
  useEffect(()=>{
    const loadStudents=async()=>{
      const response=await axios.get(`http://localhost:6900/students`);
      console.log(response.data.message);
      setStudents(response.data.message);
    }
    loadStudents();

  },[])
  return (
    
  
    Object.keys(students).length>0 && <table className="table table-dark table-striped">
      <thead>
      <tr>
      <td>firstname</td>
      <td>lastname</td>
      <td>email</td>
    </tr></thead>
      <tbody>
      {students.map((student)=>{
        return(
            <tr>
                <td>{student.firstname}</td>
                <td>{student.lastname}</td>
                <td>{student.email}</td>
                  </tr>
        )
    })}</tbody>
      
    </table>
    
    
  )
}

export default StudentsTable