import React from "react";
const Wally = ({ title }) => {
  return (
    <section className="about-us animate__animated">
      <div className="wally-wrapper">
        {/* <div className="flex-test">
          <div className="rectangle-shape"></div>
          
        </div> */}

        <div className="about-owner-wrapper">
          {title && (
            <div className="section-heading" style={{ textAlign: "center" }}>
              <h1>
                <span className="highlighted">About </span>Us
              </h1>
            </div>
          )}

          <div className="abt-descp">
            <p className="info-text">
              Signarama Toronto is one of the oldest sign companies in Toronto.
              We are a full service, sign and display company helping businesses
              both big and small with their needs for custom signs, displays and
              large format printing since 1986. We offer comprehensive in-house
              design with three graphic designers, complete manufacturing and
              installation for some of the following type of signs and services
            </p>
            <p className="info-text">
              We have a talented team of experienced signage consultants who can
              offer expert advice on the kind of sign or promotion that would
              best suit your requirements. Our production staff in all our three
              facilities are professional and efficient to ensure creative and
              timely delivery of sign and display products. We&apos;re privately
              owned and pride ourselves on maintaining outstanding service and
              unique creativity as part of our company culture.
            </p>

            <p className="info-text-2">
              We have a talented team of experienced signage consultants who can
              offer expert advice on the kind of sign or promotion that would
              best suit your requirements.
            </p>
          </div>
          <div className="wally-section">
            <img src="//res.cloudinary.com/signaramatoronto/image/upload/f_auto/STATICASSETS/wally_dult3v.png" />
            <div className="designation">
              <div>
                {" "}
                <div className="nameandlinked">
                  <span>Wally Tomaszek</span>
                  <span>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/company/sign-a-rama-toronto/"
                    >
                      <img src="//res.cloudinary.com/signaramatoronto/image/upload/f_auto/STATICASSETS/linkedin-icon_cparra.png" />{" "}
                    </a>
                  </span>
                </div>
                <span className="wally-desig">
                  President, Signarama Toronto
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wally;
