import { useLayoutEffect } from "react";
import { Layout } from "../components";

const Thankyou = () => {
  useLayoutEffect(() => {
    const headerheight = document.querySelector(".header-wrapper").offsetHeight;
    const footerheight = document.querySelector(
      ".footer-outer-layer"
    ).offsetHeight;
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );
    document.querySelector(".thankyou-page-wrapper").style.minHeight =
      vh - (headerheight + footerheight) + "px";
  }, []);
  return (
    <div className="thankyou-page-wrapper">
      <div className="thankyou-page-inner">
        <div className="thankyou-text">
          <h2>Thanks for your submission, We will contact you soon…</h2>
        </div>
      </div>
    </div>
  );
};
export default Thankyou;

Thankyou.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
