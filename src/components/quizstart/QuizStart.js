import React from 'react';
import './quizstart.css';

const QuizStart = (props) => {
    return <div className='quiz-start'>
        <div className="message-wrapper">
            <div className="message-content">
                <button onClick={props.onClick} className="close-button">X</button>
                <p>I've done this job for centuries</p>
                <p>On every student's head I've sat</p>
                <p>Of thoughts I take inventories</p>
                <p>For I'm the famous Sorting Hat.</p>
                <p>- Questions taken from Pottermore</p>
                <p>- Point values taken from Reddit</p>
            </div>
        </div>
    </div>
}

export default QuizStart;