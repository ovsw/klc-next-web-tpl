import Link from "next/dist/client/link";
const Home2Why = () => {
  return (
    <section className="section-padding pt-0 about">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-5 col-lg-6">
            <div className="section-title left-align wow fadeInDown">
              <p className="subtitle">
                <i className="fal fa-book" />
                What We Offer
              </p>
              <h3 className="title">People Why Choose Our Coachs</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium totam remaperiam eaque ipsa
                quae abillo inventore veritatis quasi architecto
              </p>
              <p>
                Accusantium doloremque laudantium totam rem aperiam eaque ipsa
                quae abillo inventore veritatis architecto
              </p>
              <Link href="/about">
                <a className="thm-btn bg-thm-color-three thm-color-three-shadow btn-rounded">
                  Learn More <i className="fal fa-chevron-right ml-2" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <ul className="why-us-list style_2">
              <li className="wow fadeInUp" data-wow-delay=".2s">
                <i className="icon fal fa-check" />
                <div className="text">
                  <h6 className="mb-0">We Teach You How To Coach Yourself</h6>
                </div>
                <img
                  src="assets/images/whyus_bg.jpg"
                  alt="img"
                  className="image-fit"
                />
              </li>
              <li className="wow fadeInDown" data-wow-delay=".35s">
                <i className="icon fal fa-check" />
                <div className="text">
                  <h6 className="mb-0">We Teach You How To Feel Better</h6>
                </div>
                <img
                  src="assets/images/whyus_bg.jpg"
                  alt="img"
                  className="image-fit"
                />
              </li>
              <li className="wow fadeInUp" data-wow-delay=".40s">
                <i className="icon fal fa-check" />
                <div className="text">
                  <h6 className="mb-0">We Teach You How To Take Massive</h6>
                </div>
                <img
                  src="assets/images/whyus_bg.jpg"
                  alt="img"
                  className="image-fit"
                />
              </li>
              <li className="wow fadeInDown" data-wow-delay=".5s">
                <i className="icon fal fa-check" />
                <div className="text">
                  <h6 className="mb-0">
                    We Teach You How To Transform Your Life
                  </h6>
                </div>
                <img
                  src="assets/images/whyus_bg.jpg"
                  alt="img"
                  className="image-fit"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home2Why;
