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
                ONE OF THE OLDEST <span className="highlighted"> SIGN</span>{" "}
                COMPANIES IN TORONTO
              </h1>
              <h5>Offering a One Stop Experience surpassing expectations.</h5>
              <h5>
                Serving businesses in Toronto, the GTA and Nationally since
                1986.
              </h5>

              <h5>
                Contractor Check, Comply Works Accredited, Members of the
                American Marketing Association and The Canadian Sign Association
                .
              </h5>
              <h5>
                We are fully insured carrying $10,000,000 liability insurance
              </h5>
              <h5>Design and Marketing Award winners</h5>
              <ul className="list-inline slidelogos vm">
                <li>
                  <img
                    className="img-responsive"
                    src="https://signarama-toronto.ca/wp-content/uploads/2018/03/tsa.png"
                  />
                </li>
                <li>
                  <img
                    className="img-responsive"
                    src="https://signarama-toronto.ca/wp-content/uploads/2018/04/ama.png"
                  />
                </li>
                <li>
                  <img
                    className="img-responsive"
                    src="https://signarama-toronto.ca/wp-content/uploads/2018/04/contractcheck.png"
                  />
                </li>
              </ul>

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
