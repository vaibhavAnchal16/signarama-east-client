import Head from "next/head";
import client from "../apollo-client";
import {
  Hero,
  Layout,
  ProudOf,
  Services,
  Team,
  TopStories,
} from "../components";
import ProjectsCompleted from "../components/Hero/ProjectCompleted";
import RecentWorks from "../components/Hero/RecentWorks";
import Wally from "../components/Hero/Wally";
import {
  BLOGS,
  GALLERYBYTITLE,
  GETREVIEWS,
  HEROGALLERY,
  SIGNS,
} from "../graphql/queries";
import Hero2 from "../components/Hero2/Hero2";
import FeaturedProjects2 from "../components/FeaturedProjects2/FeaturedProjects2";
import LatestNews2 from "../components/LatestNews2/LatestNews2";
import BuildingSomething from "../components/BuildingSomething/BuildingSomething";
import Faq2 from "../components/Faq2/Faq2";
import ClientSayings from "../components/ClientSayings/ClientSayings";
import { Process } from "../components/Hero/Process";

export default function Home({
  signs,
  recentworks,
  trending,
  loader,
  heroGallery,
  reviews,
}) {
  if (loader) return "Loading...";
  return (
    <div>
      {/* <div className="parallax-background"></div> */}
      <Head>
        <title>Sign Company Toronto | Sign A Rama Toronto | Custom Signs</title>
        <meta
          name="description"
          content="Sign A Rama Toronto is a premier sign company based in Toronto delivering high-end custom signs for businesses in and around Toronto. Call us Today!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero2 images={heroGallery?.gallery?.images} reviews={reviews} />
      {/* <Hero /> */}
      <Process />

      <Services data={signs} />
      <FeaturedProjects2 data={recentworks} />
      <ClientSayings reviews={reviews} />
      <LatestNews2 data={trending} />
      <Faq2 />
      <BuildingSomething
        ctaTitle="Get in Touch"
        ctaLink="/contact-us/"
        innerClasses="d-padding-l d-padding-r d-margin-b"
      />

      {/* <ProjectsCompleted className="home-page" />

      <TopStories trending={trending} />

      <ProudOf title={true} />
      <Wally title={true} /> */}

      {/* <TestimonialSlider testimonials={testimonials} /> */}
      {/* <RecentWorks recentworks={recentworks} /> */}
      {/* <Team title={true} teams={teams} /> */}
    </div>
  );
}

export async function getServerSideProps({ params, query }) {
  const { data } = await client.query({
    query: SIGNS,
    variables: {
      page: null,
      size: null,
      filters: null,
    },
  });
  const trending = await client.query({
    fetchPolicy: "no-cache",
    query: BLOGS,
    variables: {
      page: 1,
      size: 10,
      filters: {
        published: true,
        trending: true,
      },
    },
  });
  const recent = await client.query({
    fetchPolicy: "no-cache",
    query: BLOGS,
    variables: {
      page: 1,
      size: 3,
      filters: {
        published: true,
        recentWork: true,
      },
    },
  });

  const reviewsData = await client.query({
    fetchPolicy: "network-only",
    query: GETREVIEWS,
  });

  const heroGallery = await client.query({
    fetchPolicy: "no-cache",
    query: HEROGALLERY,
  });

  // Pass post data to the page via props
  return {
    props: {
      loader:
        data?.loading ||
        trending?.loading ||
        recent?.loading ||
        reviewsData?.loading,
      signs: data?.signs?.signs,
      trending: trending?.data?.blogs?.blogs,
      recentworks: recent?.data?.blogs?.blogs,
      heroGallery: heroGallery?.data?.heroGalleryImages,
      reviews: reviewsData?.data?.getGoogleReviews,
    },
  };
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
