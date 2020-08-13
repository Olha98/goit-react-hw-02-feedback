import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';

export default class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total:0,
        positiveFeedback:0,
        num: 0.1
    }
    changeState = (name) => {
        this.setState(prevState => ({ [name]: prevState[name] + 1 }))
    }

    totalSum=()=>{
     return this.state.total = this.state.good + this.state.neutral + this.state.bad
    }

    negativeSum=()=>{
    return this.state.neutral + this.state.bad 
    }

    positiveFeedback=()=>{
      
      if(this.totalSum() > 0){
        return (this.totalSum() - this.negativeSum()) / this.state.num
      } else{
        return '0'
      }
    }



    render() {
        return (
            <>
                  <h1>Please leave feedback</h1>
                <button type="button" onClick={()=>this.changeState('good')} name="good">Good</button>
                <button type="button" onClick={()=>this.changeState('neutral')} name="neutral">Neutral</button>
                <button type="button" onClick={()=>this.changeState('bad')} name="bad">Bad</button>
                <h2>Statistics</h2>
                {(this.totalSum() > 0)&&<Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.totalSum()} positivePercentage={this.positiveFeedback()}/>}
                
           </>
        );
    }
}

