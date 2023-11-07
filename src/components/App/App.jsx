import { useMemo, useState } from 'react';

import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';

import { Layout } from 'components/Layout';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = useMemo(() => {
    return good + neutral + bad;
  }, [good, neutral, bad]);

  const countPositiveFeedbackPercentage = useMemo(() => {
    return Math.round((good / countTotalFeedback) * 100 || 0);
  }, [good, countTotalFeedback]);

  const leaveFeedback = option => {
    switch (option) {
      case 'good':
        return setGood(prevState => (prevState += 1));
      case 'bad':
        return setBad(prevState => (prevState += 1));
      case 'neutral':
        return setNeutral(prevState => (prevState += 1));
      default:
        return;
    }
  };

  return (
    <Layout>
      <Section title="Please, leave feedback">
        <FeedbackOptions
          options={['good', 'bad', 'neutral']}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Layout>
  );
};
