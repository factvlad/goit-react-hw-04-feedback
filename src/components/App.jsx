import { useState } from "react";
import { Section, Statistics, Notification, FeedbackOptions } from 'components';
import style from "./Feedback.module.scss"

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const leaveVote = props => {
    setState({ ...state, [props]: state[props] + 1 });
  };


  const { good, neutral, bad } = state;
  const options = Object.keys(state);

  const total = good + neutral + bad;
  const countPercentage = () => {
    if (!total) {
      return 0;
    }
    const result = (good / total) * 100;
    return Number(result.toFixed(2));
  };

  const positivePercentage = countPercentage();


  return (
    <div className={ style.container }>
      <Section title="Please Leave FeedBack" >
        <FeedbackOptions
          leaveVote={ leaveVote }
          options={ options } />
      </Section>
      <Section title="Statistics">
        { total > 0 ? (
          <Statistics
            good={ good }
            neutral={ neutral }
            bad={ bad }
            total={ total }
            positivePercentage={ positivePercentage }
          />
        ) : (
          <Notification message="There is no feedback" />
        ) }
      </Section>
    </div>
  );
}

export default App;
