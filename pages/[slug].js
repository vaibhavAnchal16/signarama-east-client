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
          "ul",
          "li",
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
      <div className="carousel-wrapper signs-featured">
        <div
          className="carousel-bg-image"
          style={{ backgroundImage: `url(${sign?.featuredImage})` }}
        >
          {" "}
        </div>
        <div className="carousel-content">
          <div className="u-container-layout">
            <div className="story-wrapper">
              {/* <img
            src="//images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/d72db0adb7f35973b1f2dc7d/trf.png"
            alt=""
            className="u-expanded-width u-image u-image-contain u-image-default u-image-1"
          /> */}
              <img
                src={sign?.featuredImage}
                alt=""
                className="u-border-16 u-border-palette-5-base u-image u-image-default u-image-2"
              />
              <div className="story-title-wrapper">
                {/* <h2 className="story-title"> {item.title} </h2> */}
              </div>
            </div>
          </div>
        </div>
      </div>

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
