import React, { useState } from "react";
import axios from "axios";
import "./login";
import { Link } from 'react-router-dom';

function ProfileUpdate() {
  
  const [formData, setFormData] = useState({
    vehicle_no: '',
    name: '',
    email: '',
    mobile: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/v1/auth/register', formData)
      .then((response) => {
        // Handle successful registration here, e.g., show success message or redirect to dashboard
        console.log('Registration successful:', response.data);
      })
      .catch((error) => {
        // Handle registration error here, e.g., show error message
        console.error('Registration error:', error);
      });
  };
  return (
    <div className="wrap">
      <div className='container'>
        <>
          <h1 id='header'><span id='l' >R</span>egister</h1>
          <form id='loginform' onSubmit={handleSubmit}>
          <input
                  type="text"
                  placeholder='Name'
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
            <br />
            <input
                  type="text"
                  placeholder='Email'
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
            <br />
            <input
                  type="text"
                  placeholder='Mobile'
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
            <br />
            <input
                  type="text"
                  placeholder='Vehicle_no'
                  name="vehicle_no"
                  value={formData.vehicle_no}
                  onChange={handleChange}
                  required
                />
            <br />
            <input
                  type="password"
                  placeholder='Password'
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
            <br />
            {/* Since we're using a form, the button type should be "submit" */}
           <div class="buttoo"> <button type='submit'>Signup</button></div>
           
         <div class="buutt"> <Link to="/login"> <button type='submit'>Login here</button></Link></div>

          </form>
        </>
      </div>
    </div>
  )
}

export default ProfileUpdate;
