const Home3Newsletter = () => {
  return (
    <section className="section bg-thm-color-two-gradient z-1 newsletter_form_sec">
      <img
        src="assets/images/elements/element_1.png"
        className="element_1"
        alt="Element"
      />
      <img
        src="assets/images/elements/element_2.png"
        className="element_2"
        alt="Element"
      />
      <div className="container relative z-1">
        <div className="arrows to_right slideRight">
          <div className="arrow" />
          <div className="arrow" />
          <div className="arrow" />
          <div className="arrow" />
          <div className="arrow" />
        </div>
        <div className="arrows to_up slideTop">
          <div className="arrow" />
          <div className="arrow" />
          <div className="arrow" />
          <div className="arrow" />
          <div className="arrow" />
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="section-title mx-width-100 wow fadeInUp">
              <p className="subtitle">
                <i className="fal fa-book" />
                Our Newsletters
              </p>
              <h3 className="title">
                Get More Every Single Update To Join Our Newsletters
              </h3>
            </div>
          </div>
          <div className="col-xl-8">
            <div
              className="newsletter_form wow fadeInDown"
              data-wow-delay=".3s"
            >
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Email"
                    autoComplete="off"
                    name="#"
                  />
                  <div className="input-group-append ml-0">
                    <button
                      type="submit"
                      className="thm-btn bg-thm-color-three btn-rounded"
                    >
                      Subscribe Now
                      <i className="fal fa-chevron-right ml-2" />
                    </button>
                  </div>
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="condition"
                    name="condition"
                    defaultChecked
                  />
                  <label className="custom-control-label" htmlFor="condition">
                    Get Update Monthly Subscription
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home3Newsletter;
