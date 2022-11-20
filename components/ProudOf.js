import React from "react";
const ProudOf = ({ title }) => {
  return (
    <section className="proud-of-wrapper animate__animated">
      <div className="proud-of-inner">
        <div className="section-heading-award" style={{ textAlign: "center" }}>
          {title && (
            <h1>
              <span className="highlighted">Award </span>
              Winners
            </h1>
          )}
          <p>
            We are fully insured with $10,000,000 liability insurance coverage,
            we have all WSIB clearance certificates and are “Contractor Check
            Certified, are “Comply Works” accredited with no personal injury
            claims. We are also proud members of the American Marketing
            Association and contributing members of the Canadian Sign
            Association.
          </p>
        </div>
        <marquee>
          <ul className="list-inline slidelogos vm">
            <li>
              <img className="img-responsive" src="/images/tsa.png" />
            </li>
            <li>
              <img className="img-responsive" src="/images/CW.webp" />
            </li>
            <li>
              <img className="img-responsive" src="/images/ama.png" />
            </li>
            <li>
              <img className="img-responsive" src="/images/ctcheck.png" />
            </li>
          </ul>
        </marquee>
      </div>
    </section>
  );
};

export default ProudOf;
