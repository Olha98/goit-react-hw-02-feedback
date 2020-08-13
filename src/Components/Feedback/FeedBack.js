import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';

export default class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total:0,
        positiveFeedback:0,
    }
    changeState = (name) => {
        this.setState(prevState => ({ [name]: prevState[name] + 1 }))
    }

    totalSum=()=>{
     return this.state.total = this.state.good + this.state.neutral + this.state.bad
    }


    positiveFeedback=()=>{
      const { good, neutral, bad } = this.state;
      return Number((good / (bad + good + neutral)) * 100);
      
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

