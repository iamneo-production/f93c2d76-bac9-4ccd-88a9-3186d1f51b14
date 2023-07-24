import React from 'react'
import './board.css';
import './dash.css';
import './policy';
import './home';
import './claim';
import './premium';
import './postdetails';
import {Link} from 'react-router-dom';
function dashboard() {
  return (
    <div>
        <header>
    
            <div class="logosec">
                <div class="logo">Safewheels</div>
               
            </div>
            <a href="#" className='shy'>Contact-<b>1800 2666</b></a> 
            
        </header>
        <div class="main-container">
            <div class="navcontainer">
                <nav class="nav">
                    <div class="nav-upper-options">
                        <div class="nav-option option1">
                            <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
                                class="nav-img"
                                alt="dashboard"></img>
                            <h3> Dashboard</h3>
                        </div>
    
                        
    <Link to="/premium">
                        <div class="nav-option option3">
                            <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
                                class="nav-img"
                                alt="report"></img>
                            <h3> Premium</h3>
                        </div></Link>
    <Link to="/policy">
                        <div class="nav-option option4">
                            <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/6.png"
                                class="nav-img"
                                alt="institution"></img>
                            <h3> Policy Coverage</h3>
                        </div></Link>
    <Link to="/claim">
                        <div class="nav-option option5">
                            <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
                                class="nav-img"
                                alt="blog"></img>
                            <h3>Claim Processing</h3>
                        </div></Link>
    
                        <div class="nav-option option6">
                            <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/4.png"
                                class="nav-img"
                                alt="settings"></img>
                         <Link to="/renewal">  <h3>Renew Policy</h3></Link> 
                        </div>
                        <Link to="/postdetails">
                        <div class="nav-option option3">
                            <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
                                class="nav-img"
                                alt="report"></img>
                            <h3> Postdetails</h3>
                        </div></Link>
    <Link to="/">
                        <div class="nav-option logout">
                            <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
                                class="nav-img"
                                alt="logout"></img>
         
                            <h3>Logout</h3>
                        </div></Link>
    
                    </div>
                </nav>
            </div>
            <div class="main">
    
                <div class="searchbar2">
                    <input type="text"
                        name=""
                        id=""
                        placeholder="Search"></input>
                    <div class="searchbtn">
                    <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
                            class="icn srchicn"
                            alt="search-button"></img>
                    </div>
                </div>
    
                <div class="box-container">
    
                    <div class="box box1">
                        <div class="text">
                            <h2 class="topic-heading">5 Lakh+</h2>
                            <h2 class="topic">Policies Sold</h2>
                        </div>
    
                        <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(31).png"
                            alt="Views"></img>
                    </div>
    
                    <div class="box box2">
                        <div class="text">
                            <h2 class="topic-heading">50 plus</h2>
                            <h2 class="topic">Insurance Partners</h2>
                        </div>
    
                        <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210185030/14.png"
                            alt="likes"></img>
                    </div>
    
                    <div class="box box3">
                        <div class="text">
                            <h2 class="topic-heading">3 million</h2>
                            <h2 class="topic">Registered Customers</h2>
                        </div>
    
                        <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(32).png"
                            alt="comments"></img>
                    </div>
    
                    <div class="box box4">
                        <div class="text">
                            <h2 class="topic-heading">100k+</h2>
                            <h2 class="topic">Vehicle Insured</h2>
                        </div>
    
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185029/13.png" alt="published"></img>
                    </div>
                </div>
    
                <div class="report-container">
                    <div class="report-header">
                        <h1 class="recent-Articles">Key Features By SafeWheels</h1>
                      
                    </div>
    
                    <div class="report-body">
                        <div class="report-topic-heading">
                            <h3 class="t-op">Features</h3>
                            <h3 class="t-op">Benefits</h3>
                            <h3 class="t-op">Type</h3>
        
                        </div>
    
                        <div class="items">
                            <div class="item1">
                                <h3 class="t-op-nextlvl">Savings & affortable</h3>
                                <h3 class="t-op-nextlvl">Save upto 75% By Online Policy</h3>
                                <h3 class="t-op-nextlvl">Four-wheeler</h3>
                          
                            </div>
    
                            <div class="item1">
                                <h3 class="t-op-nextlvl">Claims  Assistance</h3>
                                <h3 class="t-op-nextlvl">650 Claim Experts Across India</h3>
                                <h3 class="t-op-nextlvl">  Four-wheeler</h3>
                            
                            </div>
    
                            <div class="item1">
                                <h3 class="t-op-nextlvl">Cashless  Repairss</h3>
                                <h3 class="t-op-nextlvl">Network of Over 7500 Garages</h3>
                                <h3 class="t-op-nextlvl">  Four-wheeler</h3>
                                
                            </div>
    
                            <div class="item1">
                                <h3 class="t-op-nextlvl">Damages to 3rd Party</h3>
                                <h3 class="t-op-nextlvl">Third Party Property are Covered</h3>
                                <h3 class="t-op-nextlvl">Four-wheeler</h3>
                              
                            </div>
    
                            
    
                            
    
                            
    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default dashboard