const http = require("http");
const ErrorResource = require("./resources/error");

http.ServerResponse.prototype.sendHalJsonResource = function(resource, lang = "en-US") {

  try {

    this.writeHead(statusCode, {
      "Content-Type": "application/hal+json",
      "Content-Language": lang
    });

    this.end(resource.toString());
  
  } catch (e) {

    const request = this.request || this.req;

    this.writeHead(statusCode, {
      "Content-Type": "application/vnd.error+json",
      "Content-Language": lang
    });
  
    this.end(new ErrorResource(e.message, 500, request.originalUrl).toString());
    
  }

};