import React, {PropTypes} from "react";

const StartQuiz = ({clickedToStartQuiz: handleStartQuiz}) => {

  return (
    <div className='startQuizTextAndButton'>
      <p className='quizMargin'>
        Ga de uitdaging aan en ontdek hoeveel Michael Jackson
        er in jou schuil gaat. <span className='blackBoldItalic'>Ben jij de reïncarnatie van
        ‘The King of Pop’ ?</span> Ontdek het via deze test.
      </p>
      <button onClick={handleStartQuiz.bind(this)}>Start de test</button>
    </div>
  );
};

StartQuiz.propTypes = {
  clickedToStartQuiz: PropTypes.func.isRequired
};

export default StartQuiz;
