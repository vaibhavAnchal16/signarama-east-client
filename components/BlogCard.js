import { useRouter } from "next/router";
import React from "react";
import LazyImage from "./LazyImage";

const BlogCard = ({ title, image }) => {
  const router = useRouter();
  return (
    <div
      className="blog-card-wrapper"
      onClick={(e) => {
        router.push(`/blog/${title.replaceAll(" ", "-").toLowerCase()}`);
      }}
    >
      <div className="blog-card-inner">
        <div className="image">
          <LazyImage
            style={{ maxWidth: "100%", cursor: "pointer" }}
            src={image}
            alt={title}
            link="/"
          />
        </div>
        <div className="context">
          <h3> {title} </h3>
          <hr />
          <p>
            {" "}
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
