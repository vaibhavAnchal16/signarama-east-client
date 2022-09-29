import "../styles/globals.css";
import "../styles/local.css";
import "../styles/form.css";
import "../styles/blog.css";
import "../styles/admin.css";
import "animate.css";
import "@splidejs/react-splide/css";

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
