const scrollToAnim = (scrollHeight, i) => {
  if (i < scrollHeight) {
    window.scrollBy(0, scrollHeight / 20);
    i += scrollHeight / 20;
    requestAnimationFrame(() => scrollToAnim(scrollHeight, i));
  }
};

export default scrollToAnim;
