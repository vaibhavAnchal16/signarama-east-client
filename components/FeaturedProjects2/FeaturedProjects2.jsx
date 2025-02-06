import { Splide, SplideSlide } from "@splidejs/react-splide";
import Button from "../Button/Button";
import LazyImage from "../LazyImage";
import Link from "next/link";
import { createMarkup } from "../Helpers/CreateMarkup";
import { ArrowIcon, ArrowNext, FeaturedIcon } from "../icons";
import { useRef } from "react";
const options = {
  type: "slide",
  perPage: 3,
  gap: "2rem",
  speed: 1000,
  rewindSpeed: 1000,
  center: true,
  perMove: 1,
  interval: 3000,
  pagination: false,
  arrows: true,
  autoplay: false,
  pauseOnHover: true,
  interval: 3000,
  grid: {
    rows: 2,
    cols: 2,
    gap: {
      row: "1rem",
      col: "1.5rem",
    },
  },
  breakpoints: {
    1200: {
      perPage: 2,
    },
    991: {
      perPage: 2,
      gap: "1rem",
    },
    416: {
      perPage: 1,
    },
  },
};

export default function FeaturedProjects2({ data }) {
  if (!data) return null;
  const splideRef = useRef(null);
  return (
    <section className="featured-outer-space">
      <div className="d-padding-l d-padding-r d-padding-b">
        <div
          className="featured-outer-space-text d-flex d-flex-end l-margin-b d-column-gap"
          style={{
            alignItems: "flex-end",
          }}
        >
          <div>
            <h1 className="d-margin-b">
              {" "}
              <FeaturedIcon fill="#c3122f" />
              Featured Projects
            </h1>
            <p className="">
              lorem Ipsum is simply dummy text of the printing and typesetting
              lorem Ipsum is simply dummy text of the printing and typesetting
              lorem Ipsum is simply dummy text of the printing and typesetting.
            </p>
          </div>
          <div>
            {/* <Button href={`/blog`} type={`fill`}>
              View all Projects
            </Button> */}
          </div>
        </div>

        <div className="services-inner d-margin-t">
          <Splide
            className="services-slider"
            aria-label="My Favorite Images"
            options={options}
            ref={splideRef}
          >
            {data?.map((item, i) => {
              return (
                <SplideSlide className="outer-slide" key={i}>
                  <Link href={`/blog/${item?.slug}`}>
                    <div className="inner-slide d-flex d-flex-column">
                      <div style={{ overflow: "hidden" }}>
                        <LazyImage
                          src={item?.featuredImage}
                          style={{
                            maxWidth: "100%",
                            width: "100%",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                      <div className="sign-name">
                        <p className="s-margin-b font-bold">{item?.title}</p>
                        <span
                          className="sign-description"
                          dangerouslySetInnerHTML={createMarkup(
                            item?.description,
                            200
                          )}
                        ></span>
                      </div>
                      <div className="d-margin-auto-t">
                        <Button
                          href={`/blog/${item?.slug}`}
                          type={`full-width fill`}
                        >
                          View Project
                        </Button>
                      </div>
                    </div>
                  </Link>
                </SplideSlide>
              );
            })}
          </Splide>
          <div className="d-flex d-flex-between d-margin-t">
            <div>{/* <p>{data?.length}</p> */}</div>
            <div
              style={{
                position: "relative",
              }}
            >
              <div className="splide__arrows cstm d-flex">
                <button
                  className="splide__arrow splide__arrow--prev d-flex d-flex-center"
                  onClick={() => {
                    const currenIndex = splideRef.current.splide.index;
                    splideRef.current.go(currenIndex - 1);
                  }}
                >
                  <ArrowNext fill="#fff" />
                </button>
                <button
                  className="splide__arrow splide__arrow--next d-flex d-flex-center"
                  onClick={() => {
                    const currenIndex = splideRef.current.splide.index;
                    splideRef.current.go(currenIndex + 1);
                    // console.log(splideRef.current);
                  }}
                >
                  <ArrowNext fill="#fff" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
