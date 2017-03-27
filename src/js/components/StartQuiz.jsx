import React, {PropTypes} from "react";

const StartQuiz = ({clickedToStartQuiz: handleStartQuiz}) => {

  return (
    <div className='start_quiz_text_and_button'>
      <p className='quiz_margin'>
        Ga de uitdaging aan en ontdek hoeveel Michael Jackson
        er in jou schuil gaat. <span className='black_bold_italic'>Ben jij de reïncarnatie van
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
