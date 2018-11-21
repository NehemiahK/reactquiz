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
        quizStarted:false,
        modalOpen:true
      };
    }
    componentDidMount(){
      let qa = this.shuffle(questionsandanswers.choices);
      qa = qa.slice(0,8);
      this.setState({
        questionsAndAnswers:qa,
        mounted:true
      });
    }

     shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
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
        quizStarted:true,
        modalOpen:false
      })
    }
  
  render() {
    return (
      <div className="App">

        {
          (this.state.mounted && this.state.modalOpen) && <QuizStart onClick={this.handleCloseModal}/>
        }

        { this.state.quizStarted && 
          <QuizWrapper questionsAndAnswers={this.state.questionsAndAnswers[this.state.question]} incQuestion={this.incQuestion} endGame={this.state.endGame} 
          numberOfQuestions={this.state.questionsAndAnswers.length} questionNumber={this.state.question}/>
          }
      </div>
    );
  }
}

export default App;
