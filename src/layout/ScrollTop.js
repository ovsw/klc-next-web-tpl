const ScrollTop = () => {
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <a
      href="#scroll"
      onClick={() => topFunction()}
      className="back-to-top ft-sticky"
      id="back-to-top"
    >
      <i className="fal fa-long-arrow-up"></i>
    </a>
  );
};

export default ScrollTop;
