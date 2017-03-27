/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {render} from 'react-dom';
import App from './containers/App';
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
};

init();
