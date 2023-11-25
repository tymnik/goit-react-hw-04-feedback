import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback > 0
      ? Math.round((feedback.good / totalFeedback) * 100)
      : 0;
  };

  const feedbackOptions = ['good', 'neutral', 'bad'];
  const totalFeedback = countTotalFeedback();
  const titleStyle = {
    textAlign: 'center',
    color: 'black',
    margin: '30px 0',
  };

  return (
    <div>
      <Section title="Please leave feedback" style={titleStyle}>
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistics" style={titleStyle}>
        {totalFeedback > 0 ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
