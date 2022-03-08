import Slider from "react-slick";
import {
  testimonial_slider_main,
  testimonial_slider_main_img,
} from "../../../sliderProps";
const Home1Testimonials = () => {
  return (
    <section
      className="section section-bg"
      style={{ backgroundImage: "url(assets/images/bg/bg_3.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title wow fadeInUp">
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
          className="testimonial_slider_main mb-xl-30 justify-content-center wow fadeInDown"
        >
          <div className="slide-item row">
            <div className="testimonial_item style_3 col-lg-7">
              <p className="comment">
                Sed ut perspic unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium totam rem aperiam eaque quae
                inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo.
              </p>
            </div>
          </div>
          <div className="slide-item row">
            <div className="testimonial_item style_3 col-lg-7">
              <p className="comment">
                Sed ut perspic unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium totam rem aperiam eaque quae
                inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo.
              </p>
            </div>
          </div>
          <div className="slide-item row">
            <div className="testimonial_item style_3 col-lg-7">
              <p className="comment">
                Sed ut perspic unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium totam rem aperiam eaque quae
                inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo.
              </p>
            </div>
          </div>
          <div className="slide-item row">
            <div className="testimonial_item style_3 col-lg-7">
              <p className="comment">
                Sed ut perspic unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium totam rem aperiam eaque quae
                inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo.
              </p>
            </div>
          </div>
          <div className="slide-item row">
            <div className="testimonial_item style_3 col-lg-7">
              <p className="comment">
                Sed ut perspic unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium totam rem aperiam eaque quae
                inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo.
              </p>
            </div>
          </div>
          <div className="slide-item row">
            <div className="testimonial_item style_3 col-lg-7">
              <p className="comment">
                Sed ut perspic unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium totam rem aperiam eaque quae
                inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo.
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
  );
};

export default Home1Testimonials;
