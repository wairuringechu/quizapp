import React from 'react';
import Logins from './Components/Logins';
import Register from './Components/Register';
import Questionanswer from './Components/Questionanswer';
import Profile from './Components/Profile';
import Home from './Components/Home';
import Question from'./Components/Question'
import {   Routes, Route } from 'react-router-dom';

function App() {
  return (
  <> 
  
  
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/Logins" element={<Logins />} />
    <Route path="/Profile" element={<Profile />} />
    {/* <Route path="/Navbar" element={<Navbar />} /> */}
    <Route path="/Questionanswer"element={<Questionanswer/>}/>
    <Route path="/Questions"element={<Question/>}/>
    
  </Routes>
  </>
   
    
  );
}

export default App;
