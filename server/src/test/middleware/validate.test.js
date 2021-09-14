const validate = require("../../middleware/validate");

describe("Middleware - Validate", () => {
  it("should be instance of function", () => {
    expect(validate).toBeInstanceOf(Function);
  });
});
