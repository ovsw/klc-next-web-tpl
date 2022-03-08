import Link from "next/dist/client/link";
import FooterContact from "../src/components/FooterContact";
import PageTitleBanner from "../src/components/PageTitleBanner";
import Layout from "../src/layout/Layout";

const EventDetails = () => {
  return (
    <Layout>
      <PageTitleBanner pageName="Event Details" />

      <section className="section portfolio_details">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="detail_img">
                <img
                  src="assets/images/portfolio/details_img.jpg"
                  alt="img"
                  className="image-fit"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="text mb-md-80">
                <h3 className="fw-600 title">Education Workshop</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quiluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione
                </p>
                <p>
                  <span className="dropcap">M</span> Quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum solorem eum fugiat quo
                  voluptas nulla pariatur laudantium totam rem aperquae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quiluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni
                  dolores eos qui ratione voluptatem sequi nesciunt.{" "}
                </p>
                <h5 className="fw-600">Learn about Workshop</h5>
                <p>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself, because
                </p>
                <ul className="check_list">
                  <li>
                    <i className="fal fa-check" /> Understand The Brain, Where
                    All Your Power
                  </li>
                  <li>
                    <i className="fal fa-check" /> Ease Anxiety, Stress, Worry,
                    And Boredom
                  </li>
                  <li>
                    <i className="fal fa-check" /> Process Emotion And Create
                    More Energy
                  </li>
                  <li>
                    <i className="fal fa-check" /> Be Less Frustrated By
                    Learning Relationship Tools
                  </li>
                  <li>
                    <i className="fal fa-check" /> Motivate Yourself To Get More
                    Done In Less Time
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar style_3">
                <div className="sidebar_widget">
                  <h5 className="widget_title">Event Details</h5>
                  <div className="sidebar_widget_inner">
                    <ul className="info_widget">
                      <li>
                        <span>Clients</span>
                        Blaine D. Cotton
                      </li>
                      <li>
                        <span>Event</span>
                        Education Workshop
                      </li>
                      <li>
                        <span>Service</span>
                        Courses/Learning
                      </li>
                      <li>
                        <span>Category</span>
                        VR Coach
                      </li>
                      <li>
                        <span>Date</span>
                        20 Jan 2021
                      </li>
                      <li>
                        <span>Share</span>
                        <ul className="social">
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-behance" />
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Start */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="fw-600">Related Event</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6" id="eventpage1">
              <div className="event_block " data-wow-delay=".10ms">
                <div className="event_img relative">
                  <img
                    src="assets/images/event/1.jpg"
                    alt="img"
                    className="image-fit"
                  />
                  <span className="tag_badge style_3 bg-thm-color-four">
                    Free
                  </span>
                </div>
                <div className="event_caption">
                  <div className="event_text">
                    <span className="date thm-color-two font-weight-bold">
                      25 May 2021
                    </span>
                    <h5 className="event_title">
                      <Link href="/event-details">Education Workshop</Link>
                    </h5>
                    <p>
                      <span className="thm-color-two mr-2">
                        <i className="far fa-map-marker-alt" />
                      </span>
                      Italy, France
                    </p>
                  </div>
                  <div className="event_btn">
                    <Link href="/event-details">
                      <a className="thm-btn bg-thm-color-two-light thm-color-two btn-rectangle btn-small">
                        <i className="fal fa-chevron-right font-weight-bold" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Block */}
            {/* Block */}
            <div className="col-lg-4 col-md-6" id="eventpage1">
              <div className="event_block wow fadeInUp" data-wow-delay=".20ms">
                <div className="event_img relative">
                  <img
                    src="assets/images/event/2.jpg"
                    alt="img"
                    className="image-fit"
                  />
                  <span className="tag_badge style_3 bg-thm-color-four">
                    $59
                  </span>
                </div>
                <div className="event_caption">
                  <div className="event_text">
                    <span className="date thm-color-two font-weight-bold">
                      25 May 2021
                    </span>
                    <h5 className="event_title">
                      <Link href="/event-details">Physical Exercises</Link>
                    </h5>
                    <p>
                      <span className="thm-color-two mr-2">
                        <i className="far fa-map-marker-alt" />
                      </span>
                      Buenos, Argentina
                    </p>
                  </div>
                  <div className="event_btn">
                    <Link href="/event-details">
                      <a className="thm-btn bg-thm-color-two-light thm-color-two btn-rectangle btn-small">
                        <i className="fal fa-chevron-right font-weight-bold" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Block */}
            {/* Block */}
            <div className="col-lg-4 col-md-6" id="eventpage1">
              <div className="event_block " data-wow-delay=".30ms">
                <div className="event_img relative">
                  <img
                    src="assets/images/event/3.jpg"
                    alt="img"
                    className="image-fit"
                  />
                  <span className="tag_badge style_3 bg-thm-color-four">
                    Free
                  </span>
                </div>
                <div className="event_caption">
                  <div className="event_text">
                    <span className="date thm-color-two font-weight-bold">
                      25 May 2021
                    </span>
                    <h5 className="event_title">
                      <Link href="/event-details">Mordern Lifestyle</Link>
                    </h5>
                    <p>
                      <span className="thm-color-two mr-2">
                        <i className="far fa-map-marker-alt" />
                      </span>
                      Nairobi, Kenya
                    </p>
                  </div>
                  <div className="event_btn">
                    <Link href="/event-details">
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

export default EventDetails;
