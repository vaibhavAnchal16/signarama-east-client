import { Layout, LazyImage, MapIframe } from "../components";
import ProjectsCompleted from "../components/Hero/ProjectCompleted";

const ContactUs = () => {
  return (
    <>
      <section className="sign-blogs-search-wrapper">
        <section className="sign-blogs-search-inner">
          <div className="section-heading">
            <h1 style={{ textAlign: "center", maxWidth: "100%" }}>
              Contact <span className="highlighted">Signarama Toronto </span>
            </h1>
            {/* <p>
              Some of our Clients include Delta Hotels, Fairmount Hotels, YMCA,
              CBRE, Triovest, SNC Lavalin and list goes on...
            </p> */}
          </div>
        </section>
      </section>
      <section className="help-section-wrapper">
        <div className="help-section-inner">
          <div className="help-section-box">
            <div className="help-context">
              <h1>We are Ready</h1>
              <p className="intro">
                We have a talented team of experienced signage consultants who
                can offer expert advice on the kind of sign or promotion that
                would best suit your requirements.
              </p>
              <p className="offc">
                Office Address :{" "}
                <span>
                  {" "}
                  Signarama Toronto, 873 Bay St. Toronto, ONTARIO M5S 3K6{" "}
                </span>
              </p>
              <p className="eml">
                Write us at :{" "}
                <span className="highlighted">
                  <a href="mailto:info@signarama-toronto.ca">
                    {" "}
                    info@signarama-toronto.ca{" "}
                  </a>
                </span>
              </p>
              <p className="phne">
                Call at :{" "}
                <span className="highlighted">
                  {" "}
                  <a href="tel:416.922.7446"> 416.922.7446 </a>{" "}
                </span>
              </p>
            </div>
            <div className="help-image">
              <LazyImage src="https://signarama-toronto.ca/wp-content/uploads/2018/03/canada-min.png" />
            </div>
          </div>
        </div>
      </section>
      <section className="mapframewrapper">
        <MapIframe />
        <ProjectsCompleted className="about-page contact-page" />
      </section>
    </>
  );
};
export default ContactUs;

ContactUs.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
