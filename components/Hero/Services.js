import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import LazyImage from "../LazyImage";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
const _ = require("lodash");
const Services = ({ signs }) => {
  const [chunks, setChunks] = useState([]);
  useEffect(() => {
    setChunks(_.chunk(signs, 3));
  }, [signs]);

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
      1200: {
        perPage: 3,
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
    <section className="services-wrapper">
      <div className="section-heading">
        <h1 style={{ textAlign: "center", maxWidth: "100%" }}>
          Our <span className="highlighted">Services </span>
        </h1>
        <p>
          {" "}
          We offer comprehensive in-house design with three graphic designers,
          complete manufacturing and installation for some of the following type
          of signs and services.
        </p>
      </div>
      <div className="services-inner">
        <div className="services-box">
          <Splide
            className="services-slider"
            aria-label="My Favorite Images"
            options={options}
          >
            {chunks?.map((item, i) => {
              return (
                <SplideSlide className="outer-slide" key={i}>
                  {item?.map((inerslides, index) => (
                    <Link href={`/${inerslides?.slug}`} key={index}>
                      <div className="inner-slide">
                        <div style={{ overflow: "hidden" }}>
                          <LazyImage
                            src={inerslides?.featuredImage}
                            style={{
                              maxWidth: "100%",
                              width: "100%",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                        <p> {inerslides?.title}</p>
                      </div>
                    </Link>
                  ))}
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default Services;
