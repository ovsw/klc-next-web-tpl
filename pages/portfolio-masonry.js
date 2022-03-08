import Link from "next/dist/client/link";
import FooterContact from "../src/components/FooterContact";
import PageTitleBanner from "../src/components/PageTitleBanner";
import Layout from "../src/layout/Layout";

const PortfolioMasonry = () => {
  return (
    <Layout>
      <PageTitleBanner pageName="Portfolio Masonry" />

      <section className="section-padding">
        <div className="container">
          <div className="row">
            {/* Portfolio Start */}
            <div className="col-lg-4 col-md-6">
              <div className="portfolio_box type_gallery type_masonry">
                <div className="portfolio_img">
                  <img
                    src="assets/images/portfolio/masonry/1.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
                <div className="link">
                  <i className="fal fa-plus" />
                  <h4 className="title mb-0">
                    <Link href="/portfolio-details">Web Development</Link>
                  </h4>
                  <p>Design Coach</p>
                </div>
              </div>
            </div>
            {/* Portfolio Start */}
            {/* Portfolio Start */}
            <div className="col-lg-8 col-md-6">
              <div className="portfolio_box type_gallery type_masonry">
                <div className="portfolio_img">
                  <img
                    src="assets/images/portfolio/masonry/2.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
                <div className="link">
                  <i className="fal fa-plus" />
                  <h4 className="title mb-0">
                    <Link href="/portfolio-details">Online Education</Link>
                  </h4>
                  <p>English Coach</p>
                </div>
              </div>
            </div>
            {/* Portfolio Start */}
            {/* Portfolio Start */}
            <div className="col-lg-4 col-md-6">
              <div className="portfolio_box type_gallery type_masonry">
                <div className="portfolio_img">
                  <img
                    src="assets/images/portfolio/masonry/3.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
                <div className="link">
                  <i className="fal fa-plus" />
                  <h4 className="title mb-0">
                    <Link href="/portfolio-details">Marketing Strategy</Link>
                  </h4>
                  <p>Business Coach</p>
                </div>
              </div>
            </div>
            {/* Portfolio Start */}
            {/* Portfolio Start */}
            <div className="col-lg-4 col-md-6">
              <div className="portfolio_box type_gallery type_masonry">
                <div className="portfolio_img">
                  <img
                    src="assets/images/portfolio/masonry/4.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
                <div className="link">
                  <i className="fal fa-plus" />
                  <h4 className="title mb-0">
                    <Link href="/portfolio-details">Business Consulting</Link>
                  </h4>
                  <p>Life Coach</p>
                </div>
              </div>
            </div>
            {/* Portfolio Start */}
            {/* Portfolio Start */}
            <div className="col-lg-4 col-md-6">
              <div className="portfolio_box type_gallery type_masonry">
                <div className="portfolio_img">
                  <img
                    src="assets/images/portfolio/masonry/5.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
                <div className="link">
                  <i className="fal fa-plus" />
                  <h4 className="title mb-0">
                    <Link href="/portfolio-details">Well Management</Link>
                  </h4>
                  <p>Business Coach</p>
                </div>
              </div>
            </div>
            {/* Portfolio Start */}
            {/* Portfolio Start */}
            <div className="col-lg-8 col-md-6">
              <div className="portfolio_box type_gallery type_masonry">
                <div className="portfolio_img">
                  <img
                    src="assets/images/portfolio/masonry/6.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
                <div className="link">
                  <i className="fal fa-plus" />
                  <h4 className="title mb-0">
                    <Link href="/portfolio-details">Co-Relationship</Link>
                  </h4>
                  <p>Business Coach</p>
                </div>
              </div>
            </div>
            {/* Portfolio Start */}
            {/* Portfolio Start */}
            <div className="col-lg-4 col-md-6">
              <div className="portfolio_box type_gallery type_masonry">
                <div className="portfolio_img">
                  <img
                    src="assets/images/portfolio/masonry/7.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
                <div className="link">
                  <i className="fal fa-plus" />
                  <h4 className="title mb-0">
                    <Link href="/portfolio-details">Relationship Buildup</Link>
                  </h4>
                  <p>Health Coach</p>
                </div>
              </div>
            </div>
            {/* Portfolio Start */}
            {/* Portfolio Start */}
            <div className="col-md-6">
              <div className="portfolio_box type_gallery type_masonry">
                <div className="portfolio_img">
                  <img
                    src="assets/images/portfolio/masonry/8.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
                <div className="link">
                  <i className="fal fa-plus" />
                  <h4 className="title mb-0">
                    <Link href="/portfolio-details">Well Management</Link>
                  </h4>
                  <p>Business Coach</p>
                </div>
              </div>
            </div>
            {/* Portfolio Start */}
            {/* Portfolio Start */}
            <div className="col-md-6">
              <div className="portfolio_box type_gallery type_masonry">
                <div className="portfolio_img">
                  <img
                    src="assets/images/portfolio/masonry/9.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
                <div className="link">
                  <i className="fal fa-plus" />
                  <h4 className="title mb-0">
                    <Link href="/portfolio-details">Physical Exercise</Link>
                  </h4>
                  <p>Health Coach</p>
                </div>
              </div>
            </div>
            {/* Portfolio Start */}
            <div className="col-12 text-center mt-5">
              <Link href="/portfolio-grid">
                <a className="thm-btn bg-thm-color-white thm-color-one btn-border btn-rectangle">
                  View All Project
                  <i className="fal fa-chevron-right ml-2" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FooterContact />
    </Layout>
  );
};

export default PortfolioMasonry;
