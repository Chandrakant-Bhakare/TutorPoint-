import React from 'react'
import Carousel from './Carousel'
import TeachersTable from './TeachersTable'
import NavBar from './NavBar'
import Footer from './Footer'

function Teachers() {
  
  return (
    <div className='row mt-1'>
      <NavBar/>
      {/* <div className='col-6'><Carousel/></div> */}
     
      <div className='col-12'><TeachersTable/></div>
      {/* <div className='col-1'></div> */}
      <Footer/>
  </div>
  )
}

export default Teachers
