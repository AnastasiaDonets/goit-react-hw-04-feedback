import { useState } from 'react';
import { Statistics } from './Feedback/Statictics/Statistics';
import { Section } from './Feedback/Section/Section';
import { FeedbackOptions } from './Feedback/FeedbackOptions/FeedbackOptions';
import { Notifacation } from './Notification/Notification';

const options = ['good', 'neutral', 'bad'];

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleBtnClick = option => () => {
    option === 'good' && setGood(good + 1);
    option === 'neutral' && setNeutral(neutral + 1);
    option === 'bad' && setBad(bad + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  return (
    <div>
      <Section title="Please leave your feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleBtnClick} />
      </Section>
      <Section title="Statistics">
        {good || neutral || bad ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notifacation message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
