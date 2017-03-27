import React, {PropTypes} from "react";
import QuestionTracker from './QuestionTracker';

const Question = ({questions, onQuestionAnswered: handleChange, currentQuestion}) => {

  const questionTracker = () => {
    return (
      questions.map(a => {
        return <QuestionTracker key={a.questionNr} className='questionTracker' questionNr={a.questionNr} currentQuestion={currentQuestion} />;
      })
    );
  };

  return (
    <div>
      <h1 className='blackBoldItalic quizMargin'>{questions[currentQuestion].question.toString()}</h1>
      {
        questions[currentQuestion].chooseFrom.map(
        a => {
          return (
            <div key={a.id} className='answer'>
              <label className='radioButtonLabel'>
                <input
                  type='radio'
                  name={questions[currentQuestion].questionNr}
                  value={a.answerScore}
                  onClick={handleChange}
                  id={a.id}
                />
                <div></div>
              </label>
              <label htmlFor={a.id} className='answerLabel'>{a.answer}</label>
            </div>
          );
        }
      )
    }
    <div className='questionTrackingDiv'>{questionTracker()}</div>
  </div>
  );
};

Question.propTypes = {
  questions: PropTypes.array.isRequired,
  currentQuestion: PropTypes.number.isRequired,
  onQuestionAnswered: PropTypes.func.isRequired,
};

export default Question;
