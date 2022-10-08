import React, { useEffect } from "react";
import client from "../apollo-client";
import { SIGNS } from "../graphql/queries";
import Footer from "./Footer";
import Header from "./Header";
import { Email, Phone } from "./Helpers/Icons";

export default function Layout({ children }) {
  const handleScroll = () => {
    const sections = document.getElementsByTagName("section");
    const options = {
      rootMargin: "10px",
      threshold: [0.4, 0.5, 0.3],
    };
    var observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(entry)
        const intersecting = entry.isIntersecting;
        if (intersecting) {
          entry.target.classList.remove("grayit");
          entry.target.classList.add("nograyit");
          // entry.target.classList.add("animate__slideInUp");
        } else {
          entry.target.classList.remove("nograyit");
          entry.target.classList.add("grayit");
        }
        // entry.target.classList.add(intersecting ? "grayit" : "nograyit");
      });
      // console.log('Element has just become visible in screen');
    }, options);

    Array.from(sections).forEach((elm) => {
      observer.observe(elm);
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <TopBar /> */}
      <Header />
      <div className="floating-items">
        <div className="floating-items-inner">
          <a href="tel:4169227446">
            <span>
              <Phone />
            </span>
            <span className="onhover">
              {" "}
              <span>+416-922-7446</span>
            </span>
          </a>
          <a href="mailto:info@signarama-toronto.ca">
            <span>
              <Email />{" "}
            </span>
            <span className="onhover">
              <span>info@signarama-toronto.ca</span>{" "}
            </span>
          </a>
        </div>
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
}
