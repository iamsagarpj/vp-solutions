import { Project } from "@/types";

const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;

export const projects: Project[] = [
  {
    id: "mscb",
    title: "MSEB Meter Reading – Nashik Division",
    location: "Nashik, MH",
    duration: "3 Years",
    description:
      "Monthly meter reading, consumer survey, and billing data verification for 500,000+ consumers across Nashik division.",
    badge: "Government",
    sector: "MSEB",
    category: "govt",
    image: px(11924298), // electricity meter close-up / technician
  },
  {
    id: "municipal-clean",
    title: "Municipal Cleaning & Sanitation – Ahmednagar",
    location: "Ahmednagar",
    duration: "2 Years",
    description:
      "Daily street cleaning deploying 120 GPS-tracked workers across 5 municipal wards with full attendance compliance.",
    badge: "Municipal",
    sector: "Nagar Palika",
    category: "municipal",
    image: px(9462336), // cleaning/sanitation workers in action
  },
  {
    id: "solar-pune",
    title: "500 KW Rooftop Solar – Industrial Plant, Pune",
    location: "Pune, MH",
    duration: "6 Months",
    description:
      "Complete rooftop solar EPC including MSEDCL approvals, grid interconnection, and 5-year O&M contract.",
    badge: "Solar EPC",
    sector: "Industrial",
    category: "solar",
    image: px(6961122), // large solar panel array / field installation
  },
  {
    id: "smart-city",
    title: "Consumer Asset Survey – Smart City, Aurangabad",
    location: "Aurangabad",
    duration: "4 Months",
    description:
      "Door-to-door consumer and asset survey covering 80,000 households with GIS tagging and digital database submission.",
    badge: "Government",
    sector: "Smart City",
    category: "govt",
    image: px(36930873), // field survey team with equipment
  },
  {
    id: "it-park",
    title: "Integrated Facility Management – IT Park, Pune",
    location: "Pune, MH",
    duration: "Ongoing",
    description:
      "Comprehensive IFM for a 5-lakh sq ft IT park including housekeeping, security, and maintenance with 80 staff.",
    badge: "Private",
    sector: "Corporate",
    category: "private",
    image: px(1313534), // modern IT park / corporate office building
  },
  {
    id: "govt-office",
    title: "Govt. Office Complex Housekeeping – Mumbai",
    location: "Mumbai, MH",
    duration: "1.5 Years",
    description:
      "Daily housekeeping for a government complex housing 15 departments, 2000+ daily visitors, and 300,000 sq ft.",
    badge: "Municipal",
    sector: "Govt",
    category: "municipal",
    image: px(19250066), // government building / large facility exterior
  },
];
