const hoverEffect = ($div, e) => {
  const movementStrength = 50;
  const height = movementStrength / window.innerHeight;
  const width = movementStrength / window.innerWidth;
  const pageX = e.clientX - window.innerWidth / 2;
  const pageY = e.clientY - window.innerHeight / 2;
  const newvalueX = width * pageX * - 1;
  const newvalueY = height * pageY * - 1;
  $div.setAttribute(`style`, `background-position: ${newvalueX  }px     ${  newvalueY}px`);
};

export default hoverEffect;
