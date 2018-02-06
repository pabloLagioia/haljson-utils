const halson = require("halson");

class HalJsonResource extends halson.Resource {

  constructor(data) {
    super(data);
  }

  toString() {
    return JSON.stringify(this);
  }

}

module.exports = HalJsonResource;