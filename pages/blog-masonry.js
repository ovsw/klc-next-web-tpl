import Link from "next/dist/client/link";
import { useEffect, useState } from "react";
import FooterContact from "../src/components/FooterContact";
import PageTitleBanner from "../src/components/PageTitleBanner";
import VideoPopup from "../src/components/VideoPopup";
import Layout from "../src/layout/Layout";
import { isotopLayout } from "../src/utils";

const BlogMasonry = () => {
  const [video, setVideo] = useState(false);
  useEffect(() => {
    isotopLayout(".blog-masonry", ".masonry-item");
  }, []);
  return (
    <Layout>
      <PageTitleBanner pageName="Blog Masonry" />
      {video && <VideoPopup close={() => setVideo(false)} />}
      <div className="section-padding">
        <div className="container">
          <div className="row blog-masonry">
            {/* post standard */}
            <div className="col-xl-4 col-md-6 masonry-item" id="masonry-item">
              <article
                className="post style_2 wow fadeInDown"
                data-wow-delay=".10ms"
              >
                <div className="post_img">
                  <img
                    src="assets/images/blog/1.jpg"
                    alt="img"
                    className="image-fit"
                  />
                </div>
                <div className="post_caption">
                  <ul className="post_meta">
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
                      Smashing Podcast Episode Luca Mezzalira Front
                    </Link>
                  </h4>
                  <p className="post_text">
                    Quis autem vel eumiure reprehenderit quis volupta velit esse
                    quam nihil molestiae conse quatur vel illum qui dolorem
                  </p>
                  <Link href="/blog-details">
                    <a className="thm-btn bg-thm-color-white thm-color-one btn-rectangle">
                      Read More <i className="fal fa-chevron-right ml-2" />
                    </a>
                  </Link>
                </div>
              </article>
            </div>
            {/* post standard */}
            {/* post without text */}
            <div className="col-xl-4 col-md-6 masonry-item" id="masonry-item">
              <article
                className="post style_2 wow fadeInUp"
                data-wow-delay=".20ms"
              >
                <div className="post_img">
                  <img
                    src="assets/images/blog/2.jpg"
                    alt="img"
                    className="image-fit"
                  />
                </div>
                <div className="post_caption">
                  <ul className="post_meta">
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
                      Live Sketching A Site Visitor Journey To Create
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="thm-btn bg-thm-color-white thm-color-one btn-rectangle">
                      Read More <i className="fal fa-chevron-right ml-2" />
                    </a>
                  </Link>
                </div>
              </article>
            </div>
            {/* post without text */}
            {/* post no thumb */}
            <div className="col-xl-4 col-md-6 masonry-item" id="masonry-item">
              <article
                className="post style_2 no-thumb wow fadeInDown"
                data-wow-delay=".30ms"
              >
                <div className="post_caption">
                  <ul className="post_meta">
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
                      Get Started With UI Design With Tips To Speed
                    </Link>
                  </h4>
                  <p className="post_text">
                    Quis autem vel eumiure reprehenderit quis volupta velit esse
                    quam nihil molestiae conse quatur vel illum qui dolorem
                  </p>
                  <Link href="/blog-details">
                    <a className="thm-btn bg-thm-color-white thm-color-one btn-rectangle">
                      Read More <i className="fal fa-chevron-right ml-2" />
                    </a>
                  </Link>
                </div>
              </article>
            </div>
            {/* post no thumb */}
            {/* post video */}
            <div className="col-xl-4 col-md-6 masonry-item" id="masonry-item">
              <div
                className="post style_2 post_video wow fadeInUp"
                data-wow-delay=".40ms"
              >
                <div className="post_img">
                  <img
                    src="assets/images/blog/3.jpg"
                    alt="img"
                    className="image-fit"
                  />
                  <a
                    onClick={() => setVideo(true)}
                    href="#"
                    className="popup-youtube video_btn transform-center justify-content-center d-flex"
                  >
                    <i className="fas fa-play video_icon bg-thm-color-three pulse-animated" />
                  </a>
                </div>
              </div>
            </div>
            {/* post video */}
            {/* post no thumb */}
            <div className="col-xl-4 col-md-6 masonry-item" id="masonry-item">
              <article className="post style_2 no-thumb wow fadeInDown">
                <div className="post_caption">
                  <ul className="post_meta">
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
                      Abstracting WordPress Code To Reuse With Other
                    </Link>
                  </h4>
                  <p className="post_text">
                    Quis autem vel eumiure reprehenderit quis volupta velit esse
                    quam nihil molestiae conse quatur vel illum qui dolorem
                  </p>
                  <Link href="/blog-details">
                    <a className="thm-btn bg-thm-color-white thm-color-one btn-rectangle">
                      Read More <i className="fal fa-chevron-right ml-2" />
                    </a>
                  </Link>
                </div>
              </article>
            </div>
            {/* post no thumb */}
            {/* post standard */}
            <div className="col-xl-4 col-md-6 masonry-item" id="masonry-item">
              <article
                className="post style_2 wow fadeInUp"
                data-wow-delay=".50ms"
              >
                <div className="post_img">
                  <img
                    src="assets/images/blog/4.jpg"
                    alt="img"
                    className="image-fit"
                  />
                </div>
                <div className="post_caption">
                  <ul className="post_meta">
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
                      Become HTML Email Geek With Video Parmentier
                    </Link>
                  </h4>
                  <p className="post_text">
                    Quis autem vel eumiure reprehenderit quis volupta velit esse
                    quam nihil molestiae conse quatur vel illum qui dolorem
                  </p>
                  <Link href="/blog-details">
                    <a className="thm-btn bg-thm-color-white thm-color-one btn-rectangle">
                      Read More <i className="fal fa-chevron-right ml-2" />
                    </a>
                  </Link>
                </div>
              </article>
            </div>
            {/* post standard */}
            {/* post no thumb */}
            <div className="col-xl-4 col-md-6 masonry-item" id="masonry-item">
              <article
                className="post style_2 no-thumb wow fadeInDown"
                data-wow-delay=".60ms"
              >
                <div className="post_caption">
                  <ul className="post_meta">
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
                      Inclusive Component New Printed Book Heydon
                    </Link>
                  </h4>
                  <p className="post_text">
                    Quis autem vel eumiure reprehenderit quis volupta velit esse
                    quam nihil molestiae conse quatur vel illum qui dolorem
                  </p>
                  <Link href="/blog-details">
                    <a className="thm-btn bg-thm-color-white thm-color-one btn-rectangle">
                      Read More <i className="fal fa-chevron-right ml-2" />
                    </a>
                  </Link>
                </div>
              </article>
            </div>
            {/* post no thumb */}
            {/* post standard */}
            <div className="col-xl-4 col-md-6 masonry-item" id="masonry-item">
              <article
                className="post style_2 wow fadeInUp"
                data-wow-delay=".70ms"
              >
                <div className="post_img">
                  <img
                    src="assets/images/blog/5.jpg"
                    alt="img"
                    className="image-fit"
                  />
                </div>
                <div className="post_caption">
                  <ul className="post_meta">
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
                      Inclusive Design And Access Live Stream Heydon
                    </Link>
                  </h4>
                  <p className="post_text">
                    Quis autem vel eumiure reprehenderit quis volupta velit esse
                    quam nihil molestiae conse quatur vel illum qui dolorem
                  </p>
                  <Link href="/blog-details">
                    <a className="thm-btn bg-thm-color-white thm-color-one btn-rectangle">
                      Read More <i className="fal fa-chevron-right ml-2" />
                    </a>
                  </Link>
                </div>
              </article>
            </div>
            {/* post standard */}
            {/* post video */}
            <div className="col-xl-4 col-md-6 masonry-item" id="masonry-item">
              <div
                className="post style_2 post_video wow fadeInDown"
                data-wow-delay=".80ms"
              >
                <div className="post_img">
                  <img
                    src="assets/images/blog/6.jpg"
                    alt="img"
                    className="image-fit"
                  />
                  <a
                    onClick={() => setVideo(true)}
                    href="#"
                    className="popup-youtube video_btn transform-center justify-content-center d-flex"
                  >
                    <i className="fas fa-play video_icon bg-thm-color-three pulse-animated" />
                  </a>
                </div>
              </div>
            </div>
            {/* post video */}
            {/* post audio */}
            <div className="col-xl-4 col-md-6 masonry-item" id="masonry-item">
              <div
                className="post style_2 post_audio wow fadeInUp"
                data-wow-delay=".90ms"
              >
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/41395010&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&visual=false"
                  />
                </div>
              </div>
            </div>
            {/* post audio */}
          </div>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a href="#" className="page-link">
                  <i className="fal fa-chevron-left"></i>
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  01
                </a>
              </li>
              <li className="page-item active">
                <a href="#" className="page-link">
                  02
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  03
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  <i className="fal fa-chevron-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <FooterContact />
    </Layout>
  );
};

export default BlogMasonry;
