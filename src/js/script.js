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
  const i = 0;

  requestAnimationFrame(() => scrollToAnim($video.offsetHeight, i));
};

const scrollToAnim = (scrollHeight, i) => {
  if (i < scrollHeight) {
    window.scrollBy(0, scrollHeight / 20);
    i += scrollHeight / 20;
    requestAnimationFrame(() => scrollToAnim(scrollHeight, i));
  }
};

init();
