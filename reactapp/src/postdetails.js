import React, { useState } from 'react';
import './postdetails.css';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';

function ProfileUpdate() {
  
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [vehicleno, setvehicleno] = useState('');
  const [mobile, setmobile] = useState('');
  const [password, setpassword] = useState('');
  const [notification, setnotification] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const handleSubmit=async(e)=>{
    e.preventDefault();

    const formData={
   
      name:name,
      email:email,
      vehicleno:vehicleno,
      mobile:mobile,
      password:password,
    };
    const token=localStorage.getItem('token');
    if(!token){
      console.error('No JWT token found.');
      return;
    }
    try{
      const response=await axios.post('http://127.0.0.1:8080/post',formData,{
        headers:{
          Authorization:`Bearer ${token}`,
        }
  });
console.log(response.data);

setname('');
setemail('');
setvehicleno('');
setmobile('');
setpassword('');
window.alert("Data added sucessfully");
    }
    catch(error)
    {
      console.error(error);
    }
  };

  return (
    <div className='postform'>
      
      <div className="background"></div>
      <div className="container1">
        <div className="item10">
        </div>
        <div className="man">
          <center><div className="form-box login">
            <form onSubmit={handleSubmit}>
              <br></br>
              <h2>Enter Your Details</h2>
              
              <div className="input-box">
                <span className="icon"><i className='bx bxs-envelope'></i></span>
                <input type="text" name="name" placeholder='Name' value={name} onChange={(e)=>setname(e.target.value)} required />
              </div>
              <div className="input-box">
                <span className="icon"><i className='bx bxs-envelope'></i></span>
                <input type="text" name="email" placeholder='Email ID' value={email} onChange={(e)=>setemail(e.target.value)} required />
              </div>
              <div className="input-box">
                <span className="icon"><i className='bx bxs-envelope'></i></span>
                <input type="text" name="vehicleno" placeholder='Vehicle number' value={vehicleno} onChange={(e)=>setvehicleno(e.target.value)} required />
              </div>
              <div className="input-box">
                <span className="icon"><i className='bx bxs-lock-alt'></i></span>
                <input type="text" name="mobile" placeholder='Mobile' value={mobile} onChange={(e)=>setmobile(e.target.value)} required />
              </div>
              <div className="input-box">
                <span className="icon"><i className='bx bxs-lock-alt'></i></span>
                <input type="password" name="password" placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)} required />
              </div>

              <button type="submit" className="btn">Done</button>
            </form>
          </div></center>
        </div>
      </div>
      </div>
  );
}

export default ProfileUpdate;