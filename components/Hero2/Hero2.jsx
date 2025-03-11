import React from "react";
import Button from "../Button/Button";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import LazyImage from "../LazyImage";
import { useQuery } from "@apollo/client";
import { HEROGALLERY } from "../../graphql/queries";
import Image from "next/image";
const options = {
  type: "slide",
  perPage: 1,
  speed: 2000,
  rewindSpeed: 1000,
  perMove: 1,
  interval: 5000,
  arrows: true,
  pagination: false,
  autoplay: false,
  pauseOnHover: true,
  classes: {
    // Add classes to the arrow buttons.
    arrows: {
      arrows: "splide__arrows cstm",
    },
  },

  // autoScroll: {
  //   pauseOnHover: false,
  //   pauseOnFocus: false,
  //   rewind: false,
  //   speed: 0.5,
  // },
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

export default function Hero2({ images = [], reviews }) {
  const Stars = () => {
    return (
      <div>
        <div className="star-rating">
          <div className="stars-outer">
            <div
              className="stars-inner"
              style={{
                width: `${(reviews?.totalRating / 5) * 100}%`,
              }}
            ></div>
          </div>
        </div>
        <p
          style={{
            color: "white",
          }}
        >
          {reviews?.totalRating}/5 Based on {reviews?.reviewsCount}+ reviews
        </p>
      </div>
    );
  };

  const HeroSliderComponent = () => {
    return (
      <Splide
        className="hero-slider"
        aria-label="My Favorite Images"
        options={options}
        // extensions={{ AutoScroll }}
      >
        {images?.map((image, index) => (
          <SplideSlide className="hero-outer-slide" key={index}>
            <div className="hero-inner-slide">
              <div
                className="d-flex d-flex-between"
                style={{
                  alignItems: "flex-end",
                }}
              >
                <LazyImage
                  src={image}
                  style={{
                    maxWidth: "100%",
                  }}
                />
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    );
  };

  return (
    <>
      <div className="hero-outer-space gradient">
        <div className="d-padding">
          <div className="hero-inner-space d-flex d-flex-wrap d-flex-between">
            <div className="hero-text">
              <h1 className="d-margin-b">
                Signarama Brampton:{" "}
                <span className="highlighted">Your Expert Sign</span> Makers
              </h1>
              <p className="d-margin-b">
                Your trusted Brampton sign company for custom-designed
                storefront signs, banners, LED signs, channel letters and more.
                From Design To Manufacture And Installation, We’ve Got You
                Covered!
              </p>
              <div className="d-flex d-flex-wrap d-column-gap">
                <Button type={`fill`} href="/contact-us#contact">
                  Get in Touch
                  {/* Get in Touch */}
                </Button>
                <Button type={`outline lite`} href={`/our-signs`}>
                  View Our Signs
                </Button>
              </div>
            </div>
            <div className="hero-image d-flex d-flex-end">
              {/* <div className="illustration">
                <img src="/newimages/canadathemebg2.png" />
              </div> */}
              <HeroSliderComponent />
              {/* <img src="/newimages/check1.png" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="building-outer-space">
        <div className="illustration">
          <img src="/newimages/circlevector.svg" />
        </div>
        <div className="d-padding">
          {/* <div className="ab-image">
            <img src="https://res.cloudinary.com/signaramatoronto/image/upload/v1712326521/BLOGSIMAGES/IMG_97381712326520386.jpg" />
          </div> */}
          <div className="d-flex d-flex-wrap d-flex-center">
            <div className="building-outer-space-text red-section">
              <h1 className="l-margin-b">
                {" "}
                {/* <div className="ab-image">
                  <img src="https://res.cloudinary.com/signaramatoronto/image/upload/v1688676366/BLOGSIMAGES/image4%20%281%29-min1688676366015.jpg" />
                </div> */}
                {/* <span>
                  <Infinity />{" "}
                </span>{" "} */}
                {/* Signarama Brampton: */}
                Signarama Brampton : Where Your Vision Takes Shape
              </h1>
              <h2 className="s-margin-b">
                * Helping Businesses In Brampton and the GTA Look Great For Over
                20 Years.
              </h2>
              <h2 className="d-margin-b">
                * More Than Just Signs, We're Your Brand Storytellers
              </h2>

              <h2 className="l-margin-b">
                * Full Service Sign Company From Design To Installation
              </h2>

              {/* <div className="ab-image">
                <img src="https://res.cloudinary.com/signaramatoronto/image/upload/v1724001476/BLOGSIMAGES/EATALY%20X%20SAR%20DON%20MILLS-051724001475869.jpg" />
              </div> */}
              <div className="d-flex d-flex-wrap d-flex-center d-column-gap d-margin-b">
                <Button
                  type={`outline dark`}
                  href={`/about-us`}
                  //   onClick={e => {
                  //     const params = new URLSearchParams(window.location.search)
                  //     let url = `/get-demo/`
                  //     if (params.size > 0) {
                  //       url = `${url}?${params.toString()}`
                  //     }
                  //     navigate(url)
                  //   }}
                  //   icon={heroCtaIcon}
                >
                  Read More
                </Button>
              </div>
              <div className="d-flex d-flex-wrap d-column-gap d-row-gap d-flex-center">
                <a
                  style={{
                    textDecoration: "none",
                  }}
                  href={`https://www.google.com/search?hl=en-IN&gl=in&q=Signarama+Brampton,+Sign+A+Rama,+289+Rutherford+Rd+S+Unit15,+Brampton,+ON+L6W+3R9,+Canada&ludocid=6132929955006408090&lsig=AB86z5W8WhLSkXAimniua77FJA_Q&hl=en&gl=IN%23lrd=0x882b3e3c79e5657d:0x551c8b4ce882659a,1#lrd=0x882b3e3c79e5657d:0x551c8b4ce882659a,1,,,,`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3
                    className="s-margin-b"
                    style={{
                      textAlign: "center",
                      color: "#f0f0f0",
                      fontWeight: "400",
                    }}
                  >
                    {" "}
                    <span class="google-text">
                      <span class="g1">G</span>
                      <span class="o1 w">o</span>
                      <span class="o2">o</span>
                      <span class="g2">g</span>
                      <span class="l">l</span>
                      <span class="e w">e</span>
                      <span class="r"> Reviews</span>
                    </span>
                  </h3>
                  <div className="ratings d-flex d-flex-wrap d-flex-center">
                    <div className="images-stack">
                      {reviews?.reviews?.map(({ profile_photo_url }, index) => (
                        <Image
                          key={index}
                          src={`${profile_photo_url}`}
                          width={100}
                          height={100}
                        />
                      ))}
                    </div>
                    <div className="ratings-text">
                      <Stars />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* <div className="ab-image">
            <img src="https://res.cloudinary.com/signaramatoronto/image/upload/v1734394918/BLOGSIMAGES/EATALY%20HOLIDAY%20POP%20UP-51734394918513.jpg" />
          </div> */}
        </div>
      </div>
    </>
  );
}
