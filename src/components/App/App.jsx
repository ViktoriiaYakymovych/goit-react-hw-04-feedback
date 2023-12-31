import { useState } from 'react';

import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';

import { Layout } from 'components/Layout';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // const countTotalFeedback = useMemo(() => {
  //   return good + neutral + bad;
  // }, [good, neutral, bad]);

  // const countPositiveFeedbackPercentage = useMemo(() => {
  //   return Math.round((good / countTotalFeedback) * 100 || 0);
  // }, [good, countTotalFeedback]);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  };

  const leaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => (prevState += 1));
        break;
      case 'bad':
        setBad(prevState => (prevState += 1));
        break;
      case 'neutral':
        setNeutral(prevState => (prevState += 1));
        break;
      default:
        break;
    }
  };

  return (
    <Layout>
      <Section title="Please, leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Layout>
  );
};
