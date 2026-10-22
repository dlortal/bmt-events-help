// Per-site settings. This is the only file that differs between the BMT help repos.
export const site = {
  name: "Events Help",
  org: "BAFTA Media Technology",
  product: "Events",
  host: "events-help.bmt.bafta.org",
  tagline: "Guides and answers for BAFTA event ticketing, guests and check-in.",
  contactEmail: "events@bafta.org", // TODO confirm mailbox
  accent: "purple" as "gold" | "teal" | "purple" | "blue" | "red",
  nav: [
    { label: "Help articles", href: "/help-articles/" },
    { label: "Contact", href: "/contact/" },
  ],
  footerLinks: [
    { label: "bafta.org", href: "https://www.bafta.org" },
  ],
};
