import React, { Component } from 'react';
import Modal from 'react-modal';
import logo from './logo.svg';
import './App.css';
import QuizWrapper from './components/quizwrapper/QuizWrapper';
import QuizStart from './components/quizstart/QuizStart';

const questionsandanswers = require('../src/data/choices.js');

class App extends Component {
    constructor(props){
      super(props);
      this.state={
        questionsAndAnswers:[],
        question:0,
        endGame:false,
        quizStarted:true
      };
    }
    componentDidMount(){
      this.setState({
        questionsAndAnswers:questionsandanswers.choices,
        mounted:true
      });
    }

    incQuestion = () =>{ 
      if(this.state.questionsAndAnswers.length > this.state.question+1){
        this.setState({
          question:this.state.question + 1
        })
      }
      else{
        this.setState({
          endGame:true
      })
    }
   
    }

    handleCloseModal = () =>{
      this.setState({
        quizStarted:false
      })
    }
  
  render() {
    return (
      <div className="App">

        {
          this.state.quizStarted && <QuizStart onClick={this.handleCloseModal}/>
        }

        { this.state.mounted &&
          <QuizWrapper questionsAndAnswers={this.state.questionsAndAnswers[this.state.question]} incQuestion={this.incQuestion} endGame={this.state.endGame} 
          numberOfQuestions={this.state.questionsAndAnswers.length} questionNumber={this.state.question}/>
          }
      </div>
    );
  }
}

export default App;
