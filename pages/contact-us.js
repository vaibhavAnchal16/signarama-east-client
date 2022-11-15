import Head from "next/head";
import { useEffect } from "react";
import { Layout, LazyImage, MapIframe } from "../components";
import ProjectsCompleted from "../components/Hero/ProjectCompleted";

const ContactUs = ({ query }) => {
  useEffect(() => {
    if (query?.focusform === "true") {
      if (document.querySelector(".contact-page")) {
        document.querySelector(".contact-page").scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
    }
  }, [query]);
  return (
    <>
      <Head>
        <title>
          Contact Us | Sign A Rama Toronto | Sign Company Toronto | Custom Signs
        </title>
        <meta
          name="description"
          content="Sign A Rama Toronto is one of the oldest full-service sign company in Toronto delivering high-end signs to businesses in & around Toronto since 1986. Contact us today by calling us or filling in the contact form with your sign queries and we'll get back to you in no time!"
        />
      </Head>
      <section className="sign-blogs-search-wrapper">
        <section className="sign-blogs-search-inner">
          <div className="section-heading">
            <h1 style={{ textAlign: "center", maxWidth: "100%" }}>
              Contact <span className="highlighted">Signarama Toronto </span>
            </h1>
            {/* <p>
              Some of our Clients include Delta Hotels, Fairmount Hotels, YMCA,
              CBRE, Triovest, SNC Lavalin and list goes on...
            </p> */}
          </div>
        </section>
      </section>
      <section className="help-section-wrapper">
        <div className="help-section-inner">
          <div className="help-section-box">
            <div className="help-context">
              <h1>We are Ready</h1>
              <p className="intro">
                We have a talented team of experienced signage consultants who
                can offer expert advice on the kind of sign or promotion that
                would best suit your requirements.
              </p>
              <p className="offc">
                Office Address :{" "}
                <span>
                  {" "}
                  Signarama Toronto, 873 Bay St. Toronto, ONTARIO M5S 3K6{" "}
                </span>
              </p>
              <p className="eml">
                Write us at :{" "}
                <span className="highlighted">
                  <a href="mailto:info@signarama-toronto.ca">
                    {" "}
                    info@signarama-toronto.ca{" "}
                  </a>
                </span>
              </p>
              <p className="phne">
                Call at :{" "}
                <span className="highlighted">
                  {" "}
                  <a href="tel:416.922.7446"> 416.922.7446 </a>{" "}
                </span>
              </p>
            </div>
            <div className="help-image">
              <LazyImage src="https://signarama-toronto.ca/wp-content/uploads/2018/03/canada-min.png" />
            </div>
          </div>
        </div>
      </section>
      <section className="mapframewrapper">
        <MapIframe />
        <ProjectsCompleted className="about-page contact-page" />
      </section>
    </>
  );
};
export default ContactUs;

ContactUs.getInitialProps = ({ query }) => {
  return { query };
};

ContactUs.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
