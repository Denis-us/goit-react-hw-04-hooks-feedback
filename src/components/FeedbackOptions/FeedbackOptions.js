import React from "react";
import PropTypes from "prop-types";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul>
      {options.map((option) => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
};
