import client from "../apollo-client";
import { ClientLists, Layout, ProudOf, Team } from "../components";
import ProjectsCompleted from "../components/Hero/ProjectCompleted";
import Wally from "../components/Hero/Wally";
import { GALLERYBYTITLE } from "../graphql/queries";

const AboutUs = ({ teams }) => {
  return (
    <>
      <section className="sign-blogs-search-wrapper">
        <section className="sign-blogs-search-inner">
          <div className="section-heading">
            <h1 style={{ textAlign: "center", maxWidth: "100%" }}>
              About <span className="highlighted">Signrama Toronto </span>
            </h1>
            {/* <p>
              Some of our Clients include Delta Hotels, Fairmount Hotels, YMCA,
              CBRE, Triovest, SNC Lavalin and list goes on...
            </p> */}
          </div>
        </section>
      </section>
      <Wally title={false} />
      <ProudOf title={true} />
      <ProjectsCompleted className="about-page" />

      <ClientLists />

      <Team title={true} teams={teams} />
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
