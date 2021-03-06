import Velocity from 'velocity-animate';
import 'velocity-animate/velocity.ui';

const ScrollInAnimation = ($el, animString, offsetMore) => {
  window.addEventListener(`scroll`, () => handlePageScroll($el, animString, offsetMore));
  addHideClass($el);
};

const handlePageScroll = ($el, animString, offsetMore) => {
  const bodyRect = document.body.getBoundingClientRect();
  const elemRect = $el.getBoundingClientRect();
  const offset = elemRect.top - bodyRect.top;

  if ($el.classList.contains(`hide`)) {
    if (offset - offsetMore < window.pageYOffset) {
      Velocity($el, animString);
      $el.classList.remove(`hide`);
    }
  }
};

const addHideClass = $el => {
  $el.classList.add(`hide`);
};

export default ScrollInAnimation;
