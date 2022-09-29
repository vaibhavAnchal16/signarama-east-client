import React, { useEffect } from "react";
import Link from "next/link";
import { Wave } from "../Helpers/Icons";
import { Process } from "./Process";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import LazyImage from "../LazyImage";

export default function Hero() {
  const images = [
    "//res.cloudinary.com/signaramatoronto/image/upload/f_auto/BLOGSIMAGES/big-banner1663438000984.jpg",
    "//res.cloudinary.com/signaramatoronto/image/upload/v1663437874/BLOGSIMAGES/cutoutletters1663437872008.jpg",
    "//res.cloudinary.com/signaramatoronto/image/upload/v1663408831/BLOGSIMAGES/awnings1663408822598.jpg",
  ];
  const options = {
    type: "loop",
    perPage: 1,
    pagination: false,
    arrows: false,
    autoplay: true,
    pauseOnHover: true,
    interval: 3000,
    // breakpoints: {
    //   1400: {
    //     perPage: 4,
    //   },
    //   1200: {
    //     perPage: 3,
    //   },
    //   767: {
    //     perPage: 2,
    //   },
    //   416: {
    //     perPage: 1,
    //   },
    // },
  };
  return (
    <section className="hero-outer-space animate__animated">
      <Wave />
      <div
        className="hero-wrapper"
        // style={{
        //   backgroundImage: `url(https://signarama-toronto.ca/wp-content/uploads/photo-gallery/xmas-17.jpg)`,
        // }}
      >
        <div className="hero-content">
          <div className="hero-banner-image">
            <Splide
              className="hero-slider"
              aria-label="My Favorite Images"
              options={options}
            >
              {images?.map((item, i) => {
                return (
                  <SplideSlide className="outer-slid" key={i}>
                    <div className="inner-slid">
                      <LazyImage
                        src={item}
                        style={{
                          maxWidth: "100%",
                          width: "100%",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </SplideSlide>
                );
              })}
            </Splide>

            {/* <img
              id="heroimage"
              src="//res.cloudinary.com/signaramatoronto/image/upload/f_auto/BLOGSIMAGES/big-banner1663438000984.jpg"
            /> */}
            <section className="hero-text">
              <h1>
                Your one-stop shop for all your{" "}
                <span className="highlighted"> Signage</span> solutions
              </h1>
              <h5>
                Fully insured with $10,000,000 liability insurance coverage and
                marketing award winners.
              </h5>

              <Link href="/about-us" className="read-more">
                Read More
              </Link>
            </section>
          </div>
        </div>
        <Process />
      </div>
    </section>
  );
}
