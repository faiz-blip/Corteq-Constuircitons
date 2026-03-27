export interface Bid {
  id: string;
  project: string;
  description: string;
  location: string;
  deadline: string;
  status: "Open" | "Closed";
}

export const bids: Bid[] = [
  {
    id: "bid-001",
    project: "Municipal Drainage Improvement",
    description: "Design and construction of drainage improvements for a 3-mile corridor in the city's east district.",
    location: "Houston, TX",
    deadline: "2026-04-30",
    status: "Open",
  },
  {
    id: "bid-002",
    project: "Floodplain Mapping Update",
    description: "Update FEMA flood maps for a 12-square-mile area following recent development changes.",
    location: "San Antonio, TX",
    deadline: "2026-05-15",
    status: "Open",
  },
  {
    id: "bid-003",
    project: "Commercial Site Grading",
    description: "Site grading and utility installation for a 5-acre commercial development.",
    location: "Austin, TX",
    deadline: "2026-03-15",
    status: "Closed",
  },
];
