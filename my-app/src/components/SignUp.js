import React from 'react'
import NavBar from './NavBar';
import axios from 'axios';
import { Radio } from '@mui/material';

export function SignUp() {
    const sendDataToServer=async(objToSend)=>{
        try{
        const response=await axios.post(`http://localhost:6900/students`,objToSend);
        console.log(objToSend);
        console.log(response.status);
        // localStorage.setItem('email',objToSend.email);
        // localStorage.setItem('password',objToSend.password);
        // navigate('/signin');
        
        }
        catch(error){
          console.log(error);
         console.log('error has occured');
        }
        

    }
    const validateData=(objToValidate)=>{
        let isValid=true;
        const firstname=objToValidate.firstname;
        const lastname=objToValidate.lastname;
        const email=objToValidate.email;
        const password=objToValidate.password;
        const nameRegex=/^[A-Za-z]{5,}$/;
        const emailRegex=/^[\w-]+(?:\.[\w-]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*(?:\.[a-zA-Z]{2,})$/;
        const passwordRegex=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(!nameRegex.test(firstname) || !nameRegex.test(lastname)){
            isValid=false;
            console.log('yes');
        }
        if(!emailRegex.test(email)){
            isValid=false;
            alert("Enter Valid Email")
        }
        if(!passwordRegex.test(password)){
            isValid=false;
            alert("password should contain alphabets numbers and characters")
        }
        if(isValid){
            return true;
        }
        }
    const submitData=(e)=>{
        e.preventDefault();
        const firstname = e.target.elements.firstname.value;
        const lastname=e.target.elements.lastname.value;
        const email=e.target.elements.email.value;
        const password=e.target.elements.password.value;
        const objToValidate={
            firstname:firstname,
            lastname:lastname,
            email:email,
            password:password
        }
    if(validateData(objToValidate)){
        sendDataToServer(objToValidate);
        console.log('data submitted');
        alert("Student Registration Successful");
            }
    else{
        console.log('error');
    }
    }
  return (
    <>
    <NavBar/>
    <div className="row align-items-center g-lg-5 py-5">
    <div className="col-md-7 mx-auto col-lg-4">
    
      <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={submitData}>
      <h5 className='center mb-5 '>Student Registration Portal</h5>
      <div className="form-floating mb-3">
     
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="firstname" name='firstname'
          />
          <label htmlFor="floatingInput">FirstName</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="lastname" name='lastname'
          />
          <label htmlFor="floatingInput">LastName</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com" name='email'
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password" name='password'
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
       <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign up
        </button>
        <hr className="my-4" />
        <small className="text-body-secondary">
          <Radio></Radio>By clicking Sign up, you agree to the terms of use.
        </small>
        <a href='/signin'>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
        </a>
        
      </form>
    </div>
  </div>
  </>
  
  )
}

