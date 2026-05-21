import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { fetchBlog, type BlogPost } from "@/lib/api";

export const Blog = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isDe = i18n.language?.startsWith("de");
  const lang = isDe ? "de" : "en";

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchBlog(lang)
      .then((data) => {
        const blogs = Array.isArray(data?.blogs)
          ? [...data.blogs].sort((a, b) => (a.order ?? 0) - (b.order ?? 0) || a.blogId - b.blogId)
          : [];
        setPosts(blogs);
      })
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, [lang]);

  if (loading) {
    return (
      <section id="blog" className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-background overflow-hidden">
        <div className="container mx-auto px-4 flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-green-600" />
        </div>
      </section>
    );
  }

  if (posts.length === 0) return null;

  return (
    <motion.section
      id="blog"
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-background overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative mb-8 sm:mb-12 lg:mb-16 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
            {t("blog.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-green-800 dark:text-foreground">
            {t("blog.title1")} <span className="text-green-600 dark:text-gold">{t("blog.highlight")}</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            {t("blog.subtitle")}
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.blogId}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white dark:bg-gradient-to-br dark:from-green-900 dark:via-green-900 dark:to-green-950 border-2 border-green-200 dark:border-green-800/50 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden hover:border-green-300 dark:hover:border-green-700 hover:shadow-[0_20px_60px_-15px_rgba(34,197,94,0.25)] dark:hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] transition-all duration-300 cursor-pointer w-full flex flex-col"
                onClick={() => navigate(`/blog/${post.blogId}`)}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="px-2.5 py-1 sm:px-3 bg-green-100 dark:bg-green-600 text-green-800 dark:text-white text-[10px] sm:text-xs font-bold rounded-full">
                      {post.category}
                    </span>
                  </div>
                  {isDe && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-3 sm:p-4 w-full">
                        <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg mb-1 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-white/90 text-xs sm:text-sm line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-green-600 dark:text-green-200 mb-2 sm:mb-3 flex-wrap">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span className="truncate">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  {!isDe && (
                    <>
                      <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 sm:mb-3 text-green-800 dark:text-white transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-green-700 dark:text-green-100 mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </>
                  )}

                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-green-200 dark:border-green-800/50">
                    <span className="text-[10px] sm:text-xs text-green-600 dark:text-green-200 truncate">{t("blog.by")} {post.author}</span>
                    <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                      <div className="flex items-center gap-1 text-green-600 dark:text-green-300 font-semibold text-[10px] sm:text-xs group-hover:gap-1.5 transition-all">
                        <span className="hidden sm:inline">{t("blog.read")}</span>
                        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
