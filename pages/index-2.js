import Home2Banner from "../src/components/wellcon/home2/Home2Banner";
import Home2Blog from "../src/components/wellcon/home2/Home2Blog";
import Home2Coach from "../src/components/wellcon/home2/Home2Coach";
import Home2Counter from "../src/components/wellcon/home2/Home2Counter";
import Home2Faqs from "../src/components/wellcon/home2/Home2Faqs";
import Home2Plane from "../src/components/wellcon/home2/Home2Plane";
import Home2Testimonials from "../src/components/wellcon/home2/Home2Testimonials";
import Home2Video from "../src/components/wellcon/home2/Home2Video";
import Home2Why from "../src/components/wellcon/home2/Home2Why";
import Layout from "../src/layout/Layout";

import Home3Banner from "../src/components/wellcon/home3/Home3Banner";

const Index2 = () => {
  return (
    <Layout noHeaderTop sideBar headerStyle={1} absolute footerStyle={2}>
      <Home3Banner />
      {/* Banner End */}
      {/* Counter Box Start */}
      <Home2Counter />
      {/* Counter Box End */}
      {/* Why Us Start */}
      <Home2Why />
      {/* Why Us End */}
      {/* Coach box Start */}
      <Home2Coach />
      {/* Coach box End */}
      {/* Video Quote Start */}
      <Home2Video />
      {/* Video Quote End */}
      {/* Faqs Start */}
      <Home2Faqs />
      {/* Faqs End */}
      {/* Plane Start */}
      <Home2Plane />
      {/* Plane End */}
      {/* Testimonials Start */}
      <Home2Testimonials />
      {/* Testimonials End */}
      {/* Blog Start */}
      <Home2Blog />
    </Layout>
  );
};

export default Index2;
