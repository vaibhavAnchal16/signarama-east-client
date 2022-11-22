import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useRouter } from "next/router";

const SliderWithMiniImage = ({ trending }) => {
  const router = useRouter();
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
    <>
      <Splide
        className="stories-slider"
        aria-label="My Favorite Images"
        options={options}
      >
        {trending?.map((item, i) => {
          return (
            <SplideSlide
              className="outer-slide-story"
              key={i}
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                router.push(`/blog/${item.slug}`);
              }}
            >
              <div className="carousel-wrapper">
                <div
                  className="carousel-bg-image"
                  style={{
                    cursor: "pointer",
                    backgroundImage: `url(${item?.featuredImage})`,
                  }}
                >
                  {" "}
                </div>
                <div className="carousel-content">
                  <div className="u-container-layout">
                    <div className="story-wrapper">
                      {/* <img
            src="//images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/d72db0adb7f35973b1f2dc7d/trf.png"
            alt=""
            className="u-expanded-width u-image u-image-contain u-image-default u-image-1"
          /> */}
                      <img
                        src={item?.featuredImage}
                        alt=""
                        className="u-border-16 u-border-palette-5-base u-image u-image-default u-image-2"
                      />
                      <div className="story-title-wrapper">
                        <h2 className="story-title"> {item.title} </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </>
  );
};

export default SliderWithMiniImage;
