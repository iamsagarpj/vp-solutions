export interface Service {
  id: string;
  title: string;
  description: string;
  tag: string;
  icon: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  duration: string;
  description: string;
  badge: string;
  sector: string;
  category: "govt" | "private" | "solar" | "municipal";
  image: string;
}

export interface Partner {
  id: string;
  name: string;
  role: string;
  bio: string;
  experience: string;
  email: string;
  phone: string;
  location: string;
  tags: string[];
  initials: string;
  image: string;
}

export interface TimelineItem {
  year: string;
  event: string;
  detail: string;
}

export interface WhyItem {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  text: string;
  name: string;
  role: string;
  initials: string;
}

export interface Job {
  title: string;
  department: string;
  location: string;
}
