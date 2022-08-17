import { Splide, SplideSlide } from "@splidejs/react-splide";

export const SliderWithMiniImage = () => {
  const data = [
    {
      title: "Signarama Toronto put up a 300ft banner for M Downtown store",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2018/04/hotstory-1.jpg",
    },
    {
      title:
        "Victory café got their new illuminated channel letters sign for their re-opening",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2017/10/victoriacafe.jpg",
    },
    {
      title: "Remax re-brands itself with help from Signarama Toronto",
      image:
        " https://signarama-toronto.ca/wp-content/uploads/2018/04/remax.jpg",
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
    <>
      <Splide
        className="stories-slider"
        aria-label="My Favorite Images"
        options={options}
      >
        {data?.map((item, i) => {
          return (
            <SplideSlide className="outer-slide-story" key={i}>
              <div className="carousel-wrapper">
                <div
                  className="carousel-bg-image"
                  style={{ backgroundImage: `url(${item?.image})` }}
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
                        src={item?.image}
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
