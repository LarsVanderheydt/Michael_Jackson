import Velocity from 'velocity-animate';
import 'velocity-animate/velocity.ui';
let executed = false;

const CreateAnimations = ($el, animString, offsetMore) => {
  const bodyRect = document.body.getBoundingClientRect();
  const elemRect = $el.getBoundingClientRect();
  const offset   = elemRect.top - bodyRect.top;

  if (executed === false) {
    if (offset - offsetMore < pageYOffset) {
      Velocity($el, animString);
      $el.classList.remove(`hide`);
      executed = true;
    }
  }
};

export default CreateAnimations;
