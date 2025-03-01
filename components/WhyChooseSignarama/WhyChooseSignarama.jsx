import React from "react";
import parse from "html-react-parser";
export default function WhyChooseSignarama({
  outerClass = "hero-outer-space about-us",
  innerClass = "hero-inner-space d-flex d-flex-wrap d-flex-between",
  title = `<h1 className="d-margin-b">Why Choose <span className="highlighted">Signarama</span> Brampton? </h1>`,
  cta = null,
  children,
}) {
  return (
    <div
      className={outerClass}
      style={{
        padding: "0",
      }}
    >
      <div className="d-padding-l d-padding-r d-padding-b d-padding-t">
        <div className={innerClass}>
          <div className="hero-text">{parse(title || "")}</div>
          {children}
        </div>
      </div>
    </div>
  );
}
