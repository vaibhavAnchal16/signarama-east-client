import "../styles/globals.css";
import "../styles/local.css";
import "../styles/form.css";
import "../styles/blog.css";
import "@splidejs/react-splide/css";

import Layout from "./components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
