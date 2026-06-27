import { Service } from "@/types";

const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;

export const services: Service[] = [
  {
    id: "solar",
    title: "Solar Installation & EPC",
    description:
      "Complete solar EPC services — design, procurement, installation, and long-term O&M for government, industrial, and residential projects.",
    tag: "Solar EPC",
    icon: "Sun",
    image: px(8853539), // workers installing solar panels on rooftop
  },
  {
    id: "manpower",
    title: "Manpower Supply",
    description:
      "Skilled and unskilled workforce for government departments, utilities, industrial plants, and private companies — uniformed, verified, supervised.",
    tag: "Workforce",
    icon: "Users",
    image: px(37636256), // team of workers in safety vests and helmets
  },
  {
    id: "meter",
    title: "Electricity Meter Reading & Survey",
    description:
      "High-volume meter reading, consumer surveys, installation support, and data verification for electricity boards. 25M+ readings completed.",
    tag: "Meter Reading",
    icon: "BarChart2",
    image: px(12093440), // technician at electricity meter panel
  },
  {
    id: "facility",
    title: "Facility Management",
    description:
      "Comprehensive IFM for government offices, corporate parks, hospitals, and industrial campuses — security, housekeeping, and technical maintenance.",
    tag: "Facility Mgmt",
    icon: "Building2",
    image: px(946310), // modern glass office building exterior
  },
  {
    id: "municipal",
    title: "Municipal & Smart City Projects",
    description:
      "On-ground project execution for municipal corporations — street cleaning, asset surveys, citizen services, and Smart City support operations.",
    tag: "Municipal",
    icon: "Landmark",
    image: px(34338597), // road construction / municipal infrastructure
  },
  {
    id: "housekeeping",
    title: "Housekeeping & Industrial Cleaning",
    description:
      "Professional housekeeping, deep cleaning, waste management, and industrial sanitation for government buildings, factories, and private facilities.",
    tag: "Housekeeping",
    icon: "Sparkles",
    image: px(9462743), // professional housekeeper in hotel/office
  },
  {
    id: "outsourcing",
    title: "Government Outsourcing Projects",
    description:
      "End-to-end management of government-outsourced field operations, data entry, survey campaigns, and administrative functions.",
    tag: "Gov Outsourcing",
    icon: "FileText",
    image: px(4872059), // office workers collaborating at desks
  },
  {
    id: "survey",
    title: "Survey, Asset Inspection & Data",
    description:
      "Field-based consumer surveys, asset verification, GIS data collection, and door-to-door inspection campaigns for utilities and municipalities.",
    tag: "Survey & Data",
    icon: "Map",
    image: px(5802821), // field engineer with survey equipment outdoors
  },
  {
    id: "technical",
    title: "Technical Support Staff",
    description:
      "Qualified technical personnel — electricians, supervisors, data operators, and field engineers for government utility projects and private clients.",
    tag: "Tech Support",
    icon: "Settings",
    image: px(18111488), // technical workers on construction/utility site
  },
];
