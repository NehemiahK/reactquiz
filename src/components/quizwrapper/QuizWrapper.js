import React, { Component } from 'react';
import './quizwrapper.css';
import QuizQuestion from '../quizquestion/QuizQuestion';
import QuizAnswers from '../quizanswers/QuizAnswers';
import HouseResult from '../houseresult/HouseResult';

const answerKey = require('./../../data/answerkey');


class QuizWrapper extends Component {
    constructor(props){
        super(props);
        this.state={
            question:'',
            answers:[],
            usersAnswers:[],
            result:[]
        };
    }

    componentDidMount(){
        // console.log(answerKey.answerkey);
        this.setState({
            question:this.props.questionsAndAnswers.question,
            answers:this.props.questionsAndAnswers.answers,
            id:this.props.questionsAndAnswers.id,
        })
    };

    componentDidUpdate(prevProps,prevState){
        if(prevProps.questionsAndAnswers.question !== this.props.questionsAndAnswers.question){
            this.setState({
                question:this.props.questionsAndAnswers.question,
                answers:this.props.questionsAndAnswers.answers,
                id:this.props.questionsAndAnswers.id,
            }
        )
        }
        if (prevProps.endGame !== this.props.endGame){
            this.setState({endGame:true});
            this.calculateResults(this.state.usersAnswers);
        }
    }

    calculateResults = (usersAnswers) => {
        let answers ={};
        for(var i=0; i<usersAnswers.length;i++){
            let id = usersAnswers[i].id;
            let answer = usersAnswers[i].answer;
            let obj = answerKey.answerkey[id];
            let results = obj[answer];

            if(i==0){
                answers = results; 
            }
            else{
                for (let result in results){
                    answers[result] += results[result]
                }
            }
        }
        this.determineResult(answers);
    }
 
    determineResult = (answers) =>{
        let house;
        let max=0;
        for (let answer in answers){
            if (answers[answer] >= max){
                max = answers[answer]
                house = answer;
            }
            
        }
        this.setState({
            result:house
        });
    }
    
    handleClick = (val) =>{      
            this.setState({
                usersAnswers: [...this.state.usersAnswers, {id:this.state.id, answer:val}] 
            })
        
        this.props.incQuestion();
    } 

  render() {
    return (
      <div className="quiz-wrapper">
          {/* <h2>The ______ Quiz</h2> */}
          <div className='sorting-hat'><img src="https://mbtskoudsalg.com/images/sorting-hat-png-1.png" height="200" /></div>
          {
              !this.state.endGame && <div>Question {this.props.questionNumber + 1} / {this.props.numberOfQuestions} </div>
          }
          {
              !this.state.endGame &&  <QuizQuestion question={this.state.question}/>
         
          }
          {
              !this.state.endGame &&  <QuizAnswers answers={this.state.answers} onClick={this.handleClick}/>
          }
          {
              this.state.endGame && <HouseResult house={this.state.result}/>
          }
         
      </div>
    );
  }
}

export default QuizWrapper;
