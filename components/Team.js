import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import LazyImage from "./LazyImage";
import Link from "next/link";

const Team = ({ title, teams }) => {
  const [chunks, setChunks] = useState([]);
  const options = {
    type: "slide",
    perPage: 6,
    perMove: 1,
    pagination: false,
    arrows: false,
    autoplay: true,
    pauseOnHover: true,
    interval: 5000,
    breakpoints: {
      1400: {
        perPage: 4,
      },
      767: {
        perPage: 2,
      },
      416: {
        perPage: 2,
      },
    },
  };
  useEffect(() => {
    setChunks(_.chunk(teams?.images, 3));
  }, [teams]);

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
          {/* {console.log(chunks)} */}
          <Splide
            className="team-slider"
            aria-label="My Favorite Images"
            options={options}
          >
            {chunks?.map((item, i) => {
              return (
                <SplideSlide className="outer-slide" key={i}>
                  {item?.map((image, index) => (
                    <>
                      <LazyImage
                        src={image}
                        style={{
                          //   maxWidth: "100%",
                          width: "100%",
                          height: "250px",
                          objectFit: "cover",
                          cursor: "pointer",
                        }}
                      />
                    </>
                  ))}
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
      <div className="our-people-cta">
        <Link href="/our-people" className="read-more">
          Show More
        </Link>
      </div>
    </section>
  );
};

export default Team;
