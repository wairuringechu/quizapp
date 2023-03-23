import React from 'react';
import Navbar from './Navbar';
import './Questionanswer.css';

function Questionanswer() {
  return (
    <>
    <Navbar/>
  <div className='questionanswer'>
    <h1 className='Head'> Here are my Answers</h1>
    <div className="answers">
    <button type="answer"id='button'>answer</button>
      <button type="Comment"id='button'>comment</button>
      <button type="seecomment"id='button'>seecomment</button>
      </div>
      <div className="answers">
      <button type="answer"id='button'>answer</button>
      <button type="Comment"id='button'>comment</button>
      <button type="seecomment"id='button'>seecomment</button>
      </div>
    
  </div>
    </>
  
  );
}

export default Questionanswer;
