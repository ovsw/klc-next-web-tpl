import Link from "next/dist/client/link";
const Home3Coach = () => {
  return (
    <section className="section-padding pt-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title wow fadeInUp">
              <p className="subtitle">
                <i className="fal fa-book" />
                Popular Coach
              </p>
              <h3 className="title">We Provide Professional Life Coachs</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Coach block */}
          <div className="col-xl-4 col-md-6">
            <div className="coach_block wow fadeInDown" data-wow-delay=".2s">
              <div className="coach_img">
                <img
                  src="assets/images/coach/1.jpg"
                  alt="img"
                  className="image-fit"
                />
                <div className="coach_badges">
                  <span className="tag_badge bg-thm-color-four">Free</span>
                </div>
                <Link href="/course-details">
                  <a className="thm-btn thm-color-two bg-thm-color-white thm-color-two-shadow btn-circle link">
                    <i className="fal fa-chevron-right" />
                  </a>
                </Link>
              </div>
              <div className="coach_caption">
                <div className="coach_meta">
                  <Link href="/courses">
                    <a className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded">
                      Business
                    </a>
                  </Link>
                  <div className="ratings">
                    <i className="fal fa-star active" />
                    <i className="fal fa-star active" />
                    <i className="fal fa-star active" />
                    <i className="fal fa-star active" />
                    <i className="fal fa-star" />
                  </div>
                </div>
                <h5 className="title mb-xl-20">
                  <Link href="/course-details">
                    <a>Most Powerful Thing You Have Self Coaching Scholars</a>
                  </Link>
                </h5>
                <div className="author">
                  <img
                    src="assets/images/author/1.jpg"
                    alt="img"
                    className="image-fit"
                  />
                  <Link href="/courses">
                    <a className="thm-color-one">Wilbert A. Toney</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Coach block */}
          {/* Coach block */}
          <div className="col-xl-4 col-md-6">
            <div className="coach_block wow fadeInUp" data-wow-delay=".4s">
              <div className="coach_img">
                <img
                  src="assets/images/coach/2.jpg"
                  alt="img"
                  className="image-fit"
                />
                <div className="coach_badges">
                  <span className="tag_badge bg-thm-color-four">$50</span>
                </div>
                <Link href="/course-details">
                  <a className="thm-btn thm-color-two bg-thm-color-white thm-color-two-shadow btn-circle link">
                    <i className="fal fa-chevron-right" />
                  </a>
                </Link>
              </div>
              <div className="coach_caption">
                <div className="coach_meta">
                  <Link href="/courses">
                    <a className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded">
                      Lifestyle
                    </a>
                  </Link>
                  <div className="ratings">
                    <i className="fal fa-star active" />
                    <i className="fal fa-star active" />
                    <i className="fal fa-star active" />
                    <i className="fal fa-star active" />
                    <i className="fal fa-star active" />
                  </div>
                </div>
                <h5 className="title mb-xl-20">
                  <Link href="/course-details">
                    <a>Coach Certification Programs Most Powerful Coach</a>
                  </Link>
                </h5>
                <div className="author">
                  <img
                    src="assets/images/author/2.jpg"
                    alt="img"
                    className="image-fit"
                  />
                  <Link href="/courses">
                    <a className="thm-color-one">Emma H. Parish</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Coach block */}
          {/* Coach block */}
          <div className="col-xl-4 col-md-6">
            <div className="coach_block wow fadeInDown" data-wow-delay=".6s">
              <div className="coach_img">
                <img
                  src="assets/images/coach/3.jpg"
                  alt="img"
                  className="image-fit"
                />
                <div className="coach_badges">
                  <span className="tag_badge bg-thm-color-four">Free</span>
                </div>
                <Link href="/course-details">
                  <a className="thm-btn thm-color-two bg-thm-color-white thm-color-two-shadow btn-circle link">
                    <i className="fal fa-chevron-right" />
                  </a>
                </Link>
              </div>
              <div className="coach_caption">
                <div className="coach_meta">
                  <Link href="/courses">
                    <a className="coach_cat thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded">
                      Business
                    </a>
                  </Link>
                  <div className="ratings">
                    <i className="fal fa-star active" />
                    <i className="fal fa-star active" />
                    <i className="fal fa-star active" />
                    <i className="fal fa-star" />
                    <i className="fal fa-star" />
                  </div>
                </div>
                <h5 className="title mb-xl-20">
                  <Link href="/course-details">
                    <a>
                      Matter How Great Your Life Al Ready, We’ll Give Syatem
                    </a>
                  </Link>
                </h5>
                <div className="author">
                  <img
                    src="assets/images/author/3.jpg"
                    alt="img"
                    className="image-fit"
                  />
                  <Link href="/courses">
                    <a className="thm-color-one">Junior N. West</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Coach block */}
        </div>
      </div>
    </section>
  );
};

export default Home3Coach;
