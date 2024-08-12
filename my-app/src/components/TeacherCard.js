import React from 'react'

function TeacherCard(props) {
  return (
    props.teachers.map((teacher)=>{
        return(
            <tr>
                <td>{teacher.name}</td>
                <td>{teacher.subject}</td>
                <td>{teacher.exp}</td>
                <td>{teacher.rating}</td>
            </tr>
        )
    })
  )
}

export default TeacherCard

