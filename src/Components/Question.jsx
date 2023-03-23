import React,{useState} from 'react';
import Navbar from './Navbar';
import './Question.css';

function Question() {
  const [Question, setQuestion] = useState('');

  return (
    <>
    <Navbar/>
    <div className='question'>
      <div className='quiz'>
        <p>QUESTIONS</p>
        <input type="question" value="ask a question"onChange={(event) => setQuestion(event.target.value)} /> 
        {/* <input type="question" name="question1" onChange={(event) => setQuestion(event.target.value)} /> */}
      </div>
      <div className='btns'>
      <button type="answer"id='answer'>answer</button>
        <button type="submit"id='submit'>submitbtn</button>
        <button type="delete"id='delete'>deletebtn</button>
        <button type="edit"id='edit'>editbtn</button>
      </div>
      <div className='addquestion'>
      <button type="answer"id='answer'>answer</button>
        <button type="submit"id='submit'>submitbtn</button>
        <button type="delete"id='delete'>deletebtn</button>
        <button type="edit"id='edit'>editbtn</button>
      </div>
    </div>
    </>
  );
}

export default Question;
