import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles, Clock, CheckCircle2, Award, FileText } from "lucide-react";
import { motion } from "framer-motion";

export const FinalCTA = () => {
  return (
    <motion.section 
      className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-br from-[hsl(var(--brand-blue)/0.9)] via-[hsl(var(--gold)/0.85)] to-[hsl(var(--brand-blue)/0.9)] z-60"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '36px 36px'
          }} />
          {/* Dark overlay for stronger contrast */}
        <div className="absolute inset-0 pointer-events-none bg-black/30 dark:bg-black/45" />
      </div>
        {/* Soft radial vignette */}
        <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-70 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.06)_30%,transparent_65%)]" />
        {/* Subtle diagonal texture */}
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.08)_0px,rgba(255,255,255,0.08)_2px,transparent_2px,transparent_8px)]" />
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute -top-20 -right-20 w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-emerald-300/20 rounded-full mix-blend-overlay filter blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-16 -left-16 w-32 h-32 xs:w-36 xs:h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 bg-emerald-400/25 rounded-full mix-blend-overlay filter blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Enhanced geometric patterns */}
        <motion.div 
          className="absolute top-10 left-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-2 border-white/25 rounded-lg"
          animate={{ rotate: [0, 90, 180, 270, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-16 right-16 w-12 h-12 sm:w-16 sm:h-16 border-2 border-white/25 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white/35 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-white/35 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Enhanced decorative header */}
          <motion.div 
            className="flex justify-center mb-6 sm:mb-8 md:mb-10"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
          >
            <div className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white/25 backdrop-blur-lg rounded-full text-sm sm:text-base font-bold text-white flex items-center gap-2 border border-white/40 shadow-xl hover:scale-105 transition-transform duration-300">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
              <span className="whitespace-nowrap">Start Your Data Entry Today</span>
              <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-green-400 animate-pulse"></div>
            </div>
          </motion.div>

          {/* Main headline with improved hierarchy */}
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 sm:mb-8 md:mb-10 text-white leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="block drop-shadow-lg">Ready for Clean,</span>
            <span className="relative inline-block mt-2 sm:mt-3">
              <span className="relative z-10 bg-gradient-to-r from-white via-emerald-50 to-white bg-clip-text text-transparent drop-shadow-2xl">
                Accurate Data?
              </span>
              <motion.span 
                className="absolute bottom-2 sm:bottom-3 left-0 w-full h-4 sm:h-5 bg-white/30 -z-0 rounded-full blur-sm"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              />
            </span>
          </motion.h2>
          
          {/* Subtitle with benefits */}
          <motion.div
            className="mb-10 sm:mb-12 md:mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-white/95 mb-8 leading-relaxed font-semibold drop-shadow-md">
              Get spreadsheet‑style data delivered in 24–72 hours
            </p>
            
            {/* Benefits list */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 mt-8">
              {[
                "Free sample included",
                "Template & field mapping",
                "99.9% accuracy QA",
                "24–72h turnaround"
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-full px-4 sm:px-5 py-2 sm:py-2.5 border border-white/30 hover:bg-white/25 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                  <span className="text-white text-sm sm:text-base font-semibold whitespace-nowrap">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Enhanced CTA buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Button 
              size="lg"
              onClick={() => window.location.href = '/book-meeting'}
              className="bg-white text-gold hover:bg-white/95 hover:scale-[1.08] active:scale-[1.02] group px-8 sm:px-12 py-6 sm:py-8 text-base sm:text-lg font-extrabold rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.5)] transition-all duration-300 border-2 border-white relative overflow-hidden cursor-pointer w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 animate-pulse" />
              <span className="relative flex items-center gap-3">
                <span>Get Free Sample</span>
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={() => window.open('https://wa.me/YOUR_WHATSAPP_NUMBER', '_blank')}
              className="bg-white/10 border-3 border-white text-white hover:bg-white hover:text-gold hover:scale-[1.08] active:scale-[1.02] px-6 sm:px-10 py-6 sm:py-8 text-base sm:text-lg font-bold rounded-2xl backdrop-blur-lg transition-all duration-300 group relative overflow-hidden cursor-pointer w-full sm:w-auto shadow-lg hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-3">
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>Quick WhatsApp Chat</span>
              </span>
            </Button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            {[
              { icon: FileText, value: "5M+", label: "Records Processed" },
              { icon: CheckCircle2, value: "99.9%", label: "Accuracy (QA)" },
              { icon: Clock, value: "24–72h", label: "Avg. Turnaround" },
              { icon: Award, value: "98%", label: "On‑time Delivery" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/15 backdrop-blur-lg border border-white/30 rounded-2xl p-4 sm:p-6 hover:bg-white/25 transition-all duration-300 group"
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-2 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced trust indicators */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="flex items-center justify-center gap-3 text-white/90 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="p-2 bg-green-400/20 rounded-lg">
                <Clock className="w-5 h-5 text-green-400 flex-shrink-0" />
              </div>
              <div className="text-left">
                <div className="font-bold text-white text-base">15 min</div>
                <div className="text-sm text-white/80">Free consultation</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 text-white/90 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="p-2 bg-green-400/20 rounded-lg relative">
                <div className="w-5 h-5 rounded-full bg-green-400 animate-pulse" />
                <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
              </div>
              <div className="text-left">
                <div className="font-bold text-white text-base">2 hours</div>
                <div className="text-sm text-white/80">Avg. response time</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 text-white/90 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="p-2 bg-green-400/20 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
              </div>
              <div className="text-left">
                <div className="font-bold text-white text-base">No commitment</div>
                <div className="text-sm text-white/80">Zero pressure</div>
              </div>
            </div>
          </motion.div>

          {/* Additional reassurance text */}
          <motion.p 
            className="mt-8 sm:mt-10 text-white/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="flex items-center justify-center gap-2 flex-wrap">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              Join 500+ teams shipping clean datasets with our proven data entry workflows
            </span>
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};