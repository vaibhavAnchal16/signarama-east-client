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
      <div
        className="hero-outer-space bg-white about-us wavepattern"
        // style={{
        //   background: "#fff",
        // }}
      >
        <div className="d-padding-t d-padding-l d-padding-r">
          <div className="about-us-hero d-flex d-flex-wrap d-flex-between">
            <div
              style={{
                width: "100%",
              }}
            >
              <LazyImage
                src={`https://res.cloudinary.com/signaramatoronto/image/upload/v1736882809/BLOGSIMAGES/remax1736882809598.jpg`}
                // src={`https://res.cloudinary.com/signaramatoronto/image/upload/v1734299871/BLOGSIMAGES/LORO%20PIANA%20X%20SAR-11734299869649.jpg`}
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
          <div className="hero-inner-space d-flex d-flex-wrap d-flex-between d-margin-b d-margin-t">
            <div className="hero-text">
              <h1 className="d-margin-b">
                {/* About Signarama Brampton: */}
                Your Trusted Source for Custom Signs & Graphics
              </h1>
            </div>
            <div className="hero-text full-width">
              <p className="d-margin-b">
                Signarama Brampton has been a leading provider of high-quality,
                custom signs and graphics for over 20 years, helping businesses
                throughout Brampton and the Greater Toronto Area (GTA) make a
                powerful impact. We're more than just a sign shop; we're your
                partners in visual communication, dedicated to creating signage
                that elevates your brand and drives results.
              </p>
              <p className="d-margin-b">
                Our journey began with a simple mission: to provide exceptional
                signage solutions combined with unparalleled customer service.
                Today, we're proud to be a leading sign company in Brampton,
                known for our creativity, quality, and commitment to exceeding
                client expectations.
              </p>
              <p className="d-margin-b">
                <span className="font-bold">Our Commitment: </span> We believe
                that effective signage is crucial for success in today's
                competitive market. That's why we combine our extensive
                experience with the latest technologies and high-quality
                materials to create signs that are not only visually appealing
                but also durable and long-lasting.
              </p>
              <p className="d-margin-b">
                <span className="font-bold">Our Services:</span> We offer a
                comprehensive range of signage solutions tailored to meet your
                specific needs, including:
              </p>
              <ul className="about-list">
                <li>
                  <p>
                    <span className="font-bold">Storefront Signs:</span> Attract
                    customers and build brand recognition with impactful
                    storefront signage.
                  </p>
                </li>
                <li>
                  <p>
                    <span className="font-bold">Vehicle Wraps & Graphics:</span>{" "}
                    Turn your vehicles into mobile billboards, maximizing your
                    brand's reach.
                  </p>
                </li>

                <li>
                  <p>
                    <span className="font-bold">Banners & Posters:</span>{" "}
                    Promote events, sales, and special offers with vibrant,
                    eye-catching banners.
                  </p>
                </li>

                <li>
                  <p>
                    <span className="font-bold">Illuminated Signs:</span> Stand
                    out day and night with illuminated signs, including channel
                    letters and LED signs.
                  </p>
                </li>

                <li>
                  <p>
                    <span className="font-bold">Interior Signs:</span> Enhance
                    your interior space with wayfinding, ADA-compliant, and
                    decorative signage.
                  </p>
                </li>

                <li>
                  <p>
                    <span className="font-bold">Trade Show Displays:</span> Make
                    a lasting impression at trade shows and events with custom
                    displays.
                  </p>
                </li>

                <li>
                  <p>And much more! Including window frosting.</p>
                </li>
              </ul>

              {/* <div className="illustration">
                <img src="/newimages/canadathemebg2.png" />
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <WhyChooseSignarama />

      <BuildingSomething
        title=""
        title2=""
        subTitle="<span>Contact Signarama Brampton today for a free consultation and discover how we can help your business achieve its signage goals.</span>"
        icon={null}
        ctaTitle="Contact Us"
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
