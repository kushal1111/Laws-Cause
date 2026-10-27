import type { Article } from "@/types/content";

/**
 * Draft. Do not publish until a real author is named and `publishedAt` is set.
 * To publish: set status to "published", set author and publishedAt, and add
 * this article to the array in `src/content/articles/index.ts`.
 */
export const article: Article = {
  slug: "property-disputes-in-nepal",
  title: "An Introduction to Property Disputes in Nepal",
  excerpt:
    "Why land disputes in Nepal turn on the record, the family history, and the order in which steps are taken.",
  category: "Property",
  status: "draft",
  author: null,
  publishedAt: null,
  relatedPracticeSlugs: ["property-real-estate-law", "civil-litigation", "family-law"],
  seo: {
    title: "Property Disputes in Nepal | Laws & Cause",
    description:
      "An introduction to property disputes in Nepal, including land records, possession, and the questions to ask before filing a case.",
  },
  blocks: [
    {
      type: "paragraph",
      text: "A property dispute in Nepal rarely begins with a clean question of who paid whom. It begins with a file: a land certificate, a survey map, a transfer deed, and often a family arrangement that was never written down. The Muluki Civil Code, 2074 (2017) matters. So does the record at the Land Revenue Office. Reading one without the other is how people sue the wrong person.",
    },
    {
      type: "heading",
      text: "Start with the paper, not the story",
    },
    {
      type: "paragraph",
      text: "Clients usually arrive with a story of a promise. The useful first hour is spent putting the story next to the documents. Whose name is on the certificate? Does the area in the deed match the land being used? Has a partition been declared but never recorded? Is there already a case, and if so in which court?",
    },
    {
      type: "heading",
      text: "Possession and title are not the same",
    },
    {
      type: "paragraph",
      text: "Someone can be in occupation without being the owner, and an owner can be out of possession. The remedy depends on which of those is true, and on how long it has been true. Limitation periods exist and they are unforgiving. This article will not state a number of years, because the period depends on the claim. If a deadline might already be running, that is a reason to take advice immediately rather than to keep negotiating informally.",
    },
    {
      type: "list",
      items: [
        "Collect the land certificate, tax receipts, and any survey map.",
        "Write down the chain of transfers as the family understands it.",
        "Find every court paper, including cases that were 'left'.",
        "Do not sign a private settlement that the land record cannot later reflect.",
        "Ask whether a Land Revenue Office step is required as well as a court order.",
      ],
    },
    {
      type: "heading",
      text: "Family property needs a different patience",
    },
    {
      type: "paragraph",
      text: "Many disputes that look like neighbour cases are partition or succession cases. The people who must be included are defined by the family relationship, not by who is loudest at the meeting. Leaving someone out can make an order fragile. That is a reason to map the family before mapping the boundary.",
    },
    {
      type: "note",
      text: "Nothing here is a view on a particular plot or family. Property advice depends on the record. Reading this page does not stop a limitation period and does not make you a client.",
    },
  ],
};
