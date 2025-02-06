export default function WhyChooseSignarama({
  outerClass = "hero-outer-space about-us",
  children,
}) {
  console.log(outerClass);
  return (
    <div
      className={outerClass}
      style={{
        padding: "0",
      }}
    >
      <div className="d-padding-l d-padding-r d-padding-b d-padding-t">
        <div className="hero-inner-space d-flex d-flex-wrap d-flex-between">
          <div className="hero-text">
            <h1 className="d-margin-b">
              {" "}
              Why Choose <span className="highlighted">Signarama</span>{" "}
              Brampton?
            </h1>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
