import React from "react";
const MapIframe = () => {
  return (
    <iframe
      className="map-iframe"
      loading="lazy"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d46163.15768340134!2d-79.7258955!3d43.6856603!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3e3c79e5657d%3A0x551c8b4ce882659a!2sSignarama%20Brampton!5e0!3m2!1sen!2sin!4v1737996285625!5m2!1sen!2sin"
      width="100%"
      height="400"
      frameBorder="0"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default MapIframe;
