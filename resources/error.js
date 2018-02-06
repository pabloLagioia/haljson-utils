const halson = require("halson");
const HalJsonResource = require("./haljson");

const errorDefinitions = {
  "307": {
    "description": "Temporary Redirect",
    "href": "https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.3.8"
  },
  "400": {
    "description": "Bad Request",
    "href": "https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.1"
  },
  "401": {
    "description": "Unauthorized",
    "href": "https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.2"
  },
  "403": {
    "description": "Forbidden",
    "href": "https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.4"
  },
  "404": {
    "description": "Not Found",
    "href": "https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.5"
  },
  "405": {
    "description": "Method Not Allowed",
    "href": "https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.6"
  },
  "500": {
    "description": "Internal Server Error",
    "href": "https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.5.1"
  },
  "501": {
    "description": "Not Implemented",
    "href": "https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.5.2"
  }
};

class ErrorResource extends HalJsonResource {

  constructor(message, statusCode = 500, url) {

    super();

    const errorDefinition = errorDefinitions[statusCode];
    const description = errorDefinition && errorDefinition.description || "Error " + statusCode;
  
    this.message = message || description;

    this.addLink("help", errorDefinition.href);
    this.addLink("self", url);
  
  }

}

module.exports = ErrorResource;