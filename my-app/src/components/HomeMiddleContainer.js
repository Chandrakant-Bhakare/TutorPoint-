import React from 'react'
import logo from './online_tutoring.jpg'
import NavBar from './NavBar'

function HomeMiddleContainer() {
 
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img
        src={logo}
        className="d-block mx-lg-auto img-fluid"
        alt="Bootstrap Themes"
        width={700}
        height={500}
        loading="lazy"
      />
    </div>
    
  </div>
</div>
</>

  
  )
}

export default HomeMiddleContainer
