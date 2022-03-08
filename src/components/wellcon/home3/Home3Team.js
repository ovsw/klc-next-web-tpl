import Link from "next/dist/client/link";
const Home3Team = () => {
  return (
    <section className="section-padding bg-thm-color-two-gradient z-1 team_main_wrap pb-extra">
      <img
        src="assets/images/elements/element_1.png"
        className="element_1"
        alt="Element"
      />
      <img
        src="assets/images/elements/element_2.png"
        className="element_2"
        alt="Element"
      />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title wow fadeInDown">
              <p className="subtitle">
                <i className="fal fa-book" />
                Our Professionals
              </p>
              <h3 className="title">Meet Our Professinoal Team Members</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Block Start */}
          <div className="col-lg col-md-6">
            <div className="team_block wow fadeInUp" data-wow-delay=".3s">
              <div className="team_img">
                <img
                  src="assets/images/team/1.jpg"
                  alt="img"
                  className="image-fit"
                />
                <Link href="/team-details">
                  <a className="thm-btn bg-thm-color-two thm-color-two-shadow btn-circle link">
                    <i className="fal fa-plus" />
                  </a>
                </Link>
              </div>
              <h6 className="mb-1">
                <Link href="/team-details">
                  <a>Wallace D. Grace</a>
                </Link>
              </h6>
              <p className="thm-color-two mb-0 font-weight-bold">
                Coach Teacher
              </p>
            </div>
          </div>
          {/* Block End */}
          {/* Block Start */}
          <div className="col-lg col-md-6">
            <div className="team_block wow fadeInUp" data-wow-delay=".5s">
              <div className="team_img">
                <img
                  src="assets/images/team/2.jpg"
                  alt="img"
                  className="image-fit"
                />
                <Link href="/team-details">
                  <a className="thm-btn bg-thm-color-two thm-color-two-shadow btn-circle link">
                    <i className="fal fa-plus" />
                  </a>
                </Link>
              </div>
              <h6 className="mb-1">
                <Link href="/team-details">
                  <a>Evan A. Ethridge</a>
                </Link>
              </h6>
              <p className="thm-color-two mb-0 font-weight-bold">
                Coach Teacher
              </p>
            </div>
          </div>
          {/* Block End */}
          {/* Block Start */}
          <div className="col-lg col-md-6">
            <div className="team_block wow fadeInUp" data-wow-delay=".7s">
              <div className="team_img">
                <img
                  src="assets/images/team/3.jpg"
                  alt="img"
                  className="image-fit"
                />
                <Link href="/team-details">
                  <a className="thm-btn bg-thm-color-two thm-color-two-shadow btn-circle link">
                    <i className="fal fa-plus" />
                  </a>
                </Link>
              </div>
              <h6 className="mb-1">
                <Link href="/team-details">
                  <a>Marcus L. Duncan</a>
                </Link>
              </h6>
              <p className="thm-color-two mb-0 font-weight-bold">
                Coach Teacher
              </p>
            </div>
          </div>
          {/* Block End */}
          {/* Block Start */}
          <div className="col-lg col-md-6">
            <div className="team_block wow fadeInUp" data-wow-delay=".8s">
              <div className="team_img">
                <img
                  src="assets/images/team/4.jpg"
                  alt="img"
                  className="image-fit"
                />
                <Link href="/team-details">
                  <a className="thm-btn bg-thm-color-two thm-color-two-shadow btn-circle link">
                    <i className="fal fa-plus" />
                  </a>
                </Link>
              </div>
              <h6 className="mb-1">
                <Link href="/team-details">
                  <a>Paul B. Gilliland</a>
                </Link>
              </h6>
              <p className="thm-color-two mb-0 font-weight-bold">
                Coach Teacher
              </p>
            </div>
          </div>
          {/* Block End */}
          {/* Block Start */}
          <div className="col-lg col-md-6">
            <div className="team_block wow fadeInUp" data-wow-delay=".9s">
              <div className="team_img">
                <img
                  src="assets/images/team/5.jpg"
                  alt="img"
                  className="image-fit"
                />
                <Link href="/team-details">
                  <a className="thm-btn bg-thm-color-two thm-color-two-shadow btn-circle link">
                    <i className="fal fa-plus" />
                  </a>
                </Link>
              </div>
              <h6 className="mb-1">
                <Link href="/team-details">
                  <a>Donald T.Lewis</a>
                </Link>
              </h6>
              <p className="thm-color-two mb-0 font-weight-bold">
                Coach Teacher
              </p>
            </div>
          </div>
          {/* Block End */}
        </div>
      </div>
    </section>
  );
};

export default Home3Team;
