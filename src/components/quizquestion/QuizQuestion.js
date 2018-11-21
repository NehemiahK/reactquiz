import React from 'react';
import './quizquestion.css';

const QuizQuestion = (props) => {
    return <div className='quiz-question'>{props.question}</div>
}

export default QuizQuestion;