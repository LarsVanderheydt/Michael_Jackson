/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {render} from 'react-dom';
import QuizApp from './containers/QuizApp';
import PictureApp from './containers/PictureApp';
import ScrollToAnim from './lib/scrollToAnim';

let videoIsPlaying;
const $video = document.querySelector(`video`);
const $replayButton = document.querySelector(`.video_replay_button`);

let scrollTopParam = document.documentElement.scrollTop;
let scrollingUp = 0;
let scrollingDown = 0;

const init = () => {
  const $skipButton = document.querySelector(`.video_skip`);
  $skipButton.addEventListener(`click`, skipHandler);
  $replayButton.addEventListener(`click`, replayHandler);
  window.addEventListener(`scroll`, test);

  checkVideoStatus();
  videoMobile();

  render(
    <QuizApp  />,
    document.querySelector(`.quiz`)
  );

  render(
    <PictureApp  />,
    document.querySelector(`.picture`)
  );

};

const videoMobile = () => {
  if (window.innerWidth >= 900) {
    $video.setAttribute(`autoplay`, `true`);
  }
};

const test = () => {
  checkScrollDirection();
  if (scrollingUp) {
    handleScrollingUp();
  }

  if (scrollingDown) {
    handleScrollingDown();
  }
};

const handleScrollingDown = () => {
  if (window.scrollY >= 1500 && window.scrollY <= 1520) {
    requestAnimationFrame(() => ScrollToAnim(window.innerHeight * 25 / 40, 0));
  }
  console.log(`down`);
};

const handleScrollingUp = () => {
  console.log(`up`);
};

const checkScrollDirection = () => {
  console.log(document.documentElement.scrollTop);
  if (document.documentElement.scrollTop > scrollTopParam) {
    scrollingDown = 1;
    scrollingUp = 0;
  }
  if (document.documentElement.scrollTop < scrollTopParam) {
    scrollingDown = 0;
    scrollingUp = 1;
  }
  scrollTopParam = document.documentElement.scrollTop;
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

  requestAnimationFrame(() => ScrollToAnim($video.offsetHeight, i));
};

init();
