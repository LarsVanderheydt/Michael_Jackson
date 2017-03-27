import React, {PropTypes} from "react";

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

  return (
    <div className='questionTracker' style={getStyle()}></div>
  );
};

QuestionTracker.propTypes = {
  questionNr: PropTypes.number.isRequired,
  currentQuestion: PropTypes.number.isRequired
};

export default QuestionTracker;
