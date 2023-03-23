import React, { useState } from 'react';
import Navbar from './Navbar';
import './Register.css'

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    function handleRegister() {
      // Register logic 
    }
    function handleLogin(){
        //Login logic
    }
  
    return (
      <>
      <Navbar/>
      <div className='details'>
        <div className='Account'>
          <h1>Create Account</h1>
          <input type="text" className="form-details" value={username} placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} />
          <input type="email" className="form-details" value={email} placeholder="Enter email address" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" className="form-details" value={password} placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
          <input type="password" className="form-details" value={confirmPassword} placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)} />
          <button className="btn1" onClick={handleRegister}>Register</button>
          <p>Already have an account? <button className="btn2" onClick={handleLogin}>Login</button></p>
        </div>
      </div>
      </>
    );
}
export  default Register;