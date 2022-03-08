import Link from "next/dist/client/link";
import { useEffect, useState } from "react";
import FooterContact from "../src/components/FooterContact";
import PageTitleBanner from "../src/components/PageTitleBanner";
import Pagination from "../src/components/Pagination";
import Layout from "../src/layout/Layout";
import { getPagination, pagination } from "../src/utils";

const Events = () => {
  let sort = 3;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination("#eventpage1", sort, active);
    let list = document.querySelectorAll("#eventpage1");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <Layout>
      <PageTitleBanner pageName="Events" />

      <section className="section-padding bg-thm-color-two-light">
        <div className="container">
          <div className="page_bar">
            <div className="row align-items-center">
              <div className="col-lg-6 text-center text-lg-left wow fadeInLeft">
                <p className="thm-font">We found 12 events available for you</p>
              </div>
              <div className="col-lg-6 text-center text-lg-right">
                <div className="bar_select mb-xl-30 relative wow fadeInRight">
                  <select defaultValue="option">
                    <option>Event Type</option>
                    <option value={1}>Option 1</option>
                    <option value={2}>Option 2</option>
                    <option value={3}>Option 3</option>
                  </select>
                  <i className="fal fa-chevron-down" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Block */}
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
            {/* Block */}
            {/* Block */}
            <div className="col-lg-4 col-md-6" id="eventpage1">
              <div className="event_block wow fadeInUp" data-wow-delay=".40ms">
                <div className="event_img relative">
                  <img
                    src="assets/images/event/4.jpg"
                    alt="img"
                    className="image-fit"
                  />
                  <span className="tag_badge style_3 bg-thm-color-four">
                    $99
                  </span>
                </div>
                <div className="event_caption">
                  <div className="event_text">
                    <span className="date thm-color-two font-weight-bold">
                      25 May 2021
                    </span>
                    <h5 className="event_title">
                      <Link href="/event-details">Business Consulting</Link>
                    </h5>
                    <p>
                      <span className="thm-color-two mr-2">
                        <i className="far fa-map-marker-alt" />
                      </span>
                      Maxico City, Maxico
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
              <div className="event_block fadeInDown" data-wow-delay=".50ms">
                <div className="event_img relative">
                  <img
                    src="assets/images/event/5.jpg"
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
                      <Link href="/event-details">Fashion Design, Art</Link>
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
              <div className="event_block wow fadeInUp" data-wow-delay=".60ms">
                <div className="event_img relative">
                  <img
                    src="assets/images/event/6.jpg"
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
                      <Link href="/event-details">Morder Lifestyle</Link>
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
            {/* Block */}
            {/* Block */}
            <div className="col-lg-4 col-md-6" id="eventpage1">
              <div className="event_block " data-wow-delay=".70ms">
                <div className="event_img relative">
                  <img
                    src="assets/images/event/7.jpg"
                    alt="img"
                    className="image-fit"
                  />
                  <span className="tag_badge style_3 bg-thm-color-four">
                    $99
                  </span>
                </div>
                <div className="event_caption">
                  <div className="event_text">
                    <span className="date thm-color-two font-weight-bold">
                      25 May 2021
                    </span>
                    <h5 className="event_title">
                      <Link href="/event-details">Fashion Lifestyle</Link>
                    </h5>
                    <p>
                      <span className="thm-color-two mr-2">
                        <i className="far fa-map-marker-alt" />
                      </span>
                      Mexico City, Mexico
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
              <div className="event_block wow fadeInUp" data-wow-delay=".80ms">
                <div className="event_img relative">
                  <img
                    src="assets/images/event/8.jpg"
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
                      <Link href="/event-details">Food Workshop</Link>
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
              <div className="event_block " data-wow-delay=".90ms">
                <div className="event_img relative">
                  <img
                    src="assets/images/event/9.jpg"
                    alt="img"
                    className="image-fit"
                  />
                  <span className="tag_badge style_3 bg-thm-color-four">
                    $39
                  </span>
                </div>
                <div className="event_caption">
                  <div className="event_text">
                    <span className="date thm-color-two font-weight-bold">
                      25 May 2021
                    </span>
                    <h5 className="event_title">
                      <Link href="/event-details">Films Conference</Link>
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
            {/* Block */}
            {/* Block */}
            <div className="col-lg-4 col-md-6" id="eventpage1">
              <div className="event_block wow fadeInUp" data-wow-delay=".100ms">
                <div className="event_img relative">
                  <img
                    src="assets/images/event/10.jpg"
                    alt="img"
                    className="image-fit"
                  />
                  <span className="tag_badge style_3 bg-thm-color-four">
                    $99
                  </span>
                </div>
                <div className="event_caption">
                  <div className="event_text">
                    <span className="date thm-color-two font-weight-bold">
                      25 May 2021
                    </span>
                    <h5 className="event_title">
                      <Link href="/event-details">Fashion Lifestyle</Link>
                    </h5>
                    <p>
                      <span className="thm-color-two mr-2">
                        <i className="far fa-map-marker-alt" />
                      </span>
                      Mexico City, Mexico
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
              <div className="event_block " data-wow-delay=".110ms">
                <div className="event_img relative">
                  <img
                    src="assets/images/event/11.jpg"
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
                      <Link href="/event-details">Food Workshop</Link>
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
              <div className="event_block wow fadeInUp" data-wow-delay=".120ms">
                <div className="event_img relative">
                  <img
                    src="assets/images/event/12.jpg"
                    alt="img"
                    className="image-fit"
                  />
                  <span className="tag_badge style_3 bg-thm-color-four">
                    $39
                  </span>
                </div>
                <div className="event_caption">
                  <div className="event_text">
                    <span className="date thm-color-two font-weight-bold">
                      25 May 2021
                    </span>
                    <h5 className="event_title">
                      <Link href="/event-details">Films Conference</Link>
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
            {/* Block */}
          </div>
          {/* Pagination */}
          <Pagination active={active} setActive={setActive} state={state} />
          {/* Pagination */}
        </div>
      </section>
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

export default Events;
