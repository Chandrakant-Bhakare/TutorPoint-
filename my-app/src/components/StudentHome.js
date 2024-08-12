import React from 'react'
import StudentNavbar from './StudentNavbar'
import HomeMiddleContainer from './HomeMiddleContainer'
import Footer from './Footer'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function StudentHome() {
  let navigate=useNavigate();
  useEffect(()=>{
 if(localStorage.getItem('id')==null){
navigate('/');
 }
  },[])
  return (
    <div>
      <StudentNavbar/>
      <HomeMiddleContainer/>
      <Footer/>
    </div>
  )
}

export default StudentHome
