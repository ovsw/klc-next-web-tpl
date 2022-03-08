const Home1Banner = () => {
  return (
    <div
      className="bg-banner relative z-1"
      style={{ backgroundImage: "url(assets/images/banner/banner-1.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-10 relative z-1">
            <div className="banner_text">
              <h1
                className="title thm-color-white wow fadeInDown"
                data-wow-delay=".30ms"
              >
                Find Your Best Business Coach
              </h1>
              <form
                className="wow fadeInUp"
                data-wow-delay=".40ms"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="input-group">
                  <span className="input-group-preappend">
                    <i className="fal fa-search" />
                  </span>
                  <input
                    type="text"
                    name="#"
                    className="form-control"
                    placeholder="Search Coach"
                    autoComplete="off"
                  />
                  <div className="input-group-append">
                    <button
                      type="submit"
                      className="thm-btn bg-thm-color-two thm-color-two-shadow btn-rectangle ml-0"
                    >
                      Search Now
                      <i className="fal fa-chevron-right ml-2" />
                    </button>
                  </div>
                </div>
                <div className="form-check-inline">
                  <label className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="coach"
                      defaultChecked
                    />
                    Health Coach
                  </label>
                </div>
                <div className="form-check-inline">
                  <label className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="coach"
                    />
                    Life Coach
                  </label>
                </div>
                <div className="form-check-inline disabled">
                  <label className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="coach"
                    />
                    Business Coach
                  </label>
                </div>
              </form>
            </div>
            <img
              src="assets/images/elements/element_19.png"
              alt="element"
              className="element_1 slideRightTwo"
            />
            <img
              src="assets/images/elements/element_10.png"
              alt="element"
              className="element_2 zoom-fade"
            />
            <img
              src="assets/images/elements/element_21.png"
              alt="element"
              className="element_3 rotate_elem"
            />
            <img
              src="assets/images/elements/element_20.png"
              alt="element"
              className="element_4 rotate_elem"
            />
          </div>
        </div>
        <div className="think_box wow fadeInDown" data-wow-delay=".50ms">
          <img
            src="assets/images/elements/think_element.png"
            alt="element"
            className="think_element"
          />
          <div className="text_box">
            <p className="top mb-0">
              <span>89</span>% Success
            </p>
            <p className="bottom mb-0">
              We Care Your
              <br />
              Business
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1Banner;
