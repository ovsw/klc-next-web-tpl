import Link from "next/dist/client/link";
import { useState } from "react";
import FooterContact from "../src/components/FooterContact";
import PageTitleBanner from "../src/components/PageTitleBanner";
import PaginationLayout from "../src/components/PaginationLayout";
import VideoPopup from "../src/components/VideoPopup";
import Layout from "../src/layout/Layout";

const BlogList = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layout>
      <PageTitleBanner pageName="Blog List" />
      {video && <VideoPopup close={() => setVideo(false)} />}
      <div className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-md-80">
              {/* post standard */}
              <PaginationLayout id="article" sort={3}>
                <article className="post post_list style_2 wow fadeInDown">
                  <div className="post_img">
                    <img
                      src="assets/images/blog/list/1.jpg"
                      alt="img"
                      className="image-fit"
                    />
                  </div>
                  <div className="post_caption">
                    <ul className="post_meta">
                      <li>
                        <i className="fal fa-user" />
                        Nichel Jhon
                      </li>
                      <li>
                        <i className="fal fa-calendar-alt" />
                        25 Mar 2021
                      </li>
                      <li>
                        <i className="fal fa-comment-lines" />
                        Comments (05)
                      </li>
                    </ul>
                    <h4 className="post_title">
                      <Link href="/blog-details">
                        Writing Multiplayer Text Adventure Engine In Node Game
                        Engine Server Design Optimizing For Mobile
                      </Link>
                    </h4>
                    <p className="post_text">
                      But must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and will
                      give complete account of the system, and expound the
                      actual teachings
                    </p>
                    <Link href="/blog-details">
                      <a className="thm-btn bg-thm-color-white thm-color-one btn-rectangle">
                        Read More <i className="fal fa-chevron-right ml-2" />
                      </a>
                    </Link>
                  </div>
                </article>
                {/* post standard */}
                {/* post video */}
                <article
                  className="post post_list style_2 post_video wow fadeInUp"
                  data-wow-delay=".20ms"
                >
                  <div className="post_img">
                    <img
                      src="assets/images/blog/list/2.jpg"
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
                  <div className="post_caption">
                    <ul className="post_meta">
                      <li>
                        <i className="fal fa-user" />
                        Nichel Jhon
                      </li>
                      <li>
                        <i className="fal fa-calendar-alt" />
                        25 Mar 2021
                      </li>
                      <li>
                        <i className="fal fa-comment-lines" />
                        Comments (05)
                      </li>
                    </ul>
                    <h4 className="post_title">
                      <Link href="/blog-details">
                        Great Expectations Using Story Principles To Anticipate
                        What Your User Expects Favorite Posts
                      </Link>
                    </h4>
                    <p className="post_text">
                      But must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and will
                      give complete account of the system, and expound the
                      actual teachings
                    </p>
                    <Link href="/blog-details">
                      <a className="thm-btn bg-thm-color-white thm-color-one btn-rectangle">
                        Read More <i className="fal fa-chevron-right ml-2" />
                      </a>
                    </Link>
                  </div>
                </article>
                {/* post video */}
                {/* post no thumb */}
                <article
                  className="post post_list style_2 no-thumb wow fadeInDown"
                  data-wow-delay=".30ms"
                >
                  <div className="post_caption">
                    <ul className="post_meta">
                      <li>
                        <i className="fal fa-user" />
                        Nichel Jhon
                      </li>
                      <li>
                        <i className="fal fa-calendar-alt" />
                        25 Mar 2021
                      </li>
                      <li>
                        <i className="fal fa-comment-lines" />
                        Comments (05)
                      </li>
                    </ul>
                    <h4 className="post_title">
                      <Link href="/blog-details">
                        Postmortem Of Gutenberg The Launch So We Can Embrace
                        Gutenberg The Product
                      </Link>
                    </h4>
                    <p className="post_text">
                      But must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and will
                      give complete account of the system, and expound the
                      actual teachings
                    </p>
                    <Link href="/blog-details">
                      <a className="thm-btn bg-thm-color-white thm-color-one btn-rectangle">
                        Read More <i className="fal fa-chevron-right ml-2" />
                      </a>
                    </Link>
                  </div>
                </article>
                {/* post no thumb */}
                {/* post audio */}
                <article
                  className="post post_list style_2 post_audio"
                  data-wow-delay=".40ms"
                >
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/41395010&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&visual=false"
                    />
                  </div>
                  <div className="post_caption">
                    <ul className="post_meta">
                      <li>
                        <i className="fal fa-user" />
                        Nichel Jhon
                      </li>
                      <li>
                        <i className="fal fa-calendar-alt" />
                        25 Mar 2021
                      </li>
                      <li>
                        <i className="fal fa-comment-lines" />
                        Comments (05)
                      </li>
                    </ul>
                    <h4 className="post_title">
                      <Link href="/blog-details">
                        Great Expectations Using Story Principles To Anticipate
                        What Your User Expects Favorite Posts
                      </Link>
                    </h4>
                    <p className="post_text">
                      But must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and will
                      give complete account of the system, and expound the
                      actual teachings
                    </p>
                    <Link href="/blog-details">
                      <a className="thm-btn bg-thm-color-white thm-color-one btn-rectangle">
                        Read More <i className="fal fa-chevron-right ml-2" />
                      </a>
                    </Link>
                  </div>
                </article>
                {/* post audio */}
                {/* Post Bg */}
                <article
                  className="post post_list style_2 with_bg wow fadeInDown"
                  data-wow-delay=".50ms"
                  style={{ backgroundImage: "url(assets/images/blog/bg.jpg)" }}
                >
                  <div className="post_caption">
                    <ul className="post_meta">
                      <li>
                        <i className="fal fa-user" />
                        Nichel Jhon
                      </li>
                      <li>
                        <i className="fal fa-calendar-alt" />
                        25 Mar 2021
                      </li>
                      <li>
                        <i className="fal fa-comment-lines" />
                        Comments (05)
                      </li>
                    </ul>
                    <h4 className="post_title">
                      <Link href="/blog-details">
                        Postmortem Of Gutenberg The Launch So We Can Embrace
                        Gutenberg The Product
                      </Link>
                    </h4>
                    <Link href="/blog-details">
                      <a className="thm-btn bg-thm-color-two thm-color-one btn-rectangle">
                        Read More <i className="fal fa-chevron-right ml-2" />
                      </a>
                    </Link>
                  </div>
                </article>
              </PaginationLayout>
            </div>
            <div className="col-lg-4">
              <div className="sidebar style_2">
                <div className="sidebar_widget wow fadeInUp">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="input-group search_widget">
                      <input
                        type="text"
                        name="#"
                        placeholder="Search"
                        className="form-control"
                        autoComplete="off"
                      />
                      <div className="input-group-append ml-0">
                        <button
                          type="submit"
                          className="thm-btn bg-thm-color-two thm-color-white thm-color-two-shadow btn-rectangle btn-small"
                        >
                          <i className="fal fa-search" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="sidebar_widget wow fadeInUp">
                  <h5 className="widget_title">Category</h5>
                  <ul className="category_widgets">
                    <li>
                      <Link href="/blog-grid">Life Courses</Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">Business Courses</Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">Advance Wordpress</Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">Basic HTML Coach</Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">Health Courses</Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">English Learning</Link>
                    </li>
                  </ul>
                </div>
                <div className="sidebar_widget recent_widgets wow fadeInUp">
                  <h5 className="widget_title">Latest News</h5>
                  <ul>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/blog/1.jpg"
                          alt="img"
                          className="image-fit"
                        />
                      </div>
                      <div className="text">
                        <h6 className="mb-0">
                          <Link href="/blog-details">
                            Build Seamless Spreadshet Import Experience
                          </Link>
                        </h6>
                        <p className="mb-0">
                          <strong>
                            <i className="fal fa-calendar-alt" />{" "}
                          </strong>
                          <Link href="/blog-grid">25 May 2021</Link>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/blog/2.jpg"
                          alt="img"
                          className="image-fit"
                        />
                      </div>
                      <div className="text">
                        <h6 className="mb-0">
                          <Link href="/blog-details">
                            Creating Online Environme Work Well Older
                          </Link>
                        </h6>
                        <p className="mb-0">
                          <strong>
                            <i className="fal fa-calendar-alt" />{" "}
                          </strong>
                          <Link href="/blog-grid">25 May 2021</Link>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/blog/3.jpg"
                          alt="img"
                          className="image-fit"
                        />
                      </div>
                      <div className="text">
                        <h6 className="mb-0">
                          <Link href="/blog-details">
                            Signs Website Feels More Haunted House
                          </Link>
                        </h6>
                        <p className="mb-0">
                          <strong>
                            <i className="fal fa-calendar-alt" />{" "}
                          </strong>
                          <Link href="/blog-grid">25 May 2021</Link>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="sidebar_widget wow fadeInUp">
                  <a href="#" className="d-block">
                    <img
                      src="assets/images/blog/adv.jpg"
                      alt="adv"
                      className="image-fit"
                    />
                  </a>
                </div>
                <div className="sidebar_widget wow fadeInUp">
                  <h5 className="widget_title">Popular Tags</h5>
                  <div className="tags">
                    <Link href="/blog-grid">Business</Link>
                    <Link href="/blog-grid">Corporate</Link>
                    <Link href="/blog-grid">HTML</Link>
                    <Link href="/blog-grid">Art</Link>
                    <Link href="/blog-grid">Finance</Link>
                    <Link href="/blog-grid">Investment</Link>
                    <Link href="/blog-grid">CSS</Link>
                    <Link href="/blog-grid">Coach</Link>
                    <Link href="/blog-grid">Planing</Link>
                    <Link href="/blog-grid">Creative</Link>
                    <Link href="/blog-grid">Health</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterContact />
    </Layout>
  );
};

export default BlogList;
