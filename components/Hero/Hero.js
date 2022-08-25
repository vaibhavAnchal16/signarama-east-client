import React from "react";
import Link from "next/link";
import { Wave } from "../Helpers/Icons";
import { Process } from "./Process";

export default function Hero() {
  return (
    <div className="hero-outer-space">
      <Wave />
      <div
        className="hero-wrapper"
        // style={{
        //   backgroundImage: `url(https://signarama-toronto.ca/wp-content/uploads/photo-gallery/xmas-17.jpg)`,
        // }}
      >
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Your one-stop shop for all your{" "}
              <span className="highlighted"> Signage</span> solutions
            </h1>
            <h5>
              Fully insured with $10,000,000 liability insurance coverage and
              marketing award winners.
            </h5>

            <Link href="/about-us" className="read-more">
              Read More
            </Link>
          </div>
        </div>
        <Process />
      </div>
    </div>
  );
}
