import type { Article } from "@/types/content";

/**
 * Draft. Do not publish until a real author is named and `publishedAt` is set.
 * To publish: set status to "published", set author and publishedAt, and add
 * this article to the array in `src/content/articles/index.ts`.
 */
export const article: Article = {
  slug: "foreign-investment-in-nepal",
  title: "Legal Considerations for Foreign Investment in Nepal",
  excerpt:
    "Approvals, restricted sectors, and the documents that should wait until the route is clear.",
  category: "Investment",
  status: "draft",
  author: null,
  publishedAt: null,
  relatedPracticeSlugs: ["foreign-investment-advisory", "corporate-commercial-law"],
  seo: {
    title: "Foreign Investment in Nepal | Laws & Cause",
    description:
      "An introduction to foreign investment approvals in Nepal, including FITTA, restricted sectors, and repatriation questions.",
  },
  blocks: [
    {
      type: "paragraph",
      text: "Foreign investors are sometimes handed a stack of documents and a date for a signing, with the approval treated as a formality that local staff will 'take care of'. In Nepal the approval is often the transaction. Money that moves before the route is clear is difficult to explain later, to a partner and to a regulator.",
    },
    {
      type: "heading",
      text: "The statute and the authorities",
    },
    {
      type: "paragraph",
      text: "The principal statute is the Foreign Investment and Technology Transfer Act, 2019 (2075). Depending on the size of the investment and the sector, the approving body may be the Department of Industry or the Investment Board of Nepal. Those routes are not interchangeable. A proposal should be matched to the body that actually has the file, using the thresholds in force at the time.",
    },
    {
      type: "heading",
      text: "Sectors that are not simply open",
    },
    {
      type: "paragraph",
      text: "Nepal publishes sectors in which foreign investment is restricted or allowed only on conditions. The list is a government document, and it changes. A business that is ordinary in another country may sit on that list here. The check belongs at the beginning, against the official list, not in a footnote after the joint-venture agreement is signed.",
    },
    {
      type: "heading",
      text: "Repatriation is a separate question",
    },
    {
      type: "paragraph",
      text: "Investors care about taking dividends and sale proceeds out. Foreign exchange and repatriation can involve Nepal Rastra Bank as well as the investment approval. The documents should describe what the investor hopes to repatriate. They cannot, by themselves, compel an authority to permit it. Advice should keep those two ideas apart.",
    },
    {
      type: "list",
      items: [
        "Confirm the sector against the current restricted and regulated lists.",
        "Identify the approving authority for this size and this industry.",
        "Settle the vehicle, the shareholders, and the technology-transfer terms.",
        "Ask the repatriation question before funds are committed.",
        "Only then spend time on a signing ceremony.",
      ],
    },
    {
      type: "note",
      text: "Approval is a decision of the authority, not a product a law firm can guarantee. This note is general information and not a legal opinion on a live proposal.",
    },
  ],
};
