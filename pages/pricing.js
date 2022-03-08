import Link from "next/dist/client/link";
import FooterContact from "../src/components/FooterContact";
import PageTitleBanner from "../src/components/PageTitleBanner";
import Price from "../src/components/Price";
import Layout from "../src/layout/Layout";

const Pricing = () => {
  return (
    <Layout>
      <PageTitleBanner pageName="Pricing" />

      <section className="pricing_sec section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title wow fadeInDown">
                <p className="subtitle">
                  <i className="fal fa-book" />
                  Pricing Plan
                </p>
                <h3 className="title">
                  Simple Pricing Plan For Business Coach
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Price />
            </div>
          </div>
        </div>
      </section>
      {/* Pricing End */}
      {/* Portfolio Start */}
      <section className="section-padding pt-0">
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
              <div className="portfolio_box wow fadeInUp">
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
                      <Link href="/portfolio-details">
                        How To Gain Knowledge
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
            <div className="col-lg-6">
              <div className="portfolio_box wow fadeInDown">
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
      {/* Portfolio End */}
      <FooterContact />
    </Layout>
  );
};

export default Pricing;
