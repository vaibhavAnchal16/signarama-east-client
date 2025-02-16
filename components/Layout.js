import Link from "next/link";
import React, { useEffect, useState } from "react";
import client from "../apollo-client";
import { BLOGS } from "../graphql/queries";
import Footer from "./Footer";
import Header from "./Header";
import { ContactForm, Email, Phone } from "./Helpers/Icons";
import Head from "next/head";

export default function Layout({ children }) {
  const [recentBlogs, setRecentBlogs] = useState({
    loading: true,
  });
  useEffect(() => {
    (async () => {
      const { data, loading, error } = await client.query({
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
      setRecentBlogs({
        loading,
        blogs: data?.blogs?.blogs,
        error,
      });
    })();
  }, []);

  // const handleScroll = () => {
  //   const vw = Math.max(
  //     document.documentElement.clientWidth || 0,
  //     window.innerWidth || 0
  //   );

  //   if (vw > 767) {
  //     const sections = document.getElementsByTagName("section");
  //     const options = {
  //       rootMargin: "10px",
  //       threshold: [0.4, 0.5, 0.3],
  //     };
  //     var observer = new IntersectionObserver((entries) => {
  //       entries.forEach((entry) => {
  //         const intersecting = entry.isIntersecting;
  //         if (intersecting) {
  //           entry.target.classList.remove("grayit");
  //           entry.target.classList.add("nograyit");
  //           // entry.target.classList.add("animate__slideInUp");
  //         } else {
  //           entry.target.classList.remove("nograyit");
  //           entry.target.classList.add("grayit");
  //         }
  //         // entry.target.classList.add(intersecting ? "grayit" : "nograyit");
  //       });
  //       // console.log('Element has just become visible in screen');
  //     }, options);

  //     Array.from(sections).forEach((elm) => {
  //       observer.observe(elm);
  //     });
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      <Head>
        {/* <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Signarama Toronto",
            description:
              "Custom Sign Company in Toronto. We specialize in neon & LED signs, channel letters, Wall Graphics,Illuminated Signs, vehicle wraps, and more. Enhance your brand visibility with high-quality, durable signage.", // Compelling description
            priceRange: "$$",
            url: "https://signarama-toronto.ca",
            telephone: "+1 416-922-7446", // Include country code
            address: {
              "@type": "PostalAddress",
              streetAddress: "873 Bay St",
              addressLocality: "Toronto",
              addressRegion: "ON",
              postalCode: "M5S 3K6",
              addressCountry: "CA",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "43.662845878094586", // Accurate latitude
              longitude: "-79.38604769217936", // Accurate longitude
            },
            openingHoursSpecification: [
              // Detailed opening hours
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "08:30",
                closes: "17:00",
              },
            ],
            image: [
              // Multiple images (high-quality)
              "https://signarama-toronto.ca/wp-content/uploads/2023/03/Neon-Open-Signage-1024x640-1.jpg",
              "https://signarama-toronto.ca/wp-content/uploads/2017/09/LED-Channel-Letters-Signage-1024x535-1.jpg",
              //... more images
            ],
            hasMap: "https://maps.app.goo.gl/SMdNkWgRJiMq4YBZA", // Link to Google Maps
            sameAs: [
              "https://www.facebook.com/signaramatoronto/",
              "https://www.instagram.com/signaramatoronto/",
              "https://www.linkedin.com/company/signarama-toronto",
            ],
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: "43.6532",
                longitude: "-79.3832",
              },
              geoRadius: "50000",
            },
            reviews: [
              // Include reviews (as many as possible)
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Lee Petrie",
                },
                datePublished: "2023-02-15",
                reviewBody:
                  "We're thrilled with our new sign for the Melody Bar. It was a pleasure to work with Nicholas and the team. We thought we knew what we wanted (LED neon), but Nicholas made a recommendation of a backlit sign which allowed our wordmark to be executed perfectly. It was finished on schedule and Josh the installer was also great. We really appreciated their expertise and love the finished sign!",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                },
              },
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Dr. Nick Tsaggarelis",
                },
                datePublished: "2025-01-23",
                reviewBody:
                  "For the last seven years I have been using Signaram on Bay for all my sign needs. They are always professional, efficient and well priced. When I moved locations, they moved my signs and placed them in their new location with limited hassle and outstanding service.",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                },
              },
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Nidia Timoteo",
                },
                datePublished: "2024-10-08",
                reviewBody:
                  "Thank you to Sarah and her team for creating such a beautiful sign for our store at Toronto Sports & Hobby Shows. Amazing service from beginning to the end. Amazing product! Signarama on Bay is the location to go! Thanks guys!",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                },
              },
              //... more reviews
            ],
          })}
        </script> */}
      </Head>
      <Header />
      {/* <div className="floating-items">
        <div className="floating-items-inner">
          <Link href="tel:4169227446">
            <a>
              <span className="pulse">
                <Phone />
              </span>
              <span className="onhover">
                {" "}
                <span>+416-922-7446</span>
              </span>
            </a>
          </Link>
          <Link href="mailto:info@signarama-toronto.ca">
            <a>
              <span className="pulse">
                <Email />{" "}
              </span>
              <span className="onhover">
                <span>info@signarama-toronto.ca</span>{" "}
              </span>
            </a>
          </Link>
          <Link href="/contact-us?focusform=true">
            <a>
              <span className="pulse">
                <ContactForm />{" "}
              </span>
              <span className="onhover">
                <span>Contact Us</span>{" "}
              </span>
            </a>
          </Link>
        </div>
      </div> */}
      <main>{children}</main>
      <Footer recentBlogs={recentBlogs} />
    </>
  );
}
