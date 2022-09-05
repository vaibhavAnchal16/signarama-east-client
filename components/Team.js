import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import LazyImage from "./LazyImage";

const Team = ({ title }) => {
  const teams = [
    {
      title: "Awnings",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/04/awnings.jpg",
    },
    {
      title: "Commercial Signs",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/2017-04-25-18.29.51-Copy-1024x682-min.jpg",
    },
    {
      title: "Pylon Signs",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/2015-08-24-12.52.21.jpg",
    },
    {
      title: "Blade Signs",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/Cannon-Blanc-5-1024x682-min.jpg",
    },
    {
      title: "Illuminated Signs",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/image1-min.jpg",
    },
    {
      title: "Channel Letters",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/IKEA-1.jpg",
    },
    {
      title: "Cutout Letters",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/cutoutletters.jpg",
    },
    {
      title: "Window Graphics",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/Prada-Window-Prints-2.jpg",
    },
    {
      title: "Awnings",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/04/awnings.jpg",
    },
    {
      title: "Commercial Signs",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/2017-04-25-18.29.51-Copy-1024x682-min.jpg",
    },
    {
      title: "Pylon Signs",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/2015-08-24-12.52.21.jpg",
    },
    {
      title: "Blade Signs",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/Cannon-Blanc-5-1024x682-min.jpg",
    },
    {
      title: "Illuminated Signs",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/image1-min.jpg",
    },
    {
      title: "Channel Letters",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/IKEA-1.jpg",
    },
    {
      title: "Cutout Letters",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/cutoutletters.jpg",
    },
    {
      title: "Window Graphics",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/Prada-Window-Prints-2.jpg",
    },
    {
      title: " Hoardings",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/Hoarding-hi-res.jpg",
    },
    {
      title: " Real Estate Signs",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/leasinggreat.jpg",
    },
    {
      title: "Retractable Banners",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/retractable_banners.jpg",
    },
    {
      title: "Vehicle Wraps",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/Vehicle-wraps.png",
    },
    {
      title: "Banners",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/big-banner.jpg",
    },
    {
      title: "Billboards",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/Billboards-MK.jpg",
    },
    {
      title: " Hoardings",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/Hoarding-hi-res.jpg",
    },
    {
      title: " Real Estate Signs",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/leasinggreat.jpg",
    },
    {
      title: "Retractable Banners",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/retractable_banners.jpg",
    },
    {
      title: "Vehicle Wraps",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/Vehicle-wraps.png",
    },
    {
      title: "Banners",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/big-banner.jpg",
    },
    {
      title: "Billboards",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/Billboards-MK.jpg",
    },
    {
      title: " Hoardings",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/Hoarding-hi-res.jpg",
    },
    {
      title: " Real Estate Signs",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/leasinggreat.jpg",
    },
    {
      title: "Directional",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/directional-sign.png",
    },
    {
      title: "Frosting",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/frosting.jpg",
    },
    {
      title: "P.O.S",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/Bose-POS.jpg",
    },
    {
      title: "Wall Graphics",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/Wall-graphics-1.jpg",
    },
    {
      title: "Office Lobby Signs",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/Lobby-sign.jpg",
    },
    {
      title: "Directional",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/directional-sign.png",
    },
    {
      title: "Frosting",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/frosting.jpg",
    },
    {
      title: "P.O.S",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/Bose-POS.jpg",
    },
    {
      title: "Wall Graphics",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/Wall-graphics-1.jpg",
    },
    {
      title: "Office Lobby Signs",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/Lobby-sign.jpg",
    },
    {
      title: "Directional",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/directional-sign.png",
    },
    {
      title: "Frosting",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/frosting.jpg",
    },
    {
      title: "P.O.S",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/05/Bose-POS.jpg",
    },
  ];

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
      767: {
        perPage: 2,
      },
      416: {
        perPage: 1,
      },
    },
  };
  return (
    <section className="team-wrapper">
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
          <Splide
            className="team-slider"
            aria-label="My Favorite Images"
            options={options}
          >
            {teams?.map((item, i) => {
              return (
                <SplideSlide className="outer-slide" key={i}>
                  <LazyImage
                    src={item?.image}
                    style={{
                      //   maxWidth: "100%",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                  />
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default Team;
