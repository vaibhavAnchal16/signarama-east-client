import client from "../apollo-client";
import { Layout } from "../components";
import GalleryGrid from "../components/GalleryGrid";
import { GALLERYBYTITLE } from "../graphql/queries";

const OurPeople = ({ teams, loader }) => {
  if (loader) return ``;
  return (
    <>
      <div className="blog-details bg-gray">
        <div className="blog-details-inner">
          <div className="blog-content-box">
            <h1 className="blog-title">
              {" "}
              Our <span className="highlighted">People</span>{" "}
            </h1>
          </div>
        </div>
      </div>
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
