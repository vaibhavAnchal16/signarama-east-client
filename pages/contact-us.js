import Head from "next/head";
import { useEffect } from "react";
import { ConnectForm, Layout, LazyImage, MapIframe } from "../components";
import ProjectsCompleted from "../components/Hero/ProjectCompleted";
import Faq2 from "../components/Faq2/Faq2";
import Button from "../components/Button/Button";
import {
  Facebook,
  Instagram,
  LinkedIn,
  QualityIcon,
} from "../components/icons";

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
      {/* <section className="sign-blogs-search-wrapper">
        <section className="sign-blogs-search-inner">
          <div className="section-heading">
            <h1 style={{ textAlign: "center", maxWidth: "100%" }}>
              Contact <span className="highlighted">Signarama Toronto </span>
            </h1>
            
          </div>
        </section>
      </section> */}
      {/* <section className="help-section-wrapper">
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
                  Signarama Toronto, 873 Bay St. Toronto, Ontario M5S 3K6{" "}
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
      </section> */}

      <div
        className="hero-outer-space bg-white"
        style={{
          background: "#fff",
        }}
      >
        <div className="d-padding">
          <div className="hero-inner-space d-flex d-flex-wrap d-flex-between">
            <div className="hero-text">
              <h1 className="d-margin-b"> Contact Us</h1>
              <p className="d-margin-b">
                We value your feedback and would love to hear from your. Whether
                you have a question, a comment, a suggestion or just want to say
                hi, we are here to help you.
              </p>
            </div>
            <div className="hero-image d-flex d-flex-end">
              <div className="illustration">
                <img src="/newimages/canadathemebg2.png" />
              </div>
            </div>
          </div>
          <MapIframe />
          {/* <LazyImage
              src={`https://res.cloudinary.com/signaramatoronto/image/upload/v1736882809/BLOGSIMAGES/remax1736882809598.jpg`}
              // src={`https://res.cloudinary.com/signaramatoronto/image/upload/v1734299871/BLOGSIMAGES/LORO%20PIANA%20X%20SAR-11734299869649.jpg`}
              style={{
                maxWidth: "100%",
                width: "100%",
                borderRadius: "10px",
                maxHeight: "500px",
                objectFit: "cover",
              }}
            /> */}
        </div>
      </div>
      {/* <ProjectsCompleted className="about-page contact-page" /> */}
      <div className="contact-page-details bg-white">
        <div className="d-padding-l d-padding-r d-padding-b d-flex d-flex-between d-column-gap d-flex-align-start">
          <div>
            <h1 className="d-margin-b">Getin Touch</h1>
            <div className="d-flex d-flex-column">
              <Button type="fill d-margin-b full-width">
                info@signarama-toronto.ca
              </Button>
              <Button type="fill full-width">416.922.7446</Button>
            </div>

            <h1 className="d-margin-t d-margin-b">Our Office</h1>
            <div>
              <p className="d-margin-b">
                Signarama Toronto, 873 Bay St. Toronto, Ontario M5S 3K6
              </p>
              <Button type="fill full-width">416.922.7446</Button>
            </div>

            <h1 className="d-margin-t d-margin-b">Connect with us</h1>
            <div className="d-flex d-column-gap social-icons">
              <Button type="outline">
                <Facebook />
              </Button>
              <Button type="outline">
                <Instagram />
              </Button>
              <Button type="outline">
                <LinkedIn />
              </Button>
            </div>
          </div>
          <div
            className="full-width d-padding-l "
            style={{
              width: "100%",
            }}
          >
            <h1
              className="d-margin-b d-inline-flex d-flex-center d-column-gap"
              style={{
                whiteSpace: "nowrap",
              }}
            >
              <QualityIcon /> Have a Project in your mind?
            </h1>
            <div className="bg-white">
              <div className="inner-slide">
                <ConnectForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Faq2 className="bg-white" />
      {/* <BuildingSomething /> */}
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
