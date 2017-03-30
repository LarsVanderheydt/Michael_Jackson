import React, {PropTypes} from "react";

const ScoreFeedback = ({score}) => {
  let scoreFeedbackText;
  const checkScore = score;

  switch (true) {
  case (checkScore > 0 && checkScore <= 50):
    scoreFeedbackText = `‘It’s not as easy as 1,2,3’. Natuurlijk kan niet iedereen ‘The King of Pop’ worden, maar jij hebt wel erg weinig gemeen met Michael Jackson. Maar wat niet is kan nog komen. Just start with the man in the mirror.`;
    break;
  case (checkScore > 50 && checkScore <= 75):
    scoreFeedbackText = `It’s neither black or white. Je resultaat leert ons dat je wel een stukje ‘King of Pop’ in je hebt zitten, maar dat het nog niet volledig eruit komt. Zoals Michael zei: “Don’t stop ‘till you get enough”.`;
    break;
  case (checkScore > 75):
    scoreFeedbackText = `Michael? Ben jij dat? Alles wat je doet en zegt straalt gewoon ‘Michael Jackson’ uit. Zelfs Michael Jackson was nooit zo Michael Jackson als jij bent. Now that’s bad!`;
    break;
  }

  return (
    <div>
      <h1 className='bold_italic your_quiz_score'>Jij behaalde {score} punten.</h1>
      <p>{scoreFeedbackText}</p>
    </div>
  );
};

ScoreFeedback.propTypes = {
  score: PropTypes.number.isRequired
};

export default ScoreFeedback;
