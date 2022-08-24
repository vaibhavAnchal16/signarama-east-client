import { ClientLists, Layout, ProudOf, Team } from "../components";
import ProjectsCompleted from "../components/Hero/ProjectCompleted";
import Wally from "../components/Hero/Wally";

const AboutUs = () => {
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

      <Team title={true} />
    </>
  );
};

export default AboutUs;

AboutUs.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
