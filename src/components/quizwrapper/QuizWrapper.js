import React, { Component } from 'react';
import './quizwrapper.css';
import QuizQuestion from '../quizquestion/QuizQuestion';
import QuizAnswers from '../quizanswers/QuizAnswers';


class QuizWrapper extends Component {
    constructor(props){
        super(props);
        this.state={
            question:'',
            answers:[],
            usersAnswers:[]
        };
    }

    componentDidMount(){
        this.setState({
            question:this.props.questionsAndAnswers.question,
            answers:this.props.questionsAndAnswers.answers,
            id:this.props.questionsAndAnswers.id,
        })
    };

    handleClick = (val) =>{
        console.log(val);
    } 

  render() {
    return (
      <div className="quiz-wrapper">
          <h2>The ______ Quiz</h2>
          <QuizQuestion question={this.state.question}/>
          <QuizAnswers answers={this.state.answers} onClick={this.handleClick}/>
      </div>
    );
  }
}

export default QuizWrapper;
