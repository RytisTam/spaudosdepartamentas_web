import React from "react";



import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import Navbar from '../components/Layout/Navbar';
import MainBanner from '../components/Main/MainBanner';
// import FeaturedService from '../components/Main/FeaturedService';
// import ServiceRightImageStyle from '../components/Main/ServiceRightImageStyle';
// import ServiceLeftImageStyle from '../components/Main/ServiceLeftImageStyle';
// import WhyChooseUs from '../components/Common/WhyChooseUs';
// import FeaturesContent from '../components/Main/FeaturesContent';
// import ClientsFeedbackSlider from '../components/Common/ClientsFeedbackSlider';
// import PricingStyleOne from '../components/Pricing/PricingStyleOne';
// import TeamStyleOne from '../components/Common/TeamStyleOne';
// import OurLovingClients from '../components/Common/OurLovingClients';
// import FaqContent from '../components/Faq/FaqContent';
// import SubscribeStyleOne from '../components/Common/SubscribeStyleOne';
// import BlogPostStyleOne from '../components/Common/BlogPostStyleOne';
import Footer from '../components/Layout/Footer';

const Home = ({ articles, categories, homepage }) => {
  return (
    // <Layout categories={categories}>
    //   <Seo seo={homepage.attributes.seo} />
    //   <div className="uk-section">
    //     <div className="uk-container uk-container-large">
    //       <h1>{homepage.attributes.hero.title}</h1>
    //       <Articles articles={articles} />
    //     </div>
    //   </div>
    // </Layout>

    <>
      <Navbar />
      <MainBanner heroData={homepage} />
      {/* <FeaturedService />
      <ServiceRightImageStyle />
      <ServiceLeftImageStyle />
      <WhyChooseUs />
      <FeaturesContent />
      <ClientsFeedbackSlider />
      <PricingStyleOne />
      <TeamStyleOne />
      <OurLovingClients />
      <FaqContent />
      <SubscribeStyleOne />
      <BlogPostStyleOne /> */}
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: ["image", "category"] }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {populate: "*"}),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

export default Home;