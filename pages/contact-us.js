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
import WhyChooseSignarama from "../components/WhyChooseSignarama/WhyChooseSignarama";
import BuildingSomething from "../components/BuildingSomething/BuildingSomething";

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

      <div className="hero-outer-space bg-white wavepattern">
        <div className="d-padding">
          <div className="hero-inner-space d-flex d-flex-wrap d-flex-between">
            <div className="hero-text">
              <h1 className="d-margin-b">
                {/* Contact Signarama Brampton: */}
                Let's Discuss Your Signage Needs
              </h1>
              <p className="d-margin-b">
                Ready to transform your brand's visibility with impactful
                signage? We're here to help! Contact Signarama Brampton today to
                discuss your project, get a free quote, or learn more about our
                comprehensive sign solutions.
              </p>
            </div>
            <div className="hero-image d-flex d-flex-end">
              {/* <div className="illustration">
                <img src="/newimages/canadathemebg2.png" />
              </div> */}
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
        <div className="d-padding-l d-padding-t d-padding-r d-flex d-flex-between d-column-gap d-flex-align-start">
          <div>
            <h1 className="s-margin-b">Here's How to Reach Us:</h1>
            <h2 className="s-margin-b font-thick">
              <span className="font-bold">Call Us:</span> Speak directly with
              one of our signage specialists.
            </h2>
            <div className="d-flex d-flex-column d-margin-b">
              <Button type="fill full-width"> +1 905-460-9300</Button>
            </div>
            <h2 className="s-margin-b font-thick">
              <span className="font-bold">Email Us:</span> Send us your project
              details and we'll get back to you promptly.
            </h2>

            <div className="d-flex d-flex-column d-margin-b">
              <Button type="fill full-width">info@signarama-toronto.ca</Button>
            </div>

            <h2 className="s-margin-b font-thick">
              <span className="font-bold">Visit Our Showroom:</span> See
              examples of our work and discuss your vision in person.
            </h2>

            <div>
              <h1 className="d-margin-b">
                Sign A Rama, 289 Rutherford Rd S Unit15, Brampton, ON L6W 3R9,
                Canada
              </h1>
              <Button
                target="_blank"
                href={`https://www.google.com/maps?rlz=1C1CHZN_enCA942CA942&sca_esv=9a9bb3b7773ff3ad&cs=1&biw=1536&bih=695&sxsrf=AHTn8zqbpaPCK-BCVOx8V1MJLzHhH7smQw:1738371756230&kgmid=/g/1tt1hvxf&shndl=30&shem=uaasie&kgs=6bd1e54d0191ba5b&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KX1l5Xk8PiuIMZplguhMixxV&daddr=Sign+A+Rama,+289+Rutherford+Rd+S+Unit15,+Brampton,+ON+L6W+3R9,+Canada`}
                type="fill full-width"
              >
                Show Address on Google
              </Button>
            </div>

            {/* <h1 className="d-margin-t d-margin-b">Connect with us</h1> */}
            <div className="d-flex d-column-gap social-icons d-margin-t">
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
              className="s-margin-b d-inline-flex d-flex-center d-column-gap"
              style={{
                whiteSpace: "nowrap",
              }}
            >
              Fill Out Our Online Form <QualityIcon />
            </h1>
            <h2 className="d-margin-b">
              Provide us with some basic information and we'll contact you to
              schedule a consultation.
            </h2>
            <div className="bg-white">
              <div className="inner-slide">
                <ConnectForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <WhyChooseSignarama>
          <div className="hero-text full-width">
            <p className="d-margin-b">
              <span className="font-bold">Local Expertise:</span> We understand
              the Brampton market and can help you create signage that meets
              local regulations and resonates with your target audience.
            </p>
            <p className="d-margin-b">
              <span className="font-bold">Full-Service Solutions:</span> From
              design and fabrication to permitting and installation, we handle
              every aspect of your project.
            </p>
            <p className="d-margin-b">
              <span className="font-bold">High-Quality Materials:</span> Your
              satisfaction is our top priority.
            </p>
            <p className="d-margin-b">
              <span className="font-bold">Exceptional Customer Service:</span>{" "}
              Your satisfaction is our ultimate goal. We work closely with you
              to ensure your vision is realized.
            </p>
          </div>
        </WhyChooseSignarama>
        <BuildingSomething
          title=""
          title2=""
          target="_blank"
          ctaLink="https://www.google.com/maps?rlz=1C1CHZN_enCA942CA942&sca_esv=9a9bb3b7773ff3ad&cs=1&biw=1536&bih=695&sxsrf=AHTn8zqbpaPCK-BCVOx8V1MJLzHhH7smQw:1738371756230&kgmid=/g/1tt1hvxf&shndl=30&shem=uaasie&kgs=6bd1e54d0191ba5b&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KX1l5Xk8PiuIMZplguhMixxV&daddr=Sign+A+Rama,+289+Rutherford+Rd+S+Unit15,+Brampton,+ON+L6W+3R9,+Canada"
          subTitle="<span>We're conveniently located in Brampton and serve businesses throughout the Greater Toronto Area.<br/><br/> Whether you need a storefront sign, Illuminated Sign, banner, or any other type of signage, Signarama Brampton is your trusted partner.</span>"
          icon={null}
          ctaTitle="Directions"
        />
        <Faq2 className="d-padding-t" />
        {/* <BuildingSomething /> */}
      </div>
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
