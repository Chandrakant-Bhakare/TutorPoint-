import React,{useEffect}from 'react'
import HomeMiddleContainer from './HomeMiddleContainer'
import Footer from './Footer'
import NavBar from './NavBar'


function Home() {
  useEffect(()=>{
    const clearData=async()=>{
      localStorage.clear();
      }
      clearData();

  },[])
  return (
    <>
    <NavBar></NavBar>
    <div>
    
      <HomeMiddleContainer />
      <Footer />
    </div>
    </>

  )
}

export default Home
