import React from 'react';
import './quizanswers.css';
import QuizAnswer from '../quizanswer/QuizAnswer';

const QuizAnswers = (props) =>{
    return <div className="quiz-answers">
      {
          props.answers.map((answer) => 
          <QuizAnswer answer={answer.option} key={answer.option} onClick={props.onClick} value={answer.value}/>)
      }
    </div>;
}

export default QuizAnswers;