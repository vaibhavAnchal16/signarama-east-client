import { FaqIcon } from "../icons";

export default function Faq2({ className = "" }) {
  return (
    <section className={`faq-outer-space ${className}`}>
      <div className="d-padding-l d-padding-r d-padding-b">
        <div className="faq-outer-space-text l-margin-b">
          <div>
            <h1
              className="d-margin-b"
              style={{
                textAlign: "center",
              }}
            >
              Frequently Asked <span className="highlighted">Questions</span>{" "}
              <FaqIcon />
            </h1>
          </div>
        </div>

        <div className="faq-cards d-margin-t">
          <div
            className="d-flex d-flex-wrap d-flex-between d-column-gap"
            style={{
              alignItems: "flex-start",
            }}
          >
            <div className="faq-cards-item">
              <h3 className="s-margin-b s-padding-b">
                {" "}
                What types of signs does{" "}
                <span className="highlighted"> Signarama </span> Brampton, ON
                specialize in?
              </h3>
              <p>
                We are a full-service sign company in Brampton from design to
                manufacture to instal. We specialize in a wide range of custom
                signs for businesses of all sizes. We offer everything from
                impactful outdoor signs like storefront signs, pylon signs,
                banners, and vehicle wraps to sophisticated indoor signage such
                as reception signs, wall graphics, window graphics, 3D letter
                signs, and wayfinding signs. Our expertise also includes modern
                LED signs, classic channel letters, trendy faux neon signs, and
                stylish awnings. We work with businesses of all sizes across
                various industries in Brampton and the surrounding areas.
                Contact us to discuss your specific sign requirements, and
                we&#39;ll provide a tailored solution for you.
              </p>
            </div>
            <div className="faq-cards-item">
              <h3 className="s-margin-b">
                {" "}
                How long does it take to get a sign made in Brampton?
              </h3>
              <p>
                The turnaround time for sign production at{" "}
                <span className="highlighted"> Signarama </span> Brampton varies
                depending on the complexity of the project, the type of sign,
                materials used, and current workload. Simple projects like
                banners or yard signs can often be completed within a few days.
                More intricate projects such as illuminated channel letter signs
                or custom-designed monument signs may take longer. For rush
                orders, we can often expedite the process. We&#39;ll provide you
                with a clear timeline during the initial consultation and keep
                you updated throughout the process. We pride ourselves on
                delivering quality signs in Brampton efficiently and on
                schedule.
              </p>
            </div>
            <div className="faq-cards-item">
              <h3 className="s-margin-b">
                {" "}
                How much do custom signs cost in Brampton?
              </h3>
              <p>
                The cost of custom signs in Brampton varies depending on several
                factors, including the type of sign, size, materials used,
                complexity of design, and installation requirements. At
                <span className="highlighted"> Signarama </span> Brampton, we
                strive to provide affordable signs without compromising quality.
                To get an accurate sign cost estimate, we recommend contacting
                us for a free consultation. We&#39;ll discuss your specific
                needs and provide you with a personalized quote for your custom
                sign project in Brampton.
              </p>
            </div>

            <div className="faq-cards-item">
              <h3 className="s-margin-b">
                {" "}
                Does <span className="highlighted">Signarama </span> Brampton
                offer sign installation services near me?
              </h3>
              <p>
                Yes, <span className="highlighted">Signarama</span> Brampton
                provides professional sign installation services throughout
                Brampton and the surrounding areas, including Mississauga,
                Caledon, Georgetown, and other parts of the Peel Region. We also
                serve as far as Etobicoke and Halton region. Our experienced
                installation team ensures your signs are installed safely,
                securely, and to your exact specifications. We handle all
                aspects of the installation process, from obtaining necessary
                permits to ensuring your sign is perfectly positioned for
                maximum visibility and impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
