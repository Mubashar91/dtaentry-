import { motion } from "framer-motion";
import { Award, Target, Zap, Shield, HeartHandshake, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Elite Talent Pool",
    description: "Only 3% of applicants make it through our rigorous vetting process. Every VA is tested for skills, communication, and cultural fit before joining our team."
  },
  {
    icon: Target,
    title: "Native German Oversight",
    description: "Every deliverable is reviewed by native German-speaking managers who understand your market, culture, and quality standards. No more language barriers or cultural misunderstandings."
  },
  {
    icon: Zap,
    title: "Lightning-Fast Scaling",
    description: "Need to scale from 1 to 10 VAs? We can do it in days, not months. Our bench of pre-vetted talent means you're never waiting for the right person."
  },
  {
    icon: Shield,
    title: "Zero Risk Guarantee",
    description: "14-day money-back guarantee on all starter plans. Plus, if your VA isn't working out, we'll replace them within 24 hours—no questions asked, no extra fees."
  },
  {
    icon: HeartHandshake,
    title: "True Partnership Approach",
    description: "We don't just assign VAs and disappear. You get dedicated account management, regular check-ins, and ongoing optimization to ensure maximum ROI."
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description: "Over 200 businesses scaled their operations with DON VA. Average client satisfaction: 4.9/5. Average cost savings: 68%. These aren't promises—they're proven results."
  }
];

export const WhyChooseUs = () => {
  return (
    <motion.section 
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-gradient-to-b from-background via-muted/30 to-background z-40"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4">
        <motion.div 
          className="mb-10 sm:mb-12 md:mb-16 lg:mb-20 text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
            The DON VA Difference
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 text-foreground px-2">
            Why Choose <span className="bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--brand-blue))] bg-clip-text text-transparent">DON VA</span>?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed px-2">
            Not all virtual assistant services are created equal. Here's what sets us apart from the rest.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              className="relative bg-gradient-to-br from-green-900 via-green-900 to-green-950 text-white border-2 border-green-800/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 hover:border-green-700 hover:shadow-[0_25px_80px_-20px_rgba(0,0,0,0.4)] transition-all duration-700 group overflow-hidden"
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.6, -0.05, 0.01, 0.99] }}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-800/30 via-green-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <motion.div 
                  className="mb-4 sm:mb-5 md:mb-6 inline-flex p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white ring-1 ring-green-600/30 group-hover:scale-110 transition-all duration-500 shadow-[0_18px_40px_-12px_rgba(34,197,94,0.6)]"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <reason.icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-sm sm:text-base text-green-100 leading-relaxed">
                  {reason.description}
                </p>
              </div>
              
              {/* Corner decoration */}
              <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-b-2 border-r-2 border-green-700/0 group-hover:border-green-500/50 rounded-br-xl sm:rounded-br-2xl transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};