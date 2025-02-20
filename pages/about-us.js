import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import client from "../apollo-client";
import {
  ClientLists,
  Layout,
  LazyImage,
  MapIframe,
  ProudOf,
  Team,
} from "../components";
import ProjectsCompleted from "../components/Hero/ProjectCompleted";
import Wally from "../components/Hero/Wally";
import { GALLERYBYTITLE } from "../graphql/queries";
import ClientSayings from "../components/ClientSayings/ClientSayings";
import BuildingSomething from "../components/BuildingSomething/BuildingSomething";
import WhyChooseSignarama from "../components/WhyChooseSignarama/WhyChooseSignarama";
import { NewsIcon } from "../components/icons";
import { BiSearchAlt } from "react-icons/bi";

const AboutUs = ({ teams }) => {
  const router = useRouter();

  useEffect(() => {
    if (router.query?.section === "clients") {
      document.querySelector("#clientlistsection").scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  }, []);
  return (
    <>
      <Head>
        <title>
          About Sign A Rama Toronto | Sign Company Toronto | Custom Signs |
        </title>
        <meta
          name="description"
          content="Sign A Rama Toronto is a premier sign company in Toronto delivering high-end signs to businesses in and around Toronto since 1986. We are a one-stop destination for all your signage needs offering end to end signage solutions from design to installation."
        />
      </Head>

      <div className="wavepattern faded">
        <div className="howsewingworks services-outer-space">
          <div
            className="howsewingworks-inner d-padding-l d-padding-r d-padding-t"
            style={{
              alignItems: "flex-start",
            }}
          >
            <div className="services-outer-space-text l-margin-b d-column-gap">
              <h1 className="d-margin-b">
                {" "}
                <span className="highlighted">
                  Your Trusted Source for Custom Signs & Graphics
                </span>
              </h1>
              <h2 className="">
                Signarama Brampton is the leading innovator in the signs &
                graphics industry.
              </h2>
            </div>
          </div>
        </div>
        <div
          className="hero-outer-space about-us "
          style={{
            background: "none",
          }}
        >
          <div className="d-padding-l d-padding-r">
            <div className="about-us-hero d-flex d-flex-wrap d-flex-between">
              <div
                style={{
                  width: "100%",
                }}
              >
                <LazyImage
                  src={`https://res.cloudinary.com/signaramatoronto/image/upload/v1736882809/BLOGSIMAGES/remax1736882809598.jpg`}
                  style={{
                    maxWidth: "100%",
                    width: "100%",
                    borderRadius: "10px",
                    maxHeight: "500px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <div
              className="hero-inner-space d-flex d-flex-wrap d-flex-between d-margin-b d-margin-t"
              // style={{
              //   background: "#ffffffcc",
              //   padding: "20px 0px",
              // }}
            >
              {/* <div className="hero-text">
              <h1 className="d-margin-b">
                Your Trusted Source for Custom Signs & Graphics
              </h1>
            </div> */}
              <div
                className="hero-text full-width bg-white"
                style={{
                  maxWidth: "100%",
                }}
              >
                <p className="d-margin-b">
                  <span className="highlighted"> Signarama </span> Brampton has
                  been a leading provider of high-quality, custom signs and
                  graphics for over 20 years, helping businesses throughout
                  Brampton and the Greater Toronto Area (GTA) make a powerful
                  impact. We're more than just a sign shop; we're your partners
                  in visual communication, dedicated to creating signage that
                  elevates your brand and drives results.
                </p>
                <p className="d-margin-b">
                  Our journey began with a simple mission: to provide
                  exceptional signage solutions combined with unparalleled
                  customer service. Today, we're proud to be a leading sign
                  company in Brampton, known for our creativity, quality, and
                  commitment to exceeding client expectations.
                </p>
                <h2 className="d-margin-b">
                  <span className="font-bold highlighted">
                    Our Commitment:{" "}
                  </span>
                </h2>
                <p className="d-margin-b">
                  {" "}
                  We believe that effective signage is crucial for success in
                  today's competitive market. That's why we combine our
                  extensive experience with the latest technologies and
                  high-quality materials to create signs that are not only
                  visually appealing but also durable and long-lasting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhyChooseSignarama
        outerClass="hero-outer-space"
        title={`<h1 className="d-margin-b">Our <span className="highlighted">Services</span></h1><h2 class="d-margin-b">We offer a comprehensive range of signage solutions tailored to meet your specific needs, including:</h2>`}
      >
        <div className="hero-text full-width">
          <ul className="about-list">
            <li>
              <p>
                <span className="font-bold highlighted">Storefront Signs:</span>{" "}
                Attract customers and build brand recognition with impactful
                storefront signage.
              </p>
            </li>
            <li>
              <p>
                <span className="font-bold highlighted">
                  Vehicle Wraps & Graphics:
                </span>{" "}
                Turn your vehicles into mobile billboards, maximizing your
                brand's reach.
              </p>
            </li>

            <li>
              <p>
                <span className="font-bold highlighted">
                  Banners & Posters:
                </span>{" "}
                Promote events, sales, and special offers with vibrant,
                eye-catching banners.
              </p>
            </li>

            <li>
              <p>
                <span className="font-bold highlighted">
                  Illuminated Signs:
                </span>{" "}
                Stand out day and night with illuminated signs, including
                channel letters and LED signs.
              </p>
            </li>

            <li>
              <p>
                <span className="font-bold highlighted">Interior Signs:</span>{" "}
                Enhance your interior space with wayfinding, ADA-compliant, and
                decorative signage.
              </p>
            </li>

            <li>
              <p>
                <span className="font-bold highlighted">
                  Trade Show Displays:
                </span>{" "}
                Make a lasting impression at trade shows and events with custom
                displays.
              </p>
            </li>

            <li>
              <p>And much more! Including window frosting.</p>
            </li>
          </ul>
        </div>
      </WhyChooseSignarama>

      <WhyChooseSignarama
        outerClass="hero-outer-space bg-white"
        innerClass="hero-inner-space d-flex d-flex-wrap d-flex-between d-flex-row-reverse"
      >
        <div className="hero-text full-width">
          <ul>
            <li>
              <p>
                <span className="font-bold highlighted">Local Expertise:</span>{" "}
                We understand the Brampton market and the unique needs of local
                businesses. We also have extensive knowledge of Brampton's sign
                permit process.
              </p>
            </li>

            <li>
              <p>
                <span className="font-bold highlighted">Experienced Team:</span>{" "}
                Our skilled designers, fabricators, and installers are committed
                to delivering top-quality workmanship.
              </p>
            </li>

            <li>
              <p>
                <span className="font-bold highlighted">
                  Full-Service Solutions:
                </span>{" "}
                We handle every aspect of your project, from initial concept and
                design to fabrication, permitting, and installation.
              </p>
            </li>
            <li>
              <p>
                <span className="font-bold highlighted">
                  Customer Satisfaction:
                </span>{" "}
                Your satisfaction is our ultimate goal. We work closely with you
                to ensure your vision is realized.
              </p>
            </li>
          </ul>
        </div>
      </WhyChooseSignarama>

      <BuildingSomething
        title=""
        title2=""
        subTitle="<span>Contact Signarama Brampton today for a free consultation and discover how we can help your business achieve its signage goals.</span>"
        icon={null}
        ctaTitle="Contact Us"
        innerClasses="d-padding-l d-padding-r d-margin-t"
      />

      <ClientSayings paddingClasses="d-padding-l d-padding-r d-padding-b d-padding-t" />

      {/* <ProjectsCompleted className="about-page" /> */}

      {/* <ClientLists /> */}

      {/* <Team title={true} teams={teams} /> */}
    </>
  );
};

export default AboutUs;

export async function getServerSideProps({ params, query }) {
  const team = await client.query({
    query: GALLERYBYTITLE,
    variables: {
      title: "Team",
    },
  });

  // Pass post data to the page via props
  return {
    props: {
      loader: team?.loading,
      teams: team?.data?.galleryByName,
    },
  };
}

AboutUs.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// [
//   "https://cdn.gorilladash.com/static/clients/signarama/images/backgroundbanner.png?format=pjpg&auto=webp&quality=85&fit=cover&width=1600&height=400",
//   "https://cdn.gorilladash.com/images/media/16094743/signarama-canada-new-year-new-signage-competition-website-banner-original-67870e1748bb3.jpg?format=pjpg&auto=webp&quality=90&width=960",
//   "https://cdn.gorilladash.com/images/media/7089111/signarama-canada-signarama-website-client-logo-original-64531f7b20143.jpg?auto=webp&height=100",
//   "https://cdn.gorilladash.com/images/media/7085738/signarama-canada-signarama-website-client-logo-original-64528ace93a4a.jpg?auto=webp&height=100",
//   "https://cdn.gorilladash.com/images/media/7089119/signarama-canada-signarama-website-client-logo-original-64531f80d206a.jpg?auto=webp&height=100",
//   "https://cdn.gorilladash.com/images/media/7089128/signarama-canada-signarama-website-client-logo-original-64531f85ab56c.jpg?auto=webp&height=100",
//   "https://cdn.gorilladash.com/images/media/7082798/signarama-canada-signarama-website-client-logo-original-64528876d8d88.jpg?auto=webp&height=100",
//   "https://cdn.gorilladash.com/images/media/7089136/signarama-canada-signarama-website-client-logo-original-64531f8a106e7.jpg?auto=webp&height=100",
//   "https://cdn.gorilladash.com/images/media/7089144/signarama-canada-signarama-website-client-logo-original-64531f8f96494.jpg?auto=webp&height=100",
//   "https://cdn.gorilladash.com/images/media/7089152/signarama-canada-signarama-website-client-logo-original-64531f98e8aa1.jpg?auto=webp&height=100",
//   "https://cdn.gorilladash.com/images/media/7089160/signarama-canada-signarama-website-client-logo-original-64531fa150425.jpg?auto=webp&height=100",
//   "https://cdn.gorilladash.com/images/media/7089111/signarama-canada-signarama-website-client-logo-original-64531f7b20143.jpg?auto=webp&height=100",
//   "https://cdn.gorilladash.com/images/media/7085738/signarama-canada-signarama-website-client-logo-original-64528ace93a4a.jpg?auto=webp&height=100",
//   "https://cdn.gorilladash.com/images/media/7089119/signarama-canada-signarama-website-client-logo-original-64531f80d206a.jpg?auto=webp&height=100",
//   "https://cdn.gorilladash.com/images/media/7089128/signarama-canada-signarama-website-client-logo-original-64531f85ab56c.jpg?auto=webp&height=100",
//   "https://cdn.gorilladash.com/images/media/7082798/signarama-canada-signarama-website-client-logo-original-64528876d8d88.jpg?auto=webp&height=100",
//   "https://cdn.gorilladash.com/images/media/7089136/signarama-canada-signarama-website-client-logo-original-64531f8a106e7.jpg?auto=webp&height=100",
//   "https://cdn.gorilladash.com/images/media/7089144/signarama-canada-signarama-website-client-logo-original-64531f8f96494.jpg?auto=webp&height=100",
//   "https://cdn.gorilladash.com/images/media/7089152/signarama-canada-signarama-website-client-logo-original-64531f98e8aa1.jpg?auto=webp&height=100",
//   "https://cdn.gorilladash.com/images/media/7089160/signarama-canada-signarama-website-client-logo-original-64531fa150425.jpg?auto=webp&height=100",
//   "https://cdn.gorilladash.com/images/media/7089111/signarama-canada-signarama-website-client-logo-original-64531f7b20143.jpg?auto=webp&height=100",
//   "https://cdn.gorilladash.com/images/media/7085738/signarama-canada-signarama-website-client-logo-original-64528ace93a4a.jpg?auto=webp&height=100",
//   "https://cdn.gorilladash.com/images/media/7089119/signarama-canada-signarama-website-client-logo-original-64531f80d206a.jpg?auto=webp&height=100",
//   "https://cdn.gorilladash.com/images/media/7089128/signarama-canada-signarama-website-client-logo-original-64531f85ab56c.jpg?auto=webp&height=100",
//   "https://cdn.gorilladash.com/images/media/7082798/signarama-canada-signarama-website-client-logo-original-64528876d8d88.jpg?auto=webp&height=100",
//   "https://cdn.gorilladash.com/images/media/7089136/signarama-canada-signarama-website-client-logo-original-64531f8a106e7.jpg?auto=webp&height=100",
//   "https://cdn.gorilladash.com/images/media/7089144/signarama-canada-signarama-website-client-logo-original-64531f8f96494.jpg?auto=webp&height=100",
//   "https://cdn.gorilladash.com/images/media/7089152/signarama-canada-signarama-website-client-logo-original-64531f98e8aa1.jpg?auto=webp&height=100",
//   "https://cdn.gorilladash.com/images/media/7089160/signarama-canada-signarama-website-client-logo-original-64531fa150425.jpg?auto=webp&height=100"
// ]
