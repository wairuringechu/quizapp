import React from 'react'
import Navbar from './Navbar';
import './Profile.css'

function Profile() {
  return (
    <>
    <Navbar/>
    <div className='Container'>
    <p> QUESTIONS <span> ANSWERS </span> & <span> COMMENTS </span></p>
      <div className="profile">
        <button type="view" id='view'>view all</button>
      </div>
    </div>
    </>
  )
}

export default Profile;