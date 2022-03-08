import { useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import Counter from "../src/components/Counter";
import FooterContact from "../src/components/FooterContact";
import PageTitleBanner from "../src/components/PageTitleBanner";
import VideoPopup from "../src/components/VideoPopup";
import Layout from "../src/layout/Layout";

const TeamDetails = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layout>
      <PageTitleBanner pageName="Team Details" />
      {video && <VideoPopup close={() => setVideo(false)} />}

      <section className="section-padding team_details">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="team_img mb-md-80">
                <img
                  src="assets/images/team/team_details.jpg"
                  alt="img"
                  className="image-fit wow fadeInLeft"
                />
                <div className="video_warp">
                  <img
                    src="assets/images/team/video_img.jpg"
                    alt="img"
                    className="image-fit wow fadeInDown"
                  />
                  <a
                    onClick={() => setVideo(true)}
                    href="#"
                    className="video_btn popup-youtube transform-center"
                  >
                    <i className="fas fa-play video_icon bg-thm-color-three mx-auto" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="team_text pl-0 pl-xl-5 pl-lg-3">
                <h3 className="name wow fadeInDown">Robert M. Cashin</h3>
                <p className="desi thm-color-two wow fadeInUp">
                  Math Coach Teacher
                </p>
                <ul className="social mb-xl-30 wow fadeInDown">
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
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                </ul>
                <p className="text wow fadeInUp">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  em accusantium doloremque laudantium, totam rem aperiam eaque
                  ipsa quae abillo inventore veritatis
                </p>
                <ul className="info wow fadeInDown">
                  <li>
                    <i className="icon far fa-map-marker-alt" />
                    <div className="text">
                      <h6 className="mb-0">Location</h6>
                      <p className="mb-0">354 Oakridge Lane, Camden - USA</p>
                    </div>
                  </li>
                  <li>
                    <i className="icon fal fa-envelope" />
                    <div className="text">
                      <h6 className="mb-0">Email Me</h6>
                      <p className="mb-0">example@example.com</p>
                    </div>
                  </li>
                  <li>
                    <i className="icon fal fa-phone" />
                    <div className="text">
                      <h6 className="mb-0">Phone</h6>
                      <p className="mb-0">+012 (345) 6789</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding pt-0 team_details">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Tab.Container defaultActiveKey="description">
                <Nav className="nav nav-tabs style_2">
                  <Nav.Item className="nav-item">
                    <Nav.Link
                      href="#description"
                      eventKey="description"
                      className="nav-link"
                      data-toggle="tab"
                    >
                      Description
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link
                      href="#coach"
                      eventKey="coach"
                      className="nav-link"
                      data-toggle="tab"
                    >
                      Coach
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content className="tab-content">
                  <Tab.Pane
                    className="tab-pane fade show"
                    eventKey="description"
                  >
                    <p>
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment, so blinded by desire,
                      that they cannot foresee the pain and trouble that are
                      bound to ensue; and equal blame belongs to those who fail
                      in their duty through weakness of will, which is the same
                      as saying through shrinking from toil and pain. These
                      cases are perfectly simple and easy to distinguish. In a
                      free hour, when our power of choice is untrammelled and
                      when nothing prevents our being able to do what we like
                      best, every pleasure is to be welcomed and every pain
                      avoided. But in certain circumstances and owing to the
                      claims of duty or the obligations of business it will
                      frequently occur that pleasures have to be repudiated and
                      annoyances accepted. The wise man therefore always holds
                      in these matters to this principle of selection: he
                      rejects pleasures to secure other greater pleasures, or
                      else he endures pains to avoid worse pains
                    </p>
                  </Tab.Pane>
                  <Tab.Pane className="tab-pane fade" eventKey="coach">
                    {/* Counter Box Start */}
                    <div className="section-padding pt-0">
                      <div className="row">
                        {/* Box */}
                        <div className="col-lg-3 col-md-6">
                          <div className="counter_box">
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
                          <div className="counter_box">
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
                          <div className="counter_box">
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
                          <div className="counter_box">
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
                    {/* Counter Box End */}
                    {/* Skills Start */}
                    {/* Skills End */}
                    <div className="skills_sec">
                      <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6">
                          <div className="skill_box mb-xl-30 mb-md-80">
                            <h5 className="title">Best Skills</h5>
                            <div className="progress_bar_block">
                              <div className="progress_block">
                                <div className="text">
                                  <h6 className="title counter">
                                    Business Consulting{" "}
                                    <b
                                      data-from={0}
                                      data-to={89}
                                      style={{ left: "89%" }}
                                    >
                                      89
                                    </b>
                                  </h6>
                                  <div className="progress bg-thm-color-two">
                                    <div
                                      className="progress-bar bg-thm-color-two"
                                      role="progressbar"
                                      aria-valuenow={89}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                      style={{ width: "89%" }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="progress_block">
                                <div className="text">
                                  <h6 className="title counter">
                                    Health Coaching{" "}
                                    <b
                                      data-from={0}
                                      data-to={93}
                                      style={{ left: "93%" }}
                                    >
                                      93
                                    </b>
                                  </h6>
                                  <div className="progress bg-thm-color-three">
                                    <div
                                      className="progress-bar bg-thm-color-three"
                                      role="progressbar"
                                      aria-valuenow={93}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                      style={{ width: "93%" }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="progress_block">
                                <div className="text">
                                  <h6 className="title counter">
                                    Life Coaching{" "}
                                    <b
                                      data-from={0}
                                      data-to={87}
                                      style={{ left: "87%" }}
                                    >
                                      87
                                    </b>
                                  </h6>
                                  <div className="progress bg-thm-color-four">
                                    <div
                                      className="progress-bar bg-thm-color-four"
                                      role="progressbar"
                                      aria-valuenow={87}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                      style={{ width: "87%" }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="progress_block">
                                <div className="text">
                                  <h6 className="title counter">
                                    Career Development{" "}
                                    <b
                                      data-from={0}
                                      data-to={92}
                                      style={{ left: "92%" }}
                                    >
                                      92
                                    </b>
                                  </h6>
                                  <div className="progress bg-thm-color-six">
                                    <div
                                      className="progress-bar bg-thm-color-six"
                                      role="progressbar"
                                      aria-valuenow={92}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                      style={{ width: "92%" }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <div className="image_box relative z-1 mb-xl-30 shadow_1">
                            <img
                              src="assets/images/skills_2.jpg"
                              alt="img"
                              className="image-fit"
                            />
                            <img
                              src="assets/images/elements/element_34.png"
                              alt="img"
                              className="element_1 rotate_elem"
                            />
                            <img
                              src="assets/images/elements/element_25.png"
                              alt="img"
                              className="element_2 rotate_elem"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </div>
      </section>
      <FooterContact />
    </Layout>
  );
};

export default TeamDetails;
