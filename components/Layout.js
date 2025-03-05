import React, { useEffect, useState } from "react";
import client from "../apollo-client";
import { BLOGS, GETREVIEWS } from "../graphql/queries";
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";

export default function Layout({ children }) {
  const [recentBlogs, setRecentBlogs] = useState({
    loading: true,
  });
  useEffect(() => {
    (async () => {
      const { data, loading, error } = await client.query({
        fetchPolicy: "network-only",
        query: BLOGS,
        variables: {
          page: 1,
          size: 5,
          filters: {
            recentWork: true,
            published: true,
          },
        },
      });
      const {
        data: data2,
        loading: loading2,
        error: error2,
      } = await client.query({
        fetchPolicy: "network-only",
        query: GETREVIEWS,
      });
      setRecentBlogs({
        loading: loading || loading2,
        blogs: data?.blogs?.blogs,
        error: error || error2,
        reviews: data2?.getGoogleReviews,
      });
    })();
  }, []);

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Signarama Brampton",
            description:
              "Custom Sign Company in Toronto. We specialize in neon & LED signs, channel letters, Wall Graphics,Illuminated Signs, vehicle wraps, and more. Enhance your brand visibility with high-quality, durable signage.", // Compelling description
            priceRange: "$$",
            email: "info@signarama-bramptonwest.ca",
            telePhone: "+1905-460-9300",
            url: "https://www.signarama-bramptonwest.ca/",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Sign A Rama, 289 Rutherford Rd S Unit15",
              addressLocality: "Brampton",
              addressRegion: "ON ",
              postalCode: "L6W 3R9",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "43.662845878094586", // Accurate latitude
              longitude: "-79.38604769217936", // Accurate longitude
            },
            openingHours: "Mo,Tu,We,Th,Fr 09:00-17:00",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "17:30",
              },
            ],
            image: [
              // Multiple images (high-quality)
              "https://signarama-toronto.ca/wp-content/uploads/2023/03/Neon-Open-Signage-1024x640-1.jpg",
              "https://signarama-toronto.ca/wp-content/uploads/2017/09/LED-Channel-Letters-Signage-1024x535-1.jpg",
              //... more images
            ],
            hasMap: "https://maps.app.goo.gl/yBtqtsmAZ1A53pkMA", // Link to Google Maps
            sameAs: [
              "https://www.facebook.com/signaramabramptonwest",
              "https://www.instagram.com/signaramabw/",
              // "https://www.linkedin.com/company/signarama-toronto",
            ],
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: "43.684020",
                longitude: "-79.759046",
              },
              geoRadius: "50000",
            },
            reviews: recentBlogs?.reviews?.reviews?.map(
              ({ author_name, text, rating, time }) => ({
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: author_name,
                },
                datePublished: new Date(time).toISOString(),
                reviewBody: text,
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: rating?.toString(),
                },
              })
            ),
            // reviews: [
            //   {
            //     "@type": "Review",
            //     author: {
            //       "@type": "Person",
            //       name: "Lee Petrie",
            //     },
            //     datePublished: "2023-02-15",
            //     reviewBody:
            //       "We're thrilled with our new sign for the Melody Bar. It was a pleasure to work with Nicholas and the team. We thought we knew what we wanted (LED neon), but Nicholas made a recommendation of a backlit sign which allowed our wordmark to be executed perfectly. It was finished on schedule and Josh the installer was also great. We really appreciated their expertise and love the finished sign!",
            //     reviewRating: {
            //       "@type": "Rating",
            //       ratingValue: "5",
            //     },
            //   },
            //   {
            //     "@type": "Review",
            //     author: {
            //       "@type": "Person",
            //       name: "Dr. Nick Tsaggarelis",
            //     },
            //     datePublished: "2025-01-23",
            //     reviewBody:
            //       "For the last seven years I have been using Signaram on Bay for all my sign needs. They are always professional, efficient and well priced. When I moved locations, they moved my signs and placed them in their new location with limited hassle and outstanding service.",
            //     reviewRating: {
            //       "@type": "Rating",
            //       ratingValue: "5",
            //     },
            //   },
            //   {
            //     "@type": "Review",
            //     author: {
            //       "@type": "Person",
            //       name: "Nidia Timoteo",
            //     },
            //     datePublished: "2024-10-08",
            //     reviewBody:
            //       "Thank you to Sarah and her team for creating such a beautiful sign for our store at Toronto Sports & Hobby Shows. Amazing service from beginning to the end. Amazing product! Signarama on Bay is the location to go! Thanks guys!",
            //     reviewRating: {
            //       "@type": "Rating",
            //       ratingValue: "5",
            //     },
            //   },
            // ],
          })}
        </script>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer recentBlogs={recentBlogs} />
    </>
  );
}
