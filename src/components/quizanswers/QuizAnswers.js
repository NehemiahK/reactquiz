import React from 'react';
import './quizanswers.css';
import QuizAnswer from '../quizanswer/QuizAnswer';

const QuizAnswers = (props) =>{
    
    return <div className="quiz-answers">
      {Object.entries(props.answers).map(([key, value]) => {
        return <QuizAnswer answer={value} key={key+value} onClick={props.onClick} value={key}/>
     })
     }
    </div>;
}

export default QuizAnswers;