import React from 'react'
import StudentsTable from './StudentsTable'
import Footer from './Footer'
import NavBar from './NavBar'

function Students() {
  return (
    <>
    <NavBar/>
    <div className='row mt-1'>
        <div className='col-12'><StudentsTable/></div>
        <Footer/></div></>
  )
}

export default Students
