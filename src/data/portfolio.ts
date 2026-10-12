export const identity = {
  name: "Fayis Kanthapuram",
  email: "fayiskanthapuram@gmail.com",
  github: "https://github.com/FayisKanthapuram",
  linkedin: "https://www.linkedin.com/in/fayis-kanthapuram/",
  twitter: "https://x.com/FKanthapuram",
  url: "https://fayis-kanthapuram.vercel.app",
};

export const projects = [
  {
    id: "mobiverse",
    number: "01",
    category: "FULL-STACK COMMERCE",
    name: "Mobiverse",
    headline: "More than a storefront.",
    description:
      "A mobile shopping application that connects product discovery, accounts, carts, and payments into one complete buying journey.",
    stack: ["Node.js", "Express", "MongoDB", "EJS", "Razorpay"],
    github: `${identity.github}/Mobiverse`,
    live: undefined,
    detail: "Behind the checkout",
    problem:
      "A purchase is more than a payment button. The cart, product stock, order record, and payment result all need to agree.",
    implementation:
      "I built server-rendered EJS views on a modular Express backend, with session-based authentication, Google OAuth, product variants, coupons, and an admin area.",
    decision:
      "The payment service verifies Razorpay signatures on the server and uses a MongoDB transaction when finalizing the order and updating stock. Controllers, services, and repositories separate the request flow from business logic.",
    features: [
      "Product search & filtering",
      "Google OAuth & sessions",
      "Cart, coupons & checkout",
      "Payment verification & order management",
    ],
  },
  {
    id: "diamond",
    number: "02",
    category: "BUSINESS SOFTWARE",
    name: "Diamond Pappadam",
    headline: "From daily work to clear records.",
    description:
      "Production and payroll software for a family-owned pappadam business. A shared workflow for employees to record work and an admin to review it.",
    stack: ["React", "Vite", "Express", "MongoDB", "JWT"],
    github: `${identity.github}/Diamond-Pappadam`,
    live: "https://diamond-pappadam.vercel.app",
    detail: "Inside the workflow",
    problem:
      "Production entries, approvals, and salary payments need a shared record, with different responsibilities for employees and the business owner.",
    implementation:
      "I built separate React interfaces for admin and employee roles, backed by an Express API with JWT authentication, production approvals, reports, and a salary ledger.",
    decision:
      "Production entries store their rate and calculated amount. The salary ledger separates earnings from payments, and only approved production contributes to earned salary. Role and ownership checks protect employee records.",
    features: [
      "Employee production entries",
      "Admin approval & rejection",
      "Recorded production rates",
      "Salary balances & payment history",
    ],
  },
  {
    id: "dailyos",
    number: "03",
    category: "PRODUCTIVITY APPLICATION",
    name: "DailyOS",
    headline: "Make room for a little progress.",
    description:
      "A task and recurring habit planner, bringing one-off tasks, daily routines, and calendar planning into one workspace.",
    stack: ["React", "TypeScript", "NestJS", "Prisma", "PostgreSQL"],
    github: `${identity.github}/DailyOS`,
    live: "https://daily-os-xi-ochre.vercel.app",
    detail: "The logic behind a habit",
    problem:
      "A recurring habit is not just a task that repeats. Changing a schedule should not rewrite the history of what someone has already done.",
    implementation:
      "The application combines a React frontend with a typed NestJS API and a PostgreSQL data model accessed through Prisma. It includes tasks, recurring habits, calendar views, and progress statistics.",
    decision:
      "Recurring task templates keep frequency and lifecycle history, with dates calculated in the user’s timezone. Ownership checks keep categories and tags attached to the correct account.",
    features: [
      "One-off tasks & recurring habits",
      "Daily, weekly & monthly schedules",
      "Calendar views & progress",
      "Timezone-aware recurrence",
    ],
  },
] as const;

export const skills = [
  {
    name: "The interface",
    description: "Clear interactions. Thoughtful details.",
    items:
      "JavaScript · TypeScript · React · Next.js · HTML & CSS · Tailwind CSS",
  },
  {
    name: "The engine",
    description: "The logic that makes it all work.",
    items: "Node.js · Express · NestJS · REST APIs · Sessions & JWT · OAuth",
  },
  {
    name: "The foundation",
    description: "Data with structure and purpose.",
    items: "MongoDB · Mongoose · PostgreSQL · Prisma · Git & GitHub · Vercel",
  },
];
