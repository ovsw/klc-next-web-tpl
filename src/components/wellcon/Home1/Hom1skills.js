import Counter from "../../Counter";

const Hom1skills = () => {
  return (
    <section className="skills-sec relative z-1">
      <div className="container-fluid p-0 h-100">
        <div className="row no-gutters h-100">
          <div className="col-lg-6">
            <div
              className="section-bg bg-thm-color-one h-100"
              style={{ backgroundImage: "url(assets/images/bg/bg_2.png)" }}
            />
          </div>
          <div className="col-lg-6">
            <img
              src="assets/images/skills.jpg"
              className="image-fit"
              alt="img"
            />
          </div>
        </div>
      </div>
      <div className="transform-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title left-align white wow fadeInUp">
                <p className="subtitle">
                  <i className="fal fa-book" />
                  Our Skills
                </p>
                <h3 className="title">{`We're Awards Winning Coach Academy`}</h3>
                <p className="thm-color-white">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8">
              <div className="row justify-content-center">
                <div className="col-md-4 col-sm-6">
                  <div
                    className="progress_box grid wow fadeInDown"
                    data-wow-delay=".20ms"
                  >
                    <div
                      className="circle_bar"
                      data-percent={89}
                      data-track-color="#ecf2ff"
                      data-bar-color="#4b83fb"
                      data-size={80}
                    >
                      <div className="counter transform-center text-center">
                        <Counter end={89} />
                      </div>
                    </div>
                    <div className="text">
                      <h5 className="mb-0">
                        Business
                        <br />
                        Consulting
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div
                    className="progress_box grid wow fadeInUp"
                    data-wow-delay=".30ms"
                  >
                    <div
                      className="circle_bar"
                      data-percent={69}
                      data-track-color="#ecf2ff"
                      data-bar-color="#65cfa9"
                      data-size={80}
                    >
                      <div className="counter transform-center text-center">
                        <Counter end={69} />
                      </div>
                    </div>
                    <div className="text">
                      <h5 className="mb-0">
                        Health
                        <br />
                        Coaching
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div
                    className="progress_box grid fadeInDown"
                    data-wow-delay=".40ms"
                  >
                    <div
                      className="circle_bar"
                      data-percent={96}
                      data-track-color="#ecf2ff"
                      data-bar-color="#ffbd3f"
                      data-size={80}
                    >
                      <div className="counter transform-center text-center">
                        <Counter end={96} />
                      </div>
                    </div>
                    <div className="text">
                      <h5 className="mb-0">
                        Marketing
                        <br />
                        Strategy
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hom1skills;
