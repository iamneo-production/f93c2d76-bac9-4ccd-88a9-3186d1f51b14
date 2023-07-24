import React from 'react'
import Login from './login';
import Home from './home';
import Dashboard from './dashboard';
import Policy from './policy';
import Claim from './claim';
import Claimm from './claimm';
import About from'./about';
import Premium from'./premium';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Register from './register';
import Payment from './payment';
import Renewal from './renewal';
import Postdetails from './postdetails';

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/Login"element={<Login/>}/>
      <Route path="/SignUp"element={<Register/>}/>
      <Route path="/Dashboard"element={<Dashboard/>}/>
      <Route path="/Policy"element={<Policy/>}/>
      <Route path="/Claim"element={<Claim/>}/>
      <Route path="/Claimm"element={<Claimm/>}/>
      <Route path="/About"element={<About/>}/>
      <Route path="/premium"element={<Premium/>}/>
      <Route path="/payment"element={<Payment/>}/>
      <Route path="/renewal"element={<Renewal/>}/>
      <Route path="/postdetails"element={<Postdetails/>}/>
    </Routes>
  </Router>
  )
}

export default App