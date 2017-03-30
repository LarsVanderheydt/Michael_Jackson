import Velocity from 'velocity-animate';
import 'velocity-animate/velocity.ui';

const ScrollInAnimation = ($el, animString, offsetMore) => {
  const bodyRect = document.body.getBoundingClientRect();
  const elemRect = $el.getBoundingClientRect();
  const offset = elemRect.top - bodyRect.top;

  if ($el.classList.contains(`hide`)) {
    if (offset - offsetMore < pageYOffset) {
      Velocity($el, animString);
      $el.classList.remove(`hide`);
    }
  }
};

export default ScrollInAnimation;
