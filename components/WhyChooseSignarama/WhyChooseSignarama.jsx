export default function WhyChooseSignarama({ children }) {
  return (
    <div
      className="hero-outer-space about-us"
      style={{
        background: "initial",
        padding: "0",
      }}
    >
      <div className="d-padding-l d-padding-r d-padding-b d-padding-t">
        <div className="hero-inner-space d-flex d-flex-wrap d-flex-between">
          <div className="hero-text">
            <h1 className="d-margin-b"> Why Choose Signarama Brampton?</h1>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
