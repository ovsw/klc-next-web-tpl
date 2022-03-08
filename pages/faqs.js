import Link from "next/dist/client/link";
import { Accordion, Nav, Tab } from "react-bootstrap";
import FooterContact from "../src/components/FooterContact";
import PageTitleBanner from "../src/components/PageTitleBanner";
import Layout from "../src/layout/Layout";

const Faq = () => {
  const accFun = ({ value }) => (
    <Accordion
      className="accordion accordion-style style_2 mb-xl-30"
      id="tutorialsaccordion"
      defaultActiveKey={`TutorialsItemOne${value}`}
    >
      <div className="card">
        <div className="card-header">
          <Accordion.Toggle
            as="button"
            className="btn btn-link"
            data-target={`TutorialsItemOne${value}`}
            eventKey={`TutorialsItemOne${value}`}
          >
            We Teach You How To Coach Yourself.
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          id={`TutorialsItemOne${value}`}
          eventKey={`TutorialsItemOne${value}`}
          data-parent="#tutorialsaccordion"
        >
          <div className="card-body">
            Sed ut perspiciatis unde omnis iste natus error voluptatem
            accusantium doloremque laudantium totam rem aperiam eaque ipsa quae
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo. Nemo enim ipsam tatem quia voluptas sit aspernatur
            aut odit aut fugit sed quia consequuntur
          </div>
        </Accordion.Collapse>
      </div>
      <div className="card">
        <div className="card-header">
          <Accordion.Toggle
            as="button"
            className="btn btn-link"
            data-target="#TutorialsItemTwo"
            eventKey={`TutorialsItemTwo${value}`}
          >
            We Teach You How To Feel Better.
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          id={`TutorialsItemTwo${value}`}
          eventKey={`TutorialsItemTwo${value}`}
          data-parent="#tutorialsaccordion"
        >
          <div className="card-body">
            Sed ut perspiciatis unde omnis iste natus error voluptatem
            accusantium doloremque laudantium totam rem aperiam eaque ipsa quae
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo. Nemo enim ipsam tatem quia voluptas sit aspernatur
            aut odit aut fugit sed quia consequuntur
          </div>
        </Accordion.Collapse>
      </div>
      <div className="card">
        <div className="card-header">
          <Accordion.Toggle
            as="button"
            className="btn btn-link"
            data-target="#TutorialsItemThree"
            eventKey={`TutorialsItemThree${value}`}
          >
            We Teach You How To Take Massive Action.
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          id={`TutorialsItemThree${value}`}
          eventKey={`TutorialsItemThree${value}`}
          data-parent="#tutorialsaccordion"
        >
          <div className="card-body">
            Sed ut perspiciatis unde omnis iste natus error voluptatem
            accusantium doloremque laudantium totam rem aperiam eaque ipsa quae
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo. Nemo enim ipsam tatem quia voluptas sit aspernatur
            aut odit aut fugit sed quia consequuntur
          </div>
        </Accordion.Collapse>
      </div>
      <div className="card">
        <div className="card-header">
          <Accordion.Toggle
            as="button"
            className="btn btn-link"
            data-target="#TutorialsItemFour"
            eventKey={`TutorialsItemFour${value}`}
          >
            Be Less Frustrated By Learning Relationship Tools
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          id={`TutorialsItemFour${value}`}
          eventKey={`TutorialsItemFour${value}`}
          data-parent="#tutorialsaccordion"
        >
          <div className="card-body">
            Sed ut perspiciatis unde omnis iste natus error voluptatem
            accusantium doloremque laudantium totam rem aperiam eaque ipsa quae
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo. Nemo enim ipsam tatem quia voluptas sit aspernatur
            aut odit aut fugit sed quia consequuntur
          </div>
        </Accordion.Collapse>
      </div>
      <div className="card">
        <div className="card-header">
          <Accordion.Toggle
            as="button"
            className="btn btn-link"
            data-target="#TutorialsItemFive"
            eventKey={`TutorialsItemFive${value}`}
          >
            Motivate Yourself To Get More Done In Less Time
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          id={`TutorialsItemFive${value}`}
          eventKey={`TutorialsItemFive${value}`}
          data-parent="#tutorialsaccordion"
        >
          <div className="card-body">
            Sed ut perspiciatis unde omnis iste natus error voluptatem
            accusantium doloremque laudantium totam rem aperiam eaque ipsa quae
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo. Nemo enim ipsam tatem quia voluptas sit aspernatur
            aut odit aut fugit sed quia consequuntur
          </div>
        </Accordion.Collapse>
      </div>
      <div className="card">
        <div className="card-header">
          <Accordion.Toggle
            as="button"
            className="btn btn-link"
            data-target="#TutorialsItemSix"
            eventKey={`TutorialsItemSix${value}`}
          >
            Ease Anxiety, Stress, Worry, And Boredom
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          id={`TutorialsItemSix${value}`}
          eventKey={`TutorialsItemSix${value}`}
          data-parent="#tutorialsaccordion"
        >
          <div className="card-body">
            Sed ut perspiciatis unde omnis iste natus error voluptatem
            accusantium doloremque laudantium totam rem aperiam eaque ipsa quae
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo. Nemo enim ipsam tatem quia voluptas sit aspernatur
            aut odit aut fugit sed quia consequuntur
          </div>
        </Accordion.Collapse>
      </div>
      <div className="card">
        <div className="card-header">
          <Accordion.Toggle
            as="button"
            className="btn btn-link"
            data-target="#TutorialsItemSeven"
            eventKey={`TutorialsItemSeven${value}`}
          >
            Process Emotion And Create More Energy
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          id={`TutorialsItemSeven${value}`}
          eventKey={`TutorialsItemSeven${value}`}
          data-parent="#tutorialsaccordion"
        >
          <div className="card-body">
            Sed ut perspiciatis unde omnis iste natus error voluptatem
            accusantium doloremque laudantium totam rem aperiam eaque ipsa quae
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo. Nemo enim ipsam tatem quia voluptas sit aspernatur
            aut odit aut fugit sed quia consequuntur
          </div>
        </Accordion.Collapse>
      </div>
    </Accordion>
  );
  return (
    <Layout>
      <PageTitleBanner pageName="FAQ's" />
      <div className="section-padding faqs_elements">
        <div className="container relative z-1">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-11">
              <Tab.Container defaultActiveKey="general">
                <Nav className="nav nav-tabs style_3 wow fadeInUp">
                  <Nav.Item className="nav-item">
                    <Nav.Link
                      href="#"
                      eventKey="general"
                      className="nav-link"
                      data-toggle="tab"
                    >
                      General
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link
                      href="#"
                      eventKey="allcoach"
                      className="nav-link"
                      data-toggle="tab"
                    >
                      All Coach
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link
                      href="#"
                      eventKey="advisors"
                      className="nav-link"
                      data-toggle="tab"
                    >
                      Advisors
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link
                      href="#"
                      eventKey="tutorials"
                      className="nav-link"
                      data-toggle="tab"
                    >
                      Tutorials
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content className="tab-content wow fadeInDown">
                  <Tab.Pane className="tab-pane fade show" eventKey="general">
                    {accFun(1)}
                  </Tab.Pane>
                  <Tab.Pane className="tab-pane fade" eventKey="allcoach">
                    {accFun(2)}
                  </Tab.Pane>
                  <Tab.Pane className="tab-pane fade" eventKey="advisors">
                    {accFun(3)}
                  </Tab.Pane>
                  <Tab.Pane className="tab-pane fade" eventKey="tutorials">
                    {accFun(4)}
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
          <img
            src="assets/images/elements/element_10.png"
            alt="element"
            className="element_1 zoom-fade"
          />
          <img
            src="assets/images/elements/element_35.png"
            alt="element"
            className="element_2 zoom-fade"
          />
          <img
            src="assets/images/elements/element_36.png"
            alt="element"
            className="element_3 rotate_elem"
          />
          <img
            src="assets/images/elements/element_37.png"
            alt="element"
            className="element_4 rotate_elem"
          />
          <img
            src="assets/images/elements/element_38.png"
            alt="element"
            className="element_5 rotate_elem"
          />
        </div>
      </div>
      {/* Faqs End */}
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
      {/* Quote Form Start */}
      <section
        className="section-padding pb-0 section-bg quote_form_sec elements relative z-1"
        style={{ backgroundImage: "url(assets/images/bg/bg_7.jpg)" }}
      >
        <div className="container relative z-1">
          <div className="row flex-lg-row-reverse align-items-end justify-content-between">
            <div
              className="col-xl-5 col-lg-6 mb-md-80 wow fadeInRight"
              data-wow-delay=".30ms"
            >
              <img
                src="assets/images/quote_img.png"
                alt="img"
                className="image-fit-contain"
              />
            </div>
            <div className="col-lg-6">
              <div className="quote_box">
                <div className="section-title left-align white wow fadeInDown">
                  <p className="subtitle mb-4">
                    <i className="fal fa-book" />
                    Get In Touch
                  </p>
                  <h3 className="title">
                    Do You Have Any Questions Get Free Quote
                  </h3>
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="wow fadeInUp"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="#"
                          className="form-control form-control-custom style_2"
                          placeholder="Your Name"
                          autoComplete="off"
                        />
                        <i className="fal fa-user" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name="#"
                          className="form-control form-control-custom style_2"
                          placeholder="Email Address"
                          autoComplete="off"
                        />
                        <i className="fal fa-envelope" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="#"
                          className="form-control form-control-custom style_2"
                          placeholder="Phone Number"
                          autoComplete="off"
                        />
                        <i className="fal fa-phone" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <select
                          className="form-control form-control-custom style_2"
                          name="#"
                          defaultValue="option"
                        >
                          <option selected>Subject</option>
                          <option value="option 1">Option 1</option>
                          <option value="option 2">Option 2</option>
                          <option value="option 3">Option 3</option>
                        </select>
                        <i className="fal fa-chevron-down" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea
                          className="form-control form-control-custom style_2"
                          placeholder="Write Message"
                          rows={5}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <Accordion.Toggle
                        as="button"
                        type="submit"
                        className="thm-btn bg-thm-color-three thm-color-three-shadow btn-rectangle"
                      >
                        Send Message <i className="fal fa-chevron-right ml-2" />
                      </Accordion.Toggle>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <img
            src="assets/images/elements/element_39.png"
            alt="element"
            className="element_1 rotate_elem"
          />
          <img
            src="assets/images/elements/element_40.png"
            alt="element"
            className="element_2 zoom-fade"
          />
          <img
            src="assets/images/elements/element_41.png"
            alt="element"
            className="element_3 rotate_elem"
          />
          <img
            src="assets/images/elements/element_42.png"
            alt="element"
            className="element_4 rotate_elem"
          />
        </div>
      </section>
      {/* Quote Form End */}
      {/* Portfolio Start */}
      <section className="section-padding">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-7">
              <div className="section-title left-align wow fadeInLeft">
                <p className="subtitle">
                  <i className="fal fa-book" />
                  Project Gallery
                </p>
                <h3 className="title">
                  We Have 34520+ Project Successfully Done
                </h3>
              </div>
            </div>
            <div className="col-lg-5 text-left text-lg-right wow fadeInRight">
              <Link href="/portfolio-grid">
                <a className="thm-btn bg-thm-color-white thm-color-one btn-border btn-rectangle mb-xl-60">
                  View All Project
                  <i className="fal fa-chevron-right ml-2" />
                </a>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="portfolio_box wow fadeInUp">
                <div className="portfolio_img">
                  <img
                    src="assets/images/portfolio/1.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
                <div className="portfolio_caption">
                  <div className="text_box">
                    <h4 className="title mb-0">
                      <Link href="/portfolio-details">
                        How To Gain Knowledge
                      </Link>
                    </h4>
                    <p>Business Coach</p>
                  </div>
                  <div className="btn_box mb-xl-30">
                    <Link href="/portfolio-details">
                      <a className="thm-btn bg-thm-color-two-light thm-color-two btn-rectangle btn-small">
                        <i className="fal fa-chevron-right font-weight-bold" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="portfolio_box wow fadeInDown">
                <div className="portfolio_img">
                  <img
                    src="assets/images/portfolio/2.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
                <div className="portfolio_caption">
                  <div className="text_box">
                    <h4 className="title mb-0">
                      <Link href="/portfolio-details">
                        Online Consulting Tutorials
                      </Link>
                    </h4>
                    <p>Business Coach</p>
                  </div>
                  <div className="btn_box mb-xl-30">
                    <Link href="/portfolio-details">
                      <a className="thm-btn bg-thm-color-two-light thm-color-two btn-rectangle btn-small">
                        <i className="fal fa-chevron-right font-weight-bold" />
                      </a>
                    </Link>
                  </div>
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

export default Faq;
