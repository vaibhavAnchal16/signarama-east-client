import React from "react";
import { Wave } from "./Helpers/Icons";
const Footer = () => {
  return (
    <div>
      <footer className="footer-wrapper">
        <div className="footer-inner">
          <div className="footer-heading">
            <h2>
              Contact / <span className="highlighted">Office Hours</span>
            </h2>
          </div>
          <div className="footer-box-inner">
            <div className="left-boxes">
              <div className="footer-box">
                <ul className="contactinformation">
                  <li className="location">
                    {" "}
                    <p>
                      {" "}
                      Signarama Toronto, 873 Bay St. Toronto, ONTARIO M5S 3K6
                    </p>{" "}
                  </li>
                  <li className="phone">
                    {" "}
                    <p> 416.922.7446</p>{" "}
                  </li>
                  <li className="email">
                    {" "}
                    <p> info@signarama-toronto.ca</p>{" "}
                  </li>
                </ul>
              </div>
              <div className="footer-box">
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
            <div className="right-boxes">
              <ul className="socialmedia">
                <li>
                  {" "}
                  <a
                    href="https://www.facebook.com/SignaramaToronto/"
                    target="_blank"
                  >
                    Facebook
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="https://www.linkedin.com/company/sign-a-rama-toronto/"
                    target="_blank"
                  >
                    Linked In
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="https://plus.google.com/u/0/b/103480397092757649225/"
                    target="_blank"
                  >
                    Google Plus
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="credit-wrapper">
        <div className="credit-inner">
          <div>
            <p> Designed and Developed by Prudent Analytics. &copy; 2022</p>
          </div>
        </div>
      </div>
      <Wave />
    </div>
  );
};

export default Footer;
