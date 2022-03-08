import Link from "next/dist/client/link";
const Home1Portfolio = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-7">
            <div className="section-title left-align wow fadeInLeft">
              <p className="subtitle">
                <i className="fal fa-book" />
                Project Gallery
              </p>
              <h3 className="title">
                We Have 34520+ Project Successfully Done
              </h3>
            </div>
          </div>
          <div className="col-lg-5 text-left text-lg-right wow fadeInRight">
            <Link href="/portfolio-grid">
              <a className="thm-btn bg-thm-color-white thm-color-one btn-border btn-rectangle mb-xl-60">
                View All Project
                <i className="fal fa-chevron-right ml-2" />
              </a>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="portfolio_box wow fadeInUp" data-wow-delay=".20ms">
              <div className="portfolio_img">
                <img
                  src="assets/images/portfolio/1.jpg"
                  className="image-fit"
                  alt="img"
                />
              </div>
              <div className="portfolio_caption">
                <div className="text_box">
                  <h4 className="title mb-0">
                    <Link href="/portfolio-details">How To Gain Knowledge</Link>
                  </h4>
                  <p>Business Coach</p>
                </div>
                <div className="btn_box mb-xl-30">
                  <Link href="/portfolio-details">
                    <a className="thm-btn bg-thm-color-two-light thm-color-two btn-rectangle btn-small">
                      <i className="fal fa-chevron-right font-weight-bold" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="portfolio_box wow fadeInDown"
              data-wow-delay=".40ms"
            >
              <div className="portfolio_img">
                <img
                  src="assets/images/portfolio/2.jpg"
                  className="image-fit"
                  alt="img"
                />
              </div>
              <div className="portfolio_caption">
                <div className="text_box">
                  <h4 className="title mb-0">
                    <Link href="/portfolio-details">
                      Online Consulting Tutorials
                    </Link>
                  </h4>
                  <p>Business Coach</p>
                </div>
                <div className="btn_box mb-xl-30">
                  <Link href="/portfolio-details">
                    <a className="thm-btn bg-thm-color-two-light thm-color-two btn-rectangle btn-small">
                      <i className="fal fa-chevron-right font-weight-bold" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home1Portfolio;
