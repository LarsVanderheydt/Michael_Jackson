/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {render} from 'react-dom';
import Velocity from 'velocity-animate';
import 'velocity-animate/velocity.ui';

import QuizApp from './containers/QuizApp';
import PictureApp from './containers/PictureApp';
import ScrollToAnim from './lib/scrollToAnim';
import HandleJacketSwitch from './lib/HandleJacketSwitch';
import HoverEffect from './lib/hoverEffect';
import AnimateElements from './lib/AnimateElements';

const $video = document.querySelector(`video`);
const $videoContainer = document.querySelector(`.video`);
const $skipButton = document.querySelector(`.video_skip`);
const $replayButton = document.querySelector(`.video_replay_button`);

const $sunglassesImage = document.querySelector(`.sunglasses_img`);
const $badScrollRight = document.querySelector(`.bad-scroll-right`);
const $badScrollLeft = document.querySelector(`.bad-scroll-left`);

const containerBeatIt = document.querySelector(`.sunglasses_second_container_beat_it`);
const containerBad = document.querySelector(`.sunglasses_second_container_bad`);
const containerShoes = document.querySelector(`.smooth_criminal_container_shoes`);
const containerHat = document.querySelector(`.smooth_criminal_container_hat`);
const mainContainerSmoothCriminal = document.querySelector(`.smooth_criminal_main_container`);
const $pennyLoaferLinks = document.querySelectorAll(`.penny_loafers_link`);

let hatTriggered = 0;
let shoesTriggered = 1;
let videoIsPlaying;

const init = () => {
  console.log($pennyLoaferLinks);
  $skipButton.addEventListener(`click`, skipHandler);
  $replayButton.addEventListener(`click`, replayHandler);
  $replayButton.addEventListener(`mouseenter`, mouseOverhandler);
  $badScrollRight.addEventListener(`click`, onScrollRightClick);
  $badScrollLeft.addEventListener(`click`, onScrollLeftClick);
  $sunglassesImage.addEventListener(`mousemove`, e => HoverEffect($sunglassesImage, e));

  Velocity($skipButton, `callout.shake`);
  Velocity($replayButton, `transition.flipBounceXIn`);

  window.addEventListener(`scroll`, onScroll);

  const $rightButton = document.querySelectorAll(`.jacket_button_right`);
  $rightButton.forEach($el => {
    if (parseInt($el.id) === 3) {
      $el.style.marginTop = 0;
      $el.style.marginLeft = `18rem`;
    }
  });


  checkVideoStatus();
  videoMobile();
  HandleJacketSwitch();
  AnimateElements();

  render(
    <QuizApp  />,
    document.querySelector(`.quiz`)
  );

  render(
    <PictureApp  />,
    document.querySelector(`.picture`)
  );

};

const mouseOverhandler = () => Velocity($replayButton, `callout.pulse`);

const onScroll = () => {

  if (window.innerHeight > mainContainerSmoothCriminal.getBoundingClientRect().bottom && hatTriggered === 0) {
    scrollBy(0, - 100);
    triggerHat();
  }

  if (window.innerHeight < mainContainerSmoothCriminal.getBoundingClientRect().bottom - 200 && shoesTriggered === 0) {
    scrollBy(0, 100);
    triggerShoes();
  }

};

const triggerHat = () => {
  hatTriggered = 1;
  shoesTriggered = 0;
  containerShoes.style.transform = `translate(0, -200rem)`;
  containerHat.style.transform = `translate(0, 0)`;
};

const triggerShoes = () => {
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
  console.log($videoContainer.offsetHeight);
  $video.currentTime += ($video.duration - $video.currentTime);
  $video.pause();
  const i = 0;

  requestAnimationFrame(() => ScrollToAnim($videoContainer.offsetHeight - pageYOffset, i));
};

init();
