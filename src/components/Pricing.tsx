import { Button } from "@/components/ui/button";
import { Check, Star, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { fetchPricing, type PricingPlan } from "@/lib/api";

export const Pricing = () => {
  const { t, i18n } = useTranslation();
  const isDe = i18n.language?.startsWith("de");
  const lang = isDe ? "de" : "en";
  const planMeta = (t("pricing.plans", { returnObjects: true }) as Array<{ name: string; hours: string; badge: string }>);

  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchPricing(lang)
      .then((data) => setPlans(data?.plans || []))
      .catch(() => setPlans([]))
      .finally(() => setLoading(false));
  }, [lang]);

  if (loading) {
    return (
      <section id="pricing" className="relative py-8 sm:py-12 md:py-16 lg:py-20 bg-background text-foreground z-10">
        <div className="container mx-auto px-4 flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-green-600" />
        </div>
      </section>
    );
  }

  if (plans.length === 0) return null;

  return (
    <motion.section
      id="pricing"
      className="relative py-8 sm:py-12 md:py-16 lg:py-20 bg-background text-foreground z-10 overflow-hidden"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
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
            {t("pricing.badge")}
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-green-800 dark:text-foreground leading-tight">
            {t("pricing.heading1")} <span className="text-green-600 dark:text-gold">{t("pricing.highlight")}</span> {t("pricing.headingTail")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {t("pricing.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.planKey || index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -12, scale: 1.02 }}
            >
              {plan.popular && (
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-brand via-brand to-brand rounded-2xl"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: "200% 200%" }}
                />
              )}

              <div className="relative rounded-2xl p-6 sm:p-8 md:p-10 transition-all duration-500 group h-full bg-white dark:bg-gradient-to-br dark:from-green-900 dark:via-green-900 dark:to-green-950 text-green-700 dark:text-white border-2 border-green-200 dark:border-green-800/50 hover:border-green-300 dark:hover:border-green-700 hover:shadow-[0_25px_70px_-15px_rgba(34,197,94,0.25)] dark:hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.4)]">
                <motion.div
                  className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl ${plan.popular ? "bg-white/20" : "bg-gradient-to-r from-transparent via-brand to-transparent"}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />

                {(planMeta[index]?.badge || plan.popular) && (
                  <motion.div
                    className="absolute -top-4 right-6 px-4 py-1.5 rounded-full text-xs font-bold shadow-xl flex items-center gap-1.5 bg-green-100 dark:bg-green-600 text-green-800 dark:text-white"
                    initial={{ y: -10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
                      <Star className="w-3.5 h-3.5 fill-current" />
                    </motion.div>
                    {planMeta[index]?.badge || (plan.popular ? (isDe ? "Am beliebtesten" : "Most Popular") : "")}
                  </motion.div>
                )}

                <div className="mb-6 relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300 text-green-800 dark:text-white">
                    {planMeta[index]?.name || plan.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-green-600 dark:text-green-200">
                      {planMeta[index]?.hours || plan.planKey}
                    </p>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 dark:bg-green-800/50 text-green-700 dark:text-green-200">
                      {t("pricing.tag")}
                    </span>
                  </div>
                </div>

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
                      {t("pricing.perMonth")}
                    </span>
                  </div>
                  <p className="text-xs mt-2 font-semibold flex items-center gap-1 text-green-700 dark:text-green-300">
                    <Check className="w-3.5 h-3.5 text-green-700 dark:text-green-300" />
                    {t("pricing.noSetupFee")}
                  </p>
                </div>

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

                <Button
                  size="lg"
                  onClick={() => window.location.href = "/book-meeting"}
                  className="w-full relative z-10 font-bold text-base py-6 sm:py-7 rounded-xl transition-all duration-300 group/btn overflow-hidden min-h-[44px] bg-gradient-to-br from-green-600 via-green-700 to-green-800 dark:bg-white text-white dark:text-green-900 hover:from-green-500 hover:via-green-600 hover:to-green-700 dark:hover:bg-white/90 hover:scale-105 border-2 border-green-600 dark:border-white"
                  aria-label={t("pricing.ctaAria", { plan: planMeta[index]?.name || plan.name, hours: planMeta[index]?.hours || plan.planKey, price: plan.price })}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" aria-hidden="true" />
                  <span className="relative">{t("pricing.ctaSample")}</span>
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
          {t("pricing.footnote")}
        </motion.p>
      </div>
    </motion.section>
  );
};
