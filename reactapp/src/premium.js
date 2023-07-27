import React from 'react'
import './premium.css';
import './dashboard';
import {Link} from 'react-router-dom';
function policycomp() {
  return (
    <div>
      
      <div class="comp1">
        <br></br>
      <center><h2>CAR INSURANCE PREMIUM PLANS</h2></center></div>
      <div class="report-body1">
                    <div class="box-container1"></div>
      <div class="box box81">
                        <div class="text">
                      
                            <center><h1 class="topic1">Third-party liability premium </h1></center>
                            <div class="comp1">

<br></br>
<center>
<p>This is stipulated by the Insurance Regulatory and Development Authority of India (IRDAI), and it is directly proportional to your car’s cubic capacity.</p>
</center>
<br></br>
</div>

                            <Link to="/payment"><div class="fine2">
      
<center><button onclick="window.location.href='https://pay.google.com/';">Buy this Plan</button></center>
      </div></Link>
                        </div>
                    </div>
    
                    <div class="box box82">
                        <div class="text">
                      <center><h1 class="topic1">Own damage premium</h1></center>
                      <div class="comp2">
<br></br>
<center>
<p>this is calculated as IDV X [Tariff Rate] – [Discounts] + Add On Covers</p>

</center>
</div>
<Link to="/payment"><div class="fine2">
      <center><button onclick="window.location.href='https://pay.google.com/';">Buy this Plan</button></center>
      </div></Link>
      </div>
          </div>
          <div class="box box83">
                        <div class="text">
                      <center><h1 class="topic1">Personal accident cover premium</h1></center>
                      <div class="comp3">
<br></br>
<center>
<p>Personal accident cover premium + Additional covers</p>
</center>
</div>
<Link to="/payment"><div class="fine2">
      <center><button onclick="window.location.href='https://pay.google.com/';">Buy this Plan</button></center>
      </div></Link>
      </div>
          </div>
        </div>
        <br></br> <br></br>     
        <h2>How can you save on your car insurance premium?</h2>
        <br></br>
        <p>No matter what type of car you drive, certain discounts can bring down your car insurance price.</p>
        <br></br>
        <p><b>No Claim Bonus</b></p>
        <p>If you made no claims in the past years, you get up to 50% NCB.</p>
        <br></br>
        <p><b>Security measures</b></p>
        <p>If you’ve taken special measures to keep your car from getting stolen, you are eligible for a discount on your car insurance premium. Typically, you would receive a 2.5% discount for fitting an anti-theft device (approved by ARAI) on your car.

It is unwise to reduce IDV to save on premium. In case of an accident, you would find yourself at a disadvantage. Instead, ride safe and take security measures to get discounts on car insurance.</p>
      <div class="fine">
      <Link to="/dashboard">
      <button>Back to Dashboard</button>
      </Link></div>
    </div>
  )
}

export default policycomp