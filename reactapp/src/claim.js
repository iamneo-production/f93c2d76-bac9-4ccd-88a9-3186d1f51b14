import React, { useState } from "react";
import "./claim.css";
import "./dashboard";  
import "./claimm";       
import {Link} from 'react-router-dom';

const Register = (props) => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(email);
  }

  return (
    <div className="wrap">
      
    <div className='container'>
      <>
      {/* <img id="loginimg" src="https://as2.ftcdn.net/v2/jpg/02/16/47/33/1000_F_216473351_FCLq1pZQOBFrgcyPBphKvBd8Z5wjD1dI.jpg"></img> */}
        <h1 id='header'>Claim Validations</h1>
        <form id='loginform'>
        
          <input type='text' value={name} onChange={(e)=>setEmail(e.target.value)}placeholder='ENTER YOUR USERNAME' id='email' name='email'/>
          <br></br>
          
          <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}placeholder='ENTER YOUR EMAIL' id='email' name='email'/>
          <br></br>
          
          <input type='password' value={pass} onChange={(e)=>setPass(e.target.value)} placeholder='ENTER YOUR MOBILE NUMBER' id='password' name='password'/>
          <br></br>

          <input type='number' onChange={(e)=>setPass(e.target.value)} placeholder='ENTER YOUR POLICY ID' id='mobile' name='mobile'/>
          <br></br>

          <input type='number' onChange={(e)=>setPass(e.target.value)} placeholder='ENTER YOUR VEHICLE REG NO' id='mobile' name='mobile'/>
          <br></br>

          <input type='number' onChange={(e)=>setPass(e.target.value)} placeholder='ENTER YOUR PASSWORD' id='mobile' name='mobile'/>
          <br></br>
          <Link to="/claimm"><button id='loginbtn' type='submit'>ASK CLAIM</button></Link>
        </form>
      </>
    </div>
    </div>

  )
}

export default Register