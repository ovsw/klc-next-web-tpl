import Link from "next/dist/client/link";
import FooterContact from "../src/components/FooterContact";
import PageTitleBanner from "../src/components/PageTitleBanner";
import Layout from "../src/layout/Layout";

const BlogDetails = () => {
  return (
    <Layout>
      <PageTitleBanner pageName="Blog Details" />

      <div className="section-padding">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 mb-md-80">
              {/* post details */}
              <article className="post post_list style_2 post_details mb-0 wow fadeInDown">
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
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quiaesy voluptas aspernatur aut odit aut
                    fugit sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Neque porro quisquam est qui
                    dolorem ipsum quia dolor sit amet consectetur adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam quis nostrum exercitationem ullam corporis
                    suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur, vel
                    illum qui dolorem eum fugiat quo voluptas nulla pariatu
                  </p>
                  <blockquote>
                    <h4 className="quote_title">
                      Smashing Podcast Episode With Paul Boag What Is Conversion
                      Optimization Inspired Design Decisions
                    </h4>
                    <cite className="quote_author">Bailey Dobson</cite>
                  </blockquote>
                  <h5>Ensure Your Design System Helps To Achieve Purpose </h5>
                  <p>
                    No one rejects, dislikes, or avoids pleasure itself, because
                    it is pleasure, but because those who do not know how to
                    pursue pleasure rationally encounter consequences that are
                    extremely painful. Nor again is there anyone who loves or
                    pursues or desires to obtain pain of itself, because it is
                    pain, but because occasionally circumstances occur in which
                    toil and pain can procure him some great pleasure.
                  </p>
                </div>
                {/* Post Tags & Share Start */}
                <div className="post_tags_share">
                  <div className="post_tags">
                    <h6>Popular Tags: </h6>
                    <div className="tags">
                      <Link href="/blog-grid">Cleaning</Link>
                      <Link href="/blog-grid">House</Link>
                      <Link href="/blog-grid">Office</Link>
                      <Link href="/blog-grid">Kitchen</Link>
                    </div>
                  </div>
                  <div className="post_share">
                    <h6>Share: </h6>
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
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-behance" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Post Tags & Share End */}
                {/* Post Author Start */}
                <div className="post_author">
                  <img
                    src="assets/images/blog/author.jpg"
                    alt="img"
                    className="image-fit"
                  />
                  <div className="text">
                    <h5 className="mb-2">Nathan George</h5>
                    <p className="mb-2">
                      Quis autem vel eum iure reprehenderit qui in ea voluptate
                      velit esse quam nihil molestiae consequatu vel illum qui
                      dolorem eum fugiat quo voluptas nulla pariano one rejects,
                      dislikes, or avoids pleasure itself, because
                    </p>
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
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-behance" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Post Author End */}
                {/* Post Navigation Start */}
                <ul className="post_navigation">
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
                </ul>
                {/* Post Navigation End */}
              </article>
              {/* Post Comments Start */}
              <h4>People Comments</h4>
              <ul className="comments mb-xl-30">
                <li className="comment">
                  <div className="comment_img">
                    <img
                      src="assets/images/blog/comments/1.jpg"
                      alt="img"
                      className="image-fit"
                    />
                  </div>
                  <div className="comment_text">
                    <h6 className="mb-0">John F. Medina</h6>
                    <p className="comment_date">25 May 2021</p>
                    <p className="mb-0">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae{" "}
                    </p>
                    <a href="#" className="comment_link">
                      Reply <i className="fal fa-long-arrow-right ml-2" />
                    </a>
                  </div>
                  <ul className="children">
                    <li className="comment">
                      <div className="comment_img">
                        <img
                          src="assets/images/blog/comments/2.jpg"
                          alt="img"
                          className="image-fit"
                        />
                      </div>
                      <div className="comment_text">
                        <h6 className="mb-0">Jeffrey T. Kelly</h6>
                        <p className="comment_date">25 May 2021</p>
                        <p className="mb-0">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae{" "}
                        </p>
                        <a href="#" className="comment_link">
                          Reply <i className="fal fa-long-arrow-right ml-2" />
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="comment">
                  <div className="comment_img">
                    <img
                      src="assets/images/blog/comments/3.jpg"
                      alt="img"
                      className="image-fit"
                    />
                  </div>
                  <div className="comment_text">
                    <h6 className="mb-0">Richard B. Zellmer</h6>
                    <p className="comment_date">25 May 2021</p>
                    <p className="mb-0">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae{" "}
                    </p>
                    <a href="#" className="comment_link">
                      Reply <i className="fal fa-long-arrow-right ml-2" />
                    </a>
                  </div>
                </li>
              </ul>
              {/* Post Comments End */}
              {/* Comment Form Start */}
              <div className="comment_form">
                <h4>Leave A Reply</h4>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="#"
                          placeholder="Your Full Name"
                          className="form-control form-control-custom style_2"
                          autoComplete="off"
                        />
                        <i className="fal fa-user" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name="#"
                          placeholder="Your Email"
                          className="form-control form-control-custom style_2"
                          autoComplete="off"
                        />
                        <i className="fal fa-envelope" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          rows={5}
                          name="#"
                          placeholder="Write Message"
                          className="form-control form-control-custom style_2"
                          autoComplete="off"
                          defaultValue={""}
                        />
                        <i className="fal fa-pen" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button
                        type="submit"
                        className="thm-btn bg-thm-color-three thm-color-three-shadow btn-rectangle"
                      >
                        Send Comment <i className="fal fa-chevron-right ml-2" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* Comment Form End */}
              {/* post details */}
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
                  <Link href="/blog-details">
                    <a className="d-block">
                      <img
                        src="assets/images/blog/adv.jpg"
                        alt="adv"
                        className="image-fit"
                      />
                    </a>
                  </Link>
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

export default BlogDetails;
