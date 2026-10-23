// Per-site settings. This is the only file that differs between the BMT help repos.
// Copy below is taken from the WordPress export (site description, home page, menu); do not invent new copy here.
export const site = {
  name: "Events Help",
  org: "BAFTA Media Technology",
  product: "Events",
  host: "events-help.bmt.bafta.org",
  description: "Help Articles for the BAFTA Events Management System",
  intro: [
    "The Events Help site is full of resources written to help you understand the full power of your Events instance.",
  ],
  supportPrompt: "If you have a question that is not covered by the FAQs or Help Articles or an issue which needs further support please create and submit a support ticket.",
  supportLabel: "Submit Support Ticket",
  supportUrl: "https://baftaresearch.atlassian.net/servicedesk/customer/portal/1/user/login?destination=portal%2F1",
  websiteUrl: "https://bmt.bafta.org/",
  accent: "purple" as "gold" | "teal" | "purple" | "blue" | "red",
  // Search engines: true adds a sitemap and allows indexing; false sends noindex and a disallow-all robots.txt.
  indexable: true,
  nav: [
    { label: "Home", href: "/" },
    { label: "Help Articles", href: "/help-articles/" },
    { label: "Support Tickets", href: "https://baftaresearch.atlassian.net/servicedesk/customer/portal/1/user/login?destination=portal%2F1", external: true },
    { label: "BMT Website", href: "https://bmt.bafta.org/", external: true },
  ],
  // Footer copy from the Events Help WordPress site (text widgets and theme footer text).
  footerColumns: [
    { title: "Events", text: "Our white-label event management platform empowers you to manage bookings for all types of events: Physical and virtual events; Free and paid-for events; Ticketed or Guest List only; Full Wait Listing, Quotas and Overbooking functionality." },
    { title: "BAFTA Tech", text: "BAFTA Media Technology (BMT) is the research and development arm of BAFTA that exists to solve workflow management challenges and provide innovative solutions not only for BAFTA but also for all connected industries. We inspire and deliver excellence in like-minded organisations via products that simplify, streamline and improve new and ongoing initiatives." },
  ],
  copyright: "BAFTA Media Technology",
  smallprint: "BAFTA Media Technology is a registered company. No. 06226648",
  legalLinks: [
    { label: "Privacy Policy", href: "https://bmt.bafta.org/privacy-policy/" },
    { label: "Terms of Use", href: "https://bmt.bafta.org/terms-of-use/" },
  ],
  themeColor: "#101010",
};
