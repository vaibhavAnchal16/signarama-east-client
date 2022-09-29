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
          <h2>Completed Projects</h2>
          <p>
            We employing Lean Construction practices on our projects to create a
            better environment for our employees and partners, and deliver
            better value to our customers.
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
