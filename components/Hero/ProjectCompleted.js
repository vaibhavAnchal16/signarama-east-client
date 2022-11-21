import Link from "next/link";
import React from "react";
import ConnectForm from "../ConnectForm";

const ProjectsCompleted = ({ className }) => {
  return (
    <section
      className={`project-completed-wrapper animate__animated ${className}`}
    >
      <div className="project-completed-content">
        <span className="compl-number">450+</span>
        <div className="compl-project">
          <h2 className="highlighted">Our Customers</h2>
          <p>
            Home Alive Pets, Eataly, Sweat and Tonic, John Fluefog, Aritzia,
            Tilleys, Peak, Hotel One, Delta Hotels, Fairmount Hotels, YMCA,
            CBRE, Triovest, SNC Lavalin, Province of Ontario, University Health
            Network..{" "}
            <Link href="/about-us">
              <span className="highlighted"> read more</span>
            </Link>
            {/* , Princess Margaret
            Hospital, Mizrahi Developments, Candarel, Toronto Police Services,
            Browns Shoes, Lululemon, Rockin&apos; Horse Saloon, Starbucks,
            Sherbourne Health Centre, Ontario Nurses Association, Roche Bobois,
            Bo Concepts, OMERS, OACCAC, National Ballet School, Lawson Real
            Estate, Marriott Hotels and hundreds of retail stores throughout the
            city. */}
          </p>
        </div>
        <div className="login-info">
          <div className="uplifted-content">
            <h2>
              Let&apos;s
              <span className="highlighted"> CONNECT.</span>
              <br /> Let&apos;s do it Together.
            </h2>
          </div>
          <div className="red-box">
            <p>
              We also offer comprehensive in-house design with three graphic
              designers, complete manufacturing and installation.
            </p>
            <ConnectForm style={{ margin: "25px 0px" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCompleted;
