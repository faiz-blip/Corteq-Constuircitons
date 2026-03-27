export interface Project {
  slug: string;
  title: string;
  location: string;
  serviceSlug: string;
  serviceTag: string;
  description: string;
  scope: string;
  image: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "houston-floodplain-remediation",
    title: "Floodplain Remediation Project",
    location: "Houston, TX",
    serviceSlug: "fema-floodplain",
    serviceTag: "FEMA Floodplain",
    description: "Comprehensive floodplain remediation for a 200-acre residential development, including LOMA applications and elevation certification for 85 properties.",
    scope: "Flood zone remapping, 85 elevation certificates, 12 LOMA applications, community floodplain compliance audit.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    featured: true,
  },
  {
    slug: "dallas-storm-sewer",
    title: "Municipal Storm Sewer System",
    location: "Dallas, TX",
    serviceSlug: "storm-sewer",
    serviceTag: "Storm Sewer",
    description: "Design and installation of a 3.2-mile storm sewer system serving a new mixed-use development district.",
    scope: "3.2 miles of storm sewer main, 45 catch basins, 2 detention ponds, NPDES permitting.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    featured: true,
  },
  {
    slug: "san-antonio-commercial",
    title: "Commercial Office Complex",
    location: "San Antonio, TX",
    serviceSlug: "construction",
    serviceTag: "Construction",
    description: "Ground-up construction of a 45,000 sq ft commercial office complex with structured parking and site utilities.",
    scope: "45,000 sq ft office building, 120-space parking structure, full site utilities, landscaping.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    featured: true,
  },
  {
    slug: "austin-drainage-study",
    title: "Watershed Drainage Study",
    location: "Austin, TX",
    serviceSlug: "engineering",
    serviceTag: "Engineering",
    description: "Engineering analysis of a 500-acre watershed to develop a comprehensive drainage master plan for future development.",
    scope: "Hydrological modeling, capacity analysis, drainage master plan, regulatory coordination.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    featured: false,
  },
  {
    slug: "fort-worth-residential",
    title: "Residential Subdivision",
    location: "Fort Worth, TX",
    serviceSlug: "construction",
    serviceTag: "Construction",
    description: "Infrastructure construction for a 120-lot residential subdivision including roads, utilities, and drainage.",
    scope: "2.5 miles of roads, water/sewer mains, storm drainage, grading for 120 lots.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    featured: false,
  },
  {
    slug: "corpus-christi-fema",
    title: "Coastal Flood Risk Assessment",
    location: "Corpus Christi, TX",
    serviceSlug: "fema-floodplain",
    serviceTag: "FEMA Floodplain",
    description: "Coastal flood risk assessment and LOMR application for a waterfront commercial development.",
    scope: "Coastal surge modeling, LOMR application, elevation certificates, insurance coordination.",
    image: "https://images.unsplash.com/photo-1559827291-bae8b1b2a6a9?w=800&q=80",
    featured: false,
  },
];
