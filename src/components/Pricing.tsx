import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

// Constants
const MAX_VA_COUNT = 10;
const BULK_DISCOUNT_THRESHOLD = 3;
const BULK_DISCOUNT_RATE = 0.03;

// TypeScript Interface
interface PricingPlan {
  name: string;
  hours: string;
  price: number;
  setupFee: number;
  features: string[];
  highlighted: boolean;
  badge?: string;
}

const plans: PricingPlan[] = [
  {
    name: "Starter",
    hours: "Up to 1k records/mo",
    price: 997,
    setupFee: 0,
    features: [
      "Template setup + field mapping",
      "Manual entry with validation",
      "Basic cleaning & deduping",
      "Delivery: CSV/Sheets",
      "Email support"
    ],
    highlighted: false
  },
  {
    name: "Growth",
    hours: "Up to 10k records/mo",
    price: 1997,
    setupFee: 0,
    badge: "Most Popular",
    features: [
      "Everything in Starter",
      "OCR-assisted docs & forms",
      "Bulk updates & imports",
      "QA double-check (second pass)",
      "Priority turnaround",
      "Priority support"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    hours: "50k+ records & custom",
    price: 3997,
    setupFee: 0,
    badge: "Best Value",
    features: [
      "Everything in Growth",
      "Custom workflows & SLAs",
      "CRM/DB integrations",
      "Ongoing maintenance",
      "Dedicated account manager",
      "Custom dashboards & reporting"
    ],
    highlighted: false
  }
];

export const Pricing = () => {
  const [vaCount, setVaCount] = useState(1);
  
  const calculateDiscount = (count: number) => {
    return count >= BULK_DISCOUNT_THRESHOLD ? BULK_DISCOUNT_RATE : 0;
  };
  
  const discount = calculateDiscount(vaCount);
  const totalPrice = plans.reduce((sum, plan) => sum + plan.price, 0) * vaCount;
  const savings = discount > 0 ? Math.round(totalPrice * discount) : 0;
  
  // Calculate average price per VA per hour
  const avgHoursPerWeek = 20; // Professional plan baseline
  const avgPricePerVA = plans[1].price; // Professional plan price

  return (
    <motion.section 
      id="pricing"
      className="relative py-8 sm:py-12 md:py-16 lg:py-20 bg-background text-foreground z-10 overflow-hidden"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      {/* Animated background gradients */}
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gold/10 rounded-full blur-[100px] md:blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gold/10 rounded-full blur-[100px] md:blur-[150px]" />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <motion.div 
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span 
            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white text-xs sm:text-sm font-bold rounded-full mb-3 sm:mb-4 shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            Transparent Pricing
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-green-800 dark:text-foreground leading-tight">
            Simple, <span className="text-green-600 dark:text-gold">Usage-Based</span> Packages
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Choose a data entry package sized to your volume. Scale anytime. No hidden fees.
          </p>
        </motion.div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -12, scale: 1.02 }}
            >
              {/* Animated gradient border for highlighted plan */}
              {plan.highlighted && (
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-brand via-brand to-brand rounded-2xl"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                />
              )}
              
              <div className={`relative rounded-2xl p-6 sm:p-8 md:p-10 transition-all duration-500 group h-full bg-white dark:bg-gradient-to-br dark:from-green-900 dark:via-green-900 dark:to-green-950 text-green-700 dark:text-white border-2 border-green-200 dark:border-green-800/50 hover:border-green-300 dark:hover:border-green-700 hover:shadow-[0_25px_70px_-15px_rgba(34,197,94,0.25)] dark:hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.4)]`}>
                {/* Top accent line with animation */}
                <motion.div 
                  className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl ${
                    plan.highlighted ? 'bg-white/20' : 'bg-gradient-to-r from-transparent via-brand to-transparent'
                  }`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              
                {plan.badge && (
                  <motion.div 
                    className="absolute -top-4 right-6 px-4 py-1.5 rounded-full text-xs font-bold shadow-xl flex items-center gap-1.5 bg-green-100 dark:bg-green-600 text-green-800 dark:text-white"
                    initial={{ y: -10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Star className="w-3.5 h-3.5 fill-current" />
                    </motion.div>
                    {plan.badge}
                  </motion.div>
                )}
              
                {/* Header */}
                <div className="mb-6 relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300 text-green-800 dark:text-white">
                    {plan.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-green-600 dark:text-green-200">
                      {plan.hours}
                    </p>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 dark:bg-green-800/50 text-green-700 dark:text-green-200">
                      Data Entry
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-current/10 relative z-10">
                  <div className="flex items-baseline gap-1">
                    <motion.span 
                      className="text-5xl sm:text-6xl font-bold tracking-tight text-green-800 dark:text-white"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", duration: 0.8, delay: 0.4 }}
                    >
                      ${plan.price}
                    </motion.span>
                    <span className="text-base ml-1 text-green-600 dark:text-green-200">
                      /mo
                    </span>
                  </div>
                  {plan.setupFee > 0 ? (
                    <p className="text-xs mt-2 text-green-600 dark:text-green-200">
                      + ${plan.setupFee} setup fee
                    </p>
                  ) : (
                    <p className="text-xs mt-2 font-semibold flex items-center gap-1 text-green-700 dark:text-green-300">
                      <Check className="w-3.5 h-3.5 text-green-700 dark:text-green-300" />
                      No setup fee
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6 relative z-10">
                  {plan.features.map((feature, fIndex) => (
                    <motion.li 
                      key={fIndex} 
                      className="flex items-start gap-2.5"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + fIndex * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 transition-all duration-300 group-hover:scale-110 bg-green-100 dark:bg-green-800/50 group-hover:bg-green-200 dark:group-hover:bg-green-800/70">
                        <Check className="w-3 h-3 text-green-700 dark:text-green-300" />
                      </div>
                      <span className="text-sm leading-relaxed text-green-700 dark:text-green-100">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  size="lg"
                  onClick={() => window.location.href = '/book-meeting'}
                  className="w-full relative z-10 font-bold text-base py-6 sm:py-7 rounded-xl transition-all duration-300 group/btn overflow-hidden min-h-[44px] bg-gradient-to-br from-green-600 via-green-700 to-green-800 dark:bg-white text-white dark:text-green-900 hover:from-green-500 hover:via-green-600 hover:to-green-700 dark:hover:bg-white/90 hover:scale-105 border-2 border-green-600 dark:border-white"
                  aria-label={`Get started with ${plan.name} plan - ${plan.hours} per week at ${Math.round(plan.price * (1 - discount) * vaCount)} per month`}
                >
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" aria-hidden="true" />
                  <span className="relative">Get Free Sample</span>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p 
    className="text-center text-muted-foreground mt-10 sm:mt-12 md:mt-16 lg:mt-20 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base px-4"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.5 }}
  >
    All plans are billed monthly with no long-term contracts. Upgrade or downgrade anytime. Typical turnaround 24–72h depending on volume.
        </motion.p>
      </div>
    </motion.section>
  );
};