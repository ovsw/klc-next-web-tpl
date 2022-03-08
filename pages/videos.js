import Link from "next/dist/client/link";
import { useEffect } from "react";
import Slider from "react-slick";
import FooterContact from "../src/components/FooterContact";
import PageTitleBanner from "../src/components/PageTitleBanner";
import Layout from "../src/layout/Layout";
import { coach_slide2 } from "../src/sliderProps";
import { dataFilter } from "../src/utils";

const Videos = () => {
  useEffect(() => {
    dataFilter();
  });
  return (
    <Layout>
      <PageTitleBanner pageName="Videos" />

      <section className="section-padding isotope-filter-items">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="filter-btns mb-5 wow fadeInDown">
                <ul>
                  <li className="active filter-trigger" data-filter="*">
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
            {/* Box Start */}
            <div className="col-lg-4 col-md-6 masonry-item lifestyle fashion business">
              <div className="video_box wow fadeInUp" data-wow-delay=".10ms">
                <img
                  src="assets/images/video/1.jpg"
                  alt="img"
                  className="image-fit"
                />
                <div className="video_badges">
                  <span className="tag_badge bg-thm-color-four">Free</span>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=TKnufs85hXk"
                  className="popup-youtube video_btn"
                >
                  <i className="fas fa-play" />
                </a>
                <div className="video_text">
                  <h6 className="text-white mb-0">How To Gain Knowledge</h6>
                  <p className="mb-0 thm-color-light">By Frank L. Pierce</p>
                </div>
              </div>
            </div>
            {/* Box End */}
            {/* Box Start */}
            <div className="col-lg-4 col-md-6 masonry-item goals health lifestyle">
              <div className="video_box wow fadeInDown" data-wow-delay=".20ms">
                <img
                  src="assets/images/video/2.jpg"
                  alt="img"
                  className="image-fit"
                />
                <div className="video_badges">
                  <span className="tag_badge bg-thm-color-four">$59</span>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=TKnufs85hXk"
                  className="popup-youtube video_btn"
                >
                  <i className="fas fa-play" />
                </a>
                <div className="video_text">
                  <h6 className="text-white mb-0">
                    Bring About Maintenance Home
                  </h6>
                  <p className="mb-0 thm-color-light">By Janine T. Hostetter</p>
                </div>
              </div>
            </div>
            {/* Box End */}
            {/* Box Start */}
            <div className="col-lg-4 col-md-6 masonry-item fashion business goals">
              <div className="video_box wow fadeInUp" data-wow-delay=".30ms">
                <img
                  src="assets/images/video/3.jpg"
                  alt="img"
                  className="image-fit"
                />
                <div className="video_badges">
                  <span className="tag_badge bg-thm-color-four">$59</span>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=TKnufs85hXk"
                  className="popup-youtube video_btn"
                >
                  <i className="fas fa-play" />
                </a>
                <div className="video_text">
                  <h6 className="text-white mb-0">
                    How To Growth Your Business
                  </h6>
                  <p className="mb-0 thm-color-light">By Joan J. Young</p>
                </div>
              </div>
            </div>
            {/* Box End */}
          </div>
          <div className="row filteritems">
            {/* Box Start */}
            <div className="col-xl-3 col-lg-4 col-md-6 masonry-item health lifestyle fashion">
              <div className="video_box wow fadeInDown" data-wow-delay=".40ms">
                <img
                  src="assets/images/video/4.jpg"
                  alt="img"
                  className="image-fit"
                />
                <div className="video_badges">
                  <span className="tag_badge bg-thm-color-four">Free</span>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=TKnufs85hXk"
                  className="popup-youtube video_btn"
                >
                  <i className="fas fa-play" />
                </a>
                <div className="video_text">
                  <h6 className="text-white mb-0">How To Gain Knowledge</h6>
                  <p className="mb-0 thm-color-light">By Frank L. Pierce</p>
                </div>
              </div>
            </div>
            {/* Box End */}
            {/* Box Start */}
            <div className="col-xl-3 col-lg-4 col-md-6 masonry-item business goals health">
              <div className="video_box wow fadeInUp" data-wow-delay=".50ms">
                <img
                  src="assets/images/video/5.jpg"
                  alt="img"
                  className="image-fit"
                />
                <div className="video_badges">
                  <span className="tag_badge bg-thm-color-four">$59</span>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=TKnufs85hXk"
                  className="popup-youtube video_btn"
                >
                  <i className="fas fa-play" />
                </a>
                <div className="video_text">
                  <h6 className="text-white mb-0">How To Fit Your Health</h6>
                  <p className="mb-0 thm-color-light">By Janine T. Hostetter</p>
                </div>
              </div>
            </div>
            {/* Box End */}
            {/* Box Start */}
            <div className="col-xl-3 col-lg-4 col-md-6 masonry-item lifestyle fashion business">
              <div className="video_box wow fadeInDown" data-wow-delay=".60ms">
                <img
                  src="assets/images/video/6.jpg"
                  alt="img"
                  className="image-fit"
                />
                <div className="video_badges">
                  <span className="tag_badge bg-thm-color-four">Free</span>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=TKnufs85hXk"
                  className="popup-youtube video_btn"
                >
                  <i className="fas fa-play" />
                </a>
                <div className="video_text">
                  <h6 className="text-white mb-0">How To Gain Knowledge</h6>
                  <p className="mb-0 thm-color-light">By Frank L. Pierce</p>
                </div>
              </div>
            </div>
            {/* Box End */}
            {/* Box Start */}
            <div className="col-xl-3 col-lg-4 col-md-6 masonry-item goals health lifestyle">
              <div className="video_box wow fadeInUp" data-wow-delay=".70ms">
                <img
                  src="assets/images/video/7.jpg"
                  alt="img"
                  className="image-fit"
                />
                <div className="video_badges">
                  <span className="tag_badge bg-thm-color-four">$59</span>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=TKnufs85hXk"
                  className="popup-youtube video_btn"
                >
                  <i className="fas fa-play" />
                </a>
                <div className="video_text">
                  <h6 className="text-white mb-0">Investment Planning</h6>
                  <p className="mb-0 thm-color-light">By Janine T. Hostetter</p>
                </div>
              </div>
            </div>
            {/* Box End */}
          </div>
          <div className="row filteritems">
            {/* Box Start */}
            <div className="col-md-6 masonry-item health lifestyle fashion">
              <div className="video_box wow fadeInDown" data-wow-delay=".80ms">
                <img
                  src="assets/images/video/8.jpg"
                  alt="img"
                  className="image-fit"
                />
                <div className="video_badges">
                  <span className="tag_badge bg-thm-color-four">Free</span>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=TKnufs85hXk"
                  className="popup-youtube video_btn"
                >
                  <i className="fas fa-play" />
                </a>
                <div className="video_text">
                  <h6 className="text-white mb-0">How To Gain Knowledge</h6>
                  <p className="mb-0 thm-color-light">By Frank L. Pierce</p>
                </div>
              </div>
            </div>
            {/* Box End */}
            {/* Box Start */}
            <div className="col-md-6 masonry-item business goals health">
              <div className="video_box wow fadeInUp" data-wow-delay=".90ms">
                <img
                  src="assets/images/video/9.jpg"
                  alt="img"
                  className="image-fit"
                />
                <div className="video_badges">
                  <span className="tag_badge bg-thm-color-four">$59</span>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=TKnufs85hXk"
                  className="popup-youtube video_btn"
                >
                  <i className="fas fa-play" />
                </a>
                <div className="video_text">
                  <h6 className="text-white mb-0">How To Gain Better Future</h6>
                  <p className="mb-0 thm-color-light">By Frank L. Pierce</p>
                </div>
              </div>
            </div>
            {/* Box End */}
          </div>
        </div>
      </section>
      {/* Video End */}
      {/* Plane Start */}
      <div className="bg-thm-color-two plane_box relative z-1">
        <div className="container relative z-1">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-11 relative z-1">
              <img
                src="assets/images/elements/element_6.png"
                className="element_1 rotate_elem"
                alt="Element"
              />
              <h2 className="thm-color-white">
                The Life Coach School Has The Most Amazing Tools And
                Cutting-Edge Training
              </h2>
            </div>
          </div>
          <img
            src="assets/images/elements/element_7.png"
            className="element_2 zoom-fade"
            alt="Element"
          />
        </div>
      </div>
      {/* Plane End */}
      {/* Coach box Start */}
      <section className="section wide_fluid_container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="section-title wow fadeInDown">
                <p className="subtitle">
                  <i className="fal fa-book" />
                  Popular Coach
                </p>
                <h3 className="title">We Provide Professional Life Coachs</h3>
              </div>
            </div>
          </div>
          <Slider {...coach_slide2} className="coach_slider row wow fadeInUp">
            {/* Coach block */}
            <div className="col-12 slide-item">
              <div className="coach_block">
                <div className="coach_img">
                  <img
                    src="assets/images/coach/1.jpg"
                    alt="img"
                    className="image-fit"
                  />
                  <div className="coach_badges">
                    <span className="tag_badge bg-thm-color-four">Free</span>
                  </div>
                  <Link href="/team-details">
                    <a className="thm-btn thm-color-two bg-thm-color-white thm-color-two-shadow btn-circle link">
                      <i className="fal fa-chevron-right" />
                    </a>
                  </Link>
                </div>
                <div className="coach_caption">
                  <div className="coach_meta">
                    <Link href="/team">
                      <a className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded">
                        Business
                      </a>
                    </Link>
                    <div className="ratings">
                      <i className="fal fa-star active" />
                      <i className="fal fa-star active" />
                      <i className="fal fa-star active" />
                      <i className="fal fa-star active" />
                      <i className="fal fa-star" />
                    </div>
                  </div>
                  <h5 className="title mb-xl-20">
                    <Link href="/team-details">
                      Most Powerful Thing You Have Self Coaching Scholars
                    </Link>
                  </h5>
                  <div className="author">
                    <img
                      src="assets/images/author/1.jpg"
                      alt="img"
                      className="image-fit"
                    />
                    <a href="#" className="thm-color-one">
                      Wilbert A. Toney
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Coach block */}
            {/* Coach block */}
            <div className="col-12 slide-item">
              <div className="coach_block">
                <div className="coach_img">
                  <img
                    src="assets/images/coach/2.jpg"
                    alt="img"
                    className="image-fit"
                  />
                  <div className="coach_badges">
                    <span className="tag_badge bg-thm-color-four">$50</span>
                  </div>
                  <Link href="/team-details">
                    <a className="thm-btn thm-color-two bg-thm-color-white thm-color-two-shadow btn-circle link">
                      <i className="fal fa-chevron-right" />
                    </a>
                  </Link>
                </div>
                <div className="coach_caption">
                  <div className="coach_meta">
                    <Link href="/team">
                      <a className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded">
                        Lifestyle
                      </a>
                    </Link>
                    <div className="ratings">
                      <i className="fal fa-star active" />
                      <i className="fal fa-star active" />
                      <i className="fal fa-star active" />
                      <i className="fal fa-star active" />
                      <i className="fal fa-star active" />
                    </div>
                  </div>
                  <h5 className="title mb-xl-20">
                    <Link href="/team-details">
                      Coach Certification Programs Most Powerful Coach
                    </Link>
                  </h5>
                  <div className="author">
                    <img
                      src="assets/images/author/2.jpg"
                      alt="img"
                      className="image-fit"
                    />
                    <a href="#" className="thm-color-one">
                      Emma H. Parish
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Coach block */}
            {/* Coach block */}
            <div className="col-12 slide-item">
              <div className="coach_block">
                <div className="coach_img">
                  <img
                    src="assets/images/coach/3.jpg"
                    alt="img"
                    className="image-fit"
                  />
                  <div className="coach_badges">
                    <span className="tag_badge bg-thm-color-four">Free</span>
                  </div>
                  <Link href="/team-details">
                    <a className="thm-btn thm-color-two bg-thm-color-white thm-color-two-shadow btn-circle link">
                      <i className="fal fa-chevron-right" />
                    </a>
                  </Link>
                </div>
                <div className="coach_caption">
                  <div className="coach_meta">
                    <Link href="/team">
                      <a className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded">
                        Business
                      </a>
                    </Link>
                    <div className="ratings">
                      <i className="fal fa-star active" />
                      <i className="fal fa-star active" />
                      <i className="fal fa-star active" />
                      <i className="fal fa-star" />
                      <i className="fal fa-star" />
                    </div>
                  </div>
                  <h5 className="title mb-xl-20">
                    <Link href="/team-details">
                      Matter How Great Your Life Al Ready, We’ll Give Syatem
                    </Link>
                  </h5>
                  <div className="author">
                    <img
                      src="assets/images/author/3.jpg"
                      alt="img"
                      className="image-fit"
                    />
                    <a href="#" className="thm-color-one">
                      Junior N. West
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Coach block */}
            {/* Coach block */}
            <div className="col-12 slide-item">
              <div className="coach_block">
                <div className="coach_img">
                  <img
                    src="assets/images/coach/4.jpg"
                    alt="img"
                    className="image-fit"
                  />
                  <div className="coach_badges">
                    <span className="tag_badge bg-thm-color-four">Free</span>
                  </div>
                  <Link href="/team-details">
                    <a className="thm-btn thm-color-two bg-thm-color-white thm-color-two-shadow btn-circle link">
                      <i className="fal fa-chevron-right" />
                    </a>
                  </Link>
                </div>
                <div className="coach_caption">
                  <div className="coach_meta">
                    <Link href="/team">
                      <a className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded">
                        Lifestyle
                      </a>
                    </Link>
                    <div className="ratings">
                      <i className="fal fa-star active" />
                      <i className="fal fa-star active" />
                      <i className="fal fa-star active" />
                      <i className="fal fa-star active" />
                      <i className="fal fa-star" />
                    </div>
                  </div>
                  <h5 className="title mb-xl-20">
                    <Link href="/team-details">
                      Most Powerful Thing You Have Self Coaching Scholars
                    </Link>
                  </h5>
                  <div className="author">
                    <img
                      src="assets/images/author/1.jpg"
                      alt="img"
                      className="image-fit"
                    />
                    <a href="#" className="thm-color-one">
                      Wilbert A. Toney
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Coach block */}
            {/* Coach block */}
            <div className="col-12 slide-item">
              <div className="coach_block">
                <div className="coach_img">
                  <img
                    src="assets/images/coach/5.jpg"
                    alt="img"
                    className="image-fit"
                  />
                  <div className="coach_badges">
                    <span className="tag_badge bg-thm-color-four">$50</span>
                  </div>
                  <Link href="/team-details">
                    <a className="thm-btn thm-color-two bg-thm-color-white thm-color-two-shadow btn-circle link">
                      <i className="fal fa-chevron-right" />
                    </a>
                  </Link>
                </div>
                <div className="coach_caption">
                  <div className="coach_meta">
                    <Link href="/team">
                      <a className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded">
                        Lifestyle
                      </a>
                    </Link>
                    <div className="ratings">
                      <i className="fal fa-star active" />
                      <i className="fal fa-star active" />
                      <i className="fal fa-star active" />
                      <i className="fal fa-star active" />
                      <i className="fal fa-star active" />
                    </div>
                  </div>
                  <h5 className="title mb-xl-20">
                    <Link href="/team-details">
                      Coach Certification Programs Most Powerful Coach
                    </Link>
                  </h5>
                  <div className="author">
                    <img
                      src="assets/images/author/2.jpg"
                      alt="img"
                      className="image-fit"
                    />
                    <a href="#" className="thm-color-one">
                      Emma H. Parish
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Coach block */}
            {/* Coach block */}
            <div className="col-12 slide-item">
              <div className="coach_block">
                <div className="coach_img">
                  <img
                    src="assets/images/coach/6.jpg"
                    alt="img"
                    className="image-fit"
                  />
                  <div className="coach_badges">
                    <span className="tag_badge bg-thm-color-four">Free</span>
                  </div>
                  <Link href="/team-details">
                    <a className="thm-btn thm-color-two bg-thm-color-white thm-color-two-shadow btn-circle link">
                      <i className="fal fa-chevron-right" />
                    </a>
                  </Link>
                </div>
                <div className="coach_caption">
                  <div className="coach_meta">
                    <Link href="/team">
                      <a className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded">
                        Business
                      </a>
                    </Link>
                    <div className="ratings">
                      <i className="fal fa-star active" />
                      <i className="fal fa-star active" />
                      <i className="fal fa-star active" />
                      <i className="fal fa-star" />
                      <i className="fal fa-star" />
                    </div>
                  </div>
                  <h5 className="title mb-xl-20">
                    <Link href="/team-details">
                      Matter How Great Your Life Al Ready, We’ll Give Syatem
                    </Link>
                  </h5>
                  <div className="author">
                    <img
                      src="assets/images/author/3.jpg"
                      alt="img"
                      className="image-fit"
                    />
                    <a href="#" className="thm-color-one">
                      Junior N. West
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Coach block */}
          </Slider>
        </div>
      </section>

      <FooterContact />
    </Layout>
  );
};

export default Videos;
