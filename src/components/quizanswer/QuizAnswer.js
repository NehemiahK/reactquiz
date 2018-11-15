import React from 'react';
import './quizanswer.css';

const QuizAnswer = (props) =>{
    return <div className='quiz-answer' onClick={()=>props.onClick(props.value)}>{props.answer}</div>;
}

export default QuizAnswer;