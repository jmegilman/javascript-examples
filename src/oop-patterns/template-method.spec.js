const { BinaryKnower, BinaryOblivious } = require("./template-method");

const wish = require("wish");
describe("BinaryKnower", function () {
  it("logs a binary number", function () {
    const binaryKnower = new BinaryKnower();
    wish(parseInt(binaryKnower.log(10)) === 2);
  });
});
describe("BinaryOblivious", function () {
  it("logs a base 10 number", function () {
    const binaryOblivious = new BinaryOblivious();
    wish(binaryOblivious.log(10) === 10);
  });
});
