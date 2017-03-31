import ScrollInAnimation from './scrollInAnimation';

export default () => {
  const $introText = document.querySelector(`.intro_container`);
  const $jacketImg = document.querySelector(`.jackson_history_img`);
  const $jacketTitleDiv = document.querySelector(`.jacket_title_buttons_div`);
  const $jacketTopContent = document.querySelector(`.jacket_top_content_div`);
  const $jacketTopQuote = document.querySelector(`.top_quote`);
  const $jacketBottomText = document.querySelector(`.jacket_bottom_text`);
  const $jacketQuote = document.querySelector(`.jacket_quote`);
  const $paragrafs = document.querySelectorAll(`.text_size`);
  const $sunglassesFirstP = document.querySelectorAll(`.sunglasses_first_p`);
  const $sunglassesSecondP = document.querySelectorAll(`.sunglasses_second_p`);
  const $impactTitles = document.querySelectorAll(`.impact_titles`);
  const $pennyLoafersQuote = document.querySelector(`.penny_loafers_quote`);
  const $singleGloveQuote = document.querySelector(`.single_rhinestone_glove_quote`);


  ScrollInAnimation($introText, `transition.slideUpIn`, 450);
  ScrollInAnimation($jacketImg, `transition.slideUpIn`, 400);
  ScrollInAnimation($jacketTitleDiv, `transition.slideUpIn`, 600);
  ScrollInAnimation($jacketTopContent, `transition.slideUpIn`, 400);
  ScrollInAnimation($jacketBottomText, `transition.slideUpIn`, 700);
  ScrollInAnimation($jacketQuote, `transition.slideLeftIn`, 700);
  ScrollInAnimation($jacketTopQuote, `transition.flipXIn`, 400);
  ScrollInAnimation($pennyLoafersQuote, `transition.slideRightIn`, 400);
  ScrollInAnimation($singleGloveQuote, `transition.slideRightIn`, 400);

  $impactTitles.forEach($impactTitle => {
    ScrollInAnimation($impactTitle, `transition.slideRightIn`, 600);
  });

  $sunglassesFirstP.forEach($p => {
    ScrollInAnimation($p, `transition.slideUpIn`, 600);
  });

  $sunglassesSecondP.forEach($p => {
    ScrollInAnimation($p, `transition.slideUpIn`, 600);
  });

  $paragrafs.forEach($text => {
    ScrollInAnimation($text, `transition.slideUpIn`, 650);
  });
};
