import React from 'react';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.buttons}>
      {options.map(option => (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          className={styles.btn}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
