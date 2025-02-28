import Link from "next/link";
import React from "react";
import { Wave } from "./Helpers/Icons";
const Footer = ({ recentBlogs }) => {
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
                      <p> Monday - Friday 8:30 A.M - 5 P.M</p>
                    </li>
                    <li>
                      {" "}
                      <p> Saturday & Sunday Closed</p>{" "}
                    </li>
                  </ul>
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
