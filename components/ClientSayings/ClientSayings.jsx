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
        <div className="star-rating">
          <div className="stars-outer">
            <div
              className="stars-inner"
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
          <h3
            className="s-margin-b"
            style={{
              textAlign: "center",
            }}
          >
            <span class="google-text">
              <span class="g1">G</span>
              <span class="o1">o</span>
              <span class="o2">o</span>
              <span class="g2">g</span>
              <span class="l">l</span>
              <span class="e">e</span>
              <span class="r"> Reviews</span>
            </span>
          </h3>
          <div className="d-flex d-flex-wrap d-column-gap d-row-gap d-flex-center">
            <a
              style={{
                textDecoration: "none",
              }}
              href={`https://www.google.com/search?hl=en-IN&gl=in&q=Signarama+Brampton,+Sign+A+Rama,+289+Rutherford+Rd+S+Unit15,+Brampton,+ON+L6W+3R9,+Canada&ludocid=6132929955006408090&lsig=AB86z5W8WhLSkXAimniua77FJA_Q&hl=en&gl=IN%23lrd=0x882b3e3c79e5657d:0x551c8b4ce882659a,1#lrd=0x882b3e3c79e5657d:0x551c8b4ce882659a,1,,,,`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="ratings d-flex d-flex-wrap d-flex-center">
                <div className="images-stack d-inline-flex">
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
            href={`https://www.google.com/search?hl=en-IN&gl=in&q=Signarama+Brampton,+Sign+A+Rama,+289+Rutherford+Rd+S+Unit15,+Brampton,+ON+L6W+3R9,+Canada&ludocid=6132929955006408090&lsig=AB86z5W8WhLSkXAimniua77FJA_Q&hl=en&gl=IN%23lrd=0x882b3e3c79e5657d:0x551c8b4ce882659a,1#lrd=0x882b3e3c79e5657d:0x551c8b4ce882659a,1,,,,`}
            target="_blank"
          >
            View More Reviews{" "}
          </Button>
        </div>
      </div>
    </section>
  );
}
