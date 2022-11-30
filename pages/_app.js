import Script from "next/script";
import "../styles/globals.css";
import "../styles/local.css";
import "../styles/form.css";
import "../styles/blog.css";
import "../styles/signs.css";
import "../styles/admin.css";
import "animate.css";
import "@splidejs/react-splide/css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`//www.googletagmanager.com/ns.html?id=GTM-TDXML5`}
      />
      {/* <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'GTM-TDXML5', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script> */}
      <Head>
        <meta
          name="google-site-verification"
          content="h_QtqfyzK99ssLNCxeTGaDF3joPBXCkYcx00DKFHF58"
        />
      </Head>

      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default MyApp;
