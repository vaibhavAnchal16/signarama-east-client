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
import { Process } from "../components/Hero/Process";
import ProjectsCompleted from "../components/Hero/ProjectCompleted";
import RecentWorks from "../components/Hero/RecentWorks";
import Wally from "../components/Hero/Wally";
import TestimonialSlider from "../components/TestimonialSlider";
import { BLOGS, GALLERYBYTITLE, SIGNS } from "../graphql/queries";

export default function Home({
  signs,
  recentworks,
  trending,
  testimonials,
  teams,
  loader,
}) {
  if (loader) return "Loading...";
  return (
    <div>
      <Head>
        <title>Sign Company Toronto | Sign A Rama Toronto | Custom Signs</title>
        <meta
          name="description"
          content="Sign A Rama Toronto is a premier sign company based in Toronto delivering high-end custom signs for businesses in and around Toronto. Call us Today!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Services signs={signs} />

      <ProjectsCompleted className="home-page" />

      <TopStories trending={trending} />

      <ProudOf title={true} />
      <Wally title={true} />

      {/* <TestimonialSlider testimonials={testimonials} /> */}
      <RecentWorks recentworks={recentworks} />
      <Team title={true} teams={teams} />
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
    query: BLOGS,
    variables: {
      page: 1,
      size: 10,
      filters: {
        trending: true,
      },
    },
  });
  const recent = await client.query({
    query: BLOGS,
    variables: {
      page: 1,
      size: 9,
      filters: {
        recentWork: true,
      },
    },
  });

  const testimonials = await client.query({
    query: GALLERYBYTITLE,
    variables: {
      title: "Testimonial",
    },
  });

  const team = await client.query({
    query: GALLERYBYTITLE,
    variables: {
      title: "Team",
    },
  });

  // Pass post data to the page via props
  return {
    props: {
      loader:
        data?.loading ||
        trending?.loading ||
        recent?.loading ||
        testimonials?.loading ||
        team?.loading,
      signs: data?.signs?.signs,
      trending: trending?.data?.blogs?.blogs,
      recentworks: recent?.data?.blogs?.blogs,
      testimonials: testimonials?.data?.galleryByName,
      teams: team?.data?.galleryByName,
    },
  };
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
