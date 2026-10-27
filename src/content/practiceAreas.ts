import type { PracticeArea } from "@/types/content";

export const practiceAreas: PracticeArea[] = [
  {
    slug: "corporate-commercial-law",
    title: "Corporate & Commercial Law",
    shortTitle: "Corporate & Commercial",
    featured: true,
    summary:
      "Counsel on the formation, governance, and commercial dealings of businesses in Nepal.",
    introduction: [
      "Laws & Cause advises companies, founders, and investors on the legal structure of their affairs in Nepal. The work covers the choice of vehicle, the documents that record ownership and control, and the contracts by which a business buys, sells, and collaborates.",
      "Company incorporation in Nepal is handled through the Office of the Company Registrar under the Companies Act, 2063 (2006). Documentary and capital requirements should be confirmed against the current official guidance before any filing is made. We prepare and review the papers. We do not treat a registration certificate as the end of the advice.",
    ],
    scope: [
      "Advice on company formation and constitutional documents",
      "Shareholder arrangements and board governance",
      "Commercial contracts, including supply, distribution, and services",
      "Support for ordinary corporate decisions and filings",
      "Coordination with tax and local registrations that follow incorporation",
    ],
    matters: [
      "Choosing a structure and recording how founders will own and decide",
      "Reviewing a contract before the business commits to it",
      "Preparing for a change of directors or shareholders",
      "Understanding a document proposed by the other side",
    ],
    approach:
      "We start with the commercial objective, then identify the legal steps that support it. Where a filing is required, we name the authority and the information the client must provide. Processing times and outcomes depend on the facts and on the authority. We do not predict them.",
    relatedSlugs: ["foreign-investment-advisory", "mergers-acquisitions", "employment-labour-law"],
    faqs: [
      {
        question: "Can the firm register a company in Nepal?",
        answer:
          "We advise on the structure and prepare or review the documents a registration requires. Filing is made with the Office of the Company Registrar. The exact requirements should be checked against the current official guidance before submission. Tax registration, including with the Inland Revenue Department, is often a separate step and depends on the business.",
      },
      {
        question: "Do you only act for large companies?",
        answer:
          "No. We act for founders, closely held companies, and established businesses. The right level of documentation depends on the ownership and the risk, not on the size of the letterhead.",
      },
    ],
    seo: {
      title: "Corporate & Commercial Law | Laws & Cause",
      description:
        "Corporate lawyer support in Nepal for company formation, governance, and commercial contracts. Laws & Cause advises from Kathmandu.",
    },
  },
  {
    slug: "civil-litigation",
    title: "Civil Litigation",
    shortTitle: "Civil Litigation",
    featured: true,
    summary:
      "Representation and advice when a civil dispute needs a negotiated end or a court's decision.",
    introduction: [
      "Civil disputes in Nepal are heard, depending on the nature and value of the claim, in the district courts, with appeals to the High Courts and the Supreme Court. Procedure, limitation, and evidence all shape what can usefully be done. We explain that framework before a client spends money on a step that cannot be undone.",
      "Litigation is one tool. A letter, a without-prejudice discussion, or a narrower claim is sometimes the better course. We say which, and why, after reading the papers.",
    ],
    scope: [
      "Assessment of claims and defences before proceedings",
      "Pleadings, evidence, and representation in civil courts",
      "Advice on settlement and on the cost of continuing",
      "Appeals and applications within a pending case",
      "Coordination with related property, contract, or corporate issues",
    ],
    matters: [
      "A contract that the other party has not performed",
      "A claim for money, possession, or an injunction",
      "A dispute that has already reached court",
      "An appeal against a civil judgment",
    ],
    approach:
      "We read the documents and the timeline first. We then set out the realistic procedural options, including the option of not suing. Court lists and results are not ours to promise. Preparation and a clear theory of the case are.",
    relatedSlugs: ["arbitration-dispute-resolution", "property-real-estate-law", "banking-finance"],
    faqs: [
      {
        question: "Will filing a case produce a quick result?",
        answer:
          "No one can honestly promise that. Duration depends on the court, the issues, the evidence, and the conduct of the parties. We can explain the ordinary course of a case of that type and the points at which a settlement can still be discussed.",
      },
      {
        question: "Can you act if the dispute is already in court?",
        answer:
          "Often yes, subject to conflicts and to the state of the record. Send the pleadings and the latest order so we can see what the next deadline actually is.",
      },
    ],
    seo: {
      title: "Civil Litigation in Nepal | Laws & Cause",
      description:
        "Litigation lawyers in Kathmandu for civil claims, court procedure, and settlement. Advice before and during proceedings in Nepal.",
    },
  },
  {
    slug: "criminal-defense",
    title: "Criminal Defense",
    shortTitle: "Criminal Defense",
    featured: true,
    summary:
      "Defence representation for individuals and companies facing investigation or criminal charge in Nepal.",
    introduction: [
      "A criminal investigation is urgent in a way most commercial work is not. Statements, searches, and custody decisions can narrow the case before a charge sheet is filed. Laws & Cause represents clients who need the procedure explained and their position protected from the first contact with the authorities.",
      "Criminal cases in Nepal proceed under the criminal code and the criminal procedure code enacted in 2074 (2017), read with the Constitution of Nepal. We do not recite article numbers in place of advice. The charge, the evidence, and the stage of the case decide what can be done.",
    ],
    scope: [
      "Advice during investigation and before a statement is given",
      "Representation at bail and other interim hearings",
      "Defence after charge, including evidence and legal argument",
      "Advice to companies whose staff or officers are under inquiry",
      "Appeals against conviction or sentence",
    ],
    matters: [
      "A client asked to attend a police office or a department",
      "A business drawn into an allegation about documents or funds",
      "A family seeking to understand a custody or bail position",
      "An appeal from a criminal judgment",
    ],
    approach:
      "We identify the stage of the case, the immediate risk, and the information we still need. We do not coach anyone to mislead an authority. We do insist that a client understand the right to remain silent where it applies, and the consequence of a statement.",
    relatedSlugs: ["civil-litigation", "cyber-technology-law", "banking-finance"],
    faqs: [
      {
        question: "Does contacting the firm mean you will represent me in court?",
        answer:
          "No. An enquiry is not a retainer. If we agree to act, the scope is confirmed separately. Until then, time limits are your responsibility.",
      },
      {
        question: "Can you guarantee an acquittal or bail?",
        answer:
          "No. Outcomes depend on the evidence, the charge, and the court. Anyone who promises a result in a criminal case should be treated with caution.",
      },
    ],
    seo: {
      title: "Criminal Defense Lawyer in Nepal | Laws & Cause",
      description:
        "Criminal defence counsel in Kathmandu for investigations, bail, trial, and appeals under Nepalese criminal procedure.",
    },
  },
  {
    slug: "banking-finance",
    title: "Banking & Finance",
    shortTitle: "Banking & Finance",
    featured: false,
    summary:
      "Advice on lending, security, and the regulatory setting in which banks and borrowers operate in Nepal.",
    introduction: [
      "Banking and finance work sits between the contract and the regulator. Nepal Rastra Bank supervises banks and financial institutions, and the Banks and Financial Institutions Act, 2073 (2017) is a central part of that framework. Security over land, shares, or receivables has its own formalities. A document that ignores them may not do the work the parties think it does.",
      "We advise borrowers, lenders, and investors on the Nepalese law elements of a financing. We do not offer financial-product recommendations, and we do not describe a facility as approved before the institution has said so.",
    ],
    scope: [
      "Review of facility, guarantee, and security documents",
      "Advice on taking and enforcing security in Nepal",
      "Support on regulatory questions arising in a financing",
      "Coordination with foreign-exchange issues that involve Nepal Rastra Bank",
      "Disputes arising from loans and guarantees",
    ],
    matters: [
      "A company borrowing from a bank in Nepal",
      "A parent company asked to guarantee a local facility",
      "Security over land or shares that needs to be understood before signing",
      "A default and the options that follow from the documents",
    ],
    approach:
      "We read the draft against the commercial term sheet and flag the provisions that shift risk. Where a registration or a regulatory consent is required, we identify the question and the authority. We do not invent thresholds that change by circular.",
    relatedSlugs: ["corporate-commercial-law", "foreign-investment-advisory", "civil-litigation"],
    faqs: [
      {
        question: "Can you arrange a loan or a banking licence?",
        answer:
          "We advise on the legal documents and, where relevant, the regulatory path. We do not arrange credit, and we do not suggest that an application to Nepal Rastra Bank will be granted.",
      },
    ],
    seo: {
      title: "Banking & Finance Law in Nepal | Laws & Cause",
      description:
        "Legal advice in Kathmandu on lending, security, and banking regulation in Nepal for borrowers, lenders, and investors.",
    },
  },
  {
    slug: "mergers-acquisitions",
    title: "Mergers & Acquisitions",
    shortTitle: "Mergers & Acquisitions",
    featured: false,
    summary:
      "Support for buyers and sellers on the Nepalese law aspects of acquiring or disposing of a business.",
    introduction: [
      "A transaction is a set of choices about what is being sold, what is being promised, and what happens if the promise is wrong. In Nepal those choices are recorded in share or asset documents, corporate approvals, and sometimes a regulatory notification. Whether a notification is required depends on the current rules and the sector. We check that question. We do not assume a filing from memory of an old threshold.",
      "Laws & Cause acts for buyers, sellers, and shareholders who need the Nepalese law work done carefully, including when another firm is leading the cross-border documents.",
    ],
    scope: [
      "Structuring the Nepalese law side of a share or asset deal",
      "Legal due diligence on corporate, property, and contract records",
      "Drafting and negotiation of transaction documents",
      "Corporate approvals and completion mechanics",
      "Identifying regulatory notifications that need to be confirmed",
    ],
    matters: [
      "A founder selling a controlling stake",
      "A buyer who needs to know what the company actually owns",
      "A joint venture that is becoming a full acquisition",
      "Completion steps at the Office of the Company Registrar and elsewhere",
    ],
    approach:
      "We agree a scope of diligence that matches the price and the risk, then report exceptions in plain language. Negotiation is about the clauses that move money or liability, not about volume.",
    relatedSlugs: [
      "corporate-commercial-law",
      "foreign-investment-advisory",
      "employment-labour-law",
    ],
    faqs: [
      {
        question: "Do you act only on the Nepalese law aspects?",
        answer:
          "Yes. If the transaction is governed in part by another country's law, that part needs counsel admitted there. We coordinate with that counsel rather than pretend to cover it.",
      },
    ],
    seo: {
      title: "Mergers & Acquisitions in Nepal | Laws & Cause",
      description:
        "Nepalese law advice on buying and selling businesses, including diligence, documents, and completion in Kathmandu.",
    },
  },
  {
    slug: "property-real-estate-law",
    title: "Property & Real Estate Law",
    shortTitle: "Property & Real Estate",
    featured: true,
    summary:
      "Advice on ownership, transfer, leasing, and disputes over land and buildings in Nepal.",
    introduction: [
      "Land in Nepal is a record as much as it is a place. The Land Revenue Office, survey documents, and the title history often matter more than a private agreement. The Muluki Civil Code, 2074 (2017) addresses property rights, but a page on a website cannot tell you whether a particular plot can be transferred. That depends on the record, the tenure, and any restriction that applies to the holder.",
      "We advise buyers, sellers, families, and businesses on transactions and on disputes. We do not certify title. We explain what the papers show and what they do not.",
    ],
    scope: [
      "Review of sale, transfer, and lease documents",
      "Guidance on Land Revenue Office and survey records",
      "Advice on partition, inheritance, and co-ownership questions",
      "Property disputes, including possession and boundary issues",
      "Support for businesses acquiring premises in Nepal",
    ],
    matters: [
      "A purchase where the seller's name and the record do not match",
      "A family partition that has never been written down properly",
      "A lease for an office or a project site",
      "A dispute already before a court or a local authority",
    ],
    approach:
      "We ask for the current land certificate, the transfer history, and any court paper before we comment. Where a restriction may apply, including rules affecting particular categories of owner, we identify it as a question to confirm rather than a conclusion.",
    relatedSlugs: ["civil-litigation", "family-law", "foreign-investment-advisory"],
    faqs: [
      {
        question: "Can a foreign national buy land in Nepal?",
        answer:
          "Ownership of land by foreign nationals is tightly restricted. Whether any particular arrangement is lawful depends on the current statute and on the status of the person or company involved. It should be checked against the official position before any money is paid. We do not describe workarounds.",
      },
      {
        question: "Will you confirm that a property is free of dispute?",
        answer:
          "We can review the documents you provide and the searches that are available. A review is not a guarantee that no claim exists. Hidden claims and incomplete records are a known feature of property work.",
      },
    ],
    seo: {
      title: "Property Lawyer in Kathmandu | Laws & Cause",
      description:
        "Property lawyers in Kathmandu for land records, transfers, leases, and property disputes under Nepalese law.",
    },
  },
  {
    slug: "family-law",
    title: "Family Law",
    shortTitle: "Family Law",
    featured: true,
    summary:
      "Discreet advice on marriage, separation, parenting, and the division of family property in Nepal.",
    introduction: [
      "Family matters are legal problems with a private cost. The Muluki Civil Code, 2074 (2017) sets out much of the law on marriage, divorce, partition, and succession in Nepal. The right next step still depends on the documents, the children, and whether a court case has started.",
      "Laws & Cause advises clients who want the position explained calmly and the options set out without theatre. We do not encourage steps taken only to apply pressure.",
    ],
    scope: [
      "Advice on marriage, divorce, and judicial separation",
      "Parenting arrangements and related court applications",
      "Partition of family property and succession questions",
      "Settlement documents that record an agreed outcome",
      "Coordination with property records where land is involved",
    ],
    matters: [
      "A separation that the spouses want to resolve in writing",
      "A dispute over a parent's share in ancestral property",
      "An urgent question about where a child will live",
      "A succession that has stalled because the papers are incomplete",
    ],
    approach:
      "We listen before we characterise the case. We then explain the legal routes, including negotiation, and the information a court would expect to see. We keep the circle of people who know about the matter as small as the work allows.",
    relatedSlugs: ["property-real-estate-law", "civil-litigation"],
    faqs: [
      {
        question: "Can everything be resolved without going to court?",
        answer:
          "Sometimes. An agreement still has to be one the law will recognise, and some changes of status require a formal order. We will tell you which parts can be agreed and which cannot.",
      },
    ],
    seo: {
      title: "Family Law in Nepal | Laws & Cause",
      description:
        "Family law advice in Kathmandu on divorce, parenting, partition, and succession under Nepal's civil code.",
    },
  },
  {
    slug: "intellectual-property-law",
    title: "Intellectual Property Law",
    shortTitle: "Intellectual Property",
    featured: false,
    summary:
      "Protection and enforcement of brands, creative work, and technology in the Nepalese system.",
    introduction: [
      "A name, a design, or a piece of software is not protected merely because it was created. Nepal has a registration system for trade marks and other industrial property, and a separate copyright framework. The names and details of the current statutes should be checked at the time of filing, because this area has been under revision. We advise on the filing that fits the use, and on what registration does not give you.",
      "We act for businesses that trade in Nepal and for rights holders abroad who need a local view. We do not promise that a mark will be accepted.",
    ],
    scope: [
      "Trade mark clearance and filing strategy in Nepal",
      "Advice on copyright ownership and licensing",
      "Review of brand and technology clauses in commercial contracts",
      "Responses to infringement and to unjustified threats",
      "Coordination with foreign counsel on multi-country filings",
    ],
    matters: [
      "A company about to launch a name in the Nepalese market",
      "A creator asked to assign rights without understanding the scope",
      "A business that finds its packaging copied",
      "A licence that needs to work under Nepalese law",
    ],
    approach:
      "We ask how the sign or the work is actually used. Clearance and filing follow from that use. Enforcement advice starts with the evidence, not with a template letter.",
    relatedSlugs: ["corporate-commercial-law", "cyber-technology-law"],
    faqs: [
      {
        question: "If my mark is registered abroad, is it protected in Nepal?",
        answer:
          "Not automatically. Protection in Nepal generally requires attention to the Nepalese register and to the copyright rules that apply here. We can explain the local step. We do not describe a foreign registration as if it were a Nepalese one.",
      },
    ],
    seo: {
      title: "Intellectual Property Law in Nepal | Laws & Cause",
      description:
        "Trade mark, copyright, and brand advice in Kathmandu for businesses trading in Nepal and rights holders abroad.",
    },
  },
  {
    slug: "cyber-technology-law",
    title: "Cyber & Technology Law",
    shortTitle: "Cyber & Technology",
    featured: false,
    summary:
      "Counsel on technology contracts, data questions, and incidents that engage Nepal's electronic-transactions rules.",
    introduction: [
      "Technology work is usually contract work until something goes wrong. When it does, Nepal's Electronic Transactions Act, 2063 (2008) and later rules on electronic records, online conduct, and sector regulation may become relevant. The right statute depends on the facts. We do not treat every website problem as a criminal case, and we do not treat every criminal allegation as a contract dispute.",
      "Laws & Cause advises businesses and individuals on the Nepalese law aspects of technology projects, platforms, and incidents. We do not provide technical forensics.",
    ],
    scope: [
      "Technology, software, and outsourcing contracts",
      "Website, platform, and terms-of-use reviews",
      "Advice when an electronic-transactions issue is alleged",
      "Coordination with criminal defence where an investigation has started",
      "Data and confidentiality terms in commercial relationships",
    ],
    matters: [
      "A company engaging a developer or a foreign vendor",
      "A platform collecting customer information in Nepal",
      "An allegation about unauthorised access or online publication",
      "A contract dispute over source code or service levels",
    ],
    approach:
      "We separate the technical fact, which the client or an expert must establish, from the legal consequence. Where the law is still developing, we say so and advise on the defensible reading.",
    relatedSlugs: ["intellectual-property-law", "criminal-defense", "corporate-commercial-law"],
    faqs: [
      {
        question: "Do you handle cybercrime investigations?",
        answer:
          "We advise and, where instructed, represent clients in matters that may involve electronic records or online conduct. We do not seize devices, hack systems, or conduct private investigations.",
      },
    ],
    seo: {
      title: "Cyber & Technology Law in Nepal | Laws & Cause",
      description:
        "Technology contracts and electronic-transactions advice for businesses in Nepal, from a law firm in Kathmandu.",
    },
  },
  {
    slug: "employment-labour-law",
    title: "Employment & Labour Law",
    shortTitle: "Employment & Labour",
    featured: false,
    summary:
      "Advice to employers and employees on hiring, workplace rules, and the end of employment in Nepal.",
    introduction: [
      "Employment relationships in Nepal are shaped by the Labour Act, 2074 (2017), the labour rules, and the contract actually signed. A handbook that copies another country, or a termination letter written in anger, creates problems that a short conversation would have avoided.",
      "We advise employers who want their documents to match the way the workplace runs, and employees who need to understand a letter they have received. We do not inflame disputes that have a narrower fix.",
    ],
    scope: [
      "Employment contracts and workplace policies",
      "Advice on leave, discipline, and termination procedure",
      "Labour disputes and settlements",
      "Employment terms in an acquisition or restructuring",
      "Foreign staff and the interaction with immigration questions",
    ],
    matters: [
      "Hiring the first employees of a new company",
      "A termination the employer wants to get right",
      "An employee asked to resign or to sign a release",
      "Workforce questions in a sale of the business",
    ],
    approach:
      "We read the contract and the Act together. Procedure matters: a fair reason poorly recorded can become the problem. We set out the steps and the documents, and we distinguish legal risk from a management choice.",
    relatedSlugs: ["corporate-commercial-law", "mergers-acquisitions", "civil-litigation"],
    faqs: [
      {
        question: "Can an employer dismiss staff immediately?",
        answer:
          "Sometimes the law and the contract allow a summary end, and often they do not. The reason, the length of service, and the procedure all matter. Get advice before the letter is sent.",
      },
    ],
    seo: {
      title: "Employment & Labour Law in Nepal | Laws & Cause",
      description:
        "Employment advice in Kathmandu on contracts, workplace rules, and termination under Nepal's Labour Act.",
    },
  },
  {
    slug: "foreign-investment-advisory",
    title: "Foreign Investment Advisory",
    shortTitle: "Foreign Investment",
    featured: true,
    summary:
      "Guidance for foreign investors on market entry, approvals, and the ongoing rules of investing in Nepal.",
    introduction: [
      "Foreign investment in Nepal is a regulated path, not a private contract alone. The Foreign Investment and Technology Transfer Act, 2019 (2075) is the principal statute. Depending on the size and the sector, approval may involve the Department of Industry or the Investment Board of Nepal. Foreign exchange and repatriation questions can involve Nepal Rastra Bank. The government also publishes sectors in which investment is restricted or regulated. That list changes and must be read for the specific proposal.",
      "Laws & Cause helps investors and their counsel understand the Nepalese law steps before money moves. We do not promise approval, incentives, or a timeline.",
    ],
    scope: [
      "Early advice on whether a proposal is in a restricted sector",
      "The choice of investment vehicle and approval route",
      "Technology-transfer and shareholders' arrangements",
      "Repatriation and foreign-exchange questions to be confirmed",
      "Coordination with corporate, employment, and property work",
    ],
    matters: [
      "A company abroad opening a subsidiary in Nepal",
      "A joint venture with a Nepalese partner",
      "An investor asked to sign documents before the approval is clear",
      "A change to an existing investment, including an exit",
    ],
    approach:
      "We map the authorities that are actually relevant to the proposal and the information each one will need. Where a point turns on a current notice or a capital threshold, we check the official source rather than repeat a figure from an old memorandum.",
    relatedSlugs: ["corporate-commercial-law", "mergers-acquisitions", "banking-finance"],
    faqs: [
      {
        question: "Can you obtain foreign-investment approval for us?",
        answer:
          "We prepare and review the legal materials and guide the filing. The decision belongs to the authority. Approval is not a service we can sell as an outcome.",
      },
      {
        question: "Is every sector open to foreign investment?",
        answer:
          "No. Nepal maintains restrictions and conditions that differ by sector. The current list should be checked against the proposal before a commitment is made.",
      },
    ],
    seo: {
      title: "Foreign Investment Lawyer in Nepal | Laws & Cause",
      description:
        "Foreign investment advice in Kathmandu on approvals, market entry, and Nepalese investment rules for international clients.",
    },
  },
  {
    slug: "arbitration-dispute-resolution",
    title: "Arbitration & Dispute Resolution",
    shortTitle: "Arbitration & Disputes",
    featured: false,
    summary:
      "Advice and advocacy where a contract sends a dispute to arbitration, or where a negotiated end is still possible.",
    introduction: [
      "Many commercial contracts choose arbitration, sometimes under Nepal's Arbitration Act, 2055 (1999), and sometimes under rules seated elsewhere. The clause you signed usually matters more than the forum you would now prefer. Setting it aside, or enforcing an award, is technical work. It rewards an early reading of the clause, the notice, and the timetable.",
      "Laws & Cause also advises on negotiation and mediation where the parties can still design the outcome. Not every dispute should become a reference.",
    ],
    scope: [
      "Review of dispute-resolution clauses before a contract is signed",
      "Advice at the start of an arbitration, including jurisdiction",
      "Representation in arbitrations connected with Nepal",
      "Advice on challenging or enforcing an award in Nepal",
      "Negotiated settlements and mediation support",
    ],
    matters: [
      "A notice of arbitration that has just arrived",
      "A draft contract with a clause that names an unclear seat",
      "An award that a party wants to enforce or resist in Nepal",
      "A commercial falling-out that might still settle",
    ],
    approach:
      "We read the clause and the notice before we talk about strategy. We keep a record of deadlines. We tell the client when the seat, the rules, or the language mean that co-counsel is the responsible choice.",
    relatedSlugs: ["civil-litigation", "corporate-commercial-law", "foreign-investment-advisory"],
    faqs: [
      {
        question: "If the contract says arbitration, can we still go to court?",
        answer:
          "Sometimes a court has a role, for example on interim measures or on the enforcement of an award, even where the merits belong in arbitration. Sometimes a court will stay a case filed in breach of the clause. The clause and the relief you need decide the answer.",
      },
    ],
    seo: {
      title: "Arbitration Lawyers in Nepal | Laws & Cause",
      description:
        "Arbitration and dispute-resolution advice in Kathmandu, from the clause to the award, under Nepalese law.",
    },
  },
];

export function getPracticeBySlug(slug: string): PracticeArea | undefined {
  return practiceAreas.find((area) => area.slug === slug);
}

export function getFeaturedPracticeAreas(): PracticeArea[] {
  return practiceAreas.filter((area) => area.featured);
}

export function getRelatedPracticeAreas(area: PracticeArea): PracticeArea[] {
  return area.relatedSlugs
    .map((slug) => getPracticeBySlug(slug))
    .filter((item): item is PracticeArea => item !== undefined);
}
