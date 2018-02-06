const ErrorResource = require("./resources/error");
const http = require("http");

http.ServerResponse.prototype.sendError = function(message, statusCode = 500, lang = "en-US") {

  const request = this.request || this.req;

  this.writeHead(statusCode, {
    "Content-Type": "application/vnd.error+json",
    "Content-Language": lang
  });

  this.end(new ErrorResource(message, statusCode, request.originalUrl).toString());
  
};