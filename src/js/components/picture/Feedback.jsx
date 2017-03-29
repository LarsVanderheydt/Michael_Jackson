import React from 'react';

const feedback = [`The way you make us feel, prachtige outfit! Je foto wordt zodra aan de site toegevoegd.`, `Shamooooon, wat een geniale outfit. Verwacht hem binnen enkele ogenblikken op onze site`, `Who's bad? That outfit is! Je foto zal zodra op de site te vinden zijn.`];

const Feedback = () => {
  const randomNumber =  Math.floor(Math.random() * feedback.length);
  const randomFeedback = feedback[randomNumber];

  return (
    <p className='bold_italic react_margin'>{randomFeedback}</p>
  );
};


export default Feedback;
