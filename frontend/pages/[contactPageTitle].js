import React from "react";
import Head from "next/head";
import { useContext } from "react";
import { GlobalContext } from "../pages/_app";
import { useRouter } from 'next/router'   
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import Navbar from '../components/Layout/Navbar';
import MainBanner from '../components/Main/MainBanner';
import Features from '../components/Homepage/Features'
import QualityTextBlock from '../components/Homepage/QualityTextBlock'
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

const Home = ({homepage, global, locale}) => {
  const { logo_colored } = useContext(GlobalContext);
  const router = useRouter()
  return (
    <>   
      
      <Head>
      <title>{homepage.attributes.seo.metaTitle}</title>
      </Head>

      
      <Navbar logo_colored={logo_colored} />
      <MainBanner heroData={homepage} />
      {router.locale === 'lt' ? <p>Kontaktai</p> : <p>Contacts</p>}
      {/* <QualityTextBlock blockText={homepage.attributes.qualityFeaturesList}/> */}
      {/* <FeaturedService />
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

export const getStaticPaths = ({ locale }) => {
    return {
      paths: [
        // if no `locale` is provided only the defaultLocale will be generated
        { params: { contactPageTitle: 'kontaktai' }, locale: 'lt' },
        { params: { contactPageTitle: 'contacts' }, locale: 'en' },
      ],
      fallback: false,
    }
  }

export async function getStaticProps({locale}) {
  const [homepageRes] = await Promise.all([
    fetchAPI(`/homepage`,
     {populate:{
      hero:{populate:'*'},
      seo:{populate:'*'},
      qualityFeaturesList:{populate:'*'}},
      
      locale:[locale]}),
  ]);

  return {
    props: {
      homepage: homepageRes.data,
      ...await serverSideTranslations(locale),
    },
    revalidate: 1,
  };

}

export default Home;