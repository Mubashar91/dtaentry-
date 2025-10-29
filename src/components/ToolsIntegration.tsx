import { motion } from "framer-motion";

const tools = [
  { name: "Google Sheets", category: "Spreadsheets" },
  { name: "Microsoft Excel", category: "Spreadsheets" },
  { name: "Airtable", category: "Spreadsheets" },
  { name: "Notion", category: "Spreadsheets" },
  { name: "CSV / TSV", category: "Formats" },
  { name: "Zapier", category: "Automation" },
  { name: "Make (Integromat)", category: "Automation" },
  { name: "Custom APIs", category: "Integration" },
  { name: "HubSpot", category: "CRM" },
  { name: "Salesforce", category: "CRM" },
  { name: "Pipedrive", category: "CRM" },
  { name: "Shopify", category: "eCommerce" },
  { name: "WooCommerce", category: "eCommerce" },
  { name: "BigQuery", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Google Drive", category: "Storage" },
  { name: "OneDrive", category: "Storage" },
  { name: "Docparser", category: "OCR/Docs" },
  { name: "Tesseract OCR", category: "OCR/Docs" }
];

const categories = ["Spreadsheets", "Formats", "Automation", "Integration", "CRM", "eCommerce", "Database", "Storage", "OCR/Docs"];

export const ToolsIntegration = () => {
  return (
    <motion.section 
      className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-gradient-to-b from-background via-muted/30 to-background z-60"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
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
            Seamless <span className="text-green-600 dark:text-gold">Data Integrations</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl px-2">
            We plug into your stack—spreadsheets, CRMs, eCommerce, databases, and automation tools—for smooth intake and delivery.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {tools.slice(0, 18).map((tool, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gradient-to-br dark:from-green-900 dark:via-green-900 dark:to-green-950 border-2 border-green-200 dark:border-green-800/50 rounded-lg p-3 sm:p-4 text-center hover:border-green-300 dark:hover:border-green-700 hover:shadow-[0_10px_30px_-10px_rgba(34,197,94,0.25)] dark:hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
              >
                <p className="text-sm sm:text-base font-semibold text-green-800 dark:text-white transition-colors">
                  {tool.name}
                </p>
                <p className="text-[10px] sm:text-xs text-green-600 dark:text-green-200 mt-1">
                  {tool.category}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-gradient-to-br dark:from-green-900 dark:via-green-900 dark:to-green-950 border-2 border-green-200 dark:border-green-800/50 rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <p className="text-base sm:text-lg text-green-800 dark:text-white mb-3 sm:mb-4">
              <span className="font-bold text-green-700 dark:text-green-300">Using a different system?</span> We adapt. 
            </p>
            <p className="text-sm sm:text-base text-green-700 dark:text-green-100">
              Share your format or API—CSV, Sheets, CRM, or DB. We'll match your workflow end‑to‑end.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};