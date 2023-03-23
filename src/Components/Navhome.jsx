import { Link } from "react-router-dom";
import React from 'react'
import './Navhome.css'

function Navhome() {
  return (
    <div className="Navhome">
        <nav>
            <ul className="link">
              <li><Link to="/">Home</Link></li>
              <li><Link to ="/Register">Register</Link></li>
              <li><Link to="/Logins">Logins</Link></li>
              </ul>
        </nav>
    </div>
  )
  }
export default Navhome