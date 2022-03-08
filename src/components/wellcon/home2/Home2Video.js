import { useState } from "react";
import VideoPopup from "../../VideoPopup";

const Home2Video = () => {
  const [video, setVideo] = useState(false);
  return (
    <section className="bg-thm-color-two-gradient z-1 video_quote">
      {video && (
        <VideoPopup close={() => setVideo(false)} videoID="TKnufs85hXk" />
      )}
      <img
        src="assets/images/elements/element_2.png"
        className="element_2"
        alt="Element"
      />
      <div className="container-fluid p-0">
        <div className="row no-gutters align-items-center">
          <div className="col-lg-6">
            <div className="video_warp relative z-1 h-100 wow fadeInLeft">
              <img
                src="assets/images/video_img.png"
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
              <div className="section-title left-align wow fadeInUp">
                <p className="subtitle">
                  <i className="fal fa-book" />
                  Admission Going On
                </p>
                <h3 className="title mb-0">Find Your Best Coach With Wellco</h3>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudtium totam rem aperiam eaque quae
              </p>
              <form
                className="wow fadeInDown"
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
                      className="thm-btn bg-thm-color-two thm-color-two-shadow btn-rounded"
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
  );
};

export default Home2Video;
