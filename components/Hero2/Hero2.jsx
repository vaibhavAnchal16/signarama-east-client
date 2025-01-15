import React from "react";
import Button from "../Button/Button";
import { HeroIllustration } from "../icons";
import Image from "next/image";

export default function Hero2() {
  return (
    <>
      <div className="hero-outer-space">
        <div className="illustration">
          <img src="/newimages/circlevector.svg" />
        </div>
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
                  Schedule a Call
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
            <div className="hero-image">...</div>
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
                <div className="ab-image">
                  <img src="https://res.cloudinary.com/signaramatoronto/image/upload/v1688676366/BLOGSIMAGES/image4%20%281%29-min1688676366015.jpg" />
                </div>
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
          <div className="ab-image">
            <img src="https://res.cloudinary.com/signaramatoronto/image/upload/v1734394918/BLOGSIMAGES/EATALY%20HOLIDAY%20POP%20UP-51734394918513.jpg" />
          </div>
        </div>
      </div>
    </>
  );
}
