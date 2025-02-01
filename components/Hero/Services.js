import React, { useMemo, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Grid } from "@splidejs/splide-extension-grid";

import LazyImage from "../LazyImage";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import Button from "../Button/Button";

import { ArrowNext, Infinity, QualityIcon } from "../icons";
import { createMarkup } from "../Helpers/CreateMarkup";
const _ = require("lodash");

const Services = ({ data }) => {
  const [active, setActive] = useState("Storefront");
  const splideRef = useRef(null);
  // useEffect(() => {
  //   setChunks(_.chunk(signs, 3));
  // }, [signs]);
  const signTypes = useMemo(() => {
    return _.uniq(data?.map((sign) => sign?.type));
  }, data);
  const groupSigns = useMemo(() => {
    return _.groupBy(data, "type");
  }, data);
  const options = {
    type: "slide",
    perPage: 3,
    gap: "2rem",
    speed: 1000,
    rewindSpeed: 1000,
    center: true,
    interval: 3000,
    pagination: false,
    arrows: false,
    autoplay: false,
    pauseOnHover: true,
    interval: 3000,
    // grid: {
    //   rows: 2,
    //   cols: 2,
    //   gap: {
    //     row: "1rem",
    //     col: "1.5rem",
    //   },
    // },
    breakpoints: {
      1200: {
        perPage: 3,
        gap: "1rem",
      },
      991: {
        perPage: 2,
        gap: "1rem",
      },
      416: {
        perPage: 1,
      },
    },
  };
  return (
    <>
      <section className="services-outer-space">
        <div className="d-padding">
          <div className="services-outer-space-text">
            <h1 className="d-margin-b">
              Our Expertise
              <QualityIcon />
            </h1>
            <h2 className="d-margin-b">
              Design, Craft, and Install - All Under One Roof
            </h2>
            <p className="d-margin-b">
              From concept to completion, Signarama Toronto is your one-stop
              shop. We have three in house graphic designers ready to work with
              you. Our comprehensive services include in-house design, expert
              fabrication, and flawless installation. We handle every detail,
              allowing you to focus on what matters most: growing your business.
            </p>
            <div className="sign-types d-flex d-flex-wrap d-column-gap d-row-gap d-flex-center">
              {signTypes?.map((signType, index) => {
                return (
                  <Button
                    key={index}
                    type={`d-flex-1 ${
                      active === signType ? "fill" : "inactive"
                    }`}
                    onClick={() => {
                      setActive(signType);
                      document.getElementById(signType).scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                      // document.getElementById(signType).classList.add("active");
                      // setTimeout(() => {
                      //   document
                      //     .getElementById(signType)
                      //     .classList.remove("active");
                      // }, 1000);

                      // setChunks(
                      //   _.chunk(
                      //     signs?.filter((sign) => sign?.type === signType),
                      //     3
                      //   )
                      // );
                    }}
                  >
                    {signType}
                  </Button>
                );
              })}
            </div>
          </div>
          <div className="services-inner d-margin-t">
            {Object.entries(groupSigns)?.map(([key, value], index) => (
              <div
                className="services-box"
                style={
                  active === key ? { display: "block" } : { display: "none" }
                }
                id={key}
                key={index}
              >
                <Splide
                  ref={splideRef}
                  className="services-slider"
                  aria-label="My Favorite Images"
                  options={options}
                >
                  {value?.map((item, i) => {
                    return (
                      <SplideSlide className="outer-slide" key={i}>
                        <Link href={`/${item?.slug}`} key={index}>
                          <div className="inner-slide">
                            <div style={{ overflow: "hidden" }}>
                              <LazyImage
                                src={item?.featuredImage}
                                style={{
                                  maxWidth: "100%",
                                  width: "100%",
                                  cursor: "pointer",
                                }}
                              />
                            </div>
                            <div className="sign-name">
                              <p className="d-margin-b">{item?.title}</p>
                              <span
                                className="sign-description"
                                dangerouslySetInnerHTML={createMarkup(
                                  item?.description,
                                  200
                                )}
                              ></span>
                            </div>
                            <div className="d-margin-t">
                              <Button
                                href={`/${item?.slug}`}
                                style={{
                                  position: "absolute",
                                  bottom: "0",
                                  left: "0",
                                  right: "0",
                                }}
                                type={`full-width fill`}
                              >
                                See More
                              </Button>
                            </div>
                          </div>
                        </Link>
                      </SplideSlide>
                    );
                  })}
                </Splide>
                <div className="d-flex d-flex-between d-margin-t">
                  <div>{/* <p>{data?.length}</p> */}</div>
                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    <div className="splide__arrows cstm d-flex">
                      <button
                        className="splide__arrow splide__arrow--prev d-flex d-flex-center"
                        onClick={() => {
                          const currenIndex = splideRef.current.splide.index;
                          splideRef.current.go(currenIndex - 1);
                        }}
                      >
                        <ArrowNext fill="#fff" />
                      </button>
                      <button
                        className="splide__arrow splide__arrow--next d-flex d-flex-center"
                        onClick={() => {
                          const currenIndex = splideRef.current.splide.index;
                          splideRef.current.go(currenIndex + 1);
                          splideRef.current.go(1);
                          // console.log(splideRef.current);
                        }}
                      >
                        <ArrowNext fill="#fff" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
