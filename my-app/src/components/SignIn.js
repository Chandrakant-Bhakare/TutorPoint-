import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignIn() {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const navigate=useNavigate();
  const sendDataToServer=async(objToSend)=>{
      try{
      const response=await axios.post(`http://localhost:6900/students/signin`,objToSend);
      console.log(response.status);
      console.log(response.data.message[0].sid);
      const id=response.data.message[0].sid;
      console.log(id);
      localStorage.setItem('id',id);
      localStorage.setItem('email',objToSend.email);
      localStorage.setItem('password',objToSend.password);
      navigate('/studenthome');
      
      }
      catch(error){
       console.log('error has occured');
        }
      

  }
  const validateData=(objToValidate)=>{
    let isValid=true;
     const email=objToValidate.email;
    const password=objToValidate.password;
    const emailRegex=/^[\w-]+(?:\.[\w-]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*(?:\.[a-zA-Z]{2,})$/;
    const passwordRegex=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!emailRegex.test(email)){
        isValid=false;
    }
    if(!passwordRegex.test(password)){
        isValid=false;
    }
    if(isValid){
        return true;
    }
    }
  const submitData=(e)=>{
    e.preventDefault();
    const email=e.target.elements.email.value;
    const password=e.target.elements.password.value;
    const objToValidate={
        email:email,
        password:password
    }
if(validateData(objToValidate)){
    sendDataToServer(objToValidate);
    console.log('data submitted');
    alert("Login Successful")
}
else{
    console.log('error');
    alert("Invalid Password or UserName")
}
}
  return (
    <>

    <NavBar/>
    
    <div className="row align-items-center g-lg-5 py-5">
    <div className="col-md-7 mx-auto col-lg-3">
      <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={submitData}>
      <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control" onChange={(e)=>{setEmail(e.target.value)}}
            id="floatingInput" 
            placeholder="name@example.com" name='email' value={localStorage.getItem('email')!=null?localStorage.getItem('email'):email}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password" onChange={(e)=>{setPassword(e.target.value)}}
            className="form-control"
            id="floatingPassword"
            placeholder="Password" name='password' value={localStorage.getItem('password')!=null?localStorage.getItem('password'):password}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
       <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign In
        </button>
        <hr className="my-4" />
        </form>
    </div>
  </div>
  </>

  )
}

export default SignIn
