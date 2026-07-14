/**
 * All site copy in one place — sourced from the BeeBags brand book.
 * Voice: direct, numeric, unhedged. Lead with the failure of current packaging.
 * No invented numbers, testimonials, or claims. Circularity is "designed to
 * return" / "built for circularity" — never "100%" or "zero waste".
 */

export const site = {
  name: "BeeBags",
  tagline: "Made to return.",
  email: "hello@beebags.com",
  social: {
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
  },
} as const;

export const nav = [
  { label: "The problem", href: "/#problem" },
  { label: "The solution", href: "/#solution" },
  { label: "The loop", href: "/#loop" },
  { label: "Proof", href: "/#performance" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
] as const;

export const hero = {
  tagline: "Made to return.",
  subhead:
    "Snack packaging made from beeswax and plant fibers — it preserves freshness, reseals naturally, and returns to be remade into new packaging.",
  cta: { label: "Request a pilot", href: "/#contact" },
} as const;

export const problem = {
  eyebrow: "The problem",
  title: "Packaging built to be thrown away",
  paragraphs: [
    "Billions of plastic snack bags become landfill waste every year because curbside recycling can't process them.",
    "The alternatives fall short: compostable bags don't preserve freshness, reusable containers are bulky, and conventional snack packaging assumes a single use and nothing after it.",
  ],
  // Regulatory context — real figures from the brand doc.
  whyNow: {
    label: "Why now",
    text: "Flexible plastic now carries steep EPR penalties — roughly $0.34 per pound in Oregon against $0.06 for paper — with California enforcement beginning January 2027. Returnable packaging is a compliance hedge, not only an environmental one.",
  },
} as const;

// The brand promise — used as the single pull-quote on the homepage.
export const promise =
  "Packaging that performs like plastic, proves its impact with data, and is designed to come back.";

export const solution = {
  eyebrow: "The solution",
  title: "BeeBags",
  body: "BeeBags is made from beeswax and plant fibers. It reseals naturally, resists air and moisture to keep food fresh, and runs on the equipment manufacturers already have.",
  // The four messaging pillars from the brand book.
  pillars: [
    {
      title: "No trade-off",
      text: "Seal integrity, shelf life, and barrier performance designed to match plastic. It runs on existing lines. Consumers change zero habits.",
    },
    {
      title: "A loop, not a line",
      text: "The shape of the system is the problem, not the material. BeeBags is designed from the start to return rather than disappear.",
    },
    {
      title: "Prove it",
      text: "We publish return rates, diversion data, and lifecycle measurements — with the methodology, and with what we haven't measured yet.",
    },
    {
      title: "Quietly better",
      text: "The bag feels normal. No guilt appeals, no lecture. Brands adopt it without having to talk about it.",
    },
  ],
} as const;

export const loop = {
  eyebrow: "The loop",
  title: "A loop, not a line",
  intro:
    "One material, three lives: packaged on the shelf, reused or returned, then remade into new packaging.",
  stages: [
    { label: "Snack", text: "Packaged on the shelf like any other bag." },
    { label: "Reseal", text: "The beeswax coating reseals to keep food fresh." },
    { label: "Reuse", text: "Kept as food storage after the snack is gone." },
    { label: "Return", text: "Flattened and sent back by prepaid mailer or collection bin." },
    { label: "Recycle", text: "Sanitized and broken down to raw material." },
    { label: "Repeat", text: "Remade into new BeeBags — the loop closes." },
  ],
} as const;

export const performance = {
  eyebrow: "How it performs",
  title: "No trade-off — and we'll show the work",
  intro:
    "What we're designing for, and where the testing stands. Nothing here is proven at scale yet; we'll publish results as they come in.",
  rows: [
    {
      dimension: "Freshness",
      target:
        "Moisture- and oxygen-resistant barrier from the beeswax coating and layered plant-fiber structure, designed to be comparable to current snack packaging.",
      status: "Lab shelf-life testing planned",
    },
    {
      dimension: "Heat tolerance",
      target:
        "Pure beeswax softens near 145°F. A proprietary beeswax, plant-fiber, and natural-resin blend is designed for added durability and heat tolerance while staying flexible.",
      status: "Supply-chain / summer-shipping testing planned",
    },
    {
      dimension: "Food safety",
      target:
        "Beeswax has a long history of safe food preservation. Materials are intended to meet FDA food-contact standards before market entry.",
      status: "Compliance required before launch",
    },
    {
      dimension: "Line compatibility",
      target:
        "Designed to run on manufacturers' existing packaging equipment, with no line retooling required.",
      status: "Pilot validation planned",
    },
    {
      dimension: "Cost",
      target:
        "A premium over plastic at first, falling as production scales. Reuse and recovery mean fewer bags bought over time, improving total cost of ownership.",
      status: "Modeled, not yet deployment-proven",
    },
  ],
} as const;

export const transparency = {
  eyebrow: "Radical transparency",
  title: "What we haven't solved yet",
  paragraphs: [
    "Our biggest risk is scaling production while staying cost-competitive with plastic. That's the hard part, and we're not going to pretend otherwise.",
    "Lab and shelf-life testing are planned, not complete. The return loop is proven by design, not yet by deployment data. As pilots run, we'll publish the numbers — including the disappointing ones.",
  ],
} as const;

export const contact = {
  eyebrow: "Contact",
  title: "Talk to us",
  body: "Procurement, sustainability, or a pilot program — tell us what you're packaging and we'll respond.",
} as const;

// ---- Routes ----

export const about = {
  mission: {
    eyebrow: "Mission",
    text: "Eliminate single-use plastic from food packaging without requiring behavioral changes from consumers or performance compromises for manufacturers.",
  },
  vision: {
    eyebrow: "Vision",
    // The single pull-quote on the About page.
    text: "A food system in which packaging is a loop, not a line — where the default bag on every shelf is one that comes back, and no one has to think about it.",
  },
  values: {
    eyebrow: "Values",
    title: "How we work",
    items: [
      {
        name: "Radically transparent",
        text: "We lead with honesty. By sharing our processes, progress, and hurdles openly, we build the trust needed to change how industries approach waste.",
      },
      {
        name: "Intentional innovation",
        text: "We solve for single-use plastic specifically — driven by curiosity and a refusal to accept the status quo.",
      },
      {
        name: 'The power of "we"',
        text: "Communities and institutional partners turn individual intentions into collective change.",
      },
      {
        name: "Relentless stewardship",
        text: "Long-term thinking guides decisions toward a waste-free future.",
      },
      {
        name: "Action-oriented accountability",
        text: "Impact is a measurable promise, not a marketing tagline.",
      },
    ],
  },
  model: {
    eyebrow: "Business model",
    title: "Still being decided",
    text: "How BeeBags reaches manufacturers is an open question. We're weighing three paths and haven't committed:",
    options: [
      "Sell BeeBags directly to food manufacturers and recover returned bags for recycling.",
      "License the material technology to packaging manufacturers.",
      "A dual approach — direct-to-consumer reusable bags alongside B2B manufacturer partnerships.",
    ],
  },
} as const;

export const faq = {
  eyebrow: "FAQ",
  title: "Questions from procurement",
  items: [
    {
      q: "What temperature can BeeBags handle?",
      a: "Pure beeswax softens around 145°F. BeeBags uses a proprietary blend of beeswax, plant fibers, and natural resins for added durability and heat tolerance while staying flexible. Environmental testing for supply-chain conditions, including summer shipping, is planned.",
    },
    {
      q: "Will it keep food as fresh as plastic?",
      a: "The beeswax coating creates a moisture- and oxygen-resistant barrier, and the layered plant-fiber structure adds protection designed to be comparable to current snack packaging. Laboratory shelf-life testing for commercial storage is planned.",
    },
    {
      q: "Is it food-safe?",
      a: "Beeswax has a long history of safe food preservation. All materials are intended to meet FDA food-contact standards before market entry.",
    },
    {
      q: "How does it compare to plastic on cost?",
      a: "Initial pricing is above conventional plastic. As production scales, material costs fall — and because bags are reused and recovered, manufacturers buy fewer over time, improving total cost of ownership despite the per-unit premium.",
    },
    {
      q: "What actually happens to a returned bag?",
      a: "Returned bags aren't simply washed and reused. They're collected, sanitized, broken down into raw material components, and manufactured into entirely new BeeBags — maintaining food safety while closing the loop.",
    },
    {
      q: "Why would a manufacturer switch?",
      a: "No competitor has adapted beeswax packaging to industrial-scale snack production with built-in return-and-recycling infrastructure. The switch requires no line retooling, no performance penalty, and no change in consumer habits — and it hedges against tightening EPR regulation.",
    },
    {
      q: "What about bee allergies?",
      a: "Bee-venom allergies differ from beeswax sensitivities. Food-grade beeswax contains no bee venom and is generally safe. Full ingredient disclosure and appropriate labeling are required for consumers with sensitivities.",
    },
  ],
} as const;
