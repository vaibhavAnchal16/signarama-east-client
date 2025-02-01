import Button from "../Button/Button";
import { Infinity } from "../icons";
import parse from "html-react-parser";

export default function BuildingSomething({
  icon = <Infinity />,
  title = "Let's Build",
  target = "_self",
  title2 = "Something",
  subTitle = "Extraordinary Together",
  ctaTitle = `View Our Projects`,
  ctaLink = `/contact-us/`,
  innerClasses = "d-padding-l d-padding-r",
}) {
  return (
    <div className="building-something-outer-space">
      <div className={innerClasses}>
        <div className="d-flex d-flex-wrap d-flex-center">
          <div className="building-outer-space-text">
            <div className="illustration il1">
              <img src="/newimages/circlevector.svg" />
            </div>
            <h1 className="">
              {" "}
              {title} <span>{icon}</span> {title2}
            </h1>
            <h1 className="d-margin-b">{parse(subTitle || "")}</h1>
            <div className="d-flex d-flex-wrap d-flex-center d-column-gap d-margin-b">
              <Button
                type={`outline dark`}
                href={ctaLink}
                target={target}
                //   onClick={e => {
                //     const params = new URLSearchParams(window.location.search)
                //     let url = `/get-demo/`
                //     if (params.size > 0) {
                //       url = `${url}?${params.toString()}`
                //     }
                //     navigate(url)
                //   }}
                //   icon={heroCtaIcon}
              >
                {ctaTitle}
              </Button>
            </div>
            <div className="illustration il2">
              <img src="/newimages/circlevector.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
