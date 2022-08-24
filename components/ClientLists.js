import React from "react";
const ClientLists = ({ title }) => {
  return (
    <section className="about-us">
      <div className="wally-wrapper">
        <div className="about-owner-wrapper">
          {title && (
            <div className="section-heading" style={{ textAlign: "center" }}>
              <h1>
                <span className="highlighted">About </span>Us
              </h1>
            </div>
          )}

          <div className="abt-descp">
            <p className="info-text">
              Some of our Clients include Delta Hotels, Fairmount Hotels, YMCA,
              CBRE, Triovest, SNC Lavalin, Province of Ontario, University
              Health Network, Princess Margaret Hospital, Mizrahi Developments,
              Candarel, Toronto Police Services, Browns Shoes, Lululemon,
              Rockin&apos; Horse Saloon, Starbucks, Sherbourne Health Centre,
              Ontario Nurses Association, Roche Bobois, Bo Concepts, OMERS,
              OACCAC, National Ballet School, Lawson Real Estate, Marriott
              Hotels and hundreds of retail stores throughout the city.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLists;
