import Hom1Cta from "../src/components/wellcon/Home1/Hom1Cta";
import Hom1skills from "../src/components/wellcon/Home1/Hom1skills";
import Home1About from "../src/components/wellcon/Home1/Home1About";
import Home1Banner from "../src/components/wellcon/Home1/Home1Banner";
import Home1Blog from "../src/components/wellcon/Home1/Home1Blog";
import Home1Features from "../src/components/wellcon/Home1/Home1Features";
import Home1Plane from "../src/components/wellcon/Home1/Home1Plane";
import Home1Portfolio from "../src/components/wellcon/Home1/Home1Portfolio";
import Home1Pricing from "../src/components/wellcon/Home1/Home1Pricing";
import Home1Testimonials from "../src/components/wellcon/Home1/Home1Testimonials";
import Home1VideoBox from "../src/components/wellcon/Home1/Home1VideoBox";
import Layout from "../src/layout/Layout";

import {
  useStoryblokState,
  useStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

const Index = ({ story: initialStory }) => {
  const story = useStoryblokState(initialStory);

  if (!story.content) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Home1Banner />
      <StoryblokComponent blok={story.content} />;
      <Home1About />
      <Home1Features />
      <Hom1skills />
      <Home1Pricing />
      {/* Pricing End */}
      {/* Video Start */}
      <Home1VideoBox />
      {/* Video End */}
      {/* Plane Start */}
      <Home1Plane />
      {/* Plane End */}
      {/* Portfolio Start */}
      <Home1Portfolio />
      {/* Portfolio End */}
      {/* Testimonials Start */}
      <Home1Testimonials />
      {/* Testimonials End */}
      {/* Blog Start */}
      <Home1Blog />
      {/* Blog End */}
      {/* Cta Start */}
      <Hom1Cta />
    </Layout>
  );
};

export async function getStaticProps({ preview = true }) {
  const storyblokApi = useStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/home`, {
    version: "draft",
  });

  return {
    props: {
      story: data ? data.story : false,
      preview,
    },
    revalidate: 3600, // revalidate every hour
  };
}

export default Index;
