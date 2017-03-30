/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {render} from 'react-dom';
import Velocity from 'velocity-animate';
import 'velocity-animate/velocity.ui';

import QuizApp from './containers/QuizApp';
import PictureApp from './containers/PictureApp';
import ScrollToAnim from './lib/scrollToAnim';
import HandleJacketSwitch from './lib/HandleJacketSwitch';
import ScrollInAnimation from './lib/ScrollInAnimation';

// import ScrollInAnimation from './lib/ScrollInAnimation';
import HoverEffect from './lib/hoverEffect';


let videoIsPlaying;
const $video = document.querySelector(`video`);
const $replayButton = document.querySelector(`.video_replay_button`);
const $sunglassesImage = document.querySelector(`.sunglasses_img`);
const $badScrollRight = document.querySelector(`.bad-scroll-right`);
const $badScrollLeft = document.querySelector(`.bad-scroll-left`);
const containerBeatIt = document.querySelector(`.sunglasses_second_container_beat_it`);
const containerBad = document.querySelector(`.sunglasses_second_container_bad`);

// elements to animate
const $introText = document.querySelector(`.intro_container`);
const $jacketImg = document.querySelector(`.jackson_history_img`);

const containerShoes = document.querySelector(`.smooth_criminal_container_shoes`);
const containerHat = document.querySelector(`.smooth_criminal_container_hat`);

let hatTriggered = 0;
let shoesTriggered = 1;
// containerShoes.style.transform = `translate(0, -200rem)`;
// containerHat.style.transform = `translate(0, 0)`;
const mainContainerSmoothCriminal = document.querySelector(`.smooth_criminal_main_container`);

const init = () => {
  const $skipButton = document.querySelector(`.video_skip`);
  $skipButton.addEventListener(`click`, skipHandler);
  $replayButton.addEventListener(`click`, replayHandler);
  $replayButton.addEventListener(`mouseenter`, mouseOverhandler);

  Velocity($skipButton, `callout.shake`);
  Velocity($replayButton, `transition.flipBounceXIn`, false, true);

  $badScrollRight.addEventListener(`click`, onScrollRightClick);
  $badScrollLeft.addEventListener(`click`, onScrollLeftClick);

  window.addEventListener(`scroll`, onScroll);

  $sunglassesImage.addEventListener(`mousemove`, e => HoverEffect($sunglassesImage, e));
  window.addEventListener(`scroll`, handlePageScroll);
  checkVideoStatus();
  videoMobile();
  HandleJacketSwitch();

  render(
    <QuizApp  />,
    document.querySelector(`.quiz`)
  );

  render(
    <PictureApp  />,
    document.querySelector(`.picture`)
  );

};

const mouseOverhandler = () => {
  Velocity($replayButton, `callout.pulse`);
};

const handlePageScroll = () => {
  ScrollInAnimation($introText, `transition.slideUpIn`, 450);
  ScrollInAnimation($jacketImg, `transition.slideUpIn`, 400);
};
const onScroll = () => {

  if (window.innerHeight > mainContainerSmoothCriminal.getBoundingClientRect().bottom && hatTriggered === 0) {
    console.log(`HAT TRIGGERED`);
    scrollBy(0, - 100);
    triggerHat();
  }

  if (window.innerHeight < mainContainerSmoothCriminal.getBoundingClientRect().bottom - 200 && shoesTriggered === 0) {
    console.log(`SHOES TRIGGERED`);
    scrollBy(0, 100);
    triggerShoes();
  }

};

const triggerHat = () => {
  console.log(`TIS AN HAT`);
  hatTriggered = 1;
  shoesTriggered = 0;
  containerShoes.style.transform = `translate(0, -200rem)`;
  containerHat.style.transform = `translate(0, 0)`;
};

const triggerShoes = () => {
  console.log(`TIS AN SHOES`);
  hatTriggered = 0;
  shoesTriggered = 1;
  containerShoes.style.transform = `translate(0, 0)`;
  containerHat.style.transform = `translate(0, 200rem)`;
};

const onScrollLeftClick = () => {
  containerBad.style.transform = `translate(0, 0)`;
  containerBeatIt.style.transform = `translate(-250rem, 0)`;
};

const onScrollRightClick = () => {
  containerBad.style.transform = `translate(250rem, 0)`;
  containerBeatIt.style.transform = `translate(0, 0)`;
};

const videoMobile = () => {
  if (window.innerWidth >= 900) {
    $video.setAttribute(`autoplay`, `true`);
  }
};

const checkVideoStatus = () => {
  if ($video.paused) {
    $replayButton.classList.remove(`hide`);
  } else {
    $replayButton.classList.add(`hide`);
  }
  requestAnimationFrame(() => checkVideoStatus());
};

const replayHandler = () => {
  videoIsPlaying === true;
  $video.play();
};

const skipHandler = () => {
  videoIsPlaying === false;

  $video.currentTime += ($video.duration - $video.currentTime);
  $video.pause();
  const i = 0;

  requestAnimationFrame(() => ScrollToAnim($video.clientHeight, i));
};

init();
