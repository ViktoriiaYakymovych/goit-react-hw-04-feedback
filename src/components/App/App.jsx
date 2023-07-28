import { useState } from 'react';

import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import {Notification} from '../Notification/Notification';

import { AppContainer } from './App.styled';

export const App  = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const handleBtnClick = option => {
    if (option === 'good') 
      setGood(prev => prev + 1);
      else if (option === 'bad') 
      setBad(prev => prev + 1);
      else if (option === 'neutral') setNeutral(prev => prev + 1);
      else return;
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return ((good / countTotalFeedback()) * 100).toFixed() || 0;
  };
  
  return (
    <>
      <AppContainer>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'bad', 'neutral']}
            onLeaveFeedback={handleBtnClick}
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
            ></Statistics>
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </AppContainer>
    </>
  );
}
