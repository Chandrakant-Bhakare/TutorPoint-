import React, { useEffect, useState } from 'react'
import StudentNavbar from './StudentNavbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Booking() {
    let navigate=useNavigate();
    let [teachers,setTeachers]=useState([]);
    useEffect(()=>{
        let id=localStorage.getItem('id');
        if(id==null){
            navigate('/');
        }
        else{
          const getMyTeachers=async()=>{
          const response=await axios.get(`http://localhost:6900/studentteachers/${localStorage.getItem('id')}`);
              setTeachers(response.data.message);
          }
          getMyTeachers();
        }
    },[])
  return (
    <div>
        <StudentNavbar/>
       { Object.keys(teachers).length>0 && <table className="table table-dark table-striped">
      <thead>
      <tr>
      <td>Name</td>
      <td>Subject</td>
      <td>Exp</td>
      <td>Rating</td>
      <td>Tution Fee</td>
      <td>Remove</td>
      
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
                <td><button type="button" class="btn btn-success" >Remove</button></td>
            </tr>
        )
    })}</tbody>
      
    </table>}


        <Footer/>
      
    </div>
  )
}

export default Booking
