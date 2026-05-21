import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { HowItWorks } from "@/components/HowItWorks";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Pricing } from "@/components/Pricing";
import { ToolsIntegration } from "@/components/ToolsIntegration";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CaseStudies } from "@/components/CaseStudies";
import { Blog } from "@/components/Blog";
import { FinalCTA } from "@/components/FinalCTA";
import { useSEO } from "@/hooks/useSEO";
import { buildOrganizationSchema, buildServiceSchema, buildFAQSchema } from "@/lib/seo";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();
  const faqs = t("faq.items", { returnObjects: true }) as Array<{ q: string; a: string }>;

  useSEO(
    {
      title: "Fast, Accurate Data Entry Services — 99.9% Accuracy",
      description:
        "Professional data entry with 99.9% accuracy guaranteed. Forms, catalogs, CRM migration, OCR docs, and bulk updates delivered in 24–72h. Free sample included.",
      canonical: "https://dataentrypro.com/",
      type: "website",
    },
    {
      "@context": "https://schema.org",
      "@graph": [
        buildOrganizationSchema(),
        buildServiceSchema(),
        buildFAQSchema(Array.isArray(faqs) ? faqs : []),
      ],
    }
  );

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      {/* <ValueProposition /> */}
      <HowItWorks />
      <Services />
      <WhyChooseUs />
      <Pricing />
      <ToolsIntegration />
      <Testimonials />
      <Blog />
      <CaseStudies />
      <FAQ />
      
      <FinalCTA /> 
    </main>
  );
};

export default Index;