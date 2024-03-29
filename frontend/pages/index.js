import React, {useContext} from "react";
import Head from "next/head";
import { GlobalContext } from "../pages/_app";
import { useRouter } from 'next/router'   
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { fetchAPI } from "../lib/api";
// import Instagram from 'instagram-web-api';
// import instagram from 'user-instagram';
import Navbar from '../components/Layout/Navbar'
import NavbarV2 from '../components/Layout/NavbarV2'
import MainBanner from '../components/Main/MainBanner'
import Numbers from '../components/Homepage/Statistics'
import QualityTextBlock from '../components/Homepage/QualityTextBlock'
import InstagramFeed from "../components/Homepage/InstagramFeed/InstagramFeed";
import Footer from '../components/Layout/Footer';
import Footer_v2 from '../components/Layout/Footer_v2';
import MainBannerTW from "../components/Main/MainBannerTW";


const Home = ({homepage}) => {
  const { logo_colored, logo_white } = useContext(GlobalContext);
  const router = useRouter()
  return (
    <>   
      <Head>
      <title>{homepage.attributes.seo.metaTitle}</title>
      </Head>
      <NavbarV2 logo_colored={logo_colored}/>
      {/* <Navbar logo_colored={logo_colored} /> */}
      {/* <MainBannerTW heroData={homepage}/> */}
      <MainBanner heroData={homepage} />
      <Numbers/>
      <InstagramFeed/>
      <QualityTextBlock blockText={homepage.attributes.qualityFeaturesList}/>
      <Footer logo_white={logo_white} />
      <Footer_v2/>
    </>
  );
};

export async function getStaticProps({locale}) {


//   await instagram.authenticate('sdinstatest', 'sdinstatest2022');

//   // Fetching a user
// instagram.getUserData('edouard_courty').then(userData => {
//   // Do whatever you need to to with this data
//   console.log(`My username is ${userData.getUsername()}.`);
// })

  // await instagram.authenticate('sdinstatest', 'sdinstatest2022');
  
  // instagram.getUserData('sdinstatest').then(userData => {
  //   // Do whatever you need to to with this data
  //   console.log(`My username is ${userData.getUsername()}.`);
  // })


  // const res = await fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=10&access_token=${process.env.IG_AT}`);
  // const posts = await res.json()

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



