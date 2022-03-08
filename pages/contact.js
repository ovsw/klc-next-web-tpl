import Link from "next/dist/client/link";
import FooterContact from "../src/components/FooterContact";
import PageTitleBanner from "../src/components/PageTitleBanner";
import Layout from "../src/layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <PageTitleBanner pageName="Contact Us" />
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title wow fadeInUp">
                <p className="subtitle">
                  <i className="fal fa-book" />
                  Support Team
                </p>
                <h3 className="title">We Have a Professional Support Team</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="contact_faq_box shadow_1 wow fadeInDown"
                data-wow-delay=".30ms"
              >
                <div className="icon">
                  <img
                    src="assets/images/icons/icon_14.png"
                    alt="icon"
                    className="image-fit-contain"
                  />
                </div>
                <div className="text">
                  <h4>Customer Support</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus voluptatem
                    accusantium doloremque laudantium
                  </p>
                  <Link href="/contact">
                    <a className="thm-btn bg-thm-color-three thm-color-three-shadow btn-rectangle">
                      Take A Coupon <i className="fal fa-chevron-right ml-2" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="contact_faq_box shadow_1 wow fadeInUp"
                data-wow-delay=".40ms"
              >
                <div className="icon">
                  <img
                    src="assets/images/icons/icon_15.png"
                    alt="icon"
                    className="image-fit-contain"
                  />
                </div>
                <div className="text">
                  <h4>Have Any Questions</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus voluptatem
                    accusantium doloremque laudantium
                  </p>
                  <Link href="/contact">
                    <a className="thm-btn bg-thm-color-two thm-color-two-shadow btn-rectangle">
                      Contact Us <i className="fal fa-chevron-right ml-2" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Faq Box End */}
      {/* Contact Map & Info Start */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-4 col-lg-5">
            <div className="section-title left-align wow fadeInDown">
              <p className="subtitle">
                <i className="fal fa-book" />
                Contact Us
              </p>
              <h3 className="title">Have Any Courses Get In Touch</h3>
            </div>
            <div className="contact_info mb-md-80">
              <ul>
                <li className="wow fadeInUp">
                  <i className="icon fal fa-map-marker-alt" />
                  <div className="text">
                    <h6>Location</h6>
                    <p>354 Oakridge, Camden NJ 08102 - USA</p>
                  </div>
                </li>
                <li className="wow fadeInDown">
                  <i className="icon fal fa-envelope-open-text" />
                  <div className="text">
                    <h6>Email Address</h6>
                    <p>supportcoachinfo@gmail.com</p>
                  </div>
                </li>
                <li className="wow fadeInUp">
                  <i className="icon fal fa-phone" />
                  <div className="text">
                    <h6>Contact Us</h6>
                    <p>
                      <strong>Mobile: </strong> +012 (345) 789 99
                    </p>
                    <p>
                      <strong>Hotline: </strong> +563 789 55
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7">
            <div className="contact_map relative z-1 wow fadeInRight" id="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38704015446!2d90.27923791989463!3d23.780573256239975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1635995617271!5m2!1sen!2sbd"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Contact Map & Info End */}
      {/* Contact Form Start */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title wow fadeInDown">
                <p className="subtitle">
                  <i className="fal fa-book" />
                  Drop A Message
                </p>
                <h3 className="title">Have Any Questions Let’s Started Talk</h3>
              </div>
            </div>
          </div>
          <form
            className="mf_form_validate ajax_submit wow fadeInUp"
            onSubmit={(e) => e.preventDefault()}
            method="post"
            encType="multipart/form-data"
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group form_style">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    autoComplete="off"
                    placeholder="Full Name"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group form_style">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    autoComplete="off"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group form_style">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    autoComplete="off"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group form_style">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    autoComplete="off"
                    placeholder="I Would Like To Discuss"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group form_style">
                  <label>Message</label>
                  <textarea
                    rows={10}
                    className="form-control"
                    placeholder="Write Message"
                    autoComplete="off"
                    name="message"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-lg-12 text-center">
                <button
                  type="submit"
                  className="thm-btn bg-thm-color-three thm-color-three-shadow btn-rectangle"
                >
                  Send Your Message <i className="fal fa-chevron-right ml-2" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <FooterContact />
    </Layout>
  );
};

export default Contact;
