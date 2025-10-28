import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CaseStudy {
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

const caseStudies: CaseStudy[] = [
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

export { caseStudies };

export const CaseStudies = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      id="case-studies"
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-gradient-to-b from-background via-muted/30 to-background"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-8 sm:mb-12 lg:mb-16 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gold/10 text-gold text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
            Success Stories
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
            Data Entry Success Stories
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            See how teams shipped clean datasets faster—catalogs normalized, CRMs migrated, and surveys validated with high accuracy.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card border border-border/50 rounded-xl sm:rounded-2xl overflow-hidden hover:border-gold/50 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-300 cursor-pointer w-full"
              onClick={() => navigate(`/case-study/${study.id}`)}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="relative h-44 sm:h-52 md:h-48 lg:h-56 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.company}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 bg-gold text-foreground text-xs font-bold rounded-full mb-1.5 sm:mb-2">
                    {study.industry}
                  </span>
                  <h3 className="text-white font-bold text-base sm:text-lg line-clamp-2">
                    {study.company}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 lg:p-6">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-5 pb-4 sm:pb-5 border-b border-border">
                  <div className="text-center">
                    <div className="text-gold font-bold text-sm sm:text-base lg:text-lg">{study.stats.mainResult}</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">Result</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gold font-bold text-sm sm:text-base lg:text-lg">{study.stats.seoFocus}</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">Focus</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gold font-bold text-sm sm:text-base lg:text-lg">{study.stats.timeframe}</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">Timeframe</div>
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 text-foreground group-hover:text-gold transition-colors line-clamp-2">
                  {study.title}
                </h4>

                {/* Challenge snippet */}
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                  {study.challenge}
                </p>

                {/* Read more */}
                <div className="flex items-center gap-1 sm:gap-2 text-gold font-semibold text-xs sm:text-sm group-hover:gap-2 sm:group-hover:gap-3 transition-all">
                  <span className="hidden sm:inline">View Full Case Study</span>
                  <span className="sm:hidden">View Study</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-12 lg:mt-16 text-center"
        >
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-6">
            Ready to write your own success story?
          </p>
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gold text-foreground font-semibold text-sm sm:text-base rounded-lg sm:rounded-xl hover:bg-gold/90 transition-all duration-300 hover:scale-105 shadow-lg">
            <span className="hidden sm:inline">Book Your Free Consultation →</span>
            <span className="sm:hidden">Get Started →</span>
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};
