import client from "../../apollo-client";
import sanitizeHtml from "sanitize-html";

import { Layout, LazyImage } from "../../components";
import { BLOG } from "../../graphql/queries";

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
          "figure",
        ],
        allowedAttributes: {
          a: ["href"],
          img: ["src", "alt"],
        },
      }),
    };
  };

  return (
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
        </div>
      </div>
    </div>
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
  return { props: { blog: data?.blog } };
}

export default Blog;

Blog.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
