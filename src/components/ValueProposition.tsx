import { Shield, Clock, Users, Lock } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: Shield,
    title: "70% Cost Reduction",
    description: "Guaranteed in most cases"
  },
  {
    icon: Users,
    title: "Native German Quality Control",
    description: "Direct oversight by native speakers"
  },
  {
    icon: Clock,
    title: "24h Replacement Guarantee",
    description: "Seamless continuity assured"
  },
  {
    icon: Lock,
    title: "Full Confidentiality & NDAs",
    description: "Your data stays secure"
  }
];

export const ValueProposition = () => {
  return (
    <motion.section 
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-background z-10"
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-16 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why <span className="bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--brand-blue))] bg-clip-text text-transparent">200+</span> Brands Choose Our SMM Team
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-green-900 via-green-900 to-green-950 text-white border-2 border-green-800/50 hover:border-green-700 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-3"
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15, 
                ease: [0.6, -0.05, 0.01, 0.99] 
              }}
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-800/30 via-green-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white ring-1 ring-green-600/30 group-hover:scale-110 transition-all duration-500 shadow-[0_18px_40px_-12px_rgba(34,197,94,0.6)]">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-green-100 leading-relaxed">
                  {value.description}
                </p>
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-green-700/0 group-hover:border-green-500/50 rounded-tr-2xl transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};