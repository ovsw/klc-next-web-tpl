import Link from "next/dist/client/link";
import Counter from "../src/components/Counter";
import FooterContact from "../src/components/FooterContact";
import PageTitleBanner from "../src/components/PageTitleBanner";
import PaginationLayout from "../src/components/PaginationLayout";
import Layout from "../src/layout/Layout";

const Team = () => {
  return (
    <Layout>
      <PageTitleBanner pageName="Team Grid" />

      <section
        className="section-padding side_bg"
        style={{ backgroundImage: "url(assets/images/bg/bg_5.png)" }}
      >
        <div className="container">
          <div className="section-padding pt-0">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-6 col-lg-6 mb-md-80">
                <div className="section-title left-align wow fadeInDown">
                  <p className="subtitle">
                    <i className="fal fa-book" />
                    Our Skills
                  </p>
                  <h3 className="title wow ">
                    {`We're Awards Winning Coach Academy`}
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam eaque
                    ipsa quae inventore veritatis architecto beatae vitae dicta
                    sunt explicabo.
                  </p>
                  <Link href="/about">
                    <a className="thm-btn bg-thm-color-two thm-color-two-shadow btn-rectangle">
                      Learn More <i className="fal fa-chevron-right ml-2" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="row feature-masonry">
                  <div className="col-sm-6 grid-item wow fadeInUp">
                    <div className="progress_box grid">
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
                  </div>
                  <div className="col-sm-6 grid-item">
                    <div className="progress_box grid wow fadeInDown">
                      <div
                        className="circle_bar"
                        data-percent={69}
                        data-track-color="#ecf2ff"
                        data-bar-color="#65cfa9"
                        data-size={80}
                      >
                        <div className="counter transform-center text-center">
                          <Counter end={69} />
                        </div>
                      </div>
                      <div className="text">
                        <h5 className="mb-0">
                          Health
                          <br />
                          Coaching
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 grid-item">
                    <div className="progress_box grid wow fadeInUp">
                      <div
                        className="circle_bar"
                        data-percent={96}
                        data-track-color="#ecf2ff"
                        data-bar-color="#ffbd3f"
                        data-size={80}
                      >
                        <div className="counter transform-center text-center">
                          <Counter end={96} />
                        </div>
                      </div>
                      <div className="text">
                        <h5 className="mb-0">
                          Marketing
                          <br />
                          Strategy
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 grid-item text-center">
                    <img
                      src="assets/images/elements/transparent_shape.png"
                      alt="icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="m-0" />
        </div>
        {/* Counter Box Start */}
        <div className="section-padding pb-0">
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
                <div
                  className="counter_box wow fadeInDown"
                  data-wow-delay=".20ms"
                >
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
                  className="counter_box wow fadeInUp"
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
                <div
                  className="counter_box wow fadeInDown"
                  data-wow-delay=".40ms"
                >
                  <div className="icon">
                    <img
                      src="assets/images/icons/icon_9.png"
                      alt="icon"
                      className="image-fit"
                    />
                  </div>
                  <div className="text">
                    <div className="counter">
                      <Counter end={689} />
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
      </section>
      {/* Team Start */}
      <section
        className="section-padding bg-thm-color-two-gradient style_2 z-1 team_page_bg"
        style={{ backgroundImage: "url(assets/images/bg/bg_6.png)" }}
      >
        <img
          src="assets/images/elements/element_31.png"
          className="element_1"
          alt="Element"
        />
        <img
          src="assets/images/elements/element_32.png"
          className="element_2"
          alt="Element"
        />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title wow fadeInDown">
                <p className="subtitle">
                  <i className="fal fa-book" />
                  Our Professionals
                </p>
                <h3 className="title">Meet Our Professionals Team Members</h3>
              </div>
            </div>
          </div>
          <PaginationLayout id="#team" sort={4}>
            <div className="row">
              {/* Block Start */}
              <div className="col-lg-3 col-md-6" id="team">
                <div
                  className="team_block style_2 style_3 wow fadeInUp"
                  data-wow-delay=".10ms"
                >
                  <div className="team_img">
                    <img
                      src="assets/images/team/1.jpg"
                      alt="img"
                      className="image-fit"
                    />
                    <Link href="/team-details">
                      <a className="thm-btn bg-thm-color-two thm-color-two-shadow btn-circle link">
                        <i className="fal fa-plus" />
                      </a>
                    </Link>
                  </div>
                  <h6 className="mb-1">
                    <Link href="/team-details">
                      <a>Wallace D. Grace</a>
                    </Link>
                  </h6>
                  <p className="thm-color-two mb-0 font-weight-bold">
                    Coach Teacher
                  </p>
                </div>
              </div>
              {/* Block End */}
              {/* Block Start */}
              <div className="col-lg-3 col-md-6" id="team">
                <div
                  className="team_block style_2 style_3 wow fadeInDown"
                  data-wow-delay=".20ms"
                >
                  <div className="team_img">
                    <img
                      src="assets/images/team/2.jpg"
                      alt="img"
                      className="image-fit"
                    />
                    <Link href="/team-details">
                      <a className="thm-btn bg-thm-color-two thm-color-two-shadow btn-circle link">
                        <i className="fal fa-plus" />
                      </a>
                    </Link>
                  </div>
                  <h6 className="mb-1">
                    <Link href="/team-details">
                      <a>Evan A. Ethridge</a>
                    </Link>
                  </h6>
                  <p className="thm-color-two mb-0 font-weight-bold">
                    Coach Teacher
                  </p>
                </div>
              </div>
              {/* Block End */}
              {/* Block Start */}
              <div className="col-lg-3 col-md-6" id="team">
                <div
                  className="team_block style_2 style_3 wow fadeInUp"
                  data-wow-delay=".30ms"
                >
                  <div className="team_img">
                    <img
                      src="assets/images/team/3.jpg"
                      alt="img"
                      className="image-fit"
                    />
                    <Link href="/team-details">
                      <a className="thm-btn bg-thm-color-two thm-color-two-shadow btn-circle link">
                        <i className="fal fa-plus" />
                      </a>
                    </Link>
                  </div>
                  <h6 className="mb-1">
                    <Link href="/team-details">
                      <a>Marcus L. Duncan</a>
                    </Link>
                  </h6>
                  <p className="thm-color-two mb-0 font-weight-bold">
                    Coach Teacher
                  </p>
                </div>
              </div>
              {/* Block End */}
              {/* Block Start */}
              <div className="col-lg-3 col-md-6" id="team">
                <div
                  className="team_block style_2 style_3 wow fadeInDown"
                  data-wow-delay=".40ms"
                >
                  <div className="team_img">
                    <img
                      src="assets/images/team/4.jpg"
                      alt="img"
                      className="image-fit"
                    />
                    <Link href="/team-details">
                      <a className="thm-btn bg-thm-color-two thm-color-two-shadow btn-circle link">
                        <i className="fal fa-plus" />
                      </a>
                    </Link>
                  </div>
                  <h6 className="mb-1">
                    <Link href="/team-details">
                      <a>Paul B. Gilliland</a>
                    </Link>
                  </h6>
                  <p className="thm-color-two mb-0 font-weight-bold">
                    Coach Teacher
                  </p>
                </div>
              </div>
              {/* Block End */}
              {/* Block Start */}
              <div className="col-lg-3 col-md-6" id="team">
                <div
                  className="team_block style_2 style_3 wow fadeInUp"
                  data-wow-delay=".50ms"
                >
                  <div className="team_img">
                    <img
                      src="assets/images/team/5.jpg"
                      alt="img"
                      className="image-fit"
                    />
                    <Link href="/team-details">
                      <a className="thm-btn bg-thm-color-two thm-color-two-shadow btn-circle link">
                        <i className="fal fa-plus" />
                      </a>
                    </Link>
                  </div>
                  <h6 className="mb-1">
                    <Link href="/team-details">
                      <a>Donald T.Lewis</a>
                    </Link>
                  </h6>
                  <p className="thm-color-two mb-0 font-weight-bold">
                    Coach Teacher
                  </p>
                </div>
              </div>
              {/* Block End */}
              {/* Block Start */}
              <div className="col-lg-3 col-md-6" id="team">
                <div
                  className="team_block style_2 style_3 wow fadeInDown"
                  data-wow-delay=".60ms"
                >
                  <div className="team_img">
                    <img
                      src="assets/images/team/6.jpg"
                      alt="img"
                      className="image-fit"
                    />
                    <Link href="/team-details">
                      <a className="thm-btn bg-thm-color-two thm-color-two-shadow btn-circle link">
                        <i className="fal fa-plus" />
                      </a>
                    </Link>
                  </div>
                  <h6 className="mb-1">
                    <Link href="/team-details">
                      <a>Allan J. Sumlin</a>
                    </Link>
                  </h6>
                  <p className="thm-color-two mb-0 font-weight-bold">
                    Coach Teacher
                  </p>
                </div>
              </div>
              {/* Block End */}
              {/* Block Start */}
              <div className="col-lg-3 col-md-6" id="team">
                <div
                  className="team_block style_2 style_3 wow fadeInUp"
                  data-wow-delay=".70ms"
                >
                  <div className="team_img">
                    <img
                      src="assets/images/team/7.jpg"
                      alt="img"
                      className="image-fit"
                    />
                    <Link href="/team-details">
                      <a className="thm-btn bg-thm-color-two thm-color-two-shadow btn-circle link">
                        <i className="fal fa-plus" />
                      </a>
                    </Link>
                  </div>
                  <h6 className="mb-1">
                    <Link href="/team-details">
                      <a>Gracie T. Evans</a>
                    </Link>
                  </h6>
                  <p className="thm-color-two mb-0 font-weight-bold">
                    Coach Teacher
                  </p>
                </div>
              </div>
              {/* Block End */}
              {/* Block Start */}
              <div className="col-lg-3 col-md-6" id="team">
                <div
                  className="team_block style_2 style_3 wow fadeInDown"
                  data-wow-delay=".80ms"
                >
                  <div className="team_img">
                    <img
                      src="assets/images/team/8.jpg"
                      alt="img"
                      className="image-fit"
                    />
                    <Link href="/team-details">
                      <a className="thm-btn bg-thm-color-two thm-color-two-shadow btn-circle link">
                        <i className="fal fa-plus" />
                      </a>
                    </Link>
                  </div>
                  <h6 className="mb-1">
                    <Link href="/team-details">
                      <a>David S. Hudson</a>
                    </Link>
                  </h6>
                  <p className="thm-color-two mb-0 font-weight-bold">
                    Coach Teacher
                  </p>
                </div>
              </div>
              {/* Block End */}
              {/* Block Start */}
              <div className="col-lg-3 col-md-6" id="team">
                <div
                  className="team_block style_2 style_3 wow fadeInUp"
                  data-wow-delay=".90ms"
                >
                  <div className="team_img">
                    <img
                      src="assets/images/team/9.jpg"
                      alt="img"
                      className="image-fit"
                    />
                    <Link href="/team-details">
                      <a className="thm-btn bg-thm-color-two thm-color-two-shadow btn-circle link">
                        <i className="fal fa-plus" />
                      </a>
                    </Link>
                  </div>
                  <h6 className="mb-1">
                    <Link href="/team-details">
                      <a>Michael J. Randall</a>
                    </Link>
                  </h6>
                  <p className="thm-color-two mb-0 font-weight-bold">
                    Coach Teacher
                  </p>
                </div>
              </div>
              {/* Block End */}
              {/* Block Start */}
              <div className="col-lg-3 col-md-6" id="team">
                <div
                  className="team_block style_2 style_3 wow fadeInDown"
                  data-wow-delay=".100ms"
                >
                  <div className="team_img">
                    <img
                      src="assets/images/team/10.jpg"
                      alt="img"
                      className="image-fit"
                    />
                    <Link href="/team-details">
                      <a className="thm-btn bg-thm-color-two thm-color-two-shadow btn-circle link">
                        <i className="fal fa-plus" />
                      </a>
                    </Link>
                  </div>
                  <h6 className="mb-1">
                    <Link href="/team-details">
                      <a>Joseph Anderson</a>
                    </Link>
                  </h6>
                  <p className="thm-color-two mb-0 font-weight-bold">
                    Coach Teacher
                  </p>
                </div>
              </div>
              {/* Block End */}
              {/* Block Start */}
              <div className="col-lg-3 col-md-6" id="team">
                <div
                  className="team_block style_2 style_3 wow fadeInUp"
                  data-wow-delay=".110ms"
                >
                  <div className="team_img">
                    <img
                      src="assets/images/team/11.jpg"
                      alt="img"
                      className="image-fit"
                    />
                    <Link href="/team-details">
                      <a className="thm-btn bg-thm-color-two thm-color-two-shadow btn-circle link">
                        <i className="fal fa-plus" />
                      </a>
                    </Link>
                  </div>
                  <h6 className="mb-1">
                    <Link href="/team-details">Brain D. Rogers</Link>
                  </h6>
                  <p className="thm-color-two mb-0 font-weight-bold">
                    Coach Teacher
                  </p>
                </div>
              </div>
              {/* Block End */}
              {/* Block Start */}
              <div className="col-lg-3 col-md-6" id="team">
                <div
                  className="team_block style_2 style_3 add_team wow fadeInDown"
                  data-wow-delay=".120ms"
                >
                  <Link href="/contact">
                    <a className="video_btn video_text popup-youtube">
                      <i className="fal fa-plus video_icon bg-thm-color-three thm-btn p-0 thm-color-three-shadow" />
                    </a>
                  </Link>
                </div>
              </div>
              {/* Block End */}
            </div>
          </PaginationLayout>
        </div>
      </section>
      {/* Team End */}
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

export default Team;
