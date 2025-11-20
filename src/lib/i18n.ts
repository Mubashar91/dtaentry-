import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Detect saved language or default to English
const savedLng = (typeof window !== "undefined" && localStorage.getItem("lng")) || "en";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: {
          nav: {
            services: "Services",
            howItWorks: "How It Works",
            pricing: "Pricing",
            testimonials: "Testimonials",
            faq: "FAQ"
          },
          actions: {
            getStarted: "Get Started"
          },
          lang: {
            en: "EN",
            de: "DE",
            toggleAria: "Toggle language"
          },
          hero: {
            badge: "Trusted by 500+ Businesses Worldwide",
            title1: "Fast, Accurate",
            titleHighlight: "Data Entry Services",
            subtitle: "Spreadsheet-style data entry with validation, clean-up, and QA. We handle forms, lists, catalogs, surveys, OCR docs, and bulk updates—accurately and on time.",
            ctaFull: "Book Data Entry Consult (15 min)",
            ctaShort: "Book Consult",
            stats: {
              records: "Records Processed",
              turnaround: "Avg Turnaround",
              accuracy: "Accuracy (QA)"
            }
          },
          howItWorks: {
            badge: "Data Entry in 4 Steps",
            heading1: "How It",
            headingHighlight: "Works",
            description: "From scoping to delivery in 24–72 hours for most projects. Clear rules, consistent outputs, and measurable quality.",
            cta: "Get Free Sample",
            steps: [
              {
                step: "Step 1",
                title: "Intake & Scoping",
                description: "Share samples and rules. We confirm fields, validations, volumes, SLAs, and delivery format (Sheets, CSV, CRM)."
              },
              {
                step: "Step 2",
                title: "Template & Sample",
                description: "We build a spreadsheet-style template and deliver a free sample so you can review structure and quality."
              },
              {
                step: "Step 3",
                title: "Data Entry & Validation",
                description: "Our team enters data with keyboard‑first shortcuts and automated checks to prevent duplicates and format issues."
              },
              {
                step: "Step 4",
                title: "QA & Delivery",
                description: "Second‑pass QA, issue fixes, and final delivery. Ongoing maintenance available for weekly or monthly updates."
              }
            ]
          },
          services: {
            badge: "Our Data Entry Services",
            heading: "How We",
            highlight: "Power",
            headingTail: "Your Data Ops",
            description: "End‑to‑end data entry operations—intake, cleaning, validation, and delivery—so your team can focus on growth, not spreadsheets.",
            items: [
              {
                title: "Form & Document Processing",
                description: "Accurate entry from PDFs, scans, and forms (OCR-assisted) with double-check QA for zero missing fields",
                benefit: "99.9% accuracy"
              },
              {
                title: "Data Cleaning & Normalization",
                description: "De-duplication, formatting, standardization, and validation rules to keep your datasets consistent",
                benefit: "Clean, reliable data"
              },
              {
                title: "Catalog & Listing Management",
                description: "Product attributes, SKUs, images, pricing, and bulk updates for eCommerce, marketplaces, and CMS",
                benefit: "Faster updates"
              },
              {
                title: "Web Research & Data Collection",
                description: "Verified lead lists and datasets compiled from trusted sources, enriched with the fields you need",
                benefit: "Quality leads/data"
              },
              {
                title: "CRM/Sheet Migration",
                description: "Import/export, schema mapping, and safe migration between spreadsheets, CRMs, and databases",
                benefit: "Seamless migration"
              },
              {
                title: "QA & Ongoing Maintenance",
                description: "Routine audits, spot checks, and SLAs to keep records accurate as your data changes over time",
                benefit: "Zero drift"
              }
            ]
          },
          pricing: {
            badge: "Transparent Pricing",
            heading1: "Simple,",
            highlight: "Usage-Based",
            headingTail: "Packages",
            description: "Choose a data entry package sized to your volume. Scale anytime. No hidden fees.",
            tag: "Data Entry",
            perMonth: "/mo",
            noSetupFee: "No setup fee",
            setupFeePlus: "+ ${{amount}} setup fee",
            ctaSample: "Get Free Sample",
            ctaAria: "Get started with {{plan}} plan - {{hours}} at {{price}} per month",
            footnote: "All plans are billed monthly with no long-term contracts. Upgrade or downgrade anytime. Typical turnaround 24–72h depending on volume.",
            plans: [
              {
                name: "Starter",
                hours: "Up to 1k records/mo",
                badge: ""
              },
              {
                name: "Growth",
                hours: "Up to 10k records/mo",
                badge: "Most Popular"
              },
              {
                name: "Enterprise",
                hours: "50k+ records & custom",
                badge: "Best Value"
              }
            ]
          },
          faq: {
            badge: "Got Questions?",
            heading1: "Frequently Asked",
            highlight: "Questions",
            description: "Everything you need to know about our Data Entry services. Can't find what you're looking for? Chat with us.",
            contactTitle: "Still have questions?",
            contactDesc: "Our team is here to help. Get in touch and we'll respond within 2 hours.",
            contactCta: "Contact Support",
            viewPricing: "View Pricing",
            items: [
              {
                q: "How fast can you deliver data entry projects?",
                a: "Most small projects (up to ~5k records) are delivered within 24–72 hours. Larger volumes include phased delivery so you see progress daily."
              },
              {
                q: "How do you ensure accuracy?",
                a: "We use a structured template, validation rules, and a second‑pass QA check. For critical fields, we can enable double‑entry verification to reach 99.9%+."
              },
              {
                q: "What formats do you accept and deliver?",
                a: "We accept PDFs/scans (OCR), CSV/TSV, Sheets/Excel, and exports from CRMs. We deliver in your preferred format (CSV, Sheets, Excel) or push directly to your CRM/API."
              },
              {
                q: "Can you work in our systems?",
                a: "Yes. We can work directly in Google Sheets, Excel, Airtable, or your CRM (e.g., HubSpot, Salesforce) with the appropriate access and permissions."
              },
              {
                q: "Is our data secure and confidential?",
                a: "We follow least‑privilege access, NDA by default if required, and encrypted file transfer. We can use your shared drives and restrict editing to assigned users."
              },
              {
                q: "Do you handle ongoing maintenance?",
                a: "Yes. We offer weekly/monthly maintenance for catalog updates, CRM hygiene, deduplication, and regular QA audits."
              }
            ]
          },
          finalCta: {
            badge: "Start Your Data Entry Today",
            headline1: "Ready for Clean,",
            headline2: "Accurate Data?",
            sub: "Get spreadsheet‑style data delivered in 24–72 hours",
            btnSample: "Get Free Sample",
            btnWhatsapp: "Quick WhatsApp Chat",
            benefits: [
              "Free sample included",
              "Template & field mapping",
              "99.9% accuracy QA",
              "24–72h turnaround"
            ],
            stats: {
              records: "Records Processed",
              accuracy: "Accuracy (QA)",
              turnaround: "Avg. Turnaround",
              ontime: "On‑time Delivery"
            },
            trust: {
              consultTime: "Free consultation",
              responseTime: "Avg. response time",
              noCommit: "No commitment",
              zeroPressure: "Zero pressure"
            },
            footer: "Join 500+ teams shipping clean datasets with our proven data entry workflows"
          }
          ,
          blog: {
            badge: "Latest Insights",
            title1: "Blog &",
            highlight: "Resources",
            subtitle: "Guides and playbooks for fast, accurate, spreadsheet‑style data operations—cleaning, OCR, QA, and migrations.",
            read: "Read",
            by: "By",
            posts: {
              1: {
                category: "Data Cleaning",
                title: "Data Cleaning 101: Normalize, Deduplicate, Validate",
                excerpt: "Practical steps to clean messy spreadsheets fast—formats, duplicates, ranges, and validation rules that prevent errors.",
                readTime: "7 min read"
              },
              2: {
                category: "OCR & Docs",
                title: "Build an OCR Pipeline: From PDFs to Structured Sheets",
                excerpt: "How to turn scanned forms into clean rows using OCR tools and human QA.",
                readTime: "6 min read"
              },
              3: {
                category: "Productivity",
                title: "Spreadsheet Shortcuts for Speed: Be Keyboard-First",
                excerpt: "Save minutes per hundred rows with power shortcuts for Sheets and Excel.",
                readTime: "5 min read"
              },
              4: {
                category: "CRM Migration",
                title: "Migrate Your CRM Safely: Mapping, Imports, Rollback",
                excerpt: "Step-by-step approach for moving data between CRMs with zero data loss.",
                readTime: "8 min read"
              },
              5: {
                category: "Data Ops",
                title: "Bulk Updates Without Breaking Things",
                excerpt: "Techniques to perform high-volume updates with safety nets and audits.",
                readTime: "9 min read"
              },
              6: {
                category: "Quality Assurance",
                title: "QA for Data Entry: Reach 99.9%+ Accuracy",
                excerpt: "Design a QA process with samples, rules, and double-entry for critical fields.",
                readTime: "8 min read"
              }
            }
          },
          blogDetail: {
            back: "Back to Home",
            moreArticles: "More Articles",
            toc: "On this page",
            breadcrumbsHome: "Home",
            breadcrumbsBlog: "Blog",
            takeaways: "Key Takeaways",
            conclusion: "Conclusion",
            ctaTitle: "Ready to Transform Your Business?",
            ctaSubtitle: "Book a free consultation and discover how virtual assistants can help you scale.",
            ctaButton: "Book Free Consultation"
          },
          // Optional long-form HTML overrides per blog post
          blogLong: {
            1: {
              content: "<h2>Essential Cleaning Steps</h2><p>Start by auditing your dataset to identify duplicated records, formatting inconsistencies, and missing values. Establish a canonical format for dates, phone numbers, and currencies. Use helper columns for checks, then validate at import.</p><h3>Normalization & Standards</h3><ul><li>Adopt ISO date formats</li><li>Strip whitespace & non‑printables</li><li>Consistent casing for names and titles</li></ul><p>Create a data dictionary documenting accepted ranges, canonical casing, and mapping rules. Share it with all contributors.</p><h3>Deduplication</h3><p>Use composite unique keys and fuzzy matching thresholds. Review borderline matches in a QA queue. Document rules for repeatability.</p><h3>Validation Rules</h3><ul><li>Required fields and regex checks</li><li>Dropdowns for controlled vocabulary</li><li>Cross‑field validations (e.g., country/state)</li></ul><h3>QA Workflow</h3><p>Sample 5–10% of rows; track error types and feed corrections back into rules. Maintain a changelog with author and timestamp.</p>"
            },
            2: {
              content: "<h2>OCR to Sheet</h2><p>Design your template first, then map fields from OCR output. Run human verification on low‑confidence fields only. Keep confidence thresholds in a log to improve over time.</p><h3>Pipeline</h3><ol><li>Template definition and field mapping</li><li>OCR extraction with confidence scores</li><li>Normalization and validation of raw fields</li><li>Human verification for low‑confidence items</li><li>Export to CSV/Sheets and delivery</li></ol><h3>Tooling</h3><p>Combine Tesseract for raw OCR with Docparser for layout‑aware extraction. Use image pre‑processing (deskewing, denoising) to boost accuracy.</p><h3>QA & Monitoring</h3><p>Track false‑positive and false‑negative rates. Continuously refine zones and regex rules used by the extractor.</p>"
            },
            3: {
              content: "<h2>Keyboard‑First Workflow</h2><p>Optimize your spreadsheet flow for speed: keep hands on the keyboard and minimize context switching.</p><h3>Power Shortcuts</h3><ul><li>Multi‑cell paste / fill series</li><li>Split & merge with Text‑to‑Columns</li><li>Regex‑based Find & Replace</li><li>Custom hotkeys for repetitive actions</li></ul><h3>Navigation</h3><p>Jump across sheets and named ranges with hotkeys. Use quick‑jump search palettes to open sheets and filters.</p><h3>Views & Filters</h3><p>Create Saved Filters and custom views to switch between QA, enrichment, and delivery instantly. Lock columns for stable navigation.</p><h3>Bulk Edits</h3><p>Batch edit with structured find/replace across ranges; stage changes in a duplicate sheet to allow rollback.</p>"
            },
            4: {
              content: "<h2>Safe CRM Migration</h2><p>De‑risk your move with a staged plan.</p><h3>Staging & Mapping</h3><ul><li>Build a field map with owners</li><li>Run a test import sandbox</li><li>Define rollback checkpoints</li></ul><h3>Batch Strategy</h3><p>Migrate by segments (owners or lifecycle stages) to reduce blast radius. Freeze writes during critical windows.</p><h3>Post‑Import QA</h3><p>Verify relationships, activities, and ownership; fix edge cases with scripted updates. Compare counts and key metrics pre/post.</p>"
            },
            5: {
              content: "<h2>Bulk Updates Without Risk</h2><p>Use safety nets for large changes.</p><h3>Pre‑flight</h3><ul><li>Stage changes in a copy</li><li>Run diff and validation scripts</li><li>Export backups</li></ul><h3>Execution</h3><p>Apply changes in batches with checkpoints. Validate after each batch and pause on anomaly detection.</p><h3>Audit Trail</h3><p>Log user, time, and before/after values so you can revert quickly. Keep a revert script prepared.</p>"
            },
            6: {
              content: "<h2>QA to 99.9%+</h2><p>Blend rules with sampling to maximize quality.</p><h3>Validation Rules</h3><ul><li>Required fields + regex checks</li><li>Dropdowns for controlled vocab</li><li>Duplicate detection</li></ul><h3>Sampling & Metrics</h3><p>Define acceptance criteria (AQL). Track error types, severities, and MTTR to improve.</p><h3>Double‑Entry for Critical Fields</h3><p>Use blind entry for high‑impact fields and reconcile conflicts. Automate adjudication where possible.</p>"
            }
          },
          caseStudies: {
            badge: "Success Stories",
            title: "Data Entry Success Stories",
            subtitle: "See how teams shipped clean datasets faster—catalogs normalized, CRMs migrated, and surveys validated with high accuracy.",
            labels: { result: "Result", focus: "Focus", timeframe: "Timeframe" },
            viewFull: "View Full Case Study",
            viewShort: "View Study",
            ctaPrompt: "Ready to write your own success story?",
            ctaButtonFull: "Book Your Free Consultation",
            ctaButtonShort: "Get Started",
            items: {
              1: {
                title: "Catalog Clean-Up: 50k SKUs Normalized with 99.9% Accuracy",
                challenge: "Duplicate SKUs, inconsistent attributes, and mismatched images across thousands of products created order errors and returns.",
                solution: "Template-driven attribute mapping, deduping, image/variant alignment, and QA double-check before import to the storefront."
              },
              2: {
                title: "CRM Migration: 25k Contacts Moved with Zero Data Loss",
                challenge: "Legacy CRM fields did not map cleanly to the new CRM. High risk of lost notes and bad owner assignments.",
                solution: "Schema mapping, test imports, rollback plan, and staged batch imports with validation and audit logs."
              },
              3: {
                title: "Survey Data Entry: 100k Responses Cleaned and Validated",
                challenge: "Survey exports had inconsistent formats, missing fields, and free‑text that needed normalization for analysis.",
                solution: "Validation rules with dropdowns, regex standardization for phone/emails, and helper columns for QA checks."
              }
            }
          },
          caseStudyDetail: {
            back: "Back to Home",
            challenge: "The Challenge",
            solution: "The Solution",
            results: "The Results",
            more: "More Success Stories",
            ctaBadge: "Success Awaits",
            ctaTitle: "Ready to Achieve",
            ctaTitleHighlight: "Similar Results?",
            ctaSubtitle: "Book a free 15-minute consultation and discover how we can help you reduce costs and scale your operations.",
            ctaBook: "Book Free Consultation",
            ctaViewAll: "View All Case Studies",
            perks: { noCommit: "No Commitment", minutes: "15 Minutes", free: "100% Free" }
          },
          testimonials: {
            title1: "Trusted by",
            highlight: "Brands That Rank",
            subtitle: "Real SEO results from real businesses who partnered with us.",
            storyBadge: "Success Story",
            storyTitlePrefix: "Case Study:",
            storyCta: "View Full Case Study",
            items: [
              {
                name: "Emma Rodriguez",
                company: "Luxe Beauty Co.",
                role: "Founder",
                rating: 5,
                content: "Our organic traffic increased 400% in 8 months. We went from page 3 to ranking #1 for our main keywords. The ROI from SEO has been incredible. They set up a content plan, fixed technical issues, and built links that actually moved the needle."
              },
              {
                name: "David Chen",
                company: "Peak Performance Coaching",
                role: "CEO",
                rating: 5,
                content: "Local SEO was a game changer. We now dominate local search and get 15+ qualified leads per week from Google. Best investment we've made. The team handled listings, reviews, and on-page improvements flawlessly."
              },
              {
                name: "Sophie Martens",
                company: "Urban Eats",
                role: "Marketing Lead",
                rating: 5,
                content: "Their technical SEO audit fixed issues we didn't even know existed. Site speed improved 85% and we're ranking for 300+ keywords now. Clear reporting and quick wins every week."
              }
            ]
          },
          tools: {
            title1: "Seamless",
            highlight: "Data Integrations",
            subtitle: "We plug into your stack—spreadsheets, CRMs, eCommerce, databases, and automation tools—for smooth intake and delivery.",
            adaptTitleStrong: "Using a different system?",
            adaptTitleRest: " We adapt.",
            adaptDesc: "Share your format or API—CSV, Sheets, CRM, or DB. We'll match your workflow end‑to‑end.",
            categories: {
              Spreadsheets: "Spreadsheets",
              Formats: "Formats",
              Automation: "Automation",
              Integration: "Integration",
              CRM: "CRM",
              eCommerce: "eCommerce",
              Database: "Database",
              Storage: "Storage",
              "OCR/Docs": "OCR/Docs"
            }
          }
        }
      },
      de: {
        common: {
          nav: {
            services: "Dienstleistungen",
            howItWorks: "So funktioniert es",
            pricing: "Preise",
            testimonials: "Referenzen",
            faq: "FAQ"
          },
          actions: {
            getStarted: "Loslegen"
          },
          lang: {
            en: "EN",
            de: "DE",
            toggleAria: "Sprache umschalten"
          },
          hero: {
            badge: "Von über 500 Unternehmen weltweit vertraut",
            title1: "Schnelle, präzise",
            titleHighlight: "Datenerfassungs‑Services",
            subtitle: "Tabellenähnliche Dateneingabe mit Validierung, Bereinigung und QS. Wir übernehmen Formulare, Listen, Kataloge, Umfragen, OCR‑Dokumente und Massen‑Updates – genau und termingerecht.",
            ctaFull: "Datenerfassungs‑Beratung buchen (15 Min)",
            ctaShort: "Beratung buchen",
            stats: {
              records: "Verarbeitete Datensätze",
              turnaround: "Durchschn. Bearbeitungszeit",
              accuracy: "Genauigkeit (QS)"
            }
          },
          howItWorks: {
            badge: "Dateneingabe in 4 Schritten",
            heading1: "So",
            headingHighlight: "funktioniert's",
            description: "Von der Planung bis zur Lieferung in 24–72 Stunden bei den meisten Projekten. Klare Regeln, konsistente Ergebnisse und messbare Qualität.",
            cta: "Kostenlose Probe erhalten",
            steps: [
              {
                step: "Schritt 1",
                title: "Intake & Abgrenzung",
                description: "Sie teilen Beispiele und Regeln. Wir bestätigen Felder, Validierungen, Volumen, SLAs und das Lieferformat (Sheets, CSV, CRM)."
              },
              {
                step: "Schritt 2",
                title: "Vorlage & Muster",
                description: "Wir erstellen eine Tabellen‑Vorlage und liefern ein kostenloses Muster, damit Sie Struktur und Qualität prüfen können."
              },
              {
                step: "Schritt 3",
                title: "Dateneingabe & Validierung",
                description: "Unser Team erfasst Daten mit Tastatur‑Shortcuts und automatischen Prüfungen, um Duplikate und Formatfehler zu vermeiden."
              },
              {
                step: "Schritt 4",
                title: "QS & Lieferung",
                description: "Zweitprüfung, Fehlerbehebung und finale Lieferung. Laufende Wartung für wöchentliche oder monatliche Updates verfügbar."
              }
            ]
          },
          services: {
            badge: "Unsere Datenerfassungs‑Leistungen",
            heading: "So",
            highlight: "stärken",
            headingTail: "wir Ihre Data Ops",
            description: "End‑to‑End‑Datenerfassung – Intake, Bereinigung, Validierung und Lieferung – damit Ihr Team sich auf Wachstum statt Tabellen konzentrieren kann.",
            items: [
              {
                title: "Formular‑ & Dokumentenverarbeitung",
                description: "Präzise Erfassung aus PDFs, Scans und Formularen (mit OCR) mit Doppel‑QS für null fehlende Felder",
                benefit: "99,9 % Genauigkeit"
              },
              {
                title: "Datenbereinigung & Normalisierung",
                description: "Deduplizierung, Formatierung, Standardisierung und Validierungsregeln für konsistente Datensätze",
                benefit: "Saubere, zuverlässige Daten"
              },
              {
                title: "Katalog‑ & Listenmanagement",
                description: "Produktattribute, SKUs, Bilder, Preise und Massen‑Updates für E‑Commerce, Marktplätze und CMS",
                benefit: "Schnellere Updates"
              },
              {
                title: "Web‑Recherche & Datensammlung",
                description: "Verifizierte Lead‑Listen und Datensätze aus vertrauenswürdigen Quellen, angereichert mit den Feldern, die Sie benötigen",
                benefit: "Qualifizierte Leads/Daten"
              },
              {
                title: "CRM/Sheet‑Migration",
                description: "Import/Export, Schema‑Mapping und sichere Migration zwischen Tabellen, CRMs und Datenbanken",
                benefit: "Nahtlose Migration"
              },
              {
                title: "QS & laufende Wartung",
                description: "Regelmäßige Audits, Stichproben und SLAs, um Datensätze bei Änderungen aktuell zu halten",
                benefit: "Null Drift"
              }
            ]
          },
          pricing: {
            badge: "Transparente Preise",
            heading1: "Einfache,",
            highlight: "nutzungsbasierte",
            headingTail: "Pakete",
            description: "Wählen Sie ein Paket passend zu Ihrem Volumen. Jederzeit skalieren. Keine versteckten Gebühren.",
            tag: "Datenerfassung",
            perMonth: "/Monat",
            noSetupFee: "Keine Einrichtungsgebühr",
            setupFeePlus: "+ ${{amount}} Einrichtungsgebühr",
            ctaSample: "Kostenlose Probe erhalten",
            ctaAria: "Starten Sie mit dem {{plan}}‑Paket – {{hours}} für {{price}} pro Monat",
            footnote: "Alle Pläne werden monatlich ohne langfristige Verträge abgerechnet. Upgrade/Downgrade jederzeit. Typische Bearbeitungszeit 24–72h je nach Volumen.",
            plans: [
              {
                name: "Starter",
                hours: "Bis zu 1k Datensätze/Monat",
                badge: ""
              },
              {
                name: "Growth",
                hours: "Bis zu 10k Datensätze/Monat",
                badge: "Am beliebtesten"
              },
              {
                name: "Enterprise",
                hours: "50k+ Datensätze & individuell",
                badge: "Bestes Preis‑Leistungs‑Verhältnis"
              }
            ]
          },
          faq: {
            badge: "Noch Fragen?",
            heading1: "Häufig gestellte",
            highlight: "Fragen",
            description: "Alles, was Sie über unsere Datenerfassungs‑Services wissen müssen. Nicht fündig geworden? Schreiben Sie uns.",
            contactTitle: "Sie haben noch Fragen?",
            contactDesc: "Unser Team hilft gerne. Kontaktieren Sie uns – wir antworten innerhalb von 2 Stunden.",
            contactCta: "Support kontaktieren",
            viewPricing: "Preise ansehen",
            items: [
              {
                q: "Wie schnell liefern Sie Dateneingabe‑Projekte?",
                a: "Kleine Projekte (bis ~5k Datensätze) liefern wir in 24–72 Stunden. Größere Volumina liefern wir phasenweise, sodass Sie täglich Fortschritte sehen."
              },
              {
                q: "Wie stellen Sie Genauigkeit sicher?",
                a: "Wir nutzen strukturierte Vorlagen, Validierungsregeln und eine zweite QS‑Prüfung. Für kritische Felder können wir Doppel‑Eingabe aktivieren, um 99,9%+ zu erreichen."
              },
              {
                q: "Welche Formate akzeptieren und liefern Sie?",
                a: "Wir akzeptieren PDFs/Scans (OCR), CSV/TSV, Sheets/Excel und CRM‑Exporte. Wir liefern in Ihrem Wunschformat (CSV, Sheets, Excel) oder pushen direkt in Ihr CRM/API."
              },
              {
                q: "Arbeiten Sie in unseren Systemen?",
                a: "Ja. Wir arbeiten direkt in Google Sheets, Excel, Airtable oder Ihrem CRM (z. B. HubSpot, Salesforce) mit passenden Zugriffsrechten."
              },
              {
                q: "Sind unsere Daten sicher und vertraulich?",
                a: "Wir folgen dem Least‑Privilege‑Prinzip, NDA auf Wunsch, verschlüsselter Transfer. Wir nutzen Ihre geteilten Laufwerke und beschränken Bearbeitung auf zugewiesene Nutzer."
              },
              {
                q: "Übernehmen Sie laufende Wartung?",
                a: "Ja. Wir bieten wöchentliche/monatliche Pflege für Kataloge, CRM‑Hygiene, Deduplizierung und regelmäßige QS‑Audits."
              }
            ]
          },
          finalCta: {
            badge: "Starten Sie heute mit der Datenerfassung",
            headline1: "Bereit für saubere,",
            headline2: "präzise Daten?",
            sub: "Erhalten Sie tabellenartige Daten in 24–72 Stunden",
            btnSample: "Kostenlose Probe erhalten",
            btnWhatsapp: "Schneller WhatsApp‑Chat",
            benefits: [
              "Kostenlose Probe inklusive",
              "Vorlage & Feld‑Mapping",
              "99,9 % QS‑Genauigkeit",
              "24–72h Durchlaufzeit"
            ],
            stats: {
              records: "Verarbeitete Datensätze",
              accuracy: "Genauigkeit (QS)",
              turnaround: "Durchschn. Bearbeitungszeit",
              ontime: "Pünktliche Lieferung"
            },
            trust: {
              consultTime: "Kostenlose Beratung",
              responseTime: "Durchschn. Antwortzeit",
              noCommit: "Keine Verpflichtung",
              zeroPressure: "Kein Druck"
            },
            footer: "Schließen Sie sich 500+ Teams an, die mit unseren bewährten Workflows saubere Datensätze liefern"
          }
          ,
          blog: {
            badge: "Aktuelle Einblicke",
            title1: "Blog &",
            highlight: "Ressourcen",
            subtitle: "Leitfäden und Playbooks für schnelle, präzise, tabellenartige Datenprozesse – Cleaning, OCR, QS und Migrationen.",
            read: "Lesen",
            by: "Von",
            posts: {
              1: {
                category: "Datenbereinigung",
                title: "Data Cleaning 101: Normalisieren, Deduplizieren, Validieren",
                excerpt: "Praktische Schritte, um chaotische Tabellen schnell zu bereinigen – Formate, Duplikate, Bereiche und Validierungsregeln.",
                readTime: "7 Min. Lesezeit"
              },
              2: {
                category: "OCR & Doks",
                title: "OCR‑Pipeline aufbauen: Von PDFs zu strukturierten Tabellen",
                excerpt: "So werden gescannte Formulare mit OCR‑Tools und menschlicher QS zu sauberen Zeilen.",
                readTime: "6 Min. Lesezeit"
              },
              3: {
                category: "Produktivität",
                title: "Spreadsheet‑Shortcuts für Tempo: Tastatur‑first",
                excerpt: "Sparen Sie Minuten pro hundert Zeilen mit Power‑Shortcuts für Sheets und Excel.",
                readTime: "5 Min. Lesezeit"
              },
              4: {
                category: "CRM‑Migration",
                title: "CRM sicher migrieren: Mapping, Importe, Rollback",
                excerpt: "Schritt‑für‑Schritt‑Ansatz für CRM‑Umzüge ohne Datenverluste.",
                readTime: "8 Min. Lesezeit"
              },
              5: {
                category: "Data Ops",
                title: "Massenuploads ohne Bruch",
                excerpt: "Techniken für große Updates mit Sicherheitsnetzen und Audits.",
                readTime: "9 Min. Lesezeit"
              },
              6: {
                category: "Qualitätssicherung",
                title: "QS für Dateneingabe: 99,9 %+ Genauigkeit erreichen",
                excerpt: "QS‑Prozess mit Samples, Regeln und Doppel‑Eingabe für kritische Felder.",
                readTime: "8 Min. Lesezeit"
              }
            }
          },
          blogDetail: {
            back: "Zurück zur Startseite",
            moreArticles: "Weitere Artikel",
            toc: "Auf dieser Seite",
            breadcrumbsHome: "Start",
            breadcrumbsBlog: "Blog",
            takeaways: "Wichtigste Erkenntnisse",
            conclusion: "Fazit",
            ctaTitle: "Bereit, Ihr Unternehmen zu transformieren?",
            ctaSubtitle: "Buchen Sie eine kostenlose Beratung und entdecken Sie, wie VAs beim Skalieren helfen.",
            ctaButton: "Kostenlose Beratung buchen"
          },
          blogLong: {
            1: {
              content: "<h2>Wesentliche Reinigungs‑Schritte</h2><p>Auditieren Sie Ihren Datensatz: Duplikate, Format‑Inkonsistenzen, fehlende Werte. Definieren Sie kanonische Formate für Datum, Telefon und Währung. Nutzen Sie Helper‑Spalten für Prüfungen und validieren Sie beim Import.</p><h3>Normalisierung & Standards</h3><ul><li>ISO‑Datumsformate</li><li>Whitespace/Non‑Printable entfernen</li><li>Konsistente Groß‑/Kleinschreibung</li></ul><p>Erstellen Sie ein Daten‑Glossar mit akzeptierten Bereichen, Kanoniken und Mapping‑Regeln und teilen Sie es mit allen Stakeholdern.</p><h3>Deduplizierung</h3><p>Komposite Schlüssel und Fuzzy‑Matching mit Schwellwerten. Grenzfälle in einer QS‑Queue prüfen. Regeln dokumentieren.</p><h3>Validierungsregeln</h3><ul><li>Pflichtfelder & Regex‑Prüfungen</li><li>Dropdowns für kontrollierte Vokabulare</li><li>Kreuzfeld‑Prüfungen (z. B. Land/Bundesstaat)</li></ul><h3>QS‑Ablauf</h3><p>5–10 % Stichprobe; Fehlerarten erfassen und Regeln iterativ verbessern. Änderungsprotokoll mit Autor/Zeit führen.</p>"
            },
            2: {
              content: "<h2>OCR zur Tabelle</h2><p>Erstellen Sie zuerst die Vorlage, dann mappen Sie OCR‑Felder. Nur Felder mit niedriger Confidence manuell prüfen. Confidence‑Schwellen loggen und stetig verbessern.</p><h3>Pipeline</h3><ol><li>Vorlage & Feld‑Mapping</li><li>OCR‑Extraktion mit Confidence</li><li>Normalisierung & Validierung</li><li>Manuelle Prüfung geringer Confidence</li><li>Export & Lieferung</li></ol><h3>Tooling</h3><p>Tesseract für roh, Docparser für layout‑bewusste Extraktion kombinieren. Bild‑Vorverarbeitung (Deskewing, Denoising) steigert die Erkennung.</p><h3>QS & Monitoring</h3><p>False‑Positive/Negative‑Raten tracken und Zonen/Regex laufend verbessern.</p>"
            },
            3: {
              content: "<h2>Tastatur‑first Workflow</h2><p>Optimieren Sie den Tabellen‑Flow für Tempo: Hände auf der Tastatur lassen, Kontextwechsel minimieren.</p><h3>Power‑Shortcuts</h3><ul><li>Mehrzellen‑Einfügen / Serie füllen</li><li>Text‑zu‑Spalten & Regex‑Ersetzungen</li><li>Benutzerdefinierte Hotkeys</li></ul><h3>Navigation</h3><p>Schnell zwischen Sheets und benannten Bereichen per Hotkey springen. Suchpaletten zum Öffnen von Sheets/Filtern nutzen.</p><h3>Ansichten & Filter</h3><p>Gespeicherte Filter/Ansichten für QS, Anreicherung, Lieferung. Spalten sperren, um stabil zu navigieren.</p><h3>Bulk‑Änderungen</h3><p>Strukturierte Suchen/Ersetzen über Bereiche; Änderungen in Kopie vorbereiten, um zurückrollen zu können.</p>"
            },
            4: {
              content: "<h2>Sichere CRM‑Migration</h2><p>Reduzieren Sie Risiken mit einem gestuften Plan.</p><h3>Staging & Mapping</h3><ul><li>Feld‑Mapping mit Ownern</li><li>Testimporte in Sandbox</li><li>Rollback‑Checkpoints</li></ul><h3>Batch‑Strategie</h3><p>Migration segmentieren (Owner/Lifecycle), um Risiken zu begrenzen. Schreibzugriffe in kritischen Fenstern einfrieren.</p><h3>Post‑Import QS</h3><p>Beziehungen, Aktivitäten und Ownership prüfen; Edgecases skriptgesteuert korrigieren. Kennzahlen vor/nach vergleichen.</p>"
            },
            5: {
              content: "<h2>Massenuploads ohne Risiko</h2><p>Sicherheitsnetze für große Änderungen einsetzen.</p><h3>Pre‑Flight</h3><ul><li>Änderungen in Kopie vorbereiten</li><li>Diff & Validierungsskripte</li><li>Backups exportieren</li></ul><h3>Durchführung</h3><p>Änderungen in Batches mit Checkpoints anwenden. Nach jedem Batch validieren und bei Anomalien pausieren.</p><h3>Audit‑Trail</h3><p>Nutzer, Zeit und Vorher/Nachher loggen; Rückroll‑Skript bereithalten.</p>"
            },
            6: {
              content: "<h2>QS auf 99,9 %+</h2><p>Regeln mit Stichproben kombinieren.</p><h3>Validierungsregeln</h3><ul><li>Pflichtfelder + Regex</li><li>Dropdowns für kontrollierte Vokabulare</li><li>Duplikaterkennung</li></ul><h3>Stichprobe & Metriken</h3><p>Akzeptanzkriterien (AQL) definieren. Fehlerarten, Schwere und MTTR tracken.</p><h3>Doppel‑Eingabe für kritische Felder</h3><p>Blind‑Eingabe für High‑Impact‑Felder und Konflikte abgleichen. Adjudikation, wo möglich, automatisieren.</p>"
            }
          },
          caseStudies: {
            badge: "Erfolgsgeschichten",
            title: "Erfolgsgeschichten zur Datenerfassung",
            subtitle: "So lieferten Teams schneller saubere Datensätze – Kataloge normalisiert, CRMs migriert, Umfragen mit hoher Genauigkeit validiert.",
            labels: { result: "Ergebnis", focus: "Fokus", timeframe: "Zeitrahmen" },
            viewFull: "Vollständige Fallstudie ansehen",
            viewShort: "Fallstudie ansehen",
            ctaPrompt: "Bereit, Ihre eigene Erfolgsgeschichte zu schreiben?",
            ctaButtonFull: "Kostenlose Beratung buchen",
            ctaButtonShort: "Loslegen",
            items: {
              1: {
                title: "Katalog‑Bereinigung: 50k SKUs mit 99,9 % Genauigkeit",
                challenge: "Doppelte SKUs, uneinheitliche Attribute und falsche Bilder führten zu Fehlbestellungen und Retouren.",
                solution: "Vorlagenbasiertes Mapping, Deduplizierung, Bild/Varianten‑Abgleich und doppelte QS vor dem Import."
              },
              2: {
                title: "CRM‑Migration: 25k Kontakte ohne Datenverlust",
                challenge: "Alte CRM‑Felder passten nicht ins neue Schema. Risiko verlorener Notizen und falscher Besitzer.",
                solution: "Schema‑Mapping, Testimporte, Rollback‑Plan und gestaffelte Batches mit Validierung und Audit‑Logs."
              },
              3: {
                title: "Umfrage‑Dateneingabe: 100k Antworten bereinigt und validiert",
                challenge: "Exports mit uneinheitlichen Formaten, fehlenden Feldern und Freitext, der normalisiert werden musste.",
                solution: "Validierungsregeln, Regex‑Standardisierung und Helper‑Spalten für QS."
              }
            }
          },
          caseStudyDetail: {
            back: "Zurück zur Startseite",
            challenge: "Die Herausforderung",
            solution: "Die Lösung",
            results: "Die Ergebnisse",
            more: "Weitere Erfolgsgeschichten",
            ctaBadge: "Erfolg wartet",
            ctaTitle: "Bereit für",
            ctaTitleHighlight: "ähnliche Ergebnisse?",
            ctaSubtitle: "Buchen Sie eine kostenlose 15‑minütige Beratung und erfahren Sie, wie wir Kosten senken und skalieren helfen.",
            ctaBook: "Kostenlose Beratung buchen",
            ctaViewAll: "Alle Fallstudien ansehen",
            perks: { noCommit: "Keine Verpflichtung", minutes: "15 Minuten", free: "100% gratis" }
          },
          testimonials: {
            title1: "Vertraut von",
            highlight: "Marken mit Ranking",
            subtitle: "Echte SEO‑Ergebnisse von Unternehmen, die mit uns zusammengearbeitet haben.",
            storyBadge: "Erfolgsgeschichte",
            storyTitlePrefix: "Fallstudie:",
            storyCta: "Vollständige Fallstudie ansehen",
            items: [
              {
                name: "Emma Rodriguez",
                company: "Luxe Beauty Co.",
                role: "Gründerin",
                rating: 5,
                content: "Unser organischer Traffic stieg in 8 Monaten um 400 %. Von Seite 3 auf #1 für unsere Haupt‑Keywords. Der SEO‑ROI ist enorm. Content‑Plan, technische Fixes und Links, die wirklich wirken."
              },
              {
                name: "David Chen",
                company: "Peak Performance Coaching",
                role: "CEO",
                rating: 5,
                content: "Local SEO hat alles verändert. Wir dominieren lokale Suche und erhalten 15+ qualifizierte Leads pro Woche. Beste Investition. Listings, Reviews und On‑Page perfekt umgesetzt."
              },
              {
                name: "Sophie Martens",
                company: "Urban Eats",
                role: "Marketing Lead",
                rating: 5,
                content: "Ihr technisches SEO‑Audit behob Probleme, von denen wir nichts wussten. Die Site‑Speed stieg um 85 % und wir ranken für 300+ Keywords. Klare Reports, schnelle Erfolge."
              }
            ]
          },
          tools: {
            title1: "Nahtlose",
            highlight: "Daten‑Integrationen",
            subtitle: "Wir integrieren uns in Ihren Stack – Tabellen, CRMs, eCommerce, Datenbanken und Automatisierung – für reibungslose Übergaben.",
            adaptTitleStrong: "Nutzen Sie ein anderes System?",
            adaptTitleRest: " Wir passen uns an.",
            adaptDesc: "Teilen Sie Ihr Format oder Ihre API – CSV, Sheets, CRM oder DB. Wir passen den Workflow Ende‑zu‑Ende an.",
            categories: {
              Spreadsheets: "Tabellen",
              Formats: "Formate",
              Automation: "Automatisierung",
              Integration: "Integration",
              CRM: "CRM",
              eCommerce: "eCommerce",
              Database: "Datenbank",
              Storage: "Speicher",
              "OCR/Docs": "OCR/Dokumente"
            }
          }
        }
      }
    },
    lng: savedLng,
    fallbackLng: "en",
    defaultNS: "common",
    ns: ["common"],
    interpolation: { escapeValue: false }
  });

// Persist language changes
i18n.on("languageChanged", (lng) => {
  try {
    if (typeof window !== "undefined") {
      localStorage.setItem("lng", lng);
      // Update HTML lang attribute for a11y/SEO
      document.documentElement.setAttribute("lang", lng);
    }
  } catch {
    void 0;
  }
});

export default i18n;
