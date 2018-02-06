const http = require("http");
const ErrorResource = require("./resources/error");

http.ServerResponse.prototype.sendJSON = function(resource, lang = "en-US") {

  try {

    this.writeHead(statusCode, {
      "Content-Type": "application/json",
      "Content-Language": lang
    });

    this.end(JSON.stringify(resource));
  
  } catch (e) {

    const request = this.request || this.req;
    const status = 500;

    this.writeHead(status, {
      "Content-Type": "application/vnd.error+json",
      "Content-Language": lang
    });
  
    this.end(new ErrorResource(e.message, status, request.originalUrl).toString());
    
  }

};