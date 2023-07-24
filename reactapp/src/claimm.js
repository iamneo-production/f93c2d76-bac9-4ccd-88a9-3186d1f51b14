import React from 'react'
import './claimm.css';
import './dashboard';
import './claim';
import {Link} from 'react-router-dom';
function claimm() {
  return (
    <div>
        <br></br>
        <br></br>
      <div class="valid">
        <center><p>Your claim will be processes after verification and validation.</p></center>
      </div>
      <div class="mine01">
      <Link to="/dashboard">
      <button>Back to Dashboard</button>
      </Link></div>
    </div>
  )
}

export default claimm