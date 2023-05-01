import React from 'react'
import css from './Feedback.module.scss'
import { Component } from 'react'

class Feedback extends Component {

    constructor() {
        super();
    
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        };
    }

    addGoodFeedback = () => {
        this.setState(prevState => {
            return (
                {good: prevState.good + 1}
                )
            }
        )
    }
        
    addNeutralFeedback = () => {
        this.setState(prevState => {
            return (
                {neutral: prevState.neutral + 1}
                )
            }
        )
    }

    addBadfeedback = () => {
        this.setState(prevState => {
            return (
                {bad: prevState.bad + 1}
                )
            }
        )
    }

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    }

    countPositiveFeedbackPercentage = () => {
        if (this.state.good + this.state.neutral + this.state.bad === 0) {
            return 0;
        }
        return Math.round(this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100);
    }
    
    render = () => {
        const { good, neutral, bad } = this.state;
        return (
            <div className={css.feedback}>
            <h1 className={css.pageTitle}>Caffee "Expresso"</h1>
            <h2 className={css.title}>Please leave feedback</h2>
            <div className={css.buttonThumb}>
                <button className={css.button} type="button" onClick={this.addGoodFeedback} >Good</button>
                <button className={css.button} type="button" onClick={this.addNeutralFeedback}>Neutral</button>
                <button className={css.button} type="button" onClick={this.addBadfeedback} >Bad</button>
            </div>
            <h2 className={css.title}>Statistics</h2>
            <div className={css.statThumb}>
                <p className={css.message}>Good: {good}</p>
                <p className={css.message}>Neutral: {neutral}</p>
                <p className={css.message}>Bad: {bad}</p>
                <p className={css.message}>Total: {this.countTotalFeedback()}</p>
                <p className={css.message}>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>

            </div>
        </div>
        )
        
    }
}

export default Feedback