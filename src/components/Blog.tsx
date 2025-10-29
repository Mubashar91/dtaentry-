import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search, TrendingUp, FileText, Settings, BarChart3, Link } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  seoTopics?: never;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Data Cleaning 101: Normalize, Deduplicate, Validate",
    excerpt: "Practical steps to clean messy spreadsheets fast—formats, duplicates, ranges, and validation rules that prevent errors.",
    content: `
      <h2>Essential Cleaning Steps</h2>
      <ul>
        <li>Normalize formats (dates, phone, currency)</li>
        <li>Deduplicate using unique keys</li>
        <li>Validate with dropdowns and regex</li>
        <li>Use helper columns for checks</li>
      </ul>
      <p>Templates help you scale cleaning consistently across projects.</p>
    `,
    author: "Data Ops Team",
    date: "October 15, 2025",
    readTime: "7 min read",
    category: "Data Cleaning",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Build an OCR Pipeline: From PDFs to Structured Sheets",
    excerpt: "How to turn scanned forms into clean rows using OCR tools and human QA.",
    content: `
      <h2>Pipeline Overview</h2>
      <ul>
        <li>OCR tools: Tesseract, Docparser</li>
        <li>Field mapping to template</li>
        <li>Human verification pass</li>
        <li>Export to CSV/Sheets</li>
      </ul>
    `,
    author: "Ops Engineering",
    date: "October 8, 2025",
    readTime: "6 min read",
    category: "OCR & Docs",
    image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Spreadsheet Shortcuts for Speed: Be Keyboard-First",
    excerpt: "Save minutes per hundred rows with power shortcuts for Sheets and Excel.",
    content: `
      <h2>Speed Tips</h2>
      <ul>
        <li>Multi-cell paste and fill</li>
        <li>Data validation shortcuts</li>
        <li>Custom views and filters</li>
        <li>Text-to-columns and regex</li>
      </ul>
    `,
    author: "Productivity Lab",
    date: "September 28, 2025",
    readTime: "5 min read",
    category: "Productivity",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Migrate Your CRM Safely: Mapping, Imports, Rollback",
    excerpt: "Step-by-step approach for moving data between CRMs with zero data loss.",
    content: `
      <h2>Migration Plan</h2>
      <ul>
        <li>Schema mapping and test import</li>
        <li>Backup and rollback plan</li>
        <li>Batch imports with logs</li>
        <li>Post-import QA checks</li>
      </ul>
    `,
    author: "CRM Team",
    date: "September 15, 2025",
    readTime: "8 min read",
    category: "CRM Migration",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    title: "Bulk Updates Without Breaking Things",
    excerpt: "Techniques to perform high-volume updates with safety nets and audits.",
    content: `
      <h2>Best Practices</h2>
      <ul>
        <li>Staging sheets before production</li>
        <li>Diff checks and versioning</li>
        <li>Automated validations</li>
        <li>Audit trail and rollback</li>
      </ul>
    `,
    author: "Data Engineering",
    date: "August 30, 2025",
    readTime: "9 min read",
    category: "Data Ops",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    title: "QA for Data Entry: Reach 99.9%+ Accuracy",
    excerpt: "Design a QA process with samples, rules, and double-entry for critical fields.",
    content: `
      <h2>QA Framework</h2>
      <ul>
        <li>Sampling and acceptance criteria</li>
        <li>Double-entry for critical fields</li>
        <li>Issue tracking and fixes</li>
        <li>Sign-off and delivery</li>
      </ul>
    `,
    author: "QA Team",
    date: "August 12, 2025",
    readTime: "8 min read",
    category: "Quality Assurance",
    image: "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?w=800&auto=format&fit=crop&q=80"
  }
];

export const Blog = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      id="blog"
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-background overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="relative mb-8 sm:mb-12 lg:mb-16 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
            Latest Insights
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-green-800 dark:text-foreground">
            Blog & <span className="text-green-600 dark:text-gold">Resources</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Guides and playbooks for fast, accurate, spreadsheet‑style data operations—cleaning, OCR, QA, and migrations.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white dark:bg-gradient-to-br dark:from-green-900 dark:via-green-900 dark:to-green-950 border-2 border-green-200 dark:border-green-800/50 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden hover:border-green-300 dark:hover:border-green-700 hover:shadow-[0_20px_60px_-15px_rgba(34,197,94,0.25)] dark:hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] transition-all duration-300 cursor-pointer w-full flex flex-col"
                onClick={() => navigate(`/blog/${post.id}`)}
                whileHover={{ y: -8 }}
              >
                {/* Image */}
                <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="px-2.5 py-1 sm:px-3 bg-green-100 dark:bg-green-600 text-green-800 dark:text-white text-[10px] sm:text-xs font-bold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-green-600 dark:text-green-200 mb-2 sm:mb-3 flex-wrap">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span className="truncate">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 sm:mb-3 text-green-800 dark:text-white transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-green-700 dark:text-green-100 mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-green-200 dark:border-green-800/50">
                    <span className="text-[10px] sm:text-xs text-green-600 dark:text-green-200 truncate">By {post.author}</span>
                    <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                      <div className="flex items-center gap-1 text-green-600 dark:text-green-300 font-semibold text-[10px] sm:text-xs group-hover:gap-1.5 transition-all">
                        <span className="hidden sm:inline">Read</span>
                        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
