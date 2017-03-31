let hatTriggered = 0;
let shoesTriggered = 1;
const mainContainerSmoothCriminal = document.querySelector(`.smooth_criminal_main_container`);
const containerShoes = document.querySelector(`.smooth_criminal_container_shoes`);
const containerHat = document.querySelector(`.smooth_criminal_container_hat`);

export default () => {
  window.addEventListener(`scroll`, onScroll);
};

const onScroll = () => {
  //const mainContainerSmoothCriminalY = getOffset(mainContainerSmoothCriminal);
  if (window.innerHeight > mainContainerSmoothCriminal.getBoundingClientRect().bottom && hatTriggered === 0) {
    //requestAnimationFrame(() => ScrollToAnim(- (window.scrollY - mainContainerSmoothCriminalY), 0));
    triggerHat();
  }

  if (window.innerHeight < mainContainerSmoothCriminal.getBoundingClientRect().bottom - 200 && shoesTriggered === 0) {
    //requestAnimationFrame(() => ScrollToAnim(window.scrollY - mainContainerSmoothCriminalY, 0));
    triggerShoes();
  }
};

// const getOffset = el => {
//   el = el.getBoundingClientRect();
//   return el.top + window.scrollY;
// };

const triggerHat = () => {
  hatTriggered = 1;
  shoesTriggered = 0;
  containerShoes.style.transform = `translate(-200rem, 0)`;
  containerHat.style.transform = `translate(0, 0)`;
};

const triggerShoes = () => {
  hatTriggered = 0;
  shoesTriggered = 1;
  containerShoes.style.transform = `translate(0, 0)`;
  containerHat.style.transform = `translate(200rem, 0)`;
};
