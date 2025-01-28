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
          <div className="hero-inner-space d-flex d-flex-wrap d-flex-between d-margin-b">
            <div className="hero-text">
              <h1 className="d-margin-b"> About Signarama Brampton </h1>
            </div>
            <div className="hero-text full-width">
              <p className="d-margin-b">
                Signarama Toronto is one of the oldest sign companies in
                Toronto. We are a full service, sign and display company helping
                businesses both big and small with their needs for custom signs,
                displays and large format printing since 1986.
              </p>
              <p className="d-margin-b">
                We have a talented team of experienced signage consultants who
                can offer expert advice on the kind of sign or promotion that
                would best suit your requirements. Our production staff in all
                our three facilities are professional and efficient to ensure
                creative and timely delivery of sign and display products. We're
                privately owned and pride ourselves on maintaining outstanding
                service and unique creativity as part of our company culture.
              </p>
              <p className="d-margin-b">
                We have a talented team of experienced signage consultants who
                can offer expert advice on the kind of sign or promotion that
                would best suit your requirements.
              </p>
              {/* <div className="illustration">
                <img src="/newimages/canadathemebg2.png" />
              </div> */}
            </div>
          </div>
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
        </div>
      </div>
      <div
        className="hero-outer-space about-us"
        style={{
          background: "initial",
          padding: "0",
        }}
      >
        <div className="d-padding-l d-padding-r d-padding-b d-padding-t">
          <div className="hero-inner-space d-flex d-flex-wrap d-flex-between">
            <div className="hero-text">
              <h1 className="d-margin-b">
                {" "}
                Out Story <br />& Values{" "}
              </h1>
            </div>
            <div className="hero-text full-width">
              <p className="d-margin-b">
                Signarama Toronto is one of the oldest sign companies in
                Toronto. We are a full service, sign and display company helping
                businesses both big and small with their needs for custom signs,
                displays and large format printing since 1986.
              </p>
              <p className="d-margin-b">
                We have a talented team of experienced signage consultants who
                can offer expert advice on the kind of sign or promotion that
                would best suit your requirements. Our production staff in all
                our three facilities are professional and efficient to ensure
                creative and timely delivery of sign and display products. We're
                privately owned and pride ourselves on maintaining outstanding
                service and unique creativity as part of our company culture.
              </p>
              <p className="d-margin-b">
                We have a talented team of experienced signage consultants who
                can offer expert advice on the kind of sign or promotion that
                would best suit your requirements.
              </p>
              <p className="d-margin-b">
                Signarama Toronto is one of the oldest sign companies in
                Toronto. We are a full service, sign and display company helping
                businesses both big and small with their needs for custom signs,
                displays and large format printing since 1986.
              </p>
              <p className="d-margin-b">
                We have a talented team of experienced signage consultants who
                can offer expert advice on the kind of sign or promotion that
                would best suit your requirements. Our production staff in all
                our three facilities are professional and efficient to ensure
                creative and timely delivery of sign and display products. We're
                privately owned and pride ourselves on maintaining outstanding
                service and unique creativity as part of our company culture.
              </p>
              <p className="d-margin-b">
                We have a talented team of experienced signage consultants who
                can offer expert advice on the kind of sign or promotion that
                would best suit your requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ClientSayings />
      <BuildingSomething />

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
