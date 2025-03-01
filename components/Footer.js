import Link from "next/link";
import React from "react";
import { Wave } from "./Helpers/Icons";
import Image from "next/image";
const Footer = ({ recentBlogs }) => {
  const Stars = () => {
    return (
      <div>
        <div class="star-rating">
          <div class="stars-outer">
            <div
              class="stars-inner"
              style={{
                width: `${(recentBlogs?.reviews?.totalRating / 5) * 100}%`,
              }}
            ></div>
          </div>
        </div>
        <p
          style={{
            color: "white",
          }}
        >
          {recentBlogs?.reviews?.totalRating}/5 Based on{" "}
          {recentBlogs?.reviews?.reviewsCount}+ reviews
        </p>
      </div>
    );
  };

  return (
    <div className="footer-outer-layer">
      <footer className="footer-wrapper d-padding">
        <div className="footer-inner">
          {/* <div className="footer-heading">
            <h2>
              Contact / <span className="highlighted">Office Hours</span>
            </h2>
          </div> */}
          <div className="footer-box-inner">
            <div className="right-boxes">
              <div className="recent-blogs-section">
                <div className="footer-section-heading">
                  <h2>
                    {" "}
                    Recent <span className="highlighted">Blogs</span>
                  </h2>
                </div>
                {recentBlogs?.loading ? (
                  "Loading..."
                ) : (
                  <>
                    <ul>
                      {recentBlogs?.blogs?.map((item, i) => (
                        <li key={i}>
                          <Link href={`/blog/${item?.slug}`}>
                            {item?.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              <div className="social-media-sections">
                <div className="footer-section-heading">
                  <h2>
                    {" "}
                    <span className="highlighted">Social</span> Media
                  </h2>
                </div>
                <ul className="socialmedia">
                  <li>
                    {" "}
                    <a
                      href="https://www.facebook.com/SignaramaToronto/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Facebook
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a
                      href="https://www.linkedin.com/company/sign-a-rama-toronto/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Linked In
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a
                      href="https://www.instagram.com/signaramato/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Instagram
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="left-boxes">
              <div className="footer-box">
                <div>
                  <div className="footer-section-heading">
                    <h2>
                      {" "}
                      <span className="highlighted">Contact</span> Details{" "}
                    </h2>
                  </div>
                  <ul className="contactinformation">
                    <li className="location">
                      {" "}
                      <p>
                        {" "}
                        Sign A Rama, 289 Rutherford Rd S Unit15, Brampton, ON
                        L6W 3R9, Canada
                      </p>{" "}
                    </li>
                    <li className="phone">
                      {" "}
                      <a href="tel:+19054609300"> +1 905-460-9300</a>{" "}
                    </li>
                    <li className="email">
                      {" "}
                      <a href="mailto:info@signarama-bramptonwest.ca">
                        {" "}
                        info@signarama-bramptonwest.ca{" "}
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-box">
                <div>
                  <div className="footer-section-heading">
                    <h2>
                      {" "}
                      Office <span className="highlighted">Hours</span>{" "}
                    </h2>
                  </div>
                  <ul className="officehours">
                    <li>
                      <p> Monday - Friday 09:00 A.M - 05:30 P.M</p>
                    </li>
                    <li>
                      {" "}
                      <p> Saturday & Sunday Closed</p>{" "}
                    </li>
                  </ul>
                  <div className="d-flex d-flex-wrap d-column-gap d-row-gap d-flex-start d-margin-t">
                    <a
                      style={{
                        textDecoration: "none",
                      }}
                      href={`https://www.google.com/search?hl=en-IN&gl=in&q=Signarama+Brampton,+Sign+A+Rama,+289+Rutherford+Rd+S+Unit15,+Brampton,+ON+L6W+3R9,+Canada&ludocid=6132929955006408090&lsig=AB86z5W8WhLSkXAimniua77FJA_Q&hl=en&gl=IN%23lrd=0x882b3e3c79e5657d:0x551c8b4ce882659a,1#lrd=0x882b3e3c79e5657d:0x551c8b4ce882659a,1,,,,`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {recentBlogs?.reviews?.reviews && (
                        <div className="ratings d-flex d-flex-wrap d-flex-start">
                          <div className="images-stack">
                            {recentBlogs?.reviews?.reviews?.map(
                              ({ profile_photo_url }, index) => (
                                <Image
                                  key={index}
                                  src={`${profile_photo_url}`}
                                  width={100}
                                  height={100}
                                />
                              )
                            )}
                          </div>
                          <div className="ratings-text">
                            <Stars />
                          </div>
                        </div>
                      )}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="credit-wrapper">
        <div className="credit-inner">
          <div>
            <p> Designed and Developed by Prudent Analytics. &copy; 2025</p>
          </div>
        </div>
      </div>
      <Wave />
    </div>
  );
};

export default Footer;
