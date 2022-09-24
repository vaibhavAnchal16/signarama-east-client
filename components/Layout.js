import React from "react";
import client from "../apollo-client";
import { SIGNS } from "../graphql/queries";
import Footer from "./Footer";
import Header from "./Header";
import { Email, Phone } from "./Helpers/Icons";

export default function Layout({ children }) {
  if (typeof window === undefined) return <>Hi</>;
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
              <a>+416-922-7446</a>
            </span>
          </a>
          <a href="mailto:info@signarama-toronto.ca">
            <span>
              <Email />{" "}
            </span>
            <span className="onhover">
              <a>info@signarama-toronto.ca</a>{" "}
            </span>
          </a>
        </div>
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
}
