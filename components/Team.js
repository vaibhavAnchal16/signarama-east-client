import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import LazyImage from "./LazyImage";

const Team = ({ title, teams }) => {
  const options = {
    type: "loop",
    perPage: 5,
    pagination: false,
    arrows: false,
    autoplay: true,
    pauseOnHover: true,
    interval: 3000,
    breakpoints: {
      1400: {
        perPage: 4,
      },
      767: {
        perPage: 2,
      },
      416: {
        perPage: 1,
      },
    },
  };
  return (
    <section className="team-wrapper animate__animated">
      {title && (
        <div className="section-heading">
          <h1 style={{ textAlign: "center", maxWidth: "100%" }}>
            Our <span className="highlighted">People </span>
          </h1>
          <p>
            {" "}
            We have a talented team of experienced signage consultants who can
            offer expert advice on the kind of sign or promotion that would best
            suit your requirements.
          </p>
        </div>
      )}
      <div className="team-inner">
        <div className="team-inner-box">
          <Splide
            className="team-slider"
            aria-label="My Favorite Images"
            options={options}
          >
            {teams?.images?.map((item, i) => {
              return (
                <SplideSlide className="outer-slide" key={i}>
                  <LazyImage
                    src={item}
                    style={{
                      //   maxWidth: "100%",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                  />
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default Team;
