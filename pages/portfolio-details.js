import Link from "next/dist/client/link";
import FooterContact from "../src/components/FooterContact";
import PageTitleBanner from "../src/components/PageTitleBanner";
import Layout from "../src/layout/Layout";

const PortfolioDetails = () => {
  return (
    <Layout>
      <PageTitleBanner pageName="Portfolio Details" />

      <section className="section portfolio_details">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="detail_img">
                <img
                  src="assets/images/portfolio/details_img.jpg"
                  alt="img"
                  className="image-fit"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="text mb-md-80">
                <h3 className="fw-600 title">
                  Gaining For VR Learning Programs
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quiluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione
                </p>
                <p>
                  <span className="dropcap">M</span> Quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum solorem eum fugiat quo
                  voluptas nulla pariatur laudantium totam rem aperquae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quiluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni
                  dolores eos qui ratione voluptatem sequi nesciunt.{" "}
                </p>
                <h5 className="fw-600">Why Learn VR Program</h5>
                <p>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself, because
                </p>
                <ul className="check_list">
                  <li>
                    <i className="fal fa-check" /> Understand The Brain, Where
                    All Your Power
                  </li>
                  <li>
                    <i className="fal fa-check" /> Ease Anxiety, Stress, Worry,
                    And Boredom
                  </li>
                  <li>
                    <i className="fal fa-check" /> Process Emotion And Create
                    More Energy
                  </li>
                  <li>
                    <i className="fal fa-check" /> Be Less Frustrated By
                    Learning Relationship Tools
                  </li>
                  <li>
                    <i className="fal fa-check" /> Motivate Yourself To Get More
                    Done In Less Time
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar style_3">
                <div className="sidebar_widget">
                  <h5 className="widget_title">Project Details</h5>
                  <div className="sidebar_widget_inner">
                    <ul className="info_widget">
                      <li>
                        <span>Clients</span>
                        Blaine D. Cotton
                      </li>
                      <li>
                        <span>Project</span>
                        VR Learning
                      </li>
                      <li>
                        <span>Service</span>
                        Courses/Learning
                      </li>
                      <li>
                        <span>Category</span>
                        VR Coach
                      </li>
                      <li>
                        <span>Date</span>
                        25 May 2021
                      </li>
                      <li>
                        <span>Share</span>
                        <ul className="social">
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-behance" />
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Start */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="fw-600">Related Project</h3>
            </div>
          </div>
          <div className="row">
            {/* Portfolio Start */}
            <div className="col-lg-4 col-md-6">
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
            <div className="col-lg-4 col-md-6">
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
            <div className="col-lg-4 col-md-6">
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
          </div>
        </div>
      </section>
      <FooterContact />
    </Layout>
  );
};

export default PortfolioDetails;
