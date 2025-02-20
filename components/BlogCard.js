import { useRouter } from "next/router";
import React from "react";
import LazyImage from "./LazyImage";
import sanitizeHtml from "sanitize-html";
import Link from "next/link";
import Button from "./Button/Button";

const BlogCard = ({ title, image, slug, description, type }) => {
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
  if (type === "sign") {
    return (
      <Link href={slug}>
        <div className="blog-card-wrapper d-margin-b">
          <div className="blog-card-inner">
            <div className="image">
              <LazyImage
                style={{ maxWidth: "100%", cursor: "pointer" }}
                src={image}
                alt={title}
              />
            </div>

            <Button type={`fill full-width`}>{title}</Button>
          </div>
        </div>
      </Link>
    );
  }
  return (
    <Link href={slug}>
      <div className="blog-card-wrapper d-margin-b">
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
            <h3 className="s-margin-t"> {title} </h3>
            {/* <hr /> */}
            {/* <button>Read More</button> */}
            {/* <p
          
          >
            This is some description that we will pull directly from the back
            end of the server and show it here as short description of this
            blog.
          </p> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
