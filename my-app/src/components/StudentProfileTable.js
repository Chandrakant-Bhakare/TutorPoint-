import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
import EditProfile from './EditProfile';

function StudentProfileTable() {
    const [edit,setEdit]=useState(false);
    const [students,setStudents]=useState({});
    const handleFormEdit=()=>{
        setEdit(true);
    }
    const handleFormSubmit=()=>{
        setEdit(false);
    }
    useEffect(()=>{
      const loadStudents=async()=>{
        const response=await axios.get(`http://localhost:6900/students/${localStorage.getItem('id')}`);
        console.log(response.data.message);
        setStudents(response.data.message);
      }
      loadStudents();
  
    },[edit])
    return (
      
    
     !edit? (Object.keys(students).length>0 && <table className="table table-dark table-striped">
        <thead>
        <tr>
        <td>firstname</td>
        <td>lastname</td>
        <td>email</td>
        <td>operation</td>
      </tr></thead>
        <tbody>
        {students.map((student)=>{
          return(
              <tr>
                  <td>{student.firstname}</td>
                  <td>{student.lastname}</td>
                  <td>{student.email}</td>
                  <td><button type="button" class="btn btn-dark" onClick={handleFormEdit}>Edit Profile</button></td>
                    </tr>
          )
      })}</tbody>
        
      </table>
      
      
      ):<EditProfile handleFormSubmit={handleFormSubmit}/> )
    
}

export default StudentProfileTable
