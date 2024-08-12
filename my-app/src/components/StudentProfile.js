import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StudentHome from './StudentHome';
import StudentNavbar from './StudentNavbar';
import Loader from './Loader';
import Footer from './Footer';
import StudentProfileTable from './StudentProfileTable';

function StudentProfile() {
  const [load,setLoad]=useState(true);
  let navigate=useNavigate();
  useEffect(()=>{
    console.log(localStorage.getItem('id'));
   let  id=localStorage.getItem('id');
 if(!id){
navigate('/');
 }
 else{
  setTimeout(()=>{
  setLoad(false);
  },2000)
  
 }
  },[navigate])
  return (
    <>
    <StudentNavbar/>
    {load==true?<Loader/>:<StudentProfileTable/>}
    <Footer/>
    </>
  )
}

export default StudentProfile
