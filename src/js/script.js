/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {render} from 'react-dom';
import Velocity from 'velocity-animate';
import 'velocity-animate/velocity.ui';

import QuizApp from './containers/QuizApp';
import PictureApp from './containers/PictureApp';
import ScrollToAnim from './lib/scrollToAnim';
import CreateAnimations from './lib/CreateAnimations';

let videoIsPlaying;
const $video = document.querySelector(`video`);
const $replayButton = document.querySelector(`.video_replay_button`);
const $introText = document.querySelector(`.intro_container`);

const $smoothCriminalDiv = document.querySelector(`.smooth_criminal_element_1`);
const $title = document.querySelector(`.smooth_criminal_shoes_title`);
const $text1 = document.querySelector(`.smooth_criminal_left_text_js_1`);
const $text2 = document.querySelector(`.smooth_criminal_left_text_js_2`);
const $text3 = document.querySelector(`.smooth_criminal_right_text_js_1`);
const $text4 = document.querySelector(`.smooth_criminal_right_text_js_2`);
const $jacketEffectFirst = document.querySelector(`.jacket_effect_second`);
let scrollTopParam = document.documentElement.scrollTop;
let scrollingUp = 0;
let scrollingDown = 0;

const init = () => {
  const $skipButton = document.querySelector(`.video_skip`);
  console.log($jacketEffectFirst);
  $skipButton.addEventListener(`click`, skipHandler);
  $replayButton.addEventListener(`click`, replayHandler);
  $replayButton.addEventListener(`mouseenter`, mouseOverhandler);

  Velocity($skipButton, `callout.shake`);
  Velocity($replayButton, `transition.flipBounceXIn`, false, true);

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

const mouseOverhandler = () => {
  Velocity($replayButton, `callout.pulse`);
};

const videoMobile = () => {
  if (window.innerWidth >= 900) {
    $video.setAttribute(`autoplay`, `true`);
  }
};


const test = () => {
  CreateAnimations($introText, `transition.slideUpIn`, 600);

  checkScrollDirection();
  if (scrollingUp) {
    handleScrollingUp();
  }

  if (scrollingDown) {
    handleScrollingDown();
  }
};

const handleScrollingDown = () => {

  if ($smoothCriminalDiv.getBoundingClientRect().top + 100 < 0) {
    switchToHat();
  }
};

const handleScrollingUp = () => {
  if ($smoothCriminalDiv.getBoundingClientRect().bottom + 100 > window.outerHeight) {
    switchToShoes();
  }
};

const checkScrollDirection = () => {
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

const switchToHat = () => {
  $title.innerHTML = `Smooth Criminal Hat`;
  $text1.innerHTML = `Al van zijn periode bij The Jackson Five was Michael <span class="bold_italic">gefascineerd door hoeden.</span>
         Toen wilde hij al dat deze een onderdeel zouden zijn van zijn outfit,
         maar de producers gooiden dat idee de vuilnisbak in. Het was daarom pas in zijn
         <span class="bold_italic">solo-carrière</span> dat Michael Jackson voor het eerst zijn ‘Fedora Hat’ introduceerde.`;
  $text2.innerHTML = `In zijn optreden van Billie Jean (op Motown 25 in 1983), koos hij nog voor een minder opvallend,
        <span class="bold_italic">zwart exemplaar.</span> Het was pas 5 jaar later, in de videoclip van Smooth Criminal, dat hij de
        <span class="bold_italic">iconische witte versie </span>begon te dragen in combinatie met zijn wit maatpak.`;
  $text3.innerHTML = `Op het laatste nippertje belde hij met zijn management, en vroeg om een
        <span class="bold_italic">‘Spy Hat’</span>
        Eentje die je vaak tegenkwam in typische spionagefilms. Tegelijkertijd met de legendarische Smooth Criminal muziekvideo werd ook de
        <span class="bold_italic">Moonwalker-film</span> gereleased.`;
  $text4.innerHTML = `Hierdoor werd zijn hoed meteen gebombarbeerd tot zijn iconisch, nieuw handelsmerk.
        <span class="bold_italic">Later dat jaar lag ook een videogame versie van de film in de rekken.</span>
        Hierin kon je zijn hoed zelfs gebruiken als projectiel om zo kwaadaardige tegenstanders het zwijgen op te leggen.`;
};

const switchToShoes = () => {
  $title.innerHTML = `Smooth Criminal Shoes`;
  $text1.innerHTML = `Speciaal voor dit nummer bedacht Michael Jackson een nieuwe move:<span class="bold_italic">‘The Anti-Gravity Lean’.</span>
        In de clip zien we Michael in een bar in de jaren 30,hij gooit een muntje in de jukebox en begint doorheen de bar te dansen.
        Wanneer hij meisje, die op een afstand toekijkt, ziet, knipoogt hij <span class="bold_italic">waarna hij onmogelijk ver naar voren leunt.</span>`;
  $text2.innerHTML = `Om deze move te kunnen uitvoeren probeerde Michael enkele dingen uit.
        Wanneer <span class="bold_italic">magneten en touwen</span> niet echt de oplossing leek,
        bedacht hij in samenspraak met zijn kostuumontwerpers ‘The Smooth Criminal Shoes’.
        Meteen namen ze <span class="bold_italic">patent op hun uitvinding.</span>`;
  $text3.innerHTML = `Het ontwerp van de schoenen is gelijkaardig aan dat gedragen door astronauten.
        <span class="bold_italic">In de hiel zat namelijk een slot.</span>
        Dit slot kon bevestigd worden aan haken die uit de vloer van het podium schoven.
        Door het <span class="bold_italic">haaksysteem</span> kon Michael,
        en zijn danscrew, 45 graden voorover buigen zonder te vallen.`;
  $text4.innerHTML = `Eén keertje liep het mis. Tijdens een optreden in Moscou in 1996, kwam <span class="bold_italic">één van de hielen los van zijn haak.</span>
        Michael vloog voorover en kwam hard ten val. Hierna werd het <span class="bold_italic">design verbeterd</span> en opnieuw gepatenteerd.`;
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
