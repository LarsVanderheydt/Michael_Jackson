/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {render} from 'react-dom';
import App from './containers/App';
import ScrollToAnim from './lib/scrollToAnim';

const $video = document.querySelector(`video`);

const init = () => {
  const $skipButton = document.querySelector(`.video_skip`);
  $skipButton.addEventListener(`click`, clickHandler);

  render(
    <App  />,
    document.querySelector(`.quiz`)
  );
};

const clickHandler = () => {
  $video.currentTime += ($video.duration - $video.currentTime);
  $video.pause();
  const i = 0;

  requestAnimationFrame(() => ScrollToAnim($video.offsetHeight, i));
};

init();
