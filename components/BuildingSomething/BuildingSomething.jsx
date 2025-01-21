import Button from "../Button/Button";
import { Infinity } from "../icons";

export default function BuildingSomething() {
  return (
    <div className="building-something-outer-space">
      <div className="d-padding-l d-padding-r">
        <div className="d-flex d-flex-wrap d-flex-center">
          <div className="building-outer-space-text">
            <div className="illustration il1">
              <img src="/newimages/circlevector.svg" />
            </div>
            <h1 className="">
              {" "}
              Let's Build{" "}
              <span>
                <Infinity />{" "}
              </span>{" "}
              Something
            </h1>
            <h1 className="d-margin-b"> Extraordinary Together</h1>

            <div className="d-flex d-flex-wrap d-flex-center d-column-gap d-margin-b">
              <Button
                type={`outline`}
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
                View Our Projects
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
