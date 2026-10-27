export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "note"; text: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  status: "draft" | "published";
  /** A real person's name, or the firm name. Required before publication. */
  author: string | null;
  /** ISO date YYYY-MM-DD. Required before publication. */
  publishedAt: string | null;
  relatedPracticeSlugs: string[];
  seo: { title: string; description: string };
  blocks: ArticleBlock[];
};

export type PracticeArea = {
  slug: string;
  title: string;
  shortTitle: string;
  featured: boolean;
  summary: string;
  introduction: string[];
  scope: string[];
  matters: string[];
  approach: string;
  relatedSlugs: string[];
  faqs: { question: string; answer: string }[];
  seo: { title: string; description: string };
};

export type Lawyer = {
  slug: string;
  name: string;
  position: string;
  photo?: { src: string; width: number; height: number; alt: string };
  biography: string;
  education: string[];
  focus: string[];
  qualifications: string[];
  linkedin?: string;
};

export type BreadcrumbItem = {
  label: string;
  href?: string;
};
