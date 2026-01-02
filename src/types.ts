import React from 'react';

export interface NavItem {
  label: string;
  href: string;
  sectionId?: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  details: string; // Long form content
  icon: React.ElementType;
  span?: boolean; 
}

export interface Job {
  id: string;
  title: string;
  location: string;
  hours: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  _honey?: string; // Anti-spam honeypot
}

export interface JobApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  motivation: string;
  attachment?: {
    name: string;
    type: string;
    content: string; // Base64 string
  };
  _honey?: string; // Anti-spam honeypot
}

export interface CustomQuoteFormData {
  name: string;
  companyName?: string;
  email: string;
  phone: string;
  serviceType: string;
  description: string;
  _honey?: string; // Anti-spam honeypot
}