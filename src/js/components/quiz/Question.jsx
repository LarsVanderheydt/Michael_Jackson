import React, {PropTypes} from "react";
import QuestionTracker from './QuestionTracker';

const Question = ({questions, onQuestionAnswered: handleChange, currentQuestion}) => {

  const questionTracker = () => {
    return (
      questions.map(a => {
        return <QuestionTracker key={a.questionNr} className='question_tracker' questionNr={a.questionNr} currentQuestion={currentQuestion} />;
      })
    );
  };

  return (
    <div>
      <h1 className='bold_italic react_margin'>{questions[currentQuestion].question.toString()}</h1>
      {questions[currentQuestion].chooseFrom.map(
        a => {
          return (
            <div key={a.id} className='answer'>
              <label className='radio_button_label'>
                <input
                  type='radio'
                  name={questions[currentQuestion].questionNr}
                  value={a.answerScore}
                  onClick={handleChange}
                  id={a.id}
                />
                <div></div>
              </label>
              <label htmlFor={a.id} className='answer_label'>{a.answer}</label>
            </div>
          );
        }
      )}
    <div className='question_tracking_div'>{questionTracker()}</div>
  </div>
  );
};

Question.propTypes = {
  questions: PropTypes.array.isRequired,
  currentQuestion: PropTypes.number.isRequired,
  onQuestionAnswered: PropTypes.func.isRequired,
};

export default Question;
