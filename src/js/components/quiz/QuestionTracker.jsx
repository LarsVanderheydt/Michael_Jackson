import React from "react";
import PropTypes from 'prop-types';

const QuestionTracker = ({questionNr, currentQuestion}) => {
  const getStyle = () => {
    let style = {};

    if (questionNr > currentQuestion) {
      style = {backgroundColor: `black`};
    } else {
      style = {backgroundColor: `#aa0816`};
    }

    return style;
  };

  return <div className='question_tracker' style={getStyle()}></div>;
};

QuestionTracker.propTypes = {
  questionNr: PropTypes.number.isRequired,
  currentQuestion: PropTypes.number.isRequired
};

export default QuestionTracker;
