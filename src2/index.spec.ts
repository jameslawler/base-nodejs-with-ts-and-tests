import { example } from "./index";

describe("Main Program", () => {
  describe("when calling example function", () => {
    it("should return input", () => {
      const result = example("test input");
      expect(result).toBe("test input");
    });
  });
});
