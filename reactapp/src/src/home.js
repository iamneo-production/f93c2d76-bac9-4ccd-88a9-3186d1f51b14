import React from 'react'
import './home.css';
import './login';
import './dashboard';
import './about';
import {Link} from 'react-router-dom';
import img1 from './assets/img1.jpg'; 
import img2 from './assets/img2.jpg';

function logins() {
  return (
    <div>
  <header class="header">
    <a href="#" class="logo">SafeWheels</a>
    <nav class="nav-items">
      <Link to="/login"><a className='shy'>Login</a></Link>
      <Link to="/about"><a >About</a></Link>
      <a href="#" className='shy'>Contact-<b>1800 2666</b></a> 
    </nav>
  </header>
  <main>
    <div class="intro">
      <h1>Automobile Insurance</h1>
      <p></p>
      <Link to='/signup'>
      <button>Register</button>
      </Link>
    </div>
    
      <div>
        -<img src={img1} className='image'></img>
        <img src={img2} className='image'></img>
      </div>  
     <center> <h3> All Your Protection Under One Proof </h3></center>
    
    
    <div class="about-me">
      
      
    </div>
    </main>
  
  </div>
)
}

export default logins