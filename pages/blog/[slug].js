import client from "../../apollo-client";
import sanitizeHtml from "sanitize-html";

import { Layout, LazyImage } from "../../components";
import { BLOG } from "../../graphql/queries";
import Head from "next/head";
import Link from "next/link";
import { useCallback, useEffect } from "react";

const Blog = ({ blog }) => {
  const createMarkup = (html) => {
    return {
      __html: sanitizeHtml(html, {
        allowedTags: false,
        allowedAttributes: false,
        exclusiveFilter: function (frame) {
          return frame.tag === "p" && !frame.text.trim();
        },
      }),
    };
  };

  function getId(url) {
    var regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
      return match[2];
    } else {
      return "error";
    }
  }

  useEffect(() => {
    const checkDescription = setInterval(function () {
      const blogdescsection = document.querySelector(".blog-description");
      if (blog && blogdescsection) {
        clearInterval(checkDescription);
        const tagsoemebeds = blogdescsection.querySelectorAll("oembed");
        tagsoemebeds.forEach((element) => {
          const iframeelement = document.createElement("div");
          const videoId = getId(element.getAttribute("url"));
          const srcforoembed = `//www.youtube.com/embed/${videoId}`;
          iframeelement.innerHTML = `<iframe id=${videoId} height="415" src=${srcforoembed} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
          if (!document.querySelector(`#${videoId}`)) {
            element.insertAdjacentHTML("afterend", iframeelement.innerHTML);
          }
        });
      }
    });
  }, [blog]);

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
