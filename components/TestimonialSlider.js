import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { HalfCircle, HalfCurve } from "./Helpers/Icons";

const TestimonialSlider = ({ testimonials }) => {
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
    <section className="testimonial-slider-wrapper">
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
    </section>
  );
};

export default TestimonialSlider;
