import { Fragment, useEffect, useState } from "react";
import { animation, aTagClick, pieChart, scrollTop } from "../utils";
import Footer from "./Footer";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import ScrollTop from "./ScrollTop";

const Layout = ({
  children,
  footerStyle,
  noHeaderTop,
  sticky,
  sideBar,
  headerStyle,
  absolute,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    aTagClick();
    window.addEventListener("scroll", scrollTop);
  });
  useEffect(() => {
    animation();
    pieChart("circle_bar");
  }, []);
  return (
    <Fragment>
      <MobileMenu
        closeMobileMenu={() => setMobileMenuOpen(false)}
        showMobileMenu={mobileMenuOpen}
      />
      <Header
        openMobileMenu={() => setMobileMenuOpen(true)}
        noHeaderTop={noHeaderTop}
        sticky={sticky}
        sideBar={sideBar}
        headerStyle={headerStyle}
        absolute={absolute}
      />
      {children}
      <Footer footerStyle={footerStyle} />
      <ScrollTop />
    </Fragment>
  );
};

export default Layout;
