import React, { useState } from 'react';
import './Logins.css';
import Navbar from './Navbar';
import firebase from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

 
// Your Firebase project configuration object goes here
const firebaseConfig = {
  apiKey: "AIzaSyAtdvxGRR4kwlafv1q6ZICuBYcxDZb97qA",
  authDomain: "question-app-8b34f.firebaseapp.com",
  databaseURL: "https://question-app-8b34f-default-rtdb.firebaseio.com",
  projectId: "question-app-8b34f",
  storageBucket: "question-app-8b34f.appspot.com",
  messagingSenderId: "713070740790",
  appId: "1:713070740790:web:e3042569297d7a204e1f97",
};

firebase.initializeApp(firebaseConfig);

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handlelogin() {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User is authenticated, redirect to dashboard/home page
      })
      .catch((error) => {
        // Handle authentication error
        console.log(error.message);
      });
  }

  function handleRegister() {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User is created, redirect to dashboard/home page
      })
      .catch((error) => {
        // Handle user creation error
        console.log(error.message);
      });
  }

  return (
    <>
      <Navbar />
      <div className='details'>
        <div className='Account'>
          <h1>Login</h1>
          <input type="email" className="form-details" value={email} placeholder="Enter email address" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" className="form-details" value={password} placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
          <button className="btn1" onClick={handlelogin}>login</button>
          <p>Don't have an account? <button className="btn2" onClick={handleRegister}>Register</button></p>
        </div>
      </div>
    </>
  );
}

export default Login;
