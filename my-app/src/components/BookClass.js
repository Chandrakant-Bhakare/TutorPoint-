import React from 'react'
import StudentNavbar from './StudentNavbar'
import Footer from './Footer'
import TeachersTable from './TeachersTable'
import BookMyTeacherTable from './BookMyTeacherTable'

function BookClass() {
  return (
    <div>
        <StudentNavbar/>
        <BookMyTeacherTable/>
        <Footer/>
      
    </div>
  )
}

export default BookClass
