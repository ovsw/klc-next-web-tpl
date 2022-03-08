import Link from "next/dist/client/link";
import { useState } from "react";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import FooterContact from "../src/components/FooterContact";
import PageTitleBanner from "../src/components/PageTitleBanner";
import VideoPopup from "../src/components/VideoPopup";
import Layout from "../src/layout/Layout";
import { testimonial_slider } from "../src/sliderProps";

const About2 = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layout>
      <PageTitleBanner pageName="About Us" />
      {video && <VideoPopup close={() => setVideo(false)} />}

      <section className="section">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="section-title left-align wow fadeInDown">
                <p className="subtitle">
                  <i className="fal fa-book" />
                  About Me
                </p>
                <h3 className="title">
                  Top Lessons For Getting You Back On Track.
                </h3>
                <p className="mb-0">
                  Sed ut perspiciatis unde omnis iste natus voluptatem
                  accusantiue doloremque laudantium totam aperiam eaque quae
                  abillo inventore veritatis et quasi architecto beatae vitae
                  dicta
                </p>
              </div>
              <ul className="about_list style_2 mb-xl-30 wow fadeInUp">
                <li>Coach Mentoring</li>
                <li>Career Development</li>
                <li>Ask Consulatncy</li>
                <li>Online Learning</li>
              </ul>
              <Link href="/contact">
                <a className="thm-btn bg-thm-color-two thm-color-two-shadow btn-rectangle mt-3 wow fadeInDown">
                  Contact Me
                  <i className="fal fa-chevron-right ml-2" />
                </a>
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="image_box relative z-1 text-center about_me">
                <img
                  src="assets/images/about/about_me.png"
                  alt="img"
                  className="wow fadeInRight"
                />
                <span className="bg-thm-color-three circle_element" />
                <div className="progress_box grid wow fadeInDown">
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
                <img
                  src="assets/images/elements/element_28.png"
                  alt="element"
                  className="element_1"
                />
                <img
                  src="assets/images/elements/element_29.png"
                  alt="element"
                  className="element_2 rotate_elem"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About me End */}
      {/* Features Start */}
      <section
        className="section-padding about_bg section-bg features_sec pb-extra"
        style={{ backgroundImage: "url(assets/images/bg/bg_1.png)" }}
      >
        <div className="container">
          <div className="row">
            {/* Feature Box Start */}
            <div className="col-lg-3 col-md-6">
              <div className="features_box style_3 wow fadeInDown">
                <div className="icon">
                  <img src="assets/images/icons/icon_1.png" alt="img" />
                </div>
                <h5>Exclusive Coach</h5>
                <p>Quis autem vel eum reprehenderit quin eavoluptate</p>
                <Link href="/services">
                  <a>
                    <span>Read More</span>
                    <i className="fal fa-chevron-right" />
                  </a>
                </Link>
              </div>
            </div>
            {/* Feature Box End */}
            {/* Feature Box Start */}
            <div className="col-lg-3 col-md-6">
              <div className="features_box style_3 wow fadeInUp">
                <div className="icon">
                  <img src="assets/images/icons/icon_2.png" alt="img" />
                </div>
                <h5>Creative Minds</h5>
                <p>Quis autem vel eum reprehenderit quin eavoluptate</p>
                <Link href="/services">
                  <a>
                    <span>Read More</span>
                    <i className="fal fa-chevron-right" />
                  </a>
                </Link>
              </div>
            </div>
            {/* Feature Box End */}
            {/* Feature Box Start */}
            <div className="col-lg-3 col-md-6">
              <div className="features_box style_3 wow fadeInDown">
                <div className="icon">
                  <img src="assets/images/icons/icon_3.png" alt="img" />
                </div>
                <h5>Video Tutorials</h5>
                <p>Quis autem vel eum reprehenderit quin eavoluptate</p>
                <Link href="/services">
                  <a>
                    <span>Read More</span>
                    <i className="fal fa-chevron-right" />
                  </a>
                </Link>
              </div>
            </div>
            {/* Feature Box End */}
            {/* Feature Box Start */}
            <div className="col-lg-3 col-md-6">
              <div className="features_box style_3 wow fadeInUp">
                <div className="icon">
                  <img src="assets/images/icons/icon_4.png" alt="img" />
                </div>
                <h5>Worlds Record</h5>
                <p>Quis autem vel eum reprehenderit quin eavoluptate</p>
                <Link href="/services">
                  <a>
                    <span>Read More</span>
                    <i className="fal fa-chevron-right" />
                  </a>
                </Link>
              </div>
            </div>
            {/* Feature Box End */}
          </div>
        </div>
      </section>
      {/* Features End */}
      {/* Video Start */}
      <div className="section pt-0 video_box_elements mt-negative">
        <div className="container relative z-1">
          <div className="row">
            <div className="col-12">
              <div className="video_warp style_2 relative z-1 wow fadeInDown">
                <img
                  src="assets/images/video_img_2.jpg"
                  alt="img"
                  className="image-fit"
                />
                <a
                  href="#"
                  onClick={() => setVideo(true)}
                  className="popup-youtube transform-center justify-content-center d-flex"
                >
                  <img src="assets/images/icons/youtube.png" alt="icon" />
                </a>
              </div>
            </div>
          </div>
          <img
            src="assets/images/elements/element_25.png"
            alt="element"
            className="element_1 rotate_elem"
          />
          <img
            src="assets/images/elements/element_30.png"
            alt="element"
            className="element_2 rotate_elem"
          />
          <img
            src="assets/images/elements/element_27.png"
            alt="element"
            className="element_3 rotate_elem"
          />
          <div className="arrows to_up one slideTop">
            <div className="arrow" />
            <div className="arrow" />
            <div className="arrow" />
            <div className="arrow" />
            <div className="arrow" />
          </div>
          <div className="arrows to_up two slideTop">
            <div className="arrow" />
            <div className="arrow" />
            <div className="arrow" />
            <div className="arrow" />
            <div className="arrow" />
          </div>
        </div>
      </div>
      {/* Video End */}
      {/* What We Know Start */}
      <section className="what_we_know section pt-0">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="image_box relative z-1 text-center about_me mb-md-80">
                <img
                  src="assets/images/about/about_me.png"
                  alt="img"
                  className="wow fadeInLeft"
                />
                <span className="bg-thm-color-three circle_element" />
                <div className="progress_box grid wow fadeInDown">
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
                <img
                  src="assets/images/elements/element_28.png"
                  alt="element"
                  className="element_1"
                />
                <img
                  src="assets/images/elements/element_29.png"
                  alt="element"
                  className="element_2 rotate_elem"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="section-title left-align wow fadeInDown">
                <p className="subtitle">
                  <i className="fal fa-book" />
                  What We Know
                </p>
                <h3 className="title mb-0">
                  Learn Online Coaching Lessons For Remote
                </h3>
              </div>
              <ul className="why-us-list style_2 style_3">
                <li className="wow fadeInUp">
                  <i className="icon fal fa-check" />
                  <div className="text">
                    <h6 className="mb-0">
                      Understand The Brain Where All Your Power
                    </h6>
                  </div>
                  <img
                    src="assets/images/whyus_bg.jpg"
                    alt="img"
                    className="image-fit"
                  />
                </li>
                <li className="wow fadeInDown">
                  <i className="icon fal fa-check" />
                  <div className="text">
                    <h6 className="mb-0">
                      Ease Anxiety Stress Worry and Boredom
                    </h6>
                  </div>
                  <img
                    src="assets/images/whyus_bg.jpg"
                    alt="img"
                    className="image-fit"
                  />
                </li>
                <li className="wow fadeInUp">
                  <i className="icon fal fa-check" />
                  <div className="text">
                    <h6 className="mb-0">
                      Process Emotion And Create More Energy
                    </h6>
                  </div>
                  <img
                    src="assets/images/whyus_bg.jpg"
                    alt="img"
                    className="image-fit"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* What We Know End */}
      {/* Counter Box Start */}
      <div className="section-padding pt-0">
        <div className="container">
          <div className="row">
            {/* Box */}
            <div className="col-lg-3 col-md-6">
              <div
                className="counter_box wow fadeInDown"
                data-wow-delay=".10ms"
              >
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
              <div className="counter_box wow fadeInUp" data-wow-delay=".20ms">
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
              <div
                className="counter_box wow fadeInDown"
                data-wow-delay=".30ms"
              >
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
              <div className="counter_box wow fadeInUp" data-wow-delay=".40ms">
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
      {/* Counter Box End */}
      {/* Testimonials Start */}
      <section
        className="section section-bg relative z-1 about_bg"
        style={{ backgroundImage: "url(assets/images/bg/bg_1.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title left-align wow fadeInLeft">
                <p className="subtitle mb-4">
                  <i className="fal fa-book" />
                  Our Testimonials
                </p>
                <h3 className="title mb-0">
                  What’s Our Clients
                  <br /> About Us
                </h3>
              </div>
            </div>
          </div>
          <Slider
            {...testimonial_slider}
            className="testimonial_slider style_2 row wow fadeInDown"
          >
            {/* Testimonial Item */}
            <div className="slide-item col-12">
              <div className="testimonial_item style_4">
                <div className="author">
                  <div className="image bg-thm-color-two">
                    <img
                      src="assets/images/author/1.jpg"
                      alt="img"
                      className="image-fit"
                    />
                  </div>
                  <div className="text">
                    <h6 className="mb-0">Herminia F. Hudson</h6>
                    <p className="mb-0 font-weight-bold thm-color-two">
                      Web Designer
                    </p>
                  </div>
                </div>
                <p className="comment">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudtium totam rem aperiam eaque quae
                </p>
                <div className="ratings">
                  <i className="fal fa-star active" />
                  <i className="fal fa-star active" />
                  <i className="fal fa-star active" />
                  <i className="fal fa-star active" />
                  <i className="fal fa-star" />
                </div>
              </div>
            </div>
            {/* Testimonial Item */}
            {/* Testimonial Item */}
            <div className="slide-item col-12">
              <div className="testimonial_item style_4">
                <div className="author">
                  <div className="image bg-thm-color-two">
                    <img
                      src="assets/images/author/2.jpg"
                      alt="img"
                      className="image-fit"
                    />
                  </div>
                  <div className="text">
                    <h6 className="mb-0">Robert M. Morales</h6>
                    <p className="mb-0 font-weight-bold thm-color-two">
                      Business Manager
                    </p>
                  </div>
                </div>
                <p className="comment">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudtium totam rem aperiam eaque quae
                </p>
                <div className="ratings">
                  <i className="fal fa-star active" />
                  <i className="fal fa-star active" />
                  <i className="fal fa-star active" />
                  <i className="fal fa-star" />
                  <i className="fal fa-star" />
                </div>
              </div>
            </div>
            {/* Testimonial Item */}
            {/* Testimonial Item */}
            <div className="slide-item col-12">
              <div className="testimonial_item style_4">
                <div className="author">
                  <div className="image bg-thm-color-two">
                    <img
                      src="assets/images/author/3.jpg"
                      alt="img"
                      className="image-fit"
                    />
                  </div>
                  <div className="text">
                    <h6 className="mb-0">Nicolas Vanderpool</h6>
                    <p className="mb-0 font-weight-bold thm-color-two">
                      Apps Developer
                    </p>
                  </div>
                </div>
                <p className="comment">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudtium totam rem aperiam eaque quae
                </p>
                <div className="ratings">
                  <i className="fal fa-star active" />
                  <i className="fal fa-star active" />
                  <i className="fal fa-star active" />
                  <i className="fal fa-star active" />
                  <i className="fal fa-star active" />
                </div>
              </div>
            </div>
            {/* Testimonial Item */}
            {/* Testimonial Item */}
            <div className="slide-item col-12">
              <div className="testimonial_item style_4">
                <div className="author">
                  <div className="image bg-thm-color-two">
                    <img
                      src="assets/images/author/1.jpg"
                      alt="img"
                      className="image-fit"
                    />
                  </div>
                  <div className="text">
                    <h6 className="mb-0">Herminia F. Hudson</h6>
                    <p className="mb-0 font-weight-bold thm-color-two">
                      Web Designer
                    </p>
                  </div>
                </div>
                <p className="comment">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudtium totam rem aperiam eaque quae
                </p>
                <div className="ratings">
                  <i className="fal fa-star active" />
                  <i className="fal fa-star active" />
                  <i className="fal fa-star active" />
                  <i className="fal fa-star active" />
                  <i className="fal fa-star" />
                </div>
              </div>
            </div>
            {/* Testimonial Item */}
            {/* Testimonial Item */}
            <div className="slide-item col-12">
              <div className="testimonial_item style_4">
                <div className="author">
                  <div className="image bg-thm-color-two">
                    <img
                      src="assets/images/author/2.jpg"
                      alt="img"
                      className="image-fit"
                    />
                  </div>
                  <div className="text">
                    <h6 className="mb-0">Robert M. Morales</h6>
                    <p className="mb-0 font-weight-bold thm-color-two">
                      Business Manager
                    </p>
                  </div>
                </div>
                <p className="comment">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudtium totam rem aperiam eaque quae
                </p>
                <div className="ratings">
                  <i className="fal fa-star active" />
                  <i className="fal fa-star active" />
                  <i className="fal fa-star active" />
                  <i className="fal fa-star" />
                  <i className="fal fa-star" />
                </div>
              </div>
            </div>
            {/* Testimonial Item */}
            {/* Testimonial Item */}
            <div className="slide-item col-12">
              <div className="testimonial_item style_4">
                <div className="author">
                  <div className="image bg-thm-color-two">
                    <img
                      src="assets/images/author/3.jpg"
                      alt="img"
                      className="image-fit"
                    />
                  </div>
                  <div className="text">
                    <h6 className="mb-0">Nicolas Vanderpool</h6>
                    <p className="mb-0 font-weight-bold thm-color-two">
                      Apps Developer
                    </p>
                  </div>
                </div>
                <p className="comment">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudtium totam rem aperiam eaque quae
                </p>
                <div className="ratings">
                  <i className="fal fa-star active" />
                  <i className="fal fa-star active" />
                  <i className="fal fa-star active" />
                  <i className="fal fa-star active" />
                  <i className="fal fa-star active" />
                </div>
              </div>
            </div>
            {/* Testimonial Item */}
          </Slider>
        </div>
      </section>
      {/* Testimonials End */}
      {/* Sponsors Start */}
      <div className="section-padding">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-auto">
              <div className="sponsors_img">
                <img src="assets/images/sponsors/1.png" alt="img" />
              </div>
            </div>
            <div className="col-auto">
              <div className="sponsors_img">
                <img src="assets/images/sponsors/2.png" alt="img" />
              </div>
            </div>
            <div className="col-auto">
              <div className="sponsors_img">
                <img src="assets/images/sponsors/3.png" alt="img" />
              </div>
            </div>
            <div className="col-auto">
              <div className="sponsors_img">
                <img src="assets/images/sponsors/4.png" alt="img" />
              </div>
            </div>
            <div className="col-auto">
              <div className="sponsors_img">
                <img src="assets/images/sponsors/5.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterContact />
    </Layout>
  );
};

export default About2;
