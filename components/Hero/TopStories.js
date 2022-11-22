import React from "react";
import SliderWithMiniImage from "../SliderWithMiniImage";

const TopStories = ({ trending }) => {
  return (
    <section className="top-stories animate__animated">
      <div className="section-heading">
        <h1 style={{ textAlign: "center", maxWidth: "100%" }}>
          Trending <span className="highlighted">Stories </span>
        </h1>
        {/* <p>
          {" "}
          Need Help ? We have a talented team of experienced signage consultants
          who can offer expert advice on the kind of sign or promotion that
          would best suit your requirements.
        </p> */}
      </div>
      <SliderWithMiniImage trending={trending} />
    </section>
  );
};

export default TopStories;
