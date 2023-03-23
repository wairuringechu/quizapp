import React from 'react'
import './Home.css'
import Navhome from './Navhome'

function Home() {
  return (
    <>
    <Navhome/>
     <div className='Home-container'>
      <div className='home'>
          <p>WELCOME TO MY QUESTION APP<span>FREE TO ASK, ANSWER AND COMMENT<span>ON ANY QUESTION!!</span></span></p>
          <img src="https://www.shutterstock.com/image-illustration/question-mark-sign-interrogation-point-260nw-672498976.jpg" alt="question mark" />
          <img src="https://cdn-icons-png.flaticon.com/512/5194/5194713.png" alt="quiz icon" />
      </div>
    </div>
    </>
  )
}

export default Home