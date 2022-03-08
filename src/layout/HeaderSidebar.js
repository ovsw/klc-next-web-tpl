import Link from "next/dist/client/link";
import { Fragment } from "react";
const HeaderSidebar = ({ openSidebar, closeSidebar }) => {
  return (
    <Fragment>
      <aside
        className={`aside_bar aside_bar_right aside_canvas ${
          openSidebar ? "open" : ""
        }`}
      >
        {/* logo */}
        <Link href="/">
          <a className="logo pl-0">
            <img src="assets/images/logo.png" alt="logo" />
          </a>
        </Link>
        {/* logo */}
        <p>
          Sed ut perspiciatis unde omnis iste natus error voluptatem accan tium
          doloremque laudantium totam rem aperiam
        </p>
        <div className="sidebar">
          <div className="sidebar_widget recent_widgets">
            <h5 className="widget_title">Popular Courses</h5>
            <ul>
              <li>
                <div className="image">
                  <img
                    src="assets/images/coach/small_1.jpg"
                    alt="img"
                    className="image-fit"
                  />
                </div>
                <div className="text">
                  <h6 className="mb-0">
                    <Link href="/course-details">
                      How to Become a Life Coach Partner
                    </Link>
                  </h6>
                  <p className="mb-0">
                    <strong>By </strong>
                    <Link href="/courses">John Foerster</Link>
                  </p>
                </div>
              </li>
              <li>
                <div className="image">
                  <img
                    src="assets/images/coach/small_2.jpg"
                    alt="img"
                    className="image-fit"
                  />
                </div>
                <div className="text">
                  <h6 className="mb-0">
                    <Link href="/course-details">
                      How to Solve Health Problem
                    </Link>
                  </h6>
                  <p className="mb-0">
                    <strong>By </strong>
                    <Link href="/courses">David Sullivan</Link>
                  </p>
                </div>
              </li>
              <li>
                <div className="image">
                  <img
                    src="assets/images/coach/small_3.jpg"
                    alt="img"
                    className="image-fit"
                  />
                </div>
                <div className="text">
                  <h6 className="mb-0">
                    <Link href="/course-details">
                      Getting Started Expres And JavaScript
                    </Link>
                  </h6>
                  <p className="mb-0">
                    <strong>By </strong>
                    <Link href="/courses">Zachary Morin</Link>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="sidebar_widget">
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
      </aside>
      <div
        className="aside-overlay trigger-right"
        onClick={() => closeSidebar()}
      ></div>
    </Fragment>
  );
};

export default HeaderSidebar;
