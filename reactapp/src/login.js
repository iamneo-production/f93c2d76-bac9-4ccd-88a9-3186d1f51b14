import React, { useState } from "react";
import "./login.css";
import "./dashboard";    
import axios from "axios"; 
import { useDispatch } from "react-redux";  
import { login } from "./redux/userSlice";
import {Link,useNavigate} from 'react-router-dom';
function Login() {
  const[username,setUsername]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleSubmit= async(e)=>{
      e.preventDefault();
      dispatch(
        login(
            {
                name:username
            }
        )
    )



      const formdata={
          email:email,
          password:password,
      };
      try{
          const response =await axios.post('http://127.0.0.1:8080/api/v1/auth/authenticate',{
            "name":username,
                "email":email,
                "password":password
            })

          
          .then((response)=>{
              console.log(response.data);
              localStorage.setItem('token',response.data.token);
              console.log(localStorage.getItem('token'));
          })
          alert("Login successful");
          navigate("/dashboard");
      }
      catch(error){
          alert("Invalid email and password");
      }
  }

  return (
    <div className="wrap">
      
    <div className='container'>
      <>
      {/* <img id="loginimg" src="https://as2.ftcdn.net/v2/jpg/02/16/47/33/1000_F_216473351_FCLq1pZQOBFrgcyPBphKvBd8Z5wjD1dI.jpg"></img> */}
        <h1 id='header'><span id='l' >L</span>ogin</h1>
        <form onSubmit={handleSubmit} id='loginform'>
        <label id='email' >Username</label>
          <br></br>
          <input type="username" name="username" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Username' required/>
          <br></br>
          <label id='email' >Email</label>
          <br></br>
          <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' required/>
          <br></br>
          <label >Password</label>
          <br></br>
          <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'required/>          <br></br>
          <div class="loggg"><button type='submit'>Log In</button></div>
          <br></br>
          <p id='o1'>Don't have an Account Already?</p>

          <Link to='/signup'>
        <button id='btn'>Register here</button>
          </Link>
        </form>
      </>
    </div>
    </div>

  )
}

export default Login