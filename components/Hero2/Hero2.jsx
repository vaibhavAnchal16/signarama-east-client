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
  arrows: false,
  pagination: false,
  autoplay: false,
  // autoWidth: true,
  pauseOnHover: true,
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
                  maxWidth: "60%",
                }}
              />
              <LazyImage
                src={`https://res.cloudinary.com/signaramatoronto/image/upload/v1664993995/BLOGSIMAGES/IMG_81551664993992095.jpg`}
                // src={`https://res.cloudinary.com/signaramatoronto/image/upload/v1734299871/BLOGSIMAGES/LORO%20PIANA%20X%20SAR-11734299869649.jpg`}
                style={{
                  maxWidth: "40%",
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
                  maxWidth: "45%",
                }}
              />
              <LazyImage
                src={`https://res.cloudinary.com/signaramatoronto/image/upload/v1678032699/BLOGSIMAGES/unnamed%20%2851%291678032698082.jpg`}
                style={{
                  maxWidth: "60%",
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
                  maxWidth: "40%",
                }}
              />
              <LazyImage
                src={`https://res.cloudinary.com/signaramatoronto/image/upload/v1664907275/BLOGSIMAGES/IMG_8210-min1664907273491.jpg`}
                // src={`https://res.cloudinary.com/signaramatoronto/image/upload/v1712327802/BLOGSIMAGES/pic%2021712327802311.jpg`}
                style={{
                  maxWidth: "60%",
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
                  maxWidth: "40%",
                }}
              />
              <LazyImage
                src={`https://res.cloudinary.com/signaramatoronto/image/upload/v1665065221/BLOGSIMAGES/image1-1%20%284%291665065218928.jpg`}
                // src={`https://res.cloudinary.com/signaramatoronto/image/upload/v1712327802/BLOGSIMAGES/pic%2021712327802311.jpg`}
                style={{
                  maxWidth: "60%",
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
      <div className="hero-outer-space">
        <div className="d-padding">
          <div className="hero-inner-space d-flex d-flex-wrap d-flex-between">
            <div className="hero-text">
              <h1 className="d-margin-b">
                {" "}
                Creating a Better Tomorrow, One Sign at a Time
              </h1>
              <p className="d-margin-b">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
              </p>
              <div className="d-flex d-flex-wrap d-column-gap">
                <Button
                  type={`fill`}
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
                  Get in Touch
                  {/* Get in Touch */}
                </Button>
                <Button
                  type={`outline`}
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
                  View our Projects
                </Button>
              </div>
            </div>
            <div className="hero-image d-flex d-flex-end">
              <div className="illustration">
                <img src="/newimages/canadathemebg2.png" />
              </div>
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
          <div className="ab-image">
            <img src="https://res.cloudinary.com/signaramatoronto/image/upload/v1712326521/BLOGSIMAGES/IMG_97381712326520386.jpg" />
          </div>
          <div className="d-flex d-flex-wrap d-flex-center">
            <div className="building-outer-space-text">
              <h1 className="d-margin-b">
                {" "}
                {/* <div className="ab-image">
                  <img src="https://res.cloudinary.com/signaramatoronto/image/upload/v1688676366/BLOGSIMAGES/image4%20%281%29-min1688676366015.jpg" />
                </div> */}
                {/* <span>
                  <Infinity />{" "}
                </span>{" "} */}
                Signarama Brampton - Your Preferred Signage Partner
              </h1>
              <p className="d-margin-b">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
              </p>
              <div className="ab-image">
                <img src="https://res.cloudinary.com/signaramatoronto/image/upload/v1724001476/BLOGSIMAGES/EATALY%20X%20SAR%20DON%20MILLS-051724001475869.jpg" />
              </div>
              <div className="d-flex d-flex-wrap d-flex-center d-column-gap d-margin-b">
                <Button
                  type={`outline`}
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
                  Learn more about us
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
