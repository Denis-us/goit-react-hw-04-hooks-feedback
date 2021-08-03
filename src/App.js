import { useState } from "react";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Notification from "./components/Notification/Notification";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (option) => {
    switch (option) {
      case "good":
        setGood((prevGood) => prevGood + 1);
        break;
      case "neutral":
        setNeutral((prevNeutral) => prevNeutral + 1);
        break;
      case "bad":
        setBad((prevBad) => prevBad + 1);
        break;
      default:
        return;
    }
  };

  const positiveFeedbackPercentage = () => {
    const positiveFeedback = good;
    const negativeFeedback = neutral + bad;

    return (positiveFeedback / (positiveFeedback + negativeFeedback)) * 100;
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  return (
    <>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title={"Statistics"}>
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={positiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={"No feedback given"}></Notification>
        )}
      </Section>
    </>
  );
}
