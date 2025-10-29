import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Emma Rodriguez",
    company: "Luxe Beauty Co.",
    role: "Founder",
    content: "Our organic traffic increased 400% in 8 months. We went from page 3 to ranking #1 for our main keywords. The ROI from SEO has been incredible.",
    rating: 5
  },
  {
    name: "David Chen",
    company: "Peak Performance Coaching",
    role: "CEO",
    content: "Local SEO was a game changer. We now dominate local search and get 15+ qualified leads per week from Google. Best investment we've made.",
    rating: 5
  },
  {
    name: "Sophie Martens",
    company: "Urban Eats",
    role: "Marketing Lead",
    content: "Their technical SEO audit fixed issues we didn't even know existed. Site speed improved 85% and we're ranking for 300+ keywords now.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <motion.section 
      id="testimonials"
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-background text-foreground z-40"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4">
        <motion.div 
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2 text-green-800 dark:text-foreground">
            Trusted by <span className="text-green-600 dark:text-gold">Brands That Rank</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl px-2">
            Real SEO results from real businesses who partnered with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gradient-to-br dark:from-green-900 dark:via-green-900 dark:to-green-950 border-2 border-green-200 dark:border-green-800/50 rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 hover:border-green-300 dark:hover:border-green-700 hover:shadow-[0_20px_60px_-15px_rgba(34,197,94,0.25)] dark:hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
            >
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-gold text-gold" />
                ))}
              </div>
              
              <p className="text-sm sm:text-base text-green-700 dark:text-green-100 mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-green-200 dark:border-green-800/50 pt-3 sm:pt-4">
                <p className="text-sm sm:text-base font-bold text-green-800 dark:text-white">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-green-600 dark:text-green-300">{testimonial.role}</p>
                <p className="text-xs sm:text-sm text-green-600 dark:text-green-200">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-white dark:bg-gradient-to-br dark:from-green-900 dark:via-green-900 dark:to-green-950 border-2 border-green-200 dark:border-green-800/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-5xl mx-auto hover:border-green-300 dark:hover:border-green-700 hover:shadow-[0_20px_60px_-15px_rgba(34,197,94,0.25)] dark:hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] transition-all duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <div className="text-left">
            <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-800/50 text-green-700 dark:text-green-300 text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
              Success Story
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-green-800 dark:text-white">
              Case Study: <span className="text-green-600 dark:text-green-300">450% Organic Traffic Growth in 6 Months</span>
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-green-700 dark:text-green-100 mb-5 sm:mb-6 leading-relaxed max-w-3xl">
              See how an e-commerce store went from 2K to 11K monthly organic visitors and turned SEO into their #1 revenue channel.
            </p>
            <Button size="lg" className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 bg-white text-green-900 hover:bg-white/90 transition-all duration-300 hover:scale-105 font-semibold">
              View Full Case Study
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};