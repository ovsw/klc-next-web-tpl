import Link from "next/link";
import { Fragment } from "react";
export const HomeMenu = () => (
  <Fragment>
    <li className="menu-item">
      <Link href="/">Home v1</Link>
    </li>
    <li className="menu-item">
      <Link href="/index-2">Home v2</Link>
    </li>
    <li className="menu-item">
      <Link href="/index-3">Home v3</Link>
    </li>
  </Fragment>
);
export const PageMenu = () => (
  <Fragment>
    <li className="menu-item">
      <Link href="/about">About Us</Link>
    </li>
    <li className="menu-item">
      <Link href="/about-2">About Me</Link>
    </li>
    <li className="menu-item">
      <Link href="/events">Events</Link>
    </li>
    <li className="menu-item">
      <Link href="/videos">Videos</Link>
    </li>
    <li className="menu-item">
      <Link href="/services">Services</Link>
    </li>
    <li className="menu-item">
      <Link href="/team">Team</Link>
    </li>
    <li className="menu-item">
      <Link href="/team-details">Team Details</Link>
    </li>
    <li className="menu-item">
      <Link href="/pricing">Pricing</Link>
    </li>
    <li className="menu-item">
      <Link href="/testimonials">Testimonials</Link>
    </li>
    <li className="menu-item">
      <Link href="/faqs">{`FAQ's`}</Link>
    </li>
  </Fragment>
);

export const CoursesMenu = () => (
  <Fragment>
    <li className="menu-item">
      <Link href="/courses">Courses</Link>
    </li>
    <li className="menu-item">
      <Link href="/course-details">Course Details</Link>
    </li>
  </Fragment>
);
export const BlogMenu = () => (
  <Fragment>
    <li className="menu-item">
      <Link href="/blog-grid">Blog Grid</Link>
    </li>
    <li className="menu-item">
      <Link href="/blog-list">Blog List</Link>
    </li>
    <li className="menu-item">
      <Link href="/blog-masonry">Blog Masonry</Link>
    </li>
    <li className="menu-item">
      <Link href="/blog-details">Blog Details</Link>
    </li>
  </Fragment>
);
export const PortfolioMenu = () => (
  <Fragment>
    <li className="menu-item">
      <Link href="/portfolio-grid">Portfolio Grid</Link>
    </li>
    <li className="menu-item">
      <Link href="/portfolio-gallery">Portfolio Gallery</Link>
    </li>
    <li className="menu-item">
      <Link href="/portfolio-masonry">Portfolio Masonry</Link>
    </li>
    <li className="menu-item">
      <Link href="/portfolio-details">Portfolio Details</Link>
    </li>
  </Fragment>
);
