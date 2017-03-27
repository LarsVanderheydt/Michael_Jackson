import React, {PropTypes} from "react";

const ScoreFeedback = ({score}) => {
  let scoreFeedbackText;
  const checkScore = score;

  switch (true) {
  case (checkScore > 0 && checkScore < 6):
    scoreFeedbackText = `LOSER`;
    break;
  case (checkScore > 6 && checkScore < 7):
    scoreFeedbackText = `NOOB`;
    break;
  case (checkScore > 7 && checkScore < 10):
    scoreFeedbackText = `SUPER`;
    break;
  case (checkScore === 10):
    scoreFeedbackText = `Michael? Ben jij dat? Alles wat je doet en zegt straalt gewoon ‘Michael Jackson’ uit. Zelfs Michael Jackson was nooit zo Michael Jackson als jij bent. Now that’s bad!`;
    break;
  default:
    scoreFeedbackText = `EXTERMINATE`;
  }

  return (
    <div>
      <h1 className='blackBoldItalic yourQuizScore'>Wauw jij behaalde {score} punten.</h1>
      <p>{scoreFeedbackText}</p>
    </div>
  );
};

ScoreFeedback.propTypes = {
  score: PropTypes.number.isRequired
};

export default ScoreFeedback;
