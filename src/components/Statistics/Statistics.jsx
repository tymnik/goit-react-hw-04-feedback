import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styles.stats}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Feedback Percentage: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;
