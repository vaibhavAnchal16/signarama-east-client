import { LazyImage } from "./LazyImage";

export const BlogCard = ({ title, image }) => {
  return (
    <div className="blog-card-wrapper">
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
