/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {render} from 'react-dom';
import Velocity from 'velocity-animate';
import 'velocity-animate/velocity.ui';

import QuizApp from './containers/QuizApp';
import PictureApp from './containers/PictureApp';
import ScrollToAnim from './lib/scrollToAnim';

import HandleJacketSwitch from './lib/handleJacketSwitch';
import HandleSmoothCriminalSwitch from './lib/handleSmoothCriminalSwitch';
import HoverEffect from './lib/hoverEffect';
import AnimateElements from './lib/animateElements';

const $video = document.querySelector(`video`);
const $videoContainer = document.querySelector(`.video`);
const $skipButton = document.querySelector(`.video_skip`);
const $replayButton = document.querySelector(`.video_replay_button`);

const $sunglassesImage = document.querySelector(`.sunglasses_img`);
const $badScrollRight = document.querySelector(`.bad-scroll-right`);
const $badScrollLeft = document.querySelector(`.bad-scroll-left`);

const containerBeatIt = document.querySelector(`.sunglasses_second_container_beat_it`);
const containerBad = document.querySelector(`.sunglasses_second_container_bad`);
const $pennyLoaferLinks = document.querySelectorAll(`.penny_loafers_link`);
const $pennyLoafer = document.querySelector(`.penny_loafers`);


let videoIsPlaying;

const init = () => {
  $skipButton.addEventListener(`click`, skipHandler);
  $replayButton.addEventListener(`click`, replayHandler);
  $replayButton.addEventListener(`mouseenter`, mouseOverhandler);

  $badScrollRight.addEventListener(`click`, onScrollRightClick);
  $badScrollLeft.addEventListener(`click`, onScrollLeftClick);
  $sunglassesImage.addEventListener(`mousemove`, e => HoverEffect($sunglassesImage, e));

  Velocity($skipButton, `callout.shake`);
  Velocity($replayButton, `transition.flipBounceXIn`);

  if (window.matchMedia(`(min-width: 9.5rem)`).matches) {
    HandleSmoothCriminalSwitch();
  }

  Velocity($skipButton, `callout.shake`);
  Velocity($replayButton, `transition.flipBounceXIn`, false, true);

  if (window.matchMedia(`(min-width: 750px)`).matches) {
    $badScrollRight.addEventListener(`click`, onScrollRightClick);
    $badScrollLeft.addEventListener(`click`, onScrollLeftClick);
  }

  const $rightButton = document.querySelectorAll(`.jacket_button_right`);
  $rightButton.forEach($el => {
    if (parseInt($el.id, 10) === 3) {
      $el.style.marginTop = 0;
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
  $pennyLoaferLinks.forEach($el => {
    $el.addEventListener(`click`, handlePennyLoaferButton);
  });
};

const handlePennyLoaferButton = e => {
  e.preventDefault();
  const elOffset = getOffset($pennyLoafer);
  const offset = elOffset - window.pageYOffset;

  ScrollToAnim(offset + 350, 350);
};

const getOffset = el => {
  el = el.getBoundingClientRect();
  return el.top + window.pageYOffset;
};

const mouseOverhandler = () => Velocity($replayButton, `callout.pulse`);

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
  if (videoIsPlaying === true) {
    $video.play();
  }
};

const skipHandler = () => {
  if (videoIsPlaying === false) {
    $video.currentTime += ($video.duration - $video.currentTime);
    $video.pause();
    const i = 0;

    requestAnimationFrame(() => ScrollToAnim($videoContainer.offsetHeight - window.pageYOffset, i));
  }
};

init();
