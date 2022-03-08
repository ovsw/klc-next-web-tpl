import Link from "next/dist/client/link";
import FooterContact from "../src/components/FooterContact";
import PageTitleBanner from "../src/components/PageTitleBanner";
import PaginationLayout from "../src/components/PaginationLayout";
import Layout from "../src/layout/Layout";

const BlogGrid = () => {
  return (
    <Layout>
      <PageTitleBanner pageName="Blog Grid" />

      <div className="section-padding">
        <div className="container">
          <PaginationLayout id="#blogGrid" sort={3}>
            <div className="row">
              {/* post */}
              <div className="col-xl-4 col-md-6" id="blogGrid">
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
                      Quis autem vel eumiure reprehenderit quis volupta velit
                      esse quam nihil molestiae conse quatur vel illum qui
                      dolorem
                    </p>
                    <Link href="/blog-details">
                      <a className="thm-btn bg-thm-color-white thm-color-one btn-rectangle">
                        Read More <i className="fal fa-chevron-right ml-2" />
                      </a>
                    </Link>
                  </div>
                </article>
              </div>
              {/* post */}
              {/* post */}
              <div className="col-xl-4 col-md-6" id="blogGrid">
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
                    <p className="post_text">
                      Quis autem vel eumiure reprehenderit quis volupta velit
                      esse quam nihil molestiae conse quatur vel illum qui
                      dolorem
                    </p>
                    <Link href="/blog-details">
                      <a className="thm-btn bg-thm-color-white thm-color-one btn-rectangle">
                        Read More <i className="fal fa-chevron-right ml-2" />
                      </a>
                    </Link>
                  </div>
                </article>
              </div>
              {/* post */}
              {/* post */}
              <div className="col-xl-4 col-md-6" id="blogGrid">
                <article
                  className="post style_2 wow fadeInDown"
                  data-wow-delay=".30ms"
                >
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
                        Get Started With UI Design With Tips To Speed
                      </Link>
                    </h4>
                    <p className="post_text">
                      Quis autem vel eumiure reprehenderit quis volupta velit
                      esse quam nihil molestiae conse quatur vel illum qui
                      dolorem
                    </p>
                    <Link href="/blog-details">
                      <a className="thm-btn bg-thm-color-white thm-color-one btn-rectangle">
                        Read More <i className="fal fa-chevron-right ml-2" />
                      </a>
                    </Link>
                  </div>
                </article>
              </div>
              {/* post */}
              {/* post */}
              <div className="col-xl-4 col-md-6" id="blogGrid">
                <article
                  className="post style_2 wow fadeInUp"
                  data-wow-delay=".40ms"
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
                        Make Your Own Expanding Contracting Content
                      </Link>
                    </h4>
                    <p className="post_text">
                      Quis autem vel eumiure reprehenderit quis volupta velit
                      esse quam nihil molestiae conse quatur vel illum qui
                      dolorem
                    </p>
                    <Link href="/blog-details">
                      <a className="thm-btn bg-thm-color-white thm-color-one btn-rectangle">
                        Read More <i className="fal fa-chevron-right ml-2" />
                      </a>
                    </Link>
                  </div>
                </article>
              </div>
              {/* post */}
              {/* post */}
              <div className="col-xl-4 col-md-6" id="blogGrid">
                <article
                  className="post style_2 wow fadeInDown"
                  data-wow-delay=".50ms"
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
                        Abstracting WordPress Code To Reuse With Other
                      </Link>
                    </h4>
                    <p className="post_text">
                      Quis autem vel eumiure reprehenderit quis volupta velit
                      esse quam nihil molestiae conse quatur vel illum qui
                      dolorem
                    </p>
                    <Link href="/blog-details">
                      <a className="thm-btn bg-thm-color-white thm-color-one btn-rectangle">
                        Read More <i className="fal fa-chevron-right ml-2" />
                      </a>
                    </Link>
                  </div>
                </article>
              </div>
              {/* post */}
              {/* post */}
              <div className="col-xl-4 col-md-6" id="blogGrid">
                <article
                  className="post style_2 wow fadeInUp"
                  data-wow-delay=".60ms"
                >
                  <div className="post_img">
                    <img
                      src="assets/images/blog/6.jpg"
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
                      Quis autem vel eumiure reprehenderit quis volupta velit
                      esse quam nihil molestiae conse quatur vel illum qui
                      dolorem
                    </p>
                    <Link href="/blog-details">
                      <a className="thm-btn bg-thm-color-white thm-color-one btn-rectangle">
                        Read More <i className="fal fa-chevron-right ml-2" />
                      </a>
                    </Link>
                  </div>
                </article>
              </div>
              {/* post */}
              {/* post */}
              <div className="col-xl-4 col-md-6" id="blogGrid">
                <article
                  className="post style_2 wow fadeInDown"
                  data-wow-delay=".70ms"
                >
                  <div className="post_img">
                    <img
                      src="assets/images/blog/7.jpg"
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
                        Inclusive Component New Printed Book Heydon
                      </Link>
                    </h4>
                    <p className="post_text">
                      Quis autem vel eumiure reprehenderit quis volupta velit
                      esse quam nihil molestiae conse quatur vel illum qui
                      dolorem
                    </p>
                    <Link href="/blog-details">
                      <a className="thm-btn bg-thm-color-white thm-color-one btn-rectangle">
                        Read More <i className="fal fa-chevron-right ml-2" />
                      </a>
                    </Link>
                  </div>
                </article>
              </div>
              {/* post */}
              {/* post */}
              <div className="col-xl-4 col-md-6" id="blogGrid">
                <article
                  className="post style_2 wow fadeInUp"
                  data-wow-delay=".80ms"
                >
                  <div className="post_img">
                    <img
                      src="assets/images/blog/8.jpg"
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
                      Quis autem vel eumiure reprehenderit quis volupta velit
                      esse quam nihil molestiae conse quatur vel illum qui
                      dolorem
                    </p>
                    <Link href="/blog-details">
                      <a className="thm-btn bg-thm-color-white thm-color-one btn-rectangle">
                        Read More <i className="fal fa-chevron-right ml-2" />
                      </a>
                    </Link>
                  </div>
                </article>
              </div>
              {/* post */}
              {/* post */}
              <div className="col-xl-4 col-md-6" id="blogGrid">
                <article
                  className="post style_2 wow fadeInDown"
                  data-wow-delay=".90ms"
                >
                  <div className="post_img">
                    <img
                      src="assets/images/blog/9.jpg"
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
                      Quis autem vel eumiure reprehenderit quis volupta velit
                      esse quam nihil molestiae conse quatur vel illum qui
                      dolorem
                    </p>
                    <Link href="/blog-details">
                      <a className="thm-btn bg-thm-color-white thm-color-one btn-rectangle">
                        Read More <i className="fal fa-chevron-right ml-2" />
                      </a>
                    </Link>
                  </div>
                </article>
              </div>
              {/* post */}
              {/* post */}
              <div className="col-xl-4 col-md-6" id="blogGrid">
                <article
                  className="post style_2 wow fadeInUp"
                  data-wow-delay=".100ms"
                >
                  <div className="post_img">
                    <img
                      src="assets/images/blog/10.jpg"
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
                      Quis autem vel eumiure reprehenderit quis volupta velit
                      esse quam nihil molestiae conse quatur vel illum qui
                      dolorem
                    </p>
                    <Link href="/blog-details">
                      <a className="thm-btn bg-thm-color-white thm-color-one btn-rectangle">
                        Read More <i className="fal fa-chevron-right ml-2" />
                      </a>
                    </Link>
                  </div>
                </article>
              </div>
              {/* post */}
              {/* post */}
              <div className="col-xl-4 col-md-6" id="blogGrid">
                <article
                  className="post style_2 wow fadeInDown"
                  data-wow-delay=".110ms"
                >
                  <div className="post_img">
                    <img
                      src="assets/images/blog/11.jpg"
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
                    <p className="post_text">
                      Quis autem vel eumiure reprehenderit quis volupta velit
                      esse quam nihil molestiae conse quatur vel illum qui
                      dolorem
                    </p>
                    <Link href="/blog-details">
                      <a className="thm-btn bg-thm-color-white thm-color-one btn-rectangle">
                        Read More <i className="fal fa-chevron-right ml-2" />
                      </a>
                    </Link>
                  </div>
                </article>
              </div>
              {/* post */}
              {/* post */}
              <div className="col-xl-4 col-md-6" id="blogGrid">
                <article
                  className="post style_2 wow fadeInUp"
                  data-wow-delay=".120ms"
                >
                  <div className="post_img">
                    <img
                      src="assets/images/blog/12.jpg"
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
                        Get Started With UI Design With Tips To Speed
                      </Link>
                    </h4>
                    <p className="post_text">
                      Quis autem vel eumiure reprehenderit quis volupta velit
                      esse quam nihil molestiae conse quatur vel illum qui
                      dolorem
                    </p>
                    <Link href="/blog-details">
                      <a className="thm-btn bg-thm-color-white thm-color-one btn-rectangle">
                        Read More <i className="fal fa-chevron-right ml-2" />
                      </a>
                    </Link>
                  </div>
                </article>
              </div>
              {/* post */}
            </div>
          </PaginationLayout>
        </div>
      </div>

      <FooterContact />
    </Layout>
  );
};

export default BlogGrid;
