import Image from "next/image";
import { ClientSaysIcon } from "../icons";
import Link from "next/link";
import Button from "../Button/Button";

export default function ClientSayings({
  paddingClasses = "d-padding-l d-padding-r d-padding-b",
  reviews,
}) {
  const Stars = () => {
    return (
      <div>
        <div class="star-rating">
          <div class="stars-outer">
            <div
              class="stars-inner"
              style={{
                width: `${(reviews?.totalRating / 5) * 100}%`,
              }}
            ></div>
          </div>
        </div>
        <p>
          {reviews?.totalRating}/5 Based on {reviews?.reviewsCount}+ reviews
        </p>
      </div>
    );
  };
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
            <a
              style={{
                textDecoration: "none",
              }}
              href={reviews?.reviewLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="ratings d-flex d-flex-wrap d-flex-center">
                <div className="images-stack">
                  {reviews?.reviews?.map(({ profile_photo_url }, index) => (
                    <Image
                      key={index}
                      src={`${profile_photo_url}`}
                      width={100}
                      height={100}
                    />
                  ))}
                </div>
                <div className="ratings-text">
                  <Stars />
                </div>
                {/* <img
                style={{
                  maxWidth: "768px",
                }}
                src="/newimages/ratings.png"
              /> */}
              </div>
            </a>
          </div>
        </div>
        <div className="faq-cards d-margin-t">
          <div className="d-flex d-flex-wrap d-flex-between d-column-gap">
            {reviews?.reviews?.map(
              ({ profile_photo_url, author_name, text }, index) => (
                <div
                  className="faq-cards-item testimonial-item d-flex d-column-gap d-align-start"
                  key={index}
                >
                  <div>
                    <Image
                      src={`${profile_photo_url}`}
                      width={100}
                      height={100}
                    />
                    {/* <img src={`${loadImage({ src: profile_photo_url })}`} /> */}
                  </div>
                  <div>
                    <p>{text}</p>
                    <span className="d-margin-t"> - {author_name} </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div className="d-flex d-flex-center d-margin-t">
          <Button
            type={`outline lite`}
            href={reviews?.reviewLink}
            target="_blank"
          >
            View More Reviews{" "}
          </Button>
        </div>
      </div>
    </section>
  );
}
