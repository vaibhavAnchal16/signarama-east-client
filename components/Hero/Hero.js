import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero-outer-space">
      <div
        className="hero-wrapper"
        // style={{
        //   backgroundImage: `url(https://signarama-toronto.ca/wp-content/uploads/photo-gallery/xmas-17.jpg)`,
        // }}
      >
        <div className="hero-content">
          <div className="hero-text">
            <h5>Toronto&apos;s one of the oldest </h5>
            <h1>sign companies</h1>

            <Link href="/about-us" className="read-more">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
