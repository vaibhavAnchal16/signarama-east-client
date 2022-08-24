import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import LazyImage from "../LazyImage";
const _ = require("lodash");
const Services = () => {
  const items = [
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

  var chunks = _.chunk(items, 3);
  const options = {
    type: "loop",
    perPage: 5,
    pagination: false,
    arrows: false,
    autoplay: true,
    pauseOnHover: true,
    interval: 3000,
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
                    <div className="inner-slide" key={index}>
                      <LazyImage
                        src={inerslides?.image}
                        style={{
                          maxWidth: "100%",
                          width: "100%",
                          cursor: "pointer",
                        }}
                      />
                      <p> {inerslides?.title}</p>
                    </div>
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
