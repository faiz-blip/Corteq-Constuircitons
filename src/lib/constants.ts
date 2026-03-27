export const SITE = {
  name: "Corteq Solutions LLC",
  division: "Construction Division",
  tagline: "Building Infrastructure. Protecting Communities.",
  description:
    "FEMA-certified floodplain management, construction, storm sewer design, and engineering consulting for federal, commercial, and municipal clients.",
  phone: "(346) 399-1838",
  email: "contact@corteqsolutions.com",
  parentUrl: "https://corteqsolutions.com",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "FEMA Floodplain", href: "/services/fema-floodplain" },
      { label: "General Construction", href: "/services/construction" },
      { label: "Storm Sewer", href: "/services/storm-sewer" },
      { label: "Engineering & Consulting", href: "/services/engineering" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Bidding", href: "/bidding" },
  { label: "Contact", href: "/contact" },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];
