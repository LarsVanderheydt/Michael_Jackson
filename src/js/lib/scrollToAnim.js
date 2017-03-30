const scrollToAnim = (scrollHeight, i) => {
  if (i < scrollHeight) {
    window.scrollBy(0, scrollHeight / 50);
    i += scrollHeight / 50;
    requestAnimationFrame(() => scrollToAnim(scrollHeight, i));
  }
};

export default scrollToAnim;
