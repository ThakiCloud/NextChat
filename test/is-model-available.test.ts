import { isModelAvailableInServer } from "../app/utils/model";

describe("isModelAvailableInServer", () => {
  test("returns true when model is available", () => {
    const customModels = "-all,gpt-4@openai";
    expect(isModelAvailableInServer(customModels, "gpt-4", "openai")).toBe(true);
  });

  test("returns false when model is not available", () => {
    const customModels = "-all";
    expect(isModelAvailableInServer(customModels, "gpt-4", "openai")).toBe(false);
  });
});
