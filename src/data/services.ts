export interface ServiceOffering {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string; // Lucide icon name
  description: string;
  fullDescription: string;
  offerings: ServiceOffering[];
  process: string[];
}

export const services: Service[] = [
  {
    slug: "fema-floodplain",
    title: "FEMA Floodplain Management",
    shortTitle: "FEMA Floodplain",
    icon: "Waves",
    description:
      "Flood zone mapping, elevation certificates, LOMA/LOMR applications, floodplain permitting & compliance.",
    fullDescription:
      "Our FEMA Floodplain Management team provides comprehensive services to help communities and property owners navigate complex federal flood regulations. We specialize in flood hazard analysis, floodplain mapping, and regulatory compliance to protect your investments and ensure public safety. Our certified professionals work directly with FEMA and local jurisdictions to deliver accurate, timely results.",
    offerings: [
      { title: "Flood Zone Mapping & Analysis", description: "Detailed flood hazard mapping using the latest FEMA guidelines and GIS technology." },
      { title: "Elevation Certificates", description: "Certified elevation surveys for insurance rating and compliance documentation." },
      { title: "LOMA/LOMR Applications", description: "Letter of Map Amendment and Revision applications to remove properties from flood zones." },
      { title: "Floodplain Permitting", description: "Full permitting support for development within designated floodplains." },
      { title: "Regulatory Compliance", description: "Ongoing compliance monitoring and reporting for federal and state floodplain regulations." },
    ],
    process: [
      "Initial site assessment and flood risk evaluation",
      "Data collection, surveying, and hydrological analysis",
      "Application preparation and regulatory submission",
      "Approval coordination and final documentation delivery",
    ],
  },
  {
    slug: "construction",
    title: "General Construction",
    shortTitle: "Construction",
    icon: "Building2",
    description:
      "Commercial & residential construction, project management, site work, and infrastructure development.",
    fullDescription:
      "Corteq's Construction Division delivers end-to-end construction services for commercial, residential, and municipal projects. From ground-breaking to final inspection, our experienced team manages every phase with precision, safety, and quality at the forefront. We bring decades of combined experience to every project, ensuring on-time and on-budget delivery.",
    offerings: [
      { title: "Commercial Construction", description: "Office buildings, retail spaces, warehouses, and industrial facilities from design to occupancy." },
      { title: "Residential Construction", description: "Custom homes, multi-family developments, and residential infrastructure projects." },
      { title: "Project Management", description: "Full lifecycle project oversight including scheduling, budgeting, and quality control." },
      { title: "Site Work & Grading", description: "Land clearing, grading, excavation, and site preparation for all project types." },
      { title: "Infrastructure Development", description: "Roads, utilities, drainage, and public infrastructure construction." },
    ],
    process: [
      "Project consultation and scope definition",
      "Design coordination, permitting, and pre-construction planning",
      "Construction execution with safety and quality oversight",
      "Final inspection, punch list, and project handover",
    ],
  },
  {
    slug: "storm-sewer",
    title: "Storm Sewer Design & Installation",
    shortTitle: "Storm Sewer",
    icon: "Droplets",
    description:
      "Stormwater management systems, drainage design, sewer infrastructure, and environmental compliance.",
    fullDescription:
      "Our Storm Sewer division specializes in designing and installing stormwater management systems that protect communities and the environment. We engineer solutions that handle runoff efficiently, prevent flooding, and meet all environmental standards. From small-scale residential drainage to large municipal sewer systems, we deliver reliable infrastructure built to last.",
    offerings: [
      { title: "Stormwater Management Systems", description: "Complete stormwater solutions including detention, retention, and treatment systems." },
      { title: "Drainage Design & Engineering", description: "Hydraulic analysis and drainage system design for optimal water flow management." },
      { title: "Sewer Infrastructure", description: "New sewer line installation, rehabilitation, and capacity upgrades." },
      { title: "Environmental Compliance", description: "NPDES permitting, SWPPP development, and erosion control planning." },
      { title: "Emergency Repairs", description: "Rapid response for storm sewer failures, collapses, and flood damage restoration." },
    ],
    process: [
      "Site survey and hydrological assessment",
      "System design and engineering review",
      "Installation with environmental monitoring",
      "Testing, inspection, and compliance certification",
    ],
  },
  {
    slug: "engineering",
    title: "Engineering & Consulting",
    shortTitle: "Engineering",
    icon: "Compass",
    description:
      "Civil engineering, environmental consulting, site assessments, and regulatory compliance support.",
    fullDescription:
      "Corteq's Engineering & Consulting practice provides expert guidance across civil, environmental, and regulatory domains. Our licensed engineers and consultants deliver solutions that balance technical excellence with practical constraints. Whether you need a site assessment, environmental impact study, or regulatory strategy, we bring the expertise to move your project forward.",
    offerings: [
      { title: "Civil Engineering", description: "Structural analysis, transportation engineering, and infrastructure design services." },
      { title: "Environmental Consulting", description: "Phase I/II ESAs, environmental impact assessments, and remediation planning." },
      { title: "Site Assessments", description: "Comprehensive property evaluations including geotechnical and topographic surveys." },
      { title: "Regulatory Compliance", description: "Federal, state, and local permitting support and compliance strategy." },
      { title: "Expert Witness Services", description: "Technical testimony and forensic engineering analysis for legal proceedings." },
    ],
    process: [
      "Project scoping and requirements gathering",
      "Field investigation and data analysis",
      "Engineering design and report preparation",
      "Regulatory submission and ongoing advisory support",
    ],
  },
];
