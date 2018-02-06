const chai = require("chai");
const HalJsonResource = require("../resources/haljson");
const expect = chai.expect;

describe("Json Resource", () => {

  it("should add links and embedded", () => {
    
    const resource = new HalJsonResource();
    
    resource.addLink("googleHomePage", "http://google.com");
    resource.addEmbed("resource", { name: "test"});
    
    expect(resource._links).to.not.equal(undefined);
    expect(resource._embedded).to.not.equal(undefined);
    
  });
  
  it("should be converted to string", () => {
    
    const resource = new HalJsonResource();
    
    resource.addLink("googleHomePage", "http://google.com");
    resource.addEmbed("resource", { name: "test"});
    resource.name = "Test";

    const json = resource.toString();

    expect(json).to.be.an("string");

  });

});