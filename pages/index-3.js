import Hom3Plane from "../src/components/wellcon/home3/Hom3Plane";
import Home3About from "../src/components/wellcon/home3/Home3About";
import Home3Banner from "../src/components/wellcon/home3/Home3Banner";
import Home3Coach from "../src/components/wellcon/home3/Home3Coach";
import Home3Cta from "../src/components/wellcon/home3/Home3Cta";
import Home3Features from "../src/components/wellcon/home3/Home3Features";
import Home3Newsletter from "../src/components/wellcon/home3/Home3Newsletter";
import Home3Sponsors from "../src/components/wellcon/home3/Home3Sponsors";
import Home3Team from "../src/components/wellcon/home3/Home3Team";
import Home3Testimonials from "../src/components/wellcon/home3/Home3Testimonials";
import Home3Video from "../src/components/wellcon/home3/Home3Video";
import Home3Why from "../src/components/wellcon/home3/Home3Why";
import Layout from "../src/layout/Layout";

const Index2 = () => {
  return (
    <Layout noHeaderTop sideBar sticky headerStyle={1} footerStyle={1}>
      <Home3Banner />
      {/* Banner End */}
      {/* Features Start */}
      <Home3Features />
      {/* Features End */}
      {/* About Start */}
      <Home3About />
      {/* About End */}
      {/* Team Start */}
      <Home3Team />
      {/* Team End */}
      {/* Cta Start */}
      <Home3Cta />
      {/* Cta End */}
      {/* Video Start */}
      <Home3Video />
      {/* Video End */}
      {/* Testimonials Start */}
      <Home3Testimonials />
      {/* Testimonials End */}
      {/* Coach Grid Start */}
      <Home3Coach />
      {/* Coach Grid End */}
      {/* Sponsors Start */}
      <Home3Sponsors />
      {/* Sponsors End */}
      {/* Newsletter Start */}
      <Home3Newsletter />
      {/* Newsletter End */}
      {/* Why Us Start */}
      <Home3Why />
      {/* Why Us End */}
      {/* Plane Start */}
      <Hom3Plane />
    </Layout>
  );
};

export default Index2;
