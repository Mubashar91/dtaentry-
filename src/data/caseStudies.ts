export interface CaseStudy {
  id: number;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial: string;
  testimonialAuthor: string;
  testimonialRole: string;
  image: string;
  stats: {
    mainResult: string;
    timeframe: string;
    seoFocus: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Catalog Clean-Up: 50k SKUs Normalized with 99.9% Accuracy",
    company: "TechMart Online",
    industry: "E-commerce",
    challenge: "Duplicate SKUs, inconsistent attributes, and mismatched images across thousands of products created order errors and returns.",
    solution: "Template-driven attribute mapping, deduping, image/variant alignment, and QA double-check before import to the storefront.",
    results: [
      {
        metric: "Accuracy",
        value: "99.9%",
        description: "Double-pass QA on critical fields"
      },
      {
        metric: "Turnaround",
        value: "14 days",
        description: "Phased delivery for early value"
      },
      {
        metric: "Returns",
        value: "-32%",
        description: "Fewer wrong-item shipments"
      },
      {
        metric: "Admin Time",
        value: "-45%",
        description: "Less manual cleanup downstream"
      }
    ],
    testimonial: "They transformed our messy catalog into a clean, reliable dataset. Our ops team saves hours every week.",
    testimonialAuthor: "Stefan Richter",
    testimonialRole: "CEO, TechMart Online",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    stats: {
      mainResult: "99.9% Accuracy",
      timeframe: "14 days",
      seoFocus: "Catalog Clean-Up"
    }
  },
  {
    id: 2,
    title: "CRM Migration: 25k Contacts Moved with Zero Data Loss",
    company: "Digital Dynamics",
    industry: "Professional Services",
    challenge: "Legacy CRM fields did not map cleanly to the new CRM. High risk of lost notes and bad owner assignments.",
    solution: "Schema mapping, test imports, rollback plan, and staged batch imports with validation and audit logs.",
    results: [
      {
        metric: "Records Migrated",
        value: "25k",
        description: "Contacts with notes and activities"
      },
      {
        metric: "Data Loss",
        value: "0",
        description: "All fields verified post‑import"
      },
      {
        metric: "Owner Fixes",
        value: "100%",
        description: "Owners reconciled from mapping rules"
      },
      {
        metric: "Timeframe",
        value: "10 days",
        description: "Executed in 4 safe batches"
      }
    ],
    testimonial: "Zero data loss and clean ownership mapping. The migration was smooth and well-documented.",
    testimonialAuthor: "Julia Becker",
    testimonialRole: "Founder, Digital Dynamics",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    stats: {
      mainResult: "0 Data Loss",
      timeframe: "10 days",
      seoFocus: "CRM Migration"
    }
  },
  {
    id: 3,
    title: "Survey Data Entry: 100k Responses Cleaned and Validated",
    company: "CloudFlow Solutions",
    industry: "SaaS",
    challenge: "Survey exports had inconsistent formats, missing fields, and free‑text that needed normalization for analysis.",
    solution: "Validation rules with dropdowns, regex standardization for phone/emails, and helper columns for QA checks.",
    results: [
      {
        metric: "Responses",
        value: "100k",
        description: "Processed with validation rules"
      },
      {
        metric: "Invalid Entries",
        value: "-92%",
        description: "Rejected or fixed during QA"
      },
      {
        metric: "Delivery",
        value: "CSV + Dashboard",
        description: "Final dataset with summary views"
      },
      {
        metric: "Timeframe",
        value: "7 days",
        description: "Daily phased drops"
      }
    ],
    testimonial: "Clean, analysis‑ready data in a week. The validation rules caught issues we would have missed.",
    testimonialAuthor: "Marco Schneider",
    testimonialRole: "CTO, CloudFlow Solutions",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop",
    stats: {
      mainResult: "100k Processed",
      timeframe: "7 days",
      seoFocus: "Survey Cleaning"
    }
  }
];
