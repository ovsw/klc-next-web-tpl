import Link from "next/dist/client/link";
import { useEffect, useState } from "react";
import FooterContact from "../src/components/FooterContact";
import PageTitleBanner from "../src/components/PageTitleBanner";
import PaginationLayout from "../src/components/PaginationLayout";
import Price from "../src/components/Price";
import VideoPopup from "../src/components/VideoPopup";
import Layout from "../src/layout/Layout";
import { getPagination, pagination } from "../src/utils";

const Services = () => {
  const [video, setVideo] = useState(false);
  let sort = 2;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination("#service", sort, active);
    let list = document.querySelectorAll("#service");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <Layout>
      <PageTitleBanner pageName="Services" />

      {video && <VideoPopup close={() => setVideo(false)} />}
      <section className="section-padding section_counter">
        <div className="container">
          <PaginationLayout id="#service" sort={2}>
            <div className="row">
              <div className="col-lg-6" id="service">
                <div className="service_block shadow_1" wow-data-delay=".10ms">
                  <div className="icon">
                    <img src="assets/images/service/1.png" alt="icon" />
                  </div>
                  <div className="text">
                    <h5 className="title">
                      <Link href="/pricing">Consultations</Link>
                    </h5>
                    <p className="mb-0">
                      Sed ut perspiciate unde omnis iste natus error sit
                      voluptatem accusantium dolore
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" id="service">
                <div className="service_block shadow_1" wow-data-delay=".20ms">
                  <div className="icon">
                    <img src="assets/images/service/2.png" alt="icon" />
                  </div>
                  <div className="text">
                    <h5 className="title">
                      <Link href="/pricing">Online Supports</Link>
                    </h5>
                    <p className="mb-0">
                      Quis autem vel eum iure reprehenderit queine voluptate
                      velit esse quam molestiae
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" id="service">
                <div className="service_block shadow_1" wow-data-delay=".30ms">
                  <div className="icon">
                    <img src="assets/images/service/3.png" alt="icon" />
                  </div>
                  <div className="text">
                    <h5 className="title">
                      <Link href="/pricing">Career Buildup</Link>
                    </h5>
                    <p className="mb-0">
                      But must explain to you how all this mistaken denouncing
                      pleasure praising
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" id="service">
                <div className="service_block shadow_1" wow-data-delay=".40ms">
                  <div className="icon">
                    <img src="assets/images/service/4.png" alt="icon" />
                  </div>
                  <div className="text">
                    <h5 className="title">
                      <Link href="/pricing">Mentorship</Link>
                    </h5>
                    <p className="mb-0">
                      Take a trivial example which of us ever undertakes
                      physical exercise, except to obtain{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" id="service">
                <div className="service_block shadow_1" wow-data-delay=".50ms">
                  <div className="icon">
                    <img src="assets/images/service/5.png" alt="icon" />
                  </div>
                  <div className="text">
                    <h5 className="title">
                      <Link href="/pricing">Massive Action</Link>
                    </h5>
                    <p className="mb-0">
                      But must explain to you how all this mistaken denouncing
                      pleasure praising
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" id="service">
                <div className="service_block shadow_1" wow-data-delay=".60ms">
                  <div className="icon">
                    <img src="assets/images/service/6.png" alt="icon" />
                  </div>
                  <div className="text">
                    <h5 className="title">
                      <Link href="/pricing">Provide Tutorials</Link>
                    </h5>
                    <p className="mb-0">
                      On the other hand, we denounce with righteous indignation
                      and dislike men beguiled
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </PaginationLayout>
        </div>
      </section>
      {/* Services End */}
      {/* Video Quote Start */}
      <section className="bg-thm-color-two-gradient z-1 video_quote">
        <img
          src="assets/images/elements/element_2.png"
          className="element_2"
          alt="Element"
        />
        <div className="container-fluid p-0">
          <div className="row no-gutters align-items-center">
            <div className="col-lg-6">
              <div className="video_warp relative z-1 h-100">
                <img
                  src="assets/images/video_img_3.png"
                  alt="img"
                  className="image-fit"
                />
                <a
                  onClick={() => setVideo(true)}
                  href="#"
                  className="popup-youtube video_btn transform-center justify-content-center d-flex style_2"
                >
                  <i className="fas fa-play video_icon bg-thm-color-three pulse-animated" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="arrows slideRight">
                <div className="arrow" />
                <div className="arrow" />
                <div className="arrow" />
                <div className="arrow" />
                <div className="arrow" />
              </div>
              <img
                src="assets/images/elements/element_11.png"
                className="element_4 rotate_elem"
                alt="img"
              />
              <div className="quote_sec about relative z-1">
                <img
                  src="assets/images/elements/element_17.png"
                  className="element_5 rotate_elem"
                  alt="img"
                />
                <div className="section-title left-align wow fadeInDown">
                  <p className="subtitle">
                    <i className="fal fa-book" />
                    Admission Going On
                  </p>
                  <h3 className="title mb-0">
                    Find Your Best Coach With Wellco
                  </h3>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudtium totam rem aperiam eaque quae
                </p>
                <form
                  className="wow fadeInUp"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="#"
                          className="form-control form-control-custom"
                          placeholder="Your Name"
                          autoComplete="off"
                        />
                        <i className="fal fa-user" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="#"
                          className="form-control form-control-custom"
                          placeholder="Email Address"
                          autoComplete="off"
                        />
                        <i className="fal fa-envelope" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <button
                        type="submit"
                        className="thm-btn bg-thm-color-two thm-color-two-shadow btn-rectangle"
                      >
                        Enroll Now <i className="fal fa-chevron-right ml-2" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Video Quote End */}
      {/* Pricing Start */}
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
      <FooterContact />
    </Layout>
  );
};

export default Services;
