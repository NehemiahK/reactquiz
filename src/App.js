import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuizWrapper from './components/quizwrapper/QuizWrapper';

class App extends Component {
    constructor(props){
      super(props);
      this.state={
        questionsAndAnswers:[
          {
            id:1,
            question:'how old are you',
            answers:[
              {option:'26',value:'a'},
              {option:'24',value:'b'},
              {option:'23',value:'c'},
              {option:'22',value:'d'}
            ]
          }
        ],
        question:0
      };
    }
  render() {
    return (
      <div className="App">
        <QuizWrapper questionsAndAnswers={this.state.questionsAndAnswers[this.state.question]}/>
      </div>
    );
  }
}

export default App;
