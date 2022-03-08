import Counter from "../../Counter";

const Home2Counter = () => {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="row">
          {/* Box */}
          <div className="col-lg-3 col-md-6">
            <div className="counter_box wow fadeInUp" data-wow-delay=".2s">
              <div className="icon">
                <img
                  src="assets/images/icons/icon_6.png"
                  alt="icon"
                  className="image-fit"
                />
              </div>
              <div className="text">
                <div className="counter">
                  <Counter end={369} />
                </div>
                <p className="mb-0">Popular Coach</p>
              </div>
            </div>
          </div>
          {/* Box */}
          {/* Box */}
          <div className="col-lg-3 col-md-6">
            <div className="counter_box wow fadeInUp" data-wow-delay=".4s">
              <div className="icon">
                <img
                  src="assets/images/icons/icon_7.png"
                  alt="icon"
                  className="image-fit"
                />
              </div>
              <div className="text">
                <div className="counter">
                  <Counter end={264} />
                </div>
                <p className="mb-0">Our Advisors</p>
              </div>
            </div>
          </div>
          {/* Box */}
          {/* Box */}
          <div className="col-lg-3 col-md-6">
            <div className="counter_box wow fadeInUp" data-wow-delay=".6s">
              <div className="icon">
                <img
                  src="assets/images/icons/icon_8.png"
                  alt="icon"
                  className="image-fit"
                />
              </div>
              <div className="text">
                <div className="counter">
                  <Counter end={259} />
                </div>
                <p className="mb-0">Video Tutorials</p>
              </div>
            </div>
          </div>
          {/* Box */}
          {/* Box */}
          <div className="col-lg-3 col-md-6">
            <div className="counter_box wow fadeInUp" data-wow-delay=".8s">
              <div className="icon">
                <img
                  src="assets/images/icons/icon_9.png"
                  alt="icon"
                  className="image-fit"
                />
              </div>
              <div className="text">
                <div className="counter">
                  <Counter end={568} />
                </div>
                <p className="mb-0">Student Reviews</p>
              </div>
            </div>
          </div>
          {/* Box */}
        </div>
      </div>
    </div>
  );
};

export default Home2Counter;
