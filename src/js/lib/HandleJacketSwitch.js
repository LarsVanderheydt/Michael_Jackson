import Velocity from 'velocity-animate';
import 'velocity-animate/velocity.ui';

const $jacketLeftButton = document.querySelectorAll(`.jacket_button_left`);
const $jacketRightButton = document.querySelectorAll(`.jacket_button_right`);
let currentClassName, nextClassName;

export default () => {
  $jacketLeftButton.forEach(e => {
    e.addEventListener(`click`, handleFirstJacketLeftButton);
  });
  $jacketRightButton.forEach(e => {
    e.addEventListener(`click`, handleFirstJacketRightButton);
    console.log(e);
  });
};

const handleFirstJacketRightButton = e => {
  switch (parseInt(e.currentTarget.id)) {
  case 1:
    currentClassName = `first`;
    nextClassName = `second`;
    break;
  case 2:
    currentClassName = `second`;
    nextClassName = `third`;
    break;
  case 3:
    currentClassName = `third`;
    nextClassName = `first`;
    break;
  }


  const $currentClassName = document.querySelector(`.jacket_effect_${currentClassName}`);
  const $nextClass = document.querySelector(`.jacket_effect_${nextClassName}`);

  $currentClassName.style.transform = `translate(300rem, 0)`;
  $nextClass.style.transform = `translate(0, 0)`;

  $currentClassName.classList.add(`jacket_effect`);
  $nextClass.classList.add(`jacket_effect_go_in`);

  Velocity($nextClass, `transition.slideLeftIn`);
};

const handleFirstJacketLeftButton = e => {

  switch (parseInt(e.currentTarget.id)) {
  case 1:
    currentClassName = `first`;
    nextClassName = `third`;
    break;
  case 2:
    currentClassName = `second`;
    nextClassName = `first`;
    break;
  case 3:
    currentClassName = `third`;
    nextClassName = `second`;
    break;
  }

  const $currentClassName = document.querySelector(`.jacket_effect_${currentClassName}`);
  const $nextClass = document.querySelector(`.jacket_effect_${nextClassName}`);

  $currentClassName.style.transform = `translate(-300rem, 0)`;
  $nextClass.style.transform = `translate(0, 0)`;

  $currentClassName.classList.add(`jacket_effect`);
  $nextClass.classList.add(`jacket_effect_go_in`);

  Velocity($nextClass, `transition.slideRightIn`);
};
