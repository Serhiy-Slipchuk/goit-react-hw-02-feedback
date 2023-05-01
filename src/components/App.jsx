import Section from "./Section/Section";
import { Component } from "react";

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
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

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Section
          title="Caffee 'Expresso'"

          statistics={{
              good: this.state.good,
              neutral: this.state.neutral,
              bad: this.state.bad,
              total: this.countTotalFeedback,
              positivePercentage: this.countPositiveFeedbackPercentage
          }}

          options={{
              leaveGoodFeedback: this.addGoodFeedback,
              leaveNeutralFeedback: this.addNeutralFeedback,
              leaveBadFeedback: this.addBadfeedback
          }}
        />
      </div>
    )
  }
}