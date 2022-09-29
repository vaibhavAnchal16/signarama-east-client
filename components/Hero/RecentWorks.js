import React from "react";
import BlogCard from "../BlogCard";
import SliderWithMiniImage from "../SliderWithMiniImage";

const RecentWorks = ({ recentworks }) => {
  return (
    <section className="sign-blogs-wrapper animate__animated">
      <div className="section-heading">
        <h1 style={{ textAlign: "center", maxWidth: "100%" }}>
          Recent <span className="highlighted">Work </span>
        </h1>
        {/* <p>
          {" "}
          Need Help ? We have a talented team of experienced signage consultants
          who can offer expert advice on the kind of sign or promotion that
          would best suit your requirements.
        </p> */}
      </div>

      <section className="sign-blogs-inner">
        {recentworks?.map((blg, i) => (
          <BlogCard
            key={i}
            title={blg?.title}
            image={blg?.featuredImage}
            slug={blg?.slug}
          />
        ))}
      </section>
    </section>
  );
};

export default RecentWorks;
