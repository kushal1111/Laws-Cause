import type { Article } from "@/types/content";

/**
 * Draft. Do not publish until a real author is named and `publishedAt` is set.
 * To publish: set status to "published", set author and publishedAt, and add
 * this article to the array in `src/content/articles/index.ts`.
 */
export const article: Article = {
  slug: "company-registration-in-nepal",
  title: "Understanding Company Registration in Nepal",
  excerpt:
    "What founders and foreign sponsors should understand before they treat incorporation as a form to be filed.",
  category: "Corporate",
  status: "draft",
  author: null,
  publishedAt: null,
  relatedPracticeSlugs: ["corporate-commercial-law", "foreign-investment-advisory"],
  seo: {
    title: "Company Registration in Nepal | Laws & Cause",
    description:
      "A practical introduction to company registration in Nepal, the Office of the Company Registrar, and the questions to settle first.",
  },
  blocks: [
    {
      type: "paragraph",
      text: "People often ask a lawyer to 'register a company' as if the task were a single form. In Nepal the form matters, but it records decisions that should already have been made: who owns the company, who can bind it, what it is for, and whether a foreign investor needs an approval before the shares are issued.",
    },
    {
      type: "heading",
      text: "Where registration happens",
    },
    {
      type: "paragraph",
      text: "Private companies are incorporated through the Office of the Company Registrar. The governing statute is the Companies Act, 2063 (2006). The registrar's checklist of documents and any capital requirement should be read in its current form. Figures copied from an old brochure are a common source of delay.",
    },
    {
      type: "heading",
      text: "Decisions to make before the filing",
    },
    {
      type: "list",
      items: [
        "The name, checked for availability rather than assumed.",
        "The shareholders and the proportion in which they will own the company.",
        "The directors, and whether any of them is restricted from acting.",
        "The objects and the registered office.",
        "If a shareholder is foreign, whether an investment approval is required first.",
      ],
    },
    {
      type: "paragraph",
      text: "The memorandum and articles are the constitution. They are also the document people later wish they had read. A short shareholders' agreement can sit beside them when the real bargain — vesting, exits, reserved matters — will not fit comfortably in the articles.",
    },
    {
      type: "heading",
      text: "What the certificate does not finish",
    },
    {
      type: "paragraph",
      text: "A registration certificate is the start of the company's public life, not the end of the compliance. Tax registration with the Inland Revenue Department, local registrations, and any sector licence are separate questions. Not every company must register for VAT. The threshold and the nature of the business decide that, and the threshold should be confirmed rather than remembered.",
    },
    {
      type: "note",
      text: "This article is general information about a common process. It is not advice on a particular incorporation, and it does not create a lawyer-client relationship.",
    },
  ],
};
