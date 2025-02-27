import sanitizeHtml from "sanitize-html";
import Head from "next/head";
import client from "../../apollo-client";
import { Layout, LazyImage } from "../../components";
import { SIGN } from "../../graphql/queries";
import GalleryGrid from "../../components/GalleryGrid";
import Button from "../../components/Button/Button";

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
        {sign?.seoData?.structuredData && (
          <script type="application/ld+json">
            {sign?.seoData?.structuredData}
          </script>
        )}
      </Head>
      <div className="bg-white">
        <div className="wavepattern">
          <div className="howsewingworks services-outer-space">
            <div
              className="howsewingworks-inner d-padding-l d-padding-r d-padding-t"
              style={{
                alignItems: "flex-start",
              }}
            >
              <div className="services-outer-space-text l-margin-b d-column-gap">
                <h1 className="d-margin-b">
                  {" "}
                  <span className="highlighted">{sign?.title}</span>{" "}
                </h1>
              </div>
              <div className="about-us-hero d-flex d-flex-wrap d-flex-between">
                <div
                  style={{
                    width: "100%",
                  }}
                >
                  <LazyImage
                    src={sign?.featuredImage}
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
        </div>
      </div>

      <div
        className="hero-outer-space bg-white about-us sign-ind-page"
        style={{
          background: "#fff",
        }}
      >
        <div className="d-padding-l d-padding-r">
          <div
            className="hero-inner-space d-flex d-flex-wrap d-flex-between d-margin-b"
            style={{
              alignItems: "flex-start",
            }}
          >
            <div
              className="hero-text full-width"
              style={{
                maxWidth: "100%",
              }}
            >
              <div
                className="serv-detail-text"
                dangerouslySetInnerHTML={createMarkup(sign?.description)}
              ></div>

              <div className="d-flex d-flex-wrap d-flex-center d-margin-t">
                <Button href={`/contact-us`} type="fill">
                  Contact Us
                </Button>
              </div>

              <GalleryGrid images={sign?.gallery?.images} />
              <div className="d-flex d-flex-wrap d-flex-center d-margin-t">
                <Button href={`/contact-us`} type="fill">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signs;

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const { data, loading } = await client.query({
    fetchPolicy: "network-only",
    query: SIGN,
    variables: {
      slug,
    },
  });
  if (!data?.sign) {
    return {
      notFound: true,
    };
  }
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
