import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { caseStudies } from "@/data/caseStudies";
import type { CaseStudy } from "@/data/caseStudies";

export const CaseStudies = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isDe = i18n.language && i18n.language.startsWith("de");

  return (
    <motion.section
      id="case-studies"
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-gradient-to-b from-background via-muted/30 to-background"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-8 sm:mb-12 lg:mb-16 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
            {t("caseStudies.badge")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-green-800 dark:text-foreground">
            {t("caseStudies.title")}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            {t("caseStudies.subtitle")}
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white dark:bg-gradient-to-br dark:from-green-900 dark:via-green-900 dark:to-green-950 border-2 border-green-200 dark:border-green-800/50 rounded-xl sm:rounded-2xl overflow-hidden hover:border-green-300 dark:hover:border-green-700 hover:shadow-[0_20px_60px_-15px_rgba(34,197,94,0.25)] dark:hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] transition-all duration-300 cursor-pointer w-full"
              onClick={() => navigate(`/case-study/${study.id}`)}
              whileHover={{ y: -8 }}
            >
              {(() => {
                // Localized fields with fallback
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const title = (t(`caseStudies.items.${study.id}.title`) as any) || study.title;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const challenge = (t(`caseStudies.items.${study.id}.challenge`) as any) || study.challenge;
                return (
                  <>
                    {/* Image */}
                    <div className="relative h-44 sm:h-52 md:h-48 lg:h-56 overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.company}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                        <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 bg-green-100 dark:bg-green-600 text-green-800 dark:text-white text-xs font-bold rounded-full mb-1.5 sm:mb-2">
                          {study.industry}
                        </span>
                        <h3 className="text-white font-bold text-base sm:text-lg line-clamp-2">
                          {study.company}
                        </h3>
                      </div>
                      {isDe && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-3 sm:p-4 w-full">
                            <h4 className="text-white font-bold text-sm sm:text-base lg:text-lg mb-1 line-clamp-2">
                              {title}
                            </h4>
                            <p className="text-white/90 text-xs sm:text-sm line-clamp-2">
                              {challenge}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5 lg:p-6">
                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-5 pb-4 sm:pb-5 border-b border-green-200 dark:border-green-800/50">
                        <div className="text-center">
                          <div className="text-green-800 dark:text-white font-bold text-sm sm:text-base lg:text-lg">{study.stats.mainResult}</div>
                          <div className="text-[10px] sm:text-xs text-green-600 dark:text-green-200">{t("caseStudies.labels.result")}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-green-800 dark:text-white font-bold text-sm sm:text-base lg:text-lg">{study.stats.seoFocus}</div>
                          <div className="text-[10px] sm:text-xs text-green-600 dark:text-green-200">{t("caseStudies.labels.focus")}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-green-800 dark:text-white font-bold text-sm sm:text-base lg:text-lg">{study.stats.timeframe}</div>
                          <div className="text-[10px] sm:text-xs text-green-600 dark:text-green-200">{t("caseStudies.labels.timeframe")}</div>
                        </div>
                      </div>

                      {/* Title & Challenge (hidden for DE; shown in image overlay) */}
                      {!isDe && (
                        <>
                          <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 text-green-800 dark:text-white transition-colors line-clamp-2">
                            {title}
                          </h4>
                          <p className="text-xs sm:text-sm text-green-700 dark:text-green-100 mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                            {challenge}
                          </p>
                        </>
                      )}

                      {/* Read more */}
                      <div className="flex items-center gap-1 sm:gap-2 text-green-600 dark:text-green-300 font-semibold text-xs sm:text-sm group-hover:gap-2 sm:group-hover:gap-3 transition-all">
                        <span className="hidden sm:inline">{t("caseStudies.viewFull")}</span>
                        <span className="sm:hidden">{t("caseStudies.viewShort")}</span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-12 lg:mt-16 text-center"
        >
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-6">
            {t("caseStudies.ctaPrompt")}
          </p>
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white font-semibold text-sm sm:text-base rounded-lg sm:rounded-xl hover:from-green-500 hover:via-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 shadow-lg">
            <span className="hidden sm:inline">{t("caseStudies.ctaButtonFull")} →</span>
            <span className="sm:hidden">{t("caseStudies.ctaButtonShort")} →</span>
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};
