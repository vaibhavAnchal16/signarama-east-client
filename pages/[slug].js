import client from "../apollo-client";
import { Layout } from "../components";
import { SIGN } from "../graphql/queries";
import sanitizeHtml from "sanitize-html";
import Head from "next/head";
import GalleryGrid from "../components/GalleryGrid";

const Signs = ({ loading, sign }) => {
  const createMarkup = (html) => {
    return {
      __html: sanitizeHtml(html, {
        allowedTags: [
          "p",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "strong",
          "a",
          "img",
          "figure",
        ],
        allowedAttributes: {
          a: ["href"],
          img: ["src", "alt"],
        },
        exclusiveFilter: function (frame) {
          return frame.tag === "p" && !frame.text.trim();
        },
      }),
    };
  };
  if (loading) return ``;
  return (
    <>
      {/* {console.log(sign)} */}
      <Head>
        <title>{sign?.seoData?.seoTitle}</title>
        <meta name="description" content={sign?.seoData?.seoDescription} />
      </Head>
      <section className="services-internal">
        <div className="serv-internal-wrapper">
          <div className="serv-internal-content container">
            <div className="services-heading">
              <h1 className="page-main-heading">{sign?.title}</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="services-detail-wrapper">
        <div className="services-detail-content container">
          <div className="serv-brief">
            <div
              className="serv-detail-text"
              dangerouslySetInnerHTML={createMarkup(sign?.description)}
            ></div>
          </div>
          <GalleryGrid images={sign?.gallery?.images} />
        </div>
      </div>
    </>
  );
};
export default Signs;

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const { data, loading } = await client.query({
    query: SIGN,
    variables: {
      slug,
    },
  });
  return {
    props: {
      loading,
      sign: data?.sign,
    },
  };
}

Signs.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
