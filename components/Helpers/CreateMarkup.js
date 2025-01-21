import sanitizeHtml from "sanitize-html";

export const createMarkup = (html, length = 200) => {
  var regex = /(<([^>]+)>)/gi;
  if (html.replace(regex, "").length > length) {
    return {
      __html: sanitizeHtml(`${html?.substr(0, length)}....`, {
        allowedTags: false,
        allowedAttributes: false,
        exclusiveFilter: function (frame) {
          return frame.tag === "p" && !frame.text.trim();
        },
      }),
    };
  } else {
    return {
      __html: sanitizeHtml(html, {
        allowedTags: false,
        allowedAttributes: false,
        exclusiveFilter: function (frame) {
          return frame.tag === "p" && !frame.text.trim();
        },
      }),
    };
  }
};
