import client from "../apollo-client";
import { Layout } from "../components";
import GalleryGrid from "../components/GalleryGrid";
import { GALLERYBYTITLE } from "../graphql/queries";

const OurPeople = ({ teams, loader }) => {
  if (loader) return ``;
  return (
    <>
      <section className="sign-blogs-search-wrapper">
        <section className="sign-blogs-search-inner">
          <div className="section-heading">
            <h1 style={{ textAlign: "center", maxWidth: "100%" }}>
              Our <span className="highlighted">People </span>
            </h1>
          </div>
        </section>
      </section>
      <GalleryGrid images={teams?.images} />
    </>
  );
};
export default OurPeople;

export async function getServerSideProps({}) {
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

OurPeople.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
