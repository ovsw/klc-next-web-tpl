import Link from "next/dist/client/link";
const Home2Blog = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title wow fadeInDown">
              <p className="subtitle">
                <i className="fal fa-book" />
                News &amp; Blog
              </p>
              <h3 className="title">
                Get Every Coach News Articles &amp; Tips
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {/* post */}
          <div className="col-xl-4 col-md-6">
            <article className="post wow fadeInUp" data-wow-delay=".2s">
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
                    <a>Smashing Podcast Episode Luca Mezzalira Front</a>
                  </Link>
                </h4>
                <p className="post_text">
                  Quis autem vel eumiure reprehenderit quis volupta velit esse
                  quam nihil molestiae conse quatur vel illum qui dolorem
                </p>
                <Link href="/blog-details">
                  <a className="thm-btn bg-thm-color-white thm-color-one btn-border btn-rounded">
                    Read More <i className="fal fa-chevron-right ml-2" />
                  </a>
                </Link>
              </div>
            </article>
          </div>
          {/* post */}
          {/* post */}
          <div className="col-xl-4 col-md-6">
            <article className="post wow fadeInUp" data-wow-delay=".4s">
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
                    <a>Live Sketching A Site Visitor Journey To Create</a>
                  </Link>
                </h4>
                <p className="post_text">
                  Quis autem vel eumiure reprehenderit quis volupta velit esse
                  quam nihil molestiae conse quatur vel illum qui dolorem
                </p>
                <Link href="/blog-details">
                  <a className="thm-btn bg-thm-color-white thm-color-one btn-border btn-rounded">
                    Read More <i className="fal fa-chevron-right ml-2" />
                  </a>
                </Link>
              </div>
            </article>
          </div>
          {/* post */}
          {/* post */}
          <div className="col-xl-4 col-md-6">
            <article className="post wow fadeInUp" data-wow-delay=".6s">
              <div className="post_img">
                <img
                  src="assets/images/blog/3.jpg"
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
                    <a>Get Started With UI Design With Tips To Speed</a>
                  </Link>
                </h4>
                <p className="post_text">
                  Quis autem vel eumiure reprehenderit quis volupta velit esse
                  quam nihil molestiae conse quatur vel illum qui dolorem
                </p>
                <Link href="/blog-details">
                  <a className="thm-btn bg-thm-color-white thm-color-one btn-border btn-rounded">
                    Read More <i className="fal fa-chevron-right ml-2" />
                  </a>
                </Link>
              </div>
            </article>
          </div>
          {/* post */}
        </div>
      </div>
    </section>
  );
};

export default Home2Blog;
