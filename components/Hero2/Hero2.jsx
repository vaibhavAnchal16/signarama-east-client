import React from "react";
import Button from "../Button/Button";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import LazyImage from "../LazyImage";
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

export default function Hero2() {
  const HeroSliderComponent = () => {
    return (
      <Splide
        className="hero-slider"
        aria-label="My Favorite Images"
        options={options}
        // extensions={{ AutoScroll }}
      >
        <SplideSlide className="hero-outer-slide">
          <div className="hero-inner-slide">
            <div
              className="d-flex d-flex-between"
              style={{
                alignItems: "flex-end",
              }}
            >
              <LazyImage
                src={`https://res.cloudinary.com/signaramatoronto/image/upload/v1712326521/BLOGSIMAGES/IMG_97381712326520386.jpg`}
                style={{
                  maxWidth: "100%",
                }}
              />
            </div>
          </div>
        </SplideSlide>
        <SplideSlide className="hero-outer-slide">
          <div className="hero-inner-slide">
            <div
              className="d-flex d-flex-between"
              style={{
                alignItems: "flex-end",
              }}
            >
              <LazyImage
                src={`https://res.cloudinary.com/signaramatoronto/image/upload/v1664993995/BLOGSIMAGES/IMG_81551664993992095.jpg`}
                // src={`https://res.cloudinary.com/signaramatoronto/image/upload/v1734299871/BLOGSIMAGES/LORO%20PIANA%20X%20SAR-11734299869649.jpg`}
                style={{
                  maxWidth: "100%",
                }}
              />
            </div>
          </div>
        </SplideSlide>

        <SplideSlide className="hero-outer-slide">
          <div className="hero-inner-slide">
            <div
              className="d-flex d-flex-between"
              style={{
                alignItems: "flex-end",
              }}
            >
              <LazyImage
                src={`https://res.cloudinary.com/signaramatoronto/image/upload/v1664994745/BLOGSIMAGES/20211005_1802211664994742006.jpg`}
                // src={`https://res.cloudinary.com/signaramatoronto/image/upload/v1712327802/BLOGSIMAGES/pic%2021712327802311.jpg`}
                style={{
                  maxWidth: "100%",
                }}
              />
            </div>
          </div>
        </SplideSlide>
        <SplideSlide className="hero-outer-slide">
          <div className="hero-inner-slide">
            <div
              className="d-flex d-flex-between"
              style={{
                alignItems: "flex-end",
              }}
            >
              <LazyImage
                src={`https://res.cloudinary.com/signaramatoronto/image/upload/v1678032699/BLOGSIMAGES/unnamed%20%2851%291678032698082.jpg`}
                style={{
                  maxWidth: "100%",
                }}
              />
            </div>
          </div>
        </SplideSlide>
        <SplideSlide className="hero-outer-slide">
          <div className="hero-inner-slide">
            <div
              className="d-flex d-flex-between"
              style={{
                alignItems: "flex-end",
              }}
            >
              <LazyImage
                src={`https://res.cloudinary.com/signaramatoronto/image/upload/v1664907275/BLOGSIMAGES/IMG_8210-min1664907273491.jpg`}
                // src={`https://res.cloudinary.com/signaramatoronto/image/upload/v1712327802/BLOGSIMAGES/pic%2021712327802311.jpg`}
                style={{
                  maxWidth: "100%",
                }}
              />
            </div>
          </div>
        </SplideSlide>
        <SplideSlide className="hero-outer-slide">
          <div className="hero-inner-slide">
            <div
              className="d-flex d-flex-between"
              style={{
                alignItems: "flex-end",
              }}
            >
              <LazyImage
                src={`https://res.cloudinary.com/signaramatoronto/image/upload/v1664987264/BLOGSIMAGES/image-min%20%282%291664987262349.jpg`}
                style={{
                  maxWidth: "100%",
                }}
              />
            </div>
          </div>
        </SplideSlide>
        <SplideSlide className="hero-outer-slide">
          <div className="hero-inner-slide">
            <div
              className="d-flex d-flex-between"
              style={{
                alignItems: "flex-end",
              }}
            >
              <LazyImage
                src={`https://res.cloudinary.com/signaramatoronto/image/upload/v1665065221/BLOGSIMAGES/image1-1%20%284%291665065218928.jpg`}
                // src={`https://res.cloudinary.com/signaramatoronto/image/upload/v1712327802/BLOGSIMAGES/pic%2021712327802311.jpg`}
                style={{
                  maxWidth: "100%",
                }}
              />
            </div>
          </div>
        </SplideSlide>
        <SplideSlide className="hero-outer-slide">
          <div className="hero-inner-slide">
            <div
              className="d-flex d-flex-between"
              style={{
                alignItems: "flex-end",
              }}
            >
              <LazyImage
                src={`https://res.cloudinary.com/signaramatoronto/image/upload/v1733756975/BLOGSIMAGES/Michels%20X%20SAR%20-51733756974530.jpg`}
                style={{
                  maxWidth: "100%",
                }}
              />
            </div>
          </div>
        </SplideSlide>
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
              <div className="ratings d-flex d-flex-wrap d-flex-center">
                <img src="/newimages/ratings.png" />
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
