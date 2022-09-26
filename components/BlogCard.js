import { useRouter } from "next/router";
import React from "react";
import LazyImage from "./LazyImage";
import sanitizeHtml from "sanitize-html";

const BlogCard = ({ title, image, slug, description }) => {
  const router = useRouter();

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
    <div
      className="blog-card-wrapper"
      onClick={(e) => {
        router.push(`/blog/${slug}`);
      }}
    >
      <div className="blog-card-inner">
        <div className="image">
          <LazyImage
            style={{ maxWidth: "100%", cursor: "pointer" }}
            src={image}
            alt={title}
            // link="/"
          />
        </div>
        <div className="context">
          <h3> {title} </h3>
          <hr />
          <p
          // dangerouslySetInnerHTML={createMarkup(description)
          //   ?.toString()
          //   ?.substring(0, 25)}
          >
            This is some description that we will pull directly from the back
            end of the server and show it here as short description of this
            blog.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
