import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { HalfCircle, HalfCurve } from "./Helpers/Icons";

const TestimonialSlider = ({ testimonials }) => {
  const data = [
    {
      title: "Signarama Toronto put up a 300ft banner for M Downtown store",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/photo-gallery/Columbia_Dental_letter_of_recomendation.jpg",
    },
    {
      title:
        "Victory café got their new illuminated channel letters sign for their re-opening",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/photo-gallery/cclcs-letter-of-recomendation.png",
    },
    {
      title: "Remax re-brands itself with help from Signarama Toronto",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/photo-gallery/Letter-for-Signarama---October-2015.jpg",
    },
    {
      title: "Remax re-brands itself with help from Signarama Toronto",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/photo-gallery/Marriott_200412032014_0000.jpg",
    },
  ];
  const options = {
    type: "loop",
    perPage: 1,
    pagination: false,
    arrows: true,
    // autoplay: true,
    pauseOnHover: true,
    interval: 3000,
  };

  return (
    <div className="testimonial-slider-wrapper">
      <HalfCircle />
      <Splide className="testimonial-slider" options={options}>
        {testimonials?.images?.map((item, i) => {
          return (
            <SplideSlide className="outer-slide-testimonial" key={i}>
              <div className="inner-slide-testimonial">
                <img src={item} style={{ maxWidth: "100%" }} />
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
      <HalfCurve />
    </div>
  );
};

export default TestimonialSlider;
