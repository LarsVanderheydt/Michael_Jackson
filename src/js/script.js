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
import ScrollInAnimation from './lib/scrollInAnimation';

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
const $jacketTitleDiv = document.querySelector(`.jacket_title_buttons_div`);
const $jacketTopContent = document.querySelector(`.jacket_top_content_div`);

const init = () => {
  const $skipButton = document.querySelector(`.video_skip`);
  $skipButton.addEventListener(`click`, skipHandler);
  $replayButton.addEventListener(`click`, replayHandler);
  $replayButton.addEventListener(`mouseenter`, mouseOverhandler);

  if (window.matchMedia(`(min-width: 1030px)`).matches) {
    console.log(`FUCK`);
    HandleSmoothCriminalSwitch();
  }

  Velocity($skipButton, `callout.shake`);
  Velocity($replayButton, `transition.flipBounceXIn`, false, true);

  if (window.matchMedia(`(min-width: 750px)`).matches) {
    $badScrollRight.addEventListener(`click`, onScrollRightClick);
    $badScrollLeft.addEventListener(`click`, onScrollLeftClick);
  }

  $sunglassesImage.addEventListener(`mousemove`, e => HoverEffect($sunglassesImage, e));
  ScrollInAnimation($introText, `transition.slideUpIn`, 450);
  ScrollInAnimation($jacketImg, `transition.slideUpIn`, 400);
  ScrollInAnimation($jacketTitleDiv, `transition.slideUpIn`, 600);
  ScrollInAnimation($jacketTopContent, `transition.slideUpIn`, 400);

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
