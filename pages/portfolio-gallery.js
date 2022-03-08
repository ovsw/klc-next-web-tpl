import Link from "next/dist/client/link";
import FooterContact from "../src/components/FooterContact";
import PageTitleBanner from "../src/components/PageTitleBanner";
import Layout from "../src/layout/Layout";

const PortfolioGallery = () => {
  return (
    <Layout>
      <PageTitleBanner pageName="Portfolio Gallery" />

      <div className="section-padding isotope-filter-items">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="filter-btns mb-5">
                <ul>
                  <li className="active filter-trigger" data-filter="*">
                    <a href="#">All</a>
                  </li>
                  <li className="filter-trigger" data-filter=".lifestyle">
                    <a href="#">Lifestyle</a>
                  </li>
                  <li className="filter-trigger" data-filter=".goals">
                    <a href="#">Goals</a>
                  </li>
                  <li className="filter-trigger" data-filter=".fashion">
                    <a href="#">Fashion</a>
                  </li>
                  <li className="filter-trigger" data-filter=".health">
                    <a href="#">Health</a>
                  </li>
                  <li className="filter-trigger" data-filter=".business">
                    <a href="#">Business</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row filteritems">
            {/* Portfolio Start */}
            <div className="col-lg-4 col-md-6 masonry-item lifestyle business health">
              <div className="portfolio_box type_gallery">
                <div className="portfolio_img">
                  <img
                    src="assets/images/portfolio/1.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
                <Link href="/portfolio-details">
                  <a className="link">
                    <i className="fal fa-plus" />
                  </a>
                </Link>
              </div>
            </div>
            {/* Portfolio End */}
            {/* Portfolio Start */}
            <div className="col-lg-4 col-md-6 masonry-item goals lifestyle business">
              <div className="portfolio_box type_gallery">
                <div className="portfolio_img">
                  <img
                    src="assets/images/portfolio/2.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
                <Link href="/portfolio-details">
                  <a className="link">
                    <i className="fal fa-plus" />
                  </a>
                </Link>
              </div>
            </div>
            {/* Portfolio End */}
            {/* Portfolio Start */}
            <div className="col-lg-4 col-md-6 masonry-item fashion goals lifestyle">
              <div className="portfolio_box type_gallery">
                <div className="portfolio_img">
                  <img
                    src="assets/images/portfolio/3.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
                <Link href="/portfolio-details">
                  <a className="link">
                    <i className="fal fa-plus" />
                  </a>
                </Link>
              </div>
            </div>
            {/* Portfolio End */}
            {/* Portfolio Start */}
            <div className="col-lg-4 col-md-6 masonry-item health fashion goals">
              <div className="portfolio_box type_gallery">
                <div className="portfolio_img">
                  <img
                    src="assets/images/portfolio/4.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
                <Link href="/portfolio-details">
                  <a className="link">
                    <i className="fal fa-plus" />
                  </a>
                </Link>
              </div>
            </div>
            {/* Portfolio End */}
            {/* Portfolio Start */}
            <div className="col-lg-4 col-md-6 masonry-item business health fashion">
              <div className="portfolio_box type_gallery">
                <div className="portfolio_img">
                  <img
                    src="assets/images/portfolio/5.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
                <Link href="/portfolio-details">
                  <a className="link">
                    <i className="fal fa-plus" />
                  </a>
                </Link>
              </div>
            </div>
            {/* Portfolio End */}
            {/* Portfolio Start */}
            <div className="col-lg-4 col-md-6 masonry-item lifestyle business health">
              <div className="portfolio_box type_gallery">
                <div className="portfolio_img">
                  <img
                    src="assets/images/portfolio/6.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
                <Link href="/portfolio-details">
                  <a className="link">
                    <i className="fal fa-plus" />
                  </a>
                </Link>
              </div>
            </div>
            {/* Portfolio End */}
            {/* Portfolio Start */}
            <div className="col-lg-4 col-md-6 masonry-item goals lifestyle business">
              <div className="portfolio_box type_gallery">
                <div className="portfolio_img">
                  <img
                    src="assets/images/portfolio/7.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
                <Link href="/portfolio-details">
                  <a className="link">
                    <i className="fal fa-plus" />
                  </a>
                </Link>
              </div>
            </div>
            {/* Portfolio End */}
            {/* Portfolio Start */}
            <div className="col-lg-4 col-md-6 masonry-item fashion goals lifestyle">
              <div className="portfolio_box type_gallery">
                <div className="portfolio_img">
                  <img
                    src="assets/images/portfolio/8.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
                <Link href="/portfolio-details">
                  <a className="link">
                    <i className="fal fa-plus" />
                  </a>
                </Link>
              </div>
            </div>
            {/* Portfolio End */}
            {/* Portfolio Start */}
            <div className="col-lg-4 col-md-6 masonry-item health fashion goals">
              <div className="portfolio_box type_gallery">
                <div className="portfolio_img">
                  <img
                    src="assets/images/portfolio/9.jpg"
                    className="image-fit"
                    alt="img"
                  />
                </div>
                <Link href="/portfolio-details">
                  <a className="link">
                    <i className="fal fa-plus" />
                  </a>
                </Link>
              </div>
            </div>
            {/* Portfolio End */}
          </div>
        </div>
      </div>
      <FooterContact />
    </Layout>
  );
};

export default PortfolioGallery;
