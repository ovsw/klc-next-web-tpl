import Link from "next/dist/client/link";
import { useEffect } from "react";
import FooterContact from "../src/components/FooterContact";
import PageTitleBanner from "../src/components/PageTitleBanner";
import Layout from "../src/layout/Layout";
import { dataFilter } from "../src/utils";

const PortfolioGrid = () => {
  useEffect(() => {
    dataFilter();
  });
  return (
    <Layout>
      <PageTitleBanner pageName="Portfolio Grid" />

      <section className="section-padding isotope-filter-items">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="filter-btns mb-5">
                <ul>
                  <li className="active filter-trigger" data-filter=".all">
                    <a href="#">All</a>
                  </li>
                  <li className="filter-trigger" data-filter=".lifestyle">
                    <a href="#">Lifestyle</a>
                  </li>
                  <li className="filter-trigger" data-filter=".goals">
                    <a href="#">Goals</a>
                  </li>
                  <li className="filter-trigger" data-filter=".fashion">
                    <a href="#">Fashion</a>
                  </li>
                  <li className="filter-trigger" data-filter=".health">
                    <a href="#">Health</a>
                  </li>
                  <li className="filter-trigger" data-filter=".business">
                    <a href="#">Business</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row filteritems">
            {/* Portfolio Start */}
            <div className="col-lg-4 col-md-6 masonry-item all lifestyle business health">
              <div className="portfolio_box">
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
                      <Link href="/portfolio-details">Web Development</Link>
                    </h4>
                    <p>Design Coach</p>
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
            {/* Portfolio End */}
            {/* Portfolio Start */}
            <div className="col-lg-4 col-md-6 masonry-item all goals lifestyle business">
              <div className="portfolio_box">
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
                      <Link href="/portfolio-details">Online Education</Link>
                    </h4>
                    <p>English Coach</p>
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
            {/* Portfolio End */}
            {/* Portfolio Start */}
            <div className="col-lg-4 col-md-6 masonry-item all fashion goals lifestyle">
              <div className="portfolio_box">
                <div className="portfolio_img">
                  <img
                    src="assets/images/portfolio/3.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
                <div className="portfolio_caption">
                  <div className="text_box">
                    <h4 className="title mb-0">
                      <Link href="/portfolio-details">Marketing Strategy</Link>
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
            {/* Portfolio End */}
            {/* Portfolio Start */}
            <div className="col-lg-4 col-md-6 masonry-item all health fashion goals">
              <div className="portfolio_box">
                <div className="portfolio_img">
                  <img
                    src="assets/images/portfolio/4.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
                <div className="portfolio_caption">
                  <div className="text_box">
                    <h4 className="title mb-0">
                      <Link href="/portfolio-details">Business Consulting</Link>
                    </h4>
                    <p>Life Coach</p>
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
            {/* Portfolio End */}
            {/* Portfolio Start */}
            <div className="col-lg-4 col-md-6 masonry-item all business health fashion">
              <div className="portfolio_box">
                <div className="portfolio_img">
                  <img
                    src="assets/images/portfolio/5.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
                <div className="portfolio_caption">
                  <div className="text_box">
                    <h4 className="title mb-0">
                      <Link href="/portfolio-details">Well Management</Link>
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
            {/* Portfolio End */}
            {/* Portfolio Start */}
            <div className="col-lg-4 col-md-6 masonry-item all lifestyle business health">
              <div className="portfolio_box">
                <div className="portfolio_img">
                  <img
                    src="assets/images/portfolio/6.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
                <div className="portfolio_caption">
                  <div className="text_box">
                    <h4 className="title mb-0">
                      <Link href="/portfolio-details">Co-Relationship</Link>
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
            {/* Portfolio End */}
            {/* Portfolio Start */}
            <div className="col-lg-4 col-md-6 masonry-item all goals lifestyle business">
              <div className="portfolio_box">
                <div className="portfolio_img">
                  <img
                    src="assets/images/portfolio/7.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
                <div className="portfolio_caption">
                  <div className="text_box">
                    <h4 className="title mb-0">
                      <Link href="/portfolio-details">
                        Relationship Buildup
                      </Link>
                    </h4>
                    <p>Health Coach</p>
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
            {/* Portfolio End */}
            {/* Portfolio Start */}
            <div className="col-lg-4 col-md-6 masonry-item all fashion goals lifestyle">
              <div className="portfolio_box">
                <div className="portfolio_img">
                  <img
                    src="assets/images/portfolio/8.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
                <div className="portfolio_caption">
                  <div className="text_box">
                    <h4 className="title mb-0">
                      <Link href="/portfolio-details">Well Management</Link>
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
            {/* Portfolio End */}
            {/* Portfolio Start */}
            <div className="col-lg-4 col-md-6 masonry-item all health fashion goals">
              <div className="portfolio_box">
                <div className="portfolio_img">
                  <img
                    src="assets/images/portfolio/9.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
                <div className="portfolio_caption">
                  <div className="text_box">
                    <h4 className="title mb-0">
                      <Link href="/portfolio-details">Physical Exercise</Link>
                    </h4>
                    <p>Health Coach</p>
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
            {/* Portfolio End */}
          </div>
        </div>
      </section>

      <FooterContact />
    </Layout>
  );
};

export default PortfolioGrid;
