import Script from "next/script";
import TagManager from "react-gtm-module";
import "../styles/globals.css";
import "../styles/local.css";
import "../styles/form.css";
import "../styles/blog.css";
import "../styles/signs.css";
import "../styles/admin.scss";
import "../styles/new.scss";
import "../styles/button.scss";
import "animate.css";
import "../styles/responsive.scss";
import "@splidejs/react-splide/css";
import Head from "next/head";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "GTM-PFWLSM3T",
    };
    TagManager.initialize(tagManagerArgs);
  }, []);
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        {/* <meta
          name="google-site-verification"
          content="h_QtqfyzK99ssLNCxeTGaDF3joPBXCkYcx00DKFHF58"
        /> */}
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>

      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default MyApp;
