import React, {PropTypes} from "react";

const Question = ({questions, onQuestionAnswered: handleChange, currentQuestion}) => {
  return (
    <div>
      <h1>{questions[currentQuestion].question.toString()}</h1>
      {
        questions[currentQuestion].chooseFrom.map(
        a => {
          return (
              <div key={a.id} className='answerDiv'>
                <input
                  type='radio'
                  name={questions[currentQuestion].questionNr}
                  value={a.correct}
                  onClick={handleChange}
                />
                <p>{a.answer}</p>
              </div>
          );
        }
      )
    }
  </div>
  );
};

Question.propTypes = {
  questions: PropTypes.array.isRequired,
  currentQuestion: PropTypes.number.isRequired,
  onQuestionAnswered: PropTypes.func.isRequired,
};

export default Question;
