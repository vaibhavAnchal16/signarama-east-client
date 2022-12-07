import client from "../../apollo-client";
import sanitizeHtml from "sanitize-html";

import { Layout, LazyImage } from "../../components";
import { BLOG } from "../../graphql/queries";
import Head from "next/head";
import Link from "next/link";

const Blog = ({ blog }) => {
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
          "span",
          "iframe",
          "oembed",
          "div",
          "figure",
          "address",
          "article",
          "aside",
          "footer",
          "header",
        ],
        allowedAttributes: {
          a: ["href"],
          img: ["src", "alt"],
          oembed: ["url"],
        },
        exclusiveFilter: function (frame) {
          return frame.tag === "p" && !frame.text.trim();
        },
      }),
    };
  };

  return (
    <>
      <Head>
        <title>{blog?.seoData?.seoTitle}</title>
        <meta name="description" content={blog?.seoData?.seoDescription} />
      </Head>
      <div className="blog-details">
        <div className="blog-details-inner">
          <div className="blog-content-box">
            <h1 className="blog-title"> {blog?.title} </h1>
            <LazyImage
              src={blog?.featuredImage}
              alt={blog?.title}
              style={{
                width: "100%",
              }}
            />
            <div
              className="blog-description"
              dangerouslySetInnerHTML={createMarkup(blog?.description)}
            ></div>
            <div className="read-more-link">
              <Link href="/contact-us">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const { data } = await client.query({
    query: BLOG,
    variables: {
      slug,
    },
  });
  if (!data?.blog) {
    return {
      notFound: true,
    };
  }
  return { props: { blog: data?.blog } };
}

export default Blog;

Blog.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
