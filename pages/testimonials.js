import Slider from "react-slick";
import FooterContact from "../src/components/FooterContact";
import PageTitleBanner from "../src/components/PageTitleBanner";
import Layout from "../src/layout/Layout";
import {
  testimonial_slider_main,
  testimonial_slider_main_img,
  testimonial_slider_single_home2,
} from "../src/sliderProps";

const Testimonials = () => {
  return (
    <Layout>
      <PageTitleBanner pageName="Testimonials" />

      <section className="section-padding relative z-1">
        <div className="container">
          <div className="row">
            {/* Testimonial Item */}
            <div className="col-lg-4 col-md-6">
              <div
                className="testimonial_item normal wow fadeInUp"
                data-wow-delay=".10ms"
              >
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
            <div className="col-lg-4 col-md-6">
              <div
                className="testimonial_item normal wow fadeInDown"
                data-wow-delay=".20ms"
              >
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
            <div className="col-lg-4 col-md-6">
              <div
                className="testimonial_item normal wow fadeInUp"
                data-wow-delay=".30ms"
              >
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
            <div className="col-lg-4 col-md-6">
              <div
                className="testimonial_item normal wow fadeInDown"
                data-wow-delay=".40ms"
              >
                <div className="author">
                  <div className="image bg-thm-color-two">
                    <img
                      src="assets/images/author/4.jpg"
                      alt="img"
                      className="image-fit"
                    />
                  </div>
                  <div className="text">
                    <h6 className="mb-0">Francis R. McMillian</h6>
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
            <div className="col-lg-4 col-md-6">
              <div
                className="testimonial_item normal wow fadeInUp"
                data-wow-delay=".50ms"
              >
                <div className="author">
                  <div className="image bg-thm-color-two">
                    <img
                      src="assets/images/author/5.jpg"
                      alt="img"
                      className="image-fit"
                    />
                  </div>
                  <div className="text">
                    <h6 className="mb-0">David D. Sweeney</h6>
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
            <div className="col-lg-4 col-md-6">
              <div
                className="testimonial_item normal wow fadeInDown"
                data-wow-delay=".60ms"
              >
                <div className="author">
                  <div className="image bg-thm-color-two">
                    <img
                      src="assets/images/author/6.jpg"
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
          </div>
        </div>
        <div className="circle_wave" />
      </section>
      {/* Testimonials End */}
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
      {/* Testimonials Start */}
      <section
        className="section section-bg"
        style={{ backgroundImage: "url(assets/images/bg/bg_3.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title wow fadeInDown">
                <p className="subtitle">
                  <i className="fal fa-book" />
                  Our Testimonials
                </p>
                <h3 className="title">What’s Student Parents Say About Us</h3>
              </div>
            </div>
          </div>
          <Slider
            {...testimonial_slider_main}
            className="testimonial_slider_main mb-xl-30 justify-content-center wow fadeInUp"
          >
            <div className="slide-item row">
              <div className="testimonial_item style_3 col-lg-7">
                <p className="comment">
                  Sed ut perspic unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque quae
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo.
                </p>
              </div>
            </div>
            <div className="slide-item row">
              <div className="testimonial_item style_3 col-lg-7">
                <p className="comment">
                  Sed ut perspic unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque quae
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo.
                </p>
              </div>
            </div>
            <div className="slide-item row">
              <div className="testimonial_item style_3 col-lg-7">
                <p className="comment">
                  Sed ut perspic unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque quae
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo.
                </p>
              </div>
            </div>
            <div className="slide-item row">
              <div className="testimonial_item style_3 col-lg-7">
                <p className="comment">
                  Sed ut perspic unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque quae
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo.
                </p>
              </div>
            </div>
            <div className="slide-item row">
              <div className="testimonial_item style_3 col-lg-7">
                <p className="comment">
                  Sed ut perspic unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque quae
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo.
                </p>
              </div>
            </div>
            <div className="slide-item row">
              <div className="testimonial_item style_3 col-lg-7">
                <p className="comment">
                  Sed ut perspic unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque quae
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo.
                </p>
              </div>
            </div>
          </Slider>
          <div className="row justify-content-center">
            <Slider
              {...testimonial_slider_main_img}
              className="testimonial_slider_nav col-lg-7"
            >
              <div className="slide-item">
                <div className="testimonial_item_img">
                  <img
                    src="assets/images/author/1.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
              </div>
              <div className="slide-item">
                <div className="testimonial_item_img">
                  <img
                    src="assets/images/author/2.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
              </div>
              <div className="slide-item">
                <div className="testimonial_item_img">
                  <img
                    src="assets/images/author/3.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
              </div>
              <div className="slide-item">
                <div className="testimonial_item_img">
                  <img
                    src="assets/images/author/1.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
              </div>
              <div className="slide-item">
                <div className="testimonial_item_img">
                  <img
                    src="assets/images/author/2.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
              </div>
              <div className="slide-item">
                <div className="testimonial_item_img">
                  <img
                    src="assets/images/author/3.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/* Testimonials End */}
      {/* Testimonials Start */}
      <section className="section pt-0">
        <div className="container">
          <div
            className="testi_bg wow fadeInRight"
            data-wow-delay=".40ms"
            style={{ backgroundImage: "url(assets/images/shape_img_2.png)" }}
          >
            <div className="row">
              <div className="col-xl-5 col-lg-6">
                <div className="section">
                  <div className="section-title left-align wow fadeInDown">
                    <p className="subtitle">
                      <i className="fal fa-book" />
                      Our Testimonials
                    </p>
                    <h3 className="title">
                      What’s Student Parents Say About Us
                    </h3>
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
                          indignation and dislike men are so beguiled
                          demoralized by the charms of pleasure of the moment so
                          blinded by desire that they cannot foresee
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
                          indignation and dislike men are so beguiled
                          demoralized by the charms of pleasure of the moment so
                          blinded by desire that they cannot foresee
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
                          indignation and dislike men are so beguiled
                          demoralized by the charms of pleasure of the moment so
                          blinded by desire that they cannot foresee
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
      <FooterContact />
    </Layout>
  );
};

export default Testimonials;
