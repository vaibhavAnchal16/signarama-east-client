import React, { useMemo } from "react";
import { BlogCard, Layout, LazyImage } from "../components";
import { QualityIcon } from "../components/icons";
import { SIGNS } from "../graphql/queries";
import client from "../apollo-client";
import Link from "next/link";
import _ from "lodash";

export default function OurSigns({ signs }) {
  const signGroups = useMemo(() => {
    return _.groupBy(signs, "type");
  }, [signs]);
  return (
    <div>
      <div className="howsewingworks services-outer-space">
        <div
          className="howsewingworks-inner d-padding-l d-padding-r d-padding-t"
          style={{
            alignItems: "flex-start",
          }}
        >
          <div className="services-outer-space-text l-margin-b d-column-gap">
            <h1 className="d-margin-b">
              Our <span className="highlighted">Signs</span> <QualityIcon />
            </h1>
            <h2 className="d-margin-b">
              Design, Craft, and Install - All Under One Roof
            </h2>
            <p className="l-margin-b">
              From concept to completion, Signarama Toronto is your one-stop
              shop. We have three in house graphic designers ready to work with
              you. Our comprehensive services include in-house design, expert
              fabrication, and flawless installation. We handle every detail,
              allowing you to focus on what matters most: growing your business.
            </p>
          </div>
        </div>
      </div>
      <section className="signs-outer-space">
        {Object.entries(signGroups).map(([key, value], i) => (
          <div
            className="signs-inner-space d-padding-l d-padding-r l-margin-b"
            key={i}
          >
            <div className="howsewingworks services-outer-space">
              <div
                // className="howsewingworks-inner d-padding-l d-padding-r "
                style={{
                  alignItems: "flex-start",
                }}
              >
                <div
                // className="services-outer-space-text l-margin-b d-column-gap"
                >
                  <h1 className="d-margin-b">{key}</h1>
                </div>
              </div>
            </div>
            <section className="sign-blogs-wrapper">
              <section className="sign-blogs-inner d-flex d-flex-wrap d-column-gap d-row-gap">
                {value?.map((blg, i) => (
                  <BlogCard
                    key={i}
                    title={blg?.title}
                    image={blg?.featuredImage}
                    slug={`/our-signs/${blg?.slug}`}
                    type="sign"
                  />
                ))}
              </section>
            </section>

            {/* <div className="signs-list d-flex d-flex-wrap d-column-gap d-row-gap">
              {value?.map((item, i) => {
                return (
                  <React.Fragment key={i}>
                    <Link href={`/our-signs/${item?.slug}`}>
                      <div
                        className="d-flex d-flex-column"
                        style={{
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
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
                          <h2 className="font-bold">{item?.title}</h2>
                        </div>
                      </div>
                    </Link>
                  </React.Fragment>
                );
              })}
            </div> */}
          </div>
        ))}
      </section>
    </div>
  );
}

export async function getServerSideProps({}) {
  const { data } = await client.query({
    query: SIGNS,
    variables: {
      page: null,
      size: null,
      filters: null,
    },
  });

  // Pass post data to the page via props
  return {
    props: {
      loader: data?.loading || false,
      signs: data?.signs?.signs,
    },
  };
}

OurSigns.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
