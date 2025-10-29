import { motion, useReducedMotion } from "framer-motion";
import { Search, FileText, Settings, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "Step 1",
    title: "Intake & Scoping",
    description: "Share samples and rules. We confirm fields, validations, volumes, SLAs, and delivery format (Sheets, CSV, CRM)."
  },
  {
    icon: FileText,
    step: "Step 2",
    title: "Template & Sample",
    description: "We build a spreadsheet-style template and deliver a free sample so you can review structure and quality."
  },
  {
    icon: Settings,
    step: "Step 3",
    title: "Data Entry & Validation",
    description: "Our team enters data with keyboard‑first shortcuts and automated checks to prevent duplicates and format issues."
  },
  {
    icon: TrendingUp,
    step: "Step 4",
    title: "QA & Delivery",
    description: "Second‑pass QA, issue fixes, and final delivery. Ongoing maintenance available for weekly or monthly updates."
  }
];

export const HowItWorks = () => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.section 
      id="how-it-works"
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-gradient-to-b from-background via-muted/30 to-background z-20 min-h-[600px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: prefersReducedMotion ? 0.5 : 1.0, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="mb-10 sm:mb-16 md:mb-20 text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white text-sm font-semibold rounded-full mb-4">
            Data Entry in 4 Steps
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-green-800 dark:text-foreground">
            How It <span className="text-green-600 dark:text-gold">Works</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            From scoping to delivery in 24–72 hours for most projects. Clear rules, consistent outputs, and measurable quality.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="relative mb-12 sm:mb-16 last:mb-0"
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : (index % 2 === 0 ? -16 : 16), rotateY: 0 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: prefersReducedMotion ? 0.45 : 0.7, delay: index * 0.15, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              <div className={`flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <motion.div 
                  className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-green-600 via-green-700 to-green-800 flex items-center justify-center text-white ring-1 ring-green-600/30 shadow-[0_12px_30px_-12px_rgba(34,197,94,0.45)] relative group"
                  whileHover={prefersReducedMotion ? { scale: 1.02 } : { scale: 1.06, rotate: 6 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                >
                  <div className="absolute inset-0 rounded-full bg-green-500/20 blur-md group-hover:blur-lg transition-all duration-500" />
                  <step.icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white relative z-10" />
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-7 h-7 sm:w-8 sm:h-8 bg-green-100 dark:bg-green-800 text-green-800 dark:text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold border-2 border-green-600 dark:border-green-600">
                    {index + 1}
                  </div>
                </motion.div>
                
                <motion.div 
                  className={`relative flex-1 bg-white dark:bg-gradient-to-br dark:from-green-900 dark:via-green-900 dark:to-green-950 text-green-700 dark:text-white border-2 border-green-200 dark:border-green-800/50 rounded-xl sm:rounded-2xl p-5 sm:p-7 md:p-9 hover:border-green-300 dark:hover:border-green-700 hover:shadow-[0_16px_40px_-14px_rgba(34,197,94,0.25)] dark:hover:shadow-[0_16px_40px_-14px_rgba(0,0,0,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 transition-all duration-300 group ${index % 2 === 1 ? 'md:text-right' : ''}`}
                  whileHover={{ y: -4, scale: 1.01 }}
                  tabIndex={0}
                >
                  <div className="pointer-events-none absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-100/30 dark:from-green-800/30 via-green-50/20 dark:via-green-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <p className="text-green-600 dark:text-green-300 font-semibold text-sm uppercase tracking-wider mb-3 inline-block px-3 py-1 bg-green-100 dark:bg-green-800/50 rounded-full">
                    {step.step}
                  </p>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-green-800 dark:text-white transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-green-700 dark:text-green-100 leading-relaxed text-base sm:text-base md:text-lg">
                    {step.description}
                  </p>
                  
                  {/* Decorative corner */}
                  <div className={`absolute ${index % 2 === 1 ? 'top-0 left-0 border-t-2 border-l-2 rounded-tl-xl sm:rounded-tl-2xl' : 'bottom-0 right-0 border-b-2 border-r-2 rounded-br-xl sm:rounded-br-2xl'} w-12 h-12 sm:w-16 sm:h-16 border-green-700/0 group-hover:border-green-500/50 transition-all duration-500`} />
                </motion.div>
              </div>
              
              {index < steps.length - 1 && (
                <motion.div 
                  className="absolute left-16 top-32 w-0.5 h-16 bg-gradient-to-b from-gold via-[hsl(var(--brand-blue)/0.5)] to-transparent hidden md:block"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: prefersReducedMotion ? 0.3 : 0.5, delay: index * 0.15 + 0.3 }}
                />
              )}
            </motion.div>
          ))}
          <motion.div 
            className="mt-8 sm:mt-12 flex justify-center"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0.3 : 0.5 }}
          >
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-green-900 hover:bg-white/90 hover:scale-105 transition-all duration-300 font-semibold shadow-lg">
              Get Free Sample
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};