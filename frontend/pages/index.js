import React from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'   
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

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

const Home = ({homepage }) => {
  const router = useRouter()
  const { t } = useTranslation('common')
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
      <div style={{margin: '20px'}}>
          <div>{t('current_locale')}: {t(router.locale)}</div>
          <div>
            <Link
              href='/'
              locale={router.locale === 'en' ? 'lt' : 'en'}>
              <button>
                {t('change_locale')}
              </button>
            </Link>
          </div>
        </div>
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



export async function getStaticProps({locale}) {
  // Run API calls in parallel
  const [homepageRes] = await Promise.all([
    fetchAPI(`/homepage`, {populate:{hero:{populate:'*'}, seo:{populate:'*'}}, locale:[locale]}),
  ]);

  return {
    props: {
      homepage: homepageRes.data,
      ...await serverSideTranslations(locale, ['common']),
    },
    revalidate: 1,
  };

}

export default Home;