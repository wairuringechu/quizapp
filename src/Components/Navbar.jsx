import { Link } from "react-router-dom";
import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className="Navbar">
        <nav>
            <ul className="link">
              <li><Link to="/">Home</Link></li>
              <li><Link to ="/Register">Register</Link></li>
              <li><Link to="/Logins">Logins</Link></li>
              <li><Link to="/Questions">Questions</Link></li>
              <li><Link to="/Questionanswer">Questionanswer</Link></li>
              <li><Link to="/Profile">Profile</Link></li>
            </ul>
        </nav>
    </div>
  )
  }
export default Navbar