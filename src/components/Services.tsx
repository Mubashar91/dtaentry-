import { Lightbulb, Video, MessageCircle, BarChart3, Target, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Lightbulb,
    title: "Strategy & Planning",
    description: "Content pillars, competitor analysis, platform selection, and 90-day growth roadmaps tailored to your business goals",
    benefit: "Clear direction from day 1"
  },
  {
    icon: Video,
    title: "Content Creation",
    description: "Reels, carousels, graphics, captions, and video editing—all designed to stop the scroll and drive engagement",
    benefit: "3–5x engagement lift"
  },
  {
    icon: MessageCircle,
    title: "Community Management",
    description: "Daily comment replies, DM handling, proactive engagement, and building loyal fans who advocate for your brand",
    benefit: "+40% response rate"
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Monthly performance reports, A/B testing insights, and data-driven recommendations to optimize your strategy",
    benefit: "Track what matters"
  },
  {
    icon: Target,
    title: "Paid Social Advertising",
    description: "Campaign setup, audience targeting, ad creative, and budget optimization across Meta, TikTok, and LinkedIn Ads",
    benefit: "2–4x ROAS potential"
  },
  {
    icon: Users,
    title: "Influencer Partnerships",
    description: "Identify, negotiate, and manage creator collaborations to amplify your reach and build authentic social proof",
    benefit: "Expand your audience"
  }
];

export const Services = () => {
  return (
    <motion.section 
      id="services"
      className="relative py-8 sm:py-10 md:py-14 lg:py-16 bg-background text-foreground z-30 overflow-hidden min-h-[500px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      {/* Animated background elements */}
      <div className="absolute top-10 right-5 w-64 h-64 sm:top-16 sm:right-8 sm:w-80 sm:h-80 md:top-20 md:right-10 md:w-96 md:h-96 bg-gold/5 rounded-full blur-[100px] md:blur-[120px]" />
      <div className="absolute bottom-10 left-5 w-56 h-56 sm:bottom-16 sm:left-8 sm:w-72 sm:h-72 md:bottom-20 md:left-10 md:w-80 md:h-80 bg-gold/5 rounded-full blur-[100px] md:blur-[120px]" />
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
        <motion.div 
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 relative z-10 text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-gradient-to-br from-[hsl(var(--gold))] via-[hsl(var(--brand-blue))] to-[hsl(var(--gold))] text-foreground text-xs sm:text-sm md:text-base font-semibold rounded-full mb-3 sm:mb-4">
            Our Core Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-5 px-2">
            What We <span className="text-gold">Handle</span> For You
          </h2>
          <p className="text-base sm:text-lg md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed px-2">
            End-to-end social media management — from strategy to execution, we handle it all so you can focus on your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8 max-w-7xl mx-auto relative z-10">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="relative bg-card/50 backdrop-blur-sm border-2 border-brand/30 p-5 sm:p-6 md:p-7 lg:p-9 xl:p-10 rounded-xl sm:rounded-2xl hover:bg-card hover:border-brand hover:shadow-[0_25px_80px_-20px_hsl(var(--brand-blue)/0.4)] transition-all duration-700 group overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
              whileHover={{ y: -12, scale: 1.02 }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gold)/0.1)] via-[hsl(var(--brand-blue)/0.08)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start gap-4 sm:gap-5 md:gap-5 lg:gap-6 relative z-10">
                <motion.div 
                  className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-[hsl(var(--gold))] via-[hsl(var(--brand-blue))] to-[hsl(var(--gold))] text-white ring-1 ring-brand/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-[0_18px_40px_-12px_hsl(var(--brand-blue)/0.6)]"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                </motion.div>
                <div className="flex-1 w-full">
                  <h3 className="text-xl sm:text-2xl md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-3 text-foreground group-hover:text-brand transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-sm lg:text-base text-muted-foreground mb-3 sm:mb-4 md:mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 md:px-3.5 md:py-1.5 lg:px-4 lg:py-2 bg-brand/10 border border-brand/30 rounded-full text-brand text-xs sm:text-sm md:text-xs lg:text-sm font-semibold group-hover:bg-brand group-hover:text-foreground group-hover:border-brand transition-all duration-500">
                    <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 mr-1.5 sm:mr-2 md:mr-1.5 lg:mr-2" />
                    <span className="leading-none">{service.benefit}</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20 border-t-2 border-r-2 border-brand/0 group-hover:border-brand/50 rounded-tr-xl sm:rounded-tr-2xl transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20 border-b-2 border-l-2 border-brand/0 group-hover:border-brand/50 rounded-bl-xl sm:rounded-bl-2xl transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};