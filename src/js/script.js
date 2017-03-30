/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {render} from 'react-dom';
import QuizApp from './containers/QuizApp';
import PictureApp from './containers/PictureApp';
import ScrollToAnim from './lib/scrollToAnim';
import HoverEffect from './lib/hoverEffect';

let videoIsPlaying;
const $video = document.querySelector(`video`);
const $replayButton = document.querySelector(`.video_replay_button`);

const $sunglassesImage = document.querySelector(`.sunglasses_img`);

const init = () => {
  const $skipButton = document.querySelector(`.video_skip`);
  $skipButton.addEventListener(`click`, skipHandler);
  $replayButton.addEventListener(`click`, replayHandler);

  $sunglassesImage.addEventListener(`mousemove`, e => HoverEffect($sunglassesImage, e));

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
