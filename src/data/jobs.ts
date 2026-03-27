export interface Job {
  id: string;
  title: string;
  location: string;
  type: "Full-Time" | "Part-Time" | "Contract";
  description: string;
  requirements: string[];
}

export const jobs: Job[] = [
  {
    id: "sr-project-manager",
    title: "Senior Project Manager",
    location: "Houston, TX",
    type: "Full-Time",
    description: "Lead large-scale construction and infrastructure projects from planning through completion. Manage budgets, schedules, and cross-functional teams.",
    requirements: ["10+ years construction project management experience", "PMP certification preferred", "Experience with federal/municipal projects", "Strong communication and leadership skills"],
  },
  {
    id: "civil-engineer",
    title: "Civil Engineer",
    location: "Houston, TX",
    type: "Full-Time",
    description: "Design and oversee civil infrastructure projects including drainage, grading, and utility systems.",
    requirements: ["PE license required", "5+ years civil engineering experience", "Proficient in AutoCAD and Civil 3D", "Experience with stormwater design"],
  },
  {
    id: "floodplain-specialist",
    title: "FEMA Floodplain Specialist",
    location: "Remote / Houston, TX",
    type: "Full-Time",
    description: "Manage FEMA floodplain compliance, LOMA/LOMR applications, and elevation certificate programs.",
    requirements: ["CFM certification required", "3+ years floodplain management experience", "Knowledge of FEMA NFIP regulations", "GIS proficiency"],
  },
];
