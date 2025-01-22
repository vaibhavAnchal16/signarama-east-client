import React, { useMemo } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Grid } from "@splidejs/splide-extension-grid";

import LazyImage from "../LazyImage";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import Button from "../Button/Button";

import { Infinity, QualityIcon } from "../icons";
import { createMarkup } from "../Helpers/CreateMarkup";
const _ = require("lodash");
const Services = ({ data }) => {
  const [active, setActive] = useState("Storefront");

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
    grid: {
      rows: 2,
      cols: 2,
      gap: {
        row: "1rem",
        col: "1.5rem",
      },
    },
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
    <>
      <section className="services-outer-space">
        <div className="d-padding">
          <div className="services-outer-space-text">
            <h1 className="d-margin-b">
              Our Services <QualityIcon />
            </h1>
            <p className="d-margin-b">
              lorem Ipsum is simply dummy text of the printing and typesetting
              lorem Ipsum is simply dummy text of the printing and typesetting
              lorem Ipsum is simply dummy text of the printing and typesetting.
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
                          </div>
                        </Link>
                      </SplideSlide>
                    );
                  })}
                </Splide>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
