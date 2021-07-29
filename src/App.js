import React, { Component } from "react";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Notification from "./components/Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (option) => {
    this.setState((prevState) => ({
      [option]: prevState[option] + 1,
    }));
  };

  totalFeedback = () => Object.values(this.state).reduce((a, b) => a + b);

  PositiveFeedbackPercentage = () => {
    const positiveFeedback = this.state.good;
    const negativeFeedback = this.state.neutral + this.state.bad;

    return (positiveFeedback / (positiveFeedback + negativeFeedback)) * 100;
  };

  render() {
    const countTotalFeedback = this.totalFeedback();
    const countPositiveFeedbackPercentage = this.PositiveFeedbackPercentage();

    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title={"Statistics"}>
          {countTotalFeedback < 1 ? (
            <Notification message={"No feedback given"}></Notification>
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
