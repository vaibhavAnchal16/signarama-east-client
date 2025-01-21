import { ClientSaysIcon } from "../icons";

export default function ClientSayings() {
  return (
    <section className="services-outer-space">
      <div className="d-padding-l d-padding-r d-padding-b">
        <div className="services-outer-space-text">
          <h1 className="d-margin-b">
            What Our Clients Say <ClientSaysIcon />
          </h1>
          <p className="d-margin-b">
            lorem Ipsum is simply dummy text of the printing and typesetting
            lorem Ipsum is simply dummy text of the printing and typesetting
            lorem Ipsum is simply dummy text of the printing and typesetting.
          </p>
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
                <span> Emily J. Smith, Smith & Co. </span>
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
                <span> Asham Cheema, Prudent Analytics </span>
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
                <span> John Doe, Remax </span>
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
                <span> Emily J. Smith, Smith & Co. </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
