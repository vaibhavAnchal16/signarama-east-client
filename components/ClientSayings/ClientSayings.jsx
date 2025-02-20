import { ClientSaysIcon } from "../icons";

export default function ClientSayings({
  paddingClasses = "d-padding-l d-padding-r d-padding-b",
}) {
  return (
    <section className="services-outer-space">
      <div className={paddingClasses}>
        <div className="services-outer-space-text">
          <h1 className="d-margin-b">
            Our Signs Speak for Themselves, But Our{" "}
            <span className="highlighted"> Clients </span> Do Too.{" "}
            <ClientSaysIcon />
          </h1>
          <h2 className="d-margin-b">
            See how Signarama Brampton has helped businesses like yours achieve
            real results with impactful signage.
          </h2>
          <div className="d-flex d-flex-wrap d-column-gap d-row-gap d-flex-center">
            <div className="ratings d-flex d-flex-wrap d-flex-center">
              <img
                style={{
                  maxWidth: "768px",
                }}
                src="/newimages/ratings.png"
              />
            </div>
          </div>
        </div>
        <div className="faq-cards d-margin-t">
          <div className="d-flex d-flex-wrap d-flex-between d-column-gap">
            <div className="faq-cards-item testimonial-item d-flex d-column-gap d-align-start">
              <div>
                <img src="/newimages/testimonial1.png" />
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                  consectetur a cum, soluta laborum laudantium beatae rerum
                  perferendis temporibus eius ad tempore, iusto voluptate esse!
                  Delectus cupiditate maxime minima. Temporibus.
                </p>
                <span className="d-margin-t">
                  {" "}
                  Emily J. Smith, Smith & Co.{" "}
                </span>
              </div>
            </div>
            <div className="faq-cards-item testimonial-item d-flex d-column-gap d-align-start">
              <div>
                <img src="/newimages/testimonial2.png" />
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                  consectetur a cum, soluta laborum laudantium beatae rerum
                  perferendis temporibus eius ad tempore, iusto voluptate esse!
                  Delectus cupiditate maxime minima. Temporibus.
                </p>
                <span className="d-margin-t">
                  {" "}
                  Asham Cheema, Prudent Analytics{" "}
                </span>
              </div>
            </div>
            <div className="faq-cards-item testimonial-item d-flex d-column-gap d-align-start">
              <div>
                <img src="/newimages/testimonial3.png" />
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                  consectetur a cum, soluta laborum laudantium beatae rerum
                  perferendis temporibus eius ad tempore, iusto voluptate esse!
                  Delectus cupiditate maxime minima. Temporibus.
                </p>
                <span className="d-margin-t"> John Doe, Remax </span>
              </div>
            </div>
            <div className="faq-cards-item testimonial-item d-flex d-column-gap d-align-start">
              <div>
                <img src="/newimages/testimonial4.png" />
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                  consectetur a cum, soluta laborum laudantium beatae rerum
                  perferendis temporibus eius ad tempore, iusto voluptate esse!
                  Delectus cupiditate maxime minima. Temporibus.
                </p>
                <span className="d-margin-t">
                  {" "}
                  Emily J. Smith, Smith & Co.{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
