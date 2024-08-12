import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

function Loader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center',  height: '100vh' }}>
    <RotatingLines
      visible={true}
      height="100"
      width="100"
      color="#ffffff" // Light white color in hex
      strokeWidth="3"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  </div>
  )
}

export default Loader
