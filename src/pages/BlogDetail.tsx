import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { useTranslation } from "react-i18next";

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
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Keyword Research Mastery: Find High-Value Keywords That Convert",
    excerpt: "A systematic approach to discovering profitable keywords with low competition and high search intent.",
    content: `
      <h2>Research Process</h2>
      <ul>
        <li>Seed keywords: Start with your core business terms</li>
        <li>Competitor analysis: Steal their best-performing keywords</li>
        <li>Long-tail discovery: Find specific, high-intent phrases</li>
        <li>Search intent mapping: Match keywords to user goals</li>
      </ul>
      <h3>Tools & Metrics</h3>
      <p>Use Ahrefs, SEMrush, and Google Keyword Planner. Focus on search volume, keyword difficulty, and CPC.</p>
      
      <h3>Advanced Techniques</h3>
      <p>Look for keyword gaps in competitor content, analyze SERP features for opportunities, and prioritize keywords based on business value rather than just search volume.</p>
      
      <h3>Implementation Strategy</h3>
      <p>Create content clusters around primary keywords, use long-tail variations naturally throughout your content, and track performance to refine your keyword strategy over time.</p>
    `,
    author: "SEO Team",
    date: "October 15, 2025",
    readTime: "8 min read",
    category: "Keyword Research",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "On-Page SEO Checklist: Optimize Every Element for Rankings",
    excerpt: "Complete guide to optimizing title tags, meta descriptions, headers, and content for maximum visibility.",
    content: `
      <h2>Essential Elements</h2>
      <ul>
        <li>Title tags: Include primary keyword within 60 characters</li>
        <li>Meta descriptions: Compelling copy with keywords in 155 characters</li>
        <li>Header structure: H1, H2, H3 hierarchy with keyword variations</li>
        <li>Internal linking: Connect related pages strategically</li>
      </ul>
      <p>Focus on user experience while maintaining keyword optimization throughout.</p>
      
      <h3>Content Optimization</h3>
      <p>Ensure your content thoroughly covers the topic, uses semantic keywords naturally, and provides clear value to readers. Include relevant images with optimized alt text.</p>
      
      <h3>Technical Elements</h3>
      <p>Optimize URL structure, implement schema markup, ensure fast loading times, and maintain mobile responsiveness for better search engine visibility.</p>
    `,
    author: "Content Team",
    date: "October 8, 2025",
    readTime: "6 min read",
    category: "On-Page SEO",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Technical SEO Audit: Fix Issues That Kill Your Rankings",
    excerpt: "Identify and resolve technical problems that prevent search engines from properly crawling and indexing your site.",
    content: `
      <h2>Critical Issues</h2>
      <ul>
        <li>Site speed: Optimize for Core Web Vitals</li>
        <li>Mobile responsiveness: Ensure perfect mobile experience</li>
        <li>Crawl errors: Fix 404s and redirect chains</li>
        <li>Schema markup: Implement structured data</li>
      </ul>
      <p>Use Google Search Console, PageSpeed Insights, and Screaming Frog for comprehensive audits.</p>
      
      <h3>Performance Optimization</h3>
      <p>Compress images, minify CSS/JS, leverage browser caching, and use a content delivery network (CDN) to improve site speed and user experience.</p>
      
      <h3>Crawlability & Indexing</h3>
      <p>Optimize your robots.txt file, create XML sitemaps, fix broken links, and ensure proper canonical tag implementation to help search engines understand your site structure.</p>
    `,
    author: "Technical Team",
    date: "September 28, 2025",
    readTime: "10 min read",
    category: "Technical SEO",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Content That Ranks: Writing for Users and Search Engines",
    excerpt: "Create compelling, SEO-optimized content that satisfies search intent and drives conversions.",
    content: `
      <h2>Content Strategy</h2>
      <ul>
        <li>Search intent analysis: Understand what users really want</li>
        <li>Content depth: Comprehensive coverage beats thin content</li>
        <li>Keyword integration: Natural placement throughout content</li>
        <li>User engagement: Structure for readability and interaction</li>
      </ul>
      <p>Balance keyword optimization with valuable, engaging content that keeps users on your site.</p>
      
      <h3>Content Structure</h3>
      <p>Use clear headings, bullet points, and short paragraphs. Include relevant examples, case studies, and actionable tips that provide real value to your audience.</p>
      
      <h3>Optimization Techniques</h3>
      <p>Research related keywords, optimize for featured snippets, include internal and external links, and regularly update content to maintain relevance and freshness.</p>
    `,
    author: "Content Strategy",
    date: "September 15, 2025",
    readTime: "7 min read",
    category: "Content SEO",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    title: "Link Building That Works: Earn High-Quality Backlinks",
    excerpt: "Proven strategies to acquire authoritative backlinks that boost your domain authority and rankings.",
    content: `
      <h2>Link Building Tactics</h2>
      <ul>
        <li>Resource page outreach: Get listed on industry resource pages</li>
        <li>Broken link building: Replace dead links with your content</li>
        <li>Guest posting: Contribute to authoritative industry sites</li>
        <li>Digital PR: Create newsworthy content for media coverage</li>
      </ul>
      <p>Focus on quality over quantity. One high-authority link beats dozens of low-quality ones.</p>
      
      <h3>Outreach Strategy</h3>
      <p>Research target websites thoroughly, personalize your outreach emails, provide clear value propositions, and follow up professionally to build lasting relationships.</p>
      
      <h3>Content for Link Building</h3>
      <p>Create linkable assets like original research, comprehensive guides, infographics, and tools that naturally attract backlinks from other websites in your industry.</p>
    `,
    author: "Link Building Team",
    date: "August 30, 2025",
    readTime: "9 min read",
    category: "Link Building",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    title: "SEO Analytics: Track What Matters for Business Growth",
    excerpt: "Essential metrics and reporting strategies to measure SEO success and demonstrate ROI.",
    content: `
      <h2>Key Metrics</h2>
      <ul>
        <li>Organic traffic: Monitor growth and traffic quality</li>
        <li>Keyword rankings: Track target keyword positions</li>
        <li>Conversion rates: Measure organic traffic conversions</li>
        <li>Technical health: Monitor crawl errors and site speed</li>
      </ul>
      <p>Use Google Analytics 4, Search Console, and rank tracking tools for comprehensive reporting.</p>
      
      <h3>Advanced Analytics</h3>
      <p>Set up goal tracking, analyze user behavior patterns, monitor click-through rates from search results, and track the customer journey from search to conversion.</p>
      
      <h3>Reporting & Insights</h3>
      <p>Create automated reports, identify trends and opportunities, benchmark against competitors, and use data to inform your SEO strategy and content planning decisions.</p>
    `,
    author: "Analytics Team",
    date: "August 12, 2025",
    readTime: "8 min read",
    category: "SEO Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
  }
];

const BlogDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t } = useTranslation();
  
  const post = blogPosts.find(p => p.id === Number(id));
  const override = t(`blogLong.${id}.content`, { defaultValue: "" }) as string;
  // Build TOC and inject ids into headings
  const buildToc = (html: string) => {
    const toc: { level: number; text: string; id: string }[] = [];
    const slugify = (s: string) =>
      s
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")
        .slice(0, 80);
    let processed = html.replace(/<h2>(.*?)<\/h2>/gim, (_m, text) => {
      const id = slugify(text);
      toc.push({ level: 2, text, id });
      return `<h2 id="${id}" class="scroll-mt-28">${text}</h2>`;
    });
    processed = processed.replace(/<h3>(.*?)<\/h3>/gim, (_m, text) => {
      const id = slugify(text);
      toc.push({ level: 3, text, id });
      return `<h3 id="${id}" class="scroll-mt-28">${text}</h3>`;
    });
    return { html: processed, toc };
  };
  const rawHtml = (override || (post?.content ?? "")) as string;
  const { html: contentHtml, toc } = buildToc(rawHtml);
  const extras = (t(`blogExtras.${id}`, { returnObjects: true, defaultValue: null }) as null | { takeaways?: string[]; conclusion?: string });

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-gold hover:underline"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <motion.section
        className="relative pt-4 sm:pt-6 pb-20 sm:pb-24 md:pb-28 lg:pb-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <article className="max-w-4xl mx-auto">
            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative mb-6 sm:mb-8 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Meta info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 sm:mb-8 lg:mb-10"
            >
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gold/10 text-gold text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6 border border-gold/20">
                {post.category}
              </span>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-foreground leading-tight">
                {post.title}
              </h1>
              <div className="p-4 sm:p-5 rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm flex flex-wrap items-center gap-4 text-xs sm:text-sm md:text-base text-muted-foreground">
                <div className="flex items-center gap-2 min-w-[160px]">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                    <User className="w-4 h-4 text-gold" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-foreground font-semibold">{post.author}</div>
                    <div className="text-xs sm:text-sm">{post.category}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-gold" />
                  </div>
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-gold" />
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.div>

            {/* TOC */}
            {toc.length > 0 && (
              <div className="mb-6 sm:mb-8 p-4 sm:p-5 bg-card border border-border rounded-lg">
                <div className="text-sm font-bold mb-2 text-green-700 dark:text-green-300">{t('blogDetail.toc')}</div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {toc.map((h) => (
                    <li key={h.id} className={h.level === 3 ? 'ml-4' : ''}>
                      <a href={`#${h.id}`} className="hover:text-foreground hover:underline">
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-base sm:prose-lg lg:prose-xl prose-headings:text-green-800 dark:prose-headings:text-green-300 prose-h2:text-3xl sm:prose-h2:text-4xl prose-h2:font-extrabold prose-h2:mb-6 prose-h2:mt-12 prose-h3:text-2xl sm:prose-h3:text-3xl prose-h3:font-bold prose-h3:mb-5 prose-h3:mt-8 prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-ul:list-disc prose-ol:list-decimal prose-ul:pl-6 prose-ol:pl-6 marker:text-green-600 dark:marker:text-green-300 prose-li:text-muted-foreground prose-li:my-1 max-w-none mb-12 sm:mb-16"
            >
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </motion.div>

            {/* Key Takeaways */}
            {extras?.takeaways && extras.takeaways.length > 0 && (
              <div className="mt-8 sm:mt-10 p-5 sm:p-6 rounded-xl border-2 border-green-300/50 bg-green-50/60 dark:bg-green-900/20">
                <div className="text-green-800 dark:text-green-300 font-extrabold text-lg sm:text-xl mb-3">
                  {t('blogDetail.takeaways')}
                </div>
                <ul className="list-disc pl-5 marker:text-green-600 dark:marker:text-green-300 text-muted-foreground">
                  {extras.takeaways.map((item, idx) => (
                    <li key={idx} className="mb-1">{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Conclusion */}
            {extras?.conclusion && (
              <div className="mt-10 sm:mt-12">
                <h3 className="text-2xl sm:text-3xl font-bold text-green-800 dark:text-green-300 mb-3">
                  {t('blogDetail.conclusion')}
                </h3>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  {extras.conclusion}
                </p>
              </div>
            )}

            {/* CTA at bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 sm:mt-16 p-6 sm:p-8 md:p-10 lg:p-12 bg-gradient-to-br from-gold/10 via-gold/5 to-transparent border-2 border-gold/30 rounded-xl sm:rounded-2xl text-center relative overflow-hidden group hover:border-gold/50 transition-all duration-300"
            >
              {/* Background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-foreground">
                  {t('blogDetail.ctaTitle')}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-5 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
                  {t('blogDetail.ctaSubtitle')}
                </p>
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gold text-foreground font-semibold text-sm sm:text-base rounded-lg sm:rounded-xl hover:bg-gold/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  <span className="hidden sm:inline">{t('blogDetail.ctaButton')} →</span>
                  <span className="sm:hidden">{t('caseStudies.ctaButtonShort')} →</span>
                </button>
              </div>
            </motion.div>

            {/* Related Posts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-border"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-foreground">{t('blogDetail.moreArticles')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
                  <motion.div
                    key={relatedPost.id}
                    onClick={() => navigate(`/blog/${relatedPost.id}`)}
                    className="group cursor-pointer bg-card border border-border/50 rounded-lg sm:rounded-xl overflow-hidden hover:border-gold/50 hover:shadow-lg hover:shadow-gold/10 transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-36 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-gold text-foreground text-xs font-bold rounded-full">{relatedPost.category}</span>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5">
                      <h4 className="text-base sm:text-lg font-bold mb-2 text-foreground group-hover:text-gold transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">{relatedPost.excerpt}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </article>
        </div>
      </motion.section>
    </div>
  );
};

export default BlogDetail;
