// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';

class App extends Component {
 state = {
  good: 0,
  neutral: 0,
   bad: 0,
 }

  onClickBtnGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1
    }))
  }
  
   onClickBtnNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1
    }))
   }
   onClickBtnBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1
    }))
   }
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
   countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {

    return (
      <>
         <section>
          <h1>Please leave feedback</h1>
          <div>
            <button onClick={this.onClickBtnGood}>good</button>
            <button onClick={this.onClickBtnNeutral}>neutral</button>
           <button onClick={this.onClickBtnBad}>bad</button>
          </div>
          <h2>Statistis</h2>
          <ul>
            <li>good: {this.state.good}</li>
            <li>neutral: {this.state.neutral}</li>
            <li>bad: {this.state.bad}</li>
          </ul>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
           
      </section>
      </>
    )
  }
}

export default App;
