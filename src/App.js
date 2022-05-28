// import React from 'react'
import Register from "./components/Register"
import Login from './components/Login'
import Verify from './components/Verify'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LandingPage from './components/LandingPage'
import WelcomeDashBoard from './components/WelcomeDashBoard'
import VerifyLogin from './components/VerifyLogin'

const App = () => {
  return (
    <div>
    <Router>
    <Routes>
    <Route exact path="/" element={<LandingPage/>}/>
    <Route path="/signup" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/verify" element={<Verify/>}/>
    <Route path="/verifylogin" element={<VerifyLogin/>}/>
    <Route path="/home" element={<WelcomeDashBoard/>}/>
 

    </Routes>
    </Router>
    

     </div>
  )
}

export default App