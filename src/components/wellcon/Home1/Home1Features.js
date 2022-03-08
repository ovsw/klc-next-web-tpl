import Link from "next/dist/client/link";
const Home1Features = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title wow fadeInUp">
              <p className="subtitle">
                <i className="fal fa-book" />
                What We Offer
              </p>
              <h3 className="title">
                We Provide Professional Business Solutions.
              </h3>
            </div>
          </div>
          {/* Box */}
          <div className="col-lg-3 col-md-6">
            <div
              className="features_box style_2 wow fadeInDown"
              data-wow-delay=".20ms"
            >
              <div className="icon">
                <img src="assets/images/icons/icon_10.png" alt="icon" />
              </div>
              <h5>Exclusive Coach</h5>
              <p>
                Sed ut perspicia unde omnis iste natus error sit voluptatem
                accusantium doloreue
              </p>
              <Link href="/services">
                <a className="thm-btn bg-thm-color-two-light thm-color-two btn-rectangle btn-small mt-2">
                  <i className="fal fa-chevron-right font-weight-bold" />
                </a>
              </Link>
            </div>
          </div>
          {/* Box */}
          {/* Box */}
          <div className="col-lg-3 col-md-6">
            <div
              className="features_box style_2 wow fadeInUp"
              data-wow-delay=".30ms"
            >
              <div className="icon">
                <img src="assets/images/icons/icon_11.png" alt="icon" />
              </div>
              <h5>Consulting</h5>
              <p>
                Sed ut perspicia unde omnis iste natus error sit voluptatem
                accusantium doloreue
              </p>
              <Link href="/services">
                <a className="thm-btn bg-thm-color-two-light thm-color-two btn-rectangle btn-small mt-2">
                  <i className="fal fa-chevron-right font-weight-bold" />
                </a>
              </Link>
            </div>
          </div>
          {/* Box */}
          {/* Box */}
          <div className="col-lg-3 col-md-6">
            <div
              className="features_box style_2 wow fadeInDown"
              data-wow-delay=".40ms"
            >
              <div className="icon">
                <img src="assets/images/icons/icon_12.png" alt="icon" />
              </div>
              <h5>Live Trainings</h5>
              <p>
                Sed ut perspicia unde omnis iste natus error sit voluptatem
                accusantium doloreue
              </p>
              <Link href="/services">
                <a className="thm-btn bg-thm-color-two-light thm-color-two btn-rectangle btn-small mt-2">
                  <i className="fal fa-chevron-right font-weight-bold" />
                </a>
              </Link>
            </div>
          </div>
          {/* Box */}
          {/* Box */}
          <div className="col-lg-3 col-md-6">
            <div
              className="features_box style_2 wow fadeInUp"
              data-wow-delay=".50ms"
            >
              <div className="icon">
                <img src="assets/images/icons/icon_13.png" alt="icon" />
              </div>
              <h5>Marketing Goals</h5>
              <p>
                Sed ut perspicia unde omnis iste natus error sit voluptatem
                accusantium doloreue
              </p>
              <Link href="/services">
                <a className="thm-btn bg-thm-color-two-light thm-color-two btn-rectangle btn-small mt-2">
                  <i className="fal fa-chevron-right font-weight-bold" />
                </a>
              </Link>
            </div>
          </div>
          {/* Box */}
        </div>
      </div>
    </section>
  );
};

export default Home1Features;
