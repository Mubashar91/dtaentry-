import { Star, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { fetchTestimonials, type Testimonial } from "@/lib/api";

export const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const isDe = i18n.language?.startsWith("de");
  const lang = isDe ? "de" : "en";

  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState<Testimonial | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchTestimonials(lang)
      .then((data) => {
        const rows = Array.isArray(data?.testimonials)
          ? [...data.testimonials].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
          : [];
        setTestimonials(rows);
      })
      .catch(() => setTestimonials([]))
      .finally(() => setLoading(false));
  }, [lang]);

  if (loading) {
    return (
      <section id="testimonials" className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-background text-foreground z-40">
        <div className="container mx-auto px-4 flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-green-600" />
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return (
      <section id="testimonials" className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-background text-foreground z-40">
        <div className="container mx-auto px-4 text-center py-20">
          <p className="text-muted-foreground">
            {isDe ? "Keine Testimonials verfügbar." : "No testimonials available."}
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
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
              {t("testimonials.title1")} <span className="text-green-600 dark:text-gold">{t("testimonials.highlight")}</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl px-2">
              {t("testimonials.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial._id || index}
                className="bg-white dark:bg-gradient-to-br dark:from-green-900 dark:via-green-900 dark:to-green-950 border-2 border-green-200 dark:border-green-800/50 rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 hover:border-green-300 dark:hover:border-green-700 hover:shadow-[0_30px_120px_-30px_rgba(34,197,94,0.35)] dark:hover:shadow-[0_30px_120px_-30px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                onClick={() => setOpen(testimonial)}
              >
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
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
                {t("testimonials.storyBadge")}
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-green-800 dark:text-white">
                {t("testimonials.storyTitlePrefix")} <span className="text-green-600 dark:text-green-300">450% Organic Traffic Growth in 6 Months</span>
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-green-700 dark:text-green-100 mb-5 sm:mb-6 leading-relaxed max-w-3xl">
                {isDe
                  ? "Erfahren Sie, wie ein E-Commerce-Shop von 2.000 auf 11.000 monatliche organische Besucher wuchs."
                  : "See how an e-commerce store went from 2K to 11K monthly organic visitors and turned SEO into their #1 revenue channel."}
              </p>
              <Button size="lg" className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 bg-white text-green-900 hover:bg-white/90 transition-all duration-300 hover:scale-105 font-semibold">
                {t("testimonials.storyCta")}
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <AnimatePresence>
        {open && (
          <motion.div
            key="review-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ y: 40, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
              className="relative w-full max-w-2xl bg-white dark:bg-gradient-to-br dark:from-green-950 dark:via-green-900 dark:to-green-950 border border-green-800/40 rounded-2xl p-6 sm:p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-green-800 dark:text-green-100 hover:text-gold transition-colors"
                aria-label="Close"
                onClick={() => setOpen(null)}
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex gap-2 mb-4">
                {[...Array(open.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-base sm:text-lg leading-relaxed text-green-800 dark:text-green-50 mb-6">
                "{open.content}"
              </p>
              <div className="border-t border-green-200 dark:border-green-800/50 pt-4">
                <p className="text-base font-bold text-green-900 dark:text-white">{open.name}</p>
                <p className="text-sm text-green-700 dark:text-green-300">{open.role}</p>
                <p className="text-sm text-green-700 dark:text-green-200">{open.company}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
