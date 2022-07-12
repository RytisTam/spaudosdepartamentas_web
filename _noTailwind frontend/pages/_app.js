import App from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";

import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import createEmotionCache from "../utils/createEmotionCache";
import lightTheme from "../styles/theme/lightTheme";
import "../styles/globals.css";

import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/boxicons.min.css";
// import 'react-accessible-accordion/dist/fancy-example.css'
// import '../node_modules/react-modal-video/css/modal-video.min.css'
import "../styles/style.css";
import "../styles/responsive.css";

import { createContext } from "react";
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";

const clientSideEmotionCache = createEmotionCache();

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global, emotionCache = clientSideEmotionCache } = pageProps;


  
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon)}
        />
      </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <GlobalContext.Provider value={global.attributes}>
            <Component {...pageProps} />
          </GlobalContext.Provider>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
      logo_colored: {
        populate: "*",
      },
      logo_white: {
        populate: "*",
      },
    },
  });
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data } };
};

export default appWithTranslation(MyApp);
