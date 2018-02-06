const chai = require("chai");
const ErrorResource = require("../resources/error");
const expect = chai.expect;

describe("Error Resource", function() {

  it("should get instantiated properly", function() {
    
    const resource = new ErrorResource("Test error message", 400, "http://google.com?q=haljson-self-property");

    expect(resource.message).to.equal("Test error message");
    expect(resource._links.help).to.not.equal(undefined);
    expect(resource._links.self).to.not.equal(undefined);
    expect(resource._links.self.href).to.equal("http://google.com?q=haljson-self-property");

  });

});