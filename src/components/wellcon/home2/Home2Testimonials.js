import Slider from "react-slick";
import { testimonial_slider_single_home2 } from "../../../sliderProps";

const Home2Testimonials = () => {
  return (
    <section>
      <div className="container">
        <div
          className="testi_bg wow fadeInRight"
          style={{ backgroundImage: "url(assets/images/shape_img.png)" }}
        >
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="section">
                <div className="section-title left-align wow fadeInUp">
                  <p className="subtitle">
                    <i className="fal fa-book" />
                    Our Testimonials
                  </p>
                  <h3 className="title">What’s Student Parents Say About Us</h3>
                </div>
                <Slider
                  {...testimonial_slider_single_home2}
                  className="testimonial_slider_single"
                >
                  {/* item */}
                  <div className="slide-item">
                    <div className="testimonial_item style_2">
                      <p className="comment">
                        On the other hand, we denounce with righteous
                        indignation and dislike men are so beguiled demoralized
                        by the charms of pleasure of the moment so blinded by
                        desire that they cannot foresee
                      </p>
                      <div className="author">
                        <div className="image">
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
                    </div>
                  </div>
                  {/* item */}
                  {/* item */}
                  <div className="slide-item">
                    <div className="testimonial_item style_2">
                      <p className="comment">
                        On the other hand, we denounce with righteous
                        indignation and dislike men are so beguiled demoralized
                        by the charms of pleasure of the moment so blinded by
                        desire that they cannot foresee
                      </p>
                      <div className="author">
                        <div className="image">
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
                    </div>
                  </div>
                  {/* item */}
                  {/* item */}
                  <div className="slide-item">
                    <div className="testimonial_item style_2">
                      <p className="comment">
                        On the other hand, we denounce with righteous
                        indignation and dislike men are so beguiled demoralized
                        by the charms of pleasure of the moment so blinded by
                        desire that they cannot foresee
                      </p>
                      <div className="author">
                        <div className="image">
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
                    </div>
                  </div>
                  {/* item */}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home2Testimonials;
