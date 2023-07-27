import React from 'react'
import './payment.css';
import image from './imagee.png';
import {Link} from 'react-router-dom';
function payment() {
  return (
    <div>
      <div class="comp10">
       <br></br>
       <br></br>
      <center><h1>PAYMENT PROCESS</h1></center></div>
      <div class="report-body10">
                    <div class="box-container10"></div>
      <div class="box box8100">
                        <div class="text">
                          <center><h1 class="topic10"></h1></center>
                            <div class="comp1">
<center>
<p><b>Enter your vehical number:</b></p>
<p>Scan and pay</p>
<div class="input-box1">
                        <span class="icon"><i class='bx bxs-envelope'></i></span>
                        <input type="text" placeholder='Vehical no.' required/>
                    </div>
<img className="pic" src={image}/>

                    </center>

                    <br></br>
<div class="fine20">
      <Link to="/bill"><center><button onclick="window.location.href='https://pay.google.com/';">Generate Bill</button></center></Link>
      </div>
      </div>
      </div>
    </div></div>
    <div class="mine1">
      <Link to="/dashboard">
     <button>Back to Dashboard</button>
      </Link></div>
    </div>
  )
}

export default payment