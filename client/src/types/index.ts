// Define project-wide TypeScript interfaces here

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  link?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

export interface ContactSubmission extends ContactFormData {
  id: string;
  createdAt: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface NavLink {
  text: string;
  url: string;
  isExternal?: boolean;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface InnovationFeature {
  title: string;
  description: string;
  icon: string;
}
