import mockArticleSlice, { mockLeadOneAndTwoSlice, mockLeadOneFullWidthSlice, mockLeadOneAndOneSlice } from "../mock-slice";

describe("The Mock EditionSlice", () => {
  it("returns the minimum articleSlice requirements", () => {
    const articleSlice = mockArticleSlice(1);
    expect(articleSlice.items[0]).toHaveProperty("article");
    expect(articleSlice.items[0]).toHaveProperty("headline");
    expect(articleSlice.items[0]).toHaveProperty("leadAsset");
  });

  it("returns LeadOneFullWidthSlice", () => {
    const articleSlice = mockLeadOneFullWidthSlice();
    expect(articleSlice.items.length).toBe(1);
    expect(articleSlice.lead).toBeDefined();
  });

  it("returns LeadOneAndOneSlice", () => {
    const articleSlice = mockLeadOneAndOneSlice();
    expect(articleSlice.items.length).toBe(2);
    expect(articleSlice.lead).toBeDefined();
    expect(articleSlice.support).toBeDefined();
  });

  it("returns LeadOneAndTwoSlice", () => {
    const articleSlice = mockLeadOneAndTwoSlice();
    expect(articleSlice.items.length).toBe(3);
    expect(articleSlice.lead).toBeDefined();
    expect(articleSlice.support1).toBeDefined();
    expect(articleSlice.support2).toBeDefined();
  });
});
