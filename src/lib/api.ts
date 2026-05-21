const getApiBase = () =>
  import.meta.env.VITE_API_BASE || "https://api.don-va.com";

const getTenantId = () =>
  import.meta.env.VITE_TENANT_ID || "data_entry";

function createFetchOptions(options: RequestInit = {}): RequestInit {
  const headers = new Headers(options.headers || {});
  if (!headers.has("X-Tenant-ID")) headers.set("X-Tenant-ID", getTenantId());
  if (options.body && !headers.has("Content-Type")) headers.set("Content-Type", "application/json");
  return { ...options, headers };
}

async function fetchAPI(endpoint: string, options: RequestInit = {}): Promise<Response> {
  const url = endpoint.startsWith("http") ? endpoint : `${getApiBase()}${endpoint}`;
  return fetch(url, createFetchOptions(options));
}

export const API_ENDPOINTS = {
  HERO: "/api/hero",
  WHY_CHOOSE_US: "/api/why-choose-us",
  SERVICES: "/api/services",
  TESTIMONIALS: "/api/testimonials",
  FAQ: "/api/faq",
  CASE_STUDIES: "/api/case-studies",
  BLOGS: "/api/blogs",
  PRICING: "/api/pricing",
  HOW_IT_WORKS: "/api/how-it-works",
  FINAL_CTA: "/api/final-cta",
} as const;

export const normalizeLanguage = (lang: string): string => {
  const n = lang.toLowerCase();
  if (n.startsWith("de") || n.startsWith("ge")) return "de";
  return "en";
};

function buildApiUrl(endpoint: string, lang: string): string {
  const sep = endpoint.includes("?") ? "&" : "?";
  return `${endpoint}${sep}lang=${lang}`;
}

async function fetchApiData<T>(endpoint: string, lang: string): Promise<T | null> {
  try {
    const res = await fetchAPI(buildApiUrl(endpoint, lang));
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

// Hero
export interface HeroData {
  _id?: string;
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  ctaPrimary: string;
  urgency: string;
  stats: { clients: string; costSaved: string; rating: string };
}

export const fetchHero = (lang = "en") =>
  fetchApiData<{ hero: HeroData | HeroData[] }>(API_ENDPOINTS.HERO, normalizeLanguage(lang)).then(
    (data) => {
      if (!data?.hero) return null;
      if (Array.isArray(data.hero)) {
        return [...data.hero].sort((a, b) => (b._id || "").localeCompare(a._id || ""))[0] || null;
      }
      return data.hero;
    }
  );

// Services
export interface Service {
  _id?: string;
  order: number;
  title: string;
  description: string;
  benefit: string;
  icon: string;
}
export interface ServicesResponse { services: Service[] }
export const fetchServices = (lang = "en") =>
  fetchApiData<ServicesResponse>(API_ENDPOINTS.SERVICES, normalizeLanguage(lang));

// Why Choose Us
export interface WhyChooseUsItem { icon: string; title: string; description: string }
export interface WhyChooseUsData { badge: string; heading: string; description: string; items: WhyChooseUsItem[] }
export const fetchWhyChooseUs = (lang = "en") =>
  fetchApiData<{ whyChooseUs: WhyChooseUsData }>(API_ENDPOINTS.WHY_CHOOSE_US, normalizeLanguage(lang))
    .then((data) => data?.whyChooseUs || null);

// Pricing
export interface PricingPlan { planKey: string; name: string; price: number; features: string[]; popular?: boolean }
export interface PricingResponse { plans: PricingPlan[] }
export const fetchPricing = (lang = "en") =>
  fetchApiData<PricingResponse>(API_ENDPOINTS.PRICING, normalizeLanguage(lang));

// Testimonials
export interface Testimonial { _id?: string; name: string; role: string; company: string; content: string; rating: number; order?: number }
export interface TestimonialsResponse { testimonials: Testimonial[] }
export const fetchTestimonials = (lang = "en") =>
  fetchApiData<TestimonialsResponse>(API_ENDPOINTS.TESTIMONIALS, normalizeLanguage(lang));

// How It Works
export interface HowItWorksStep { _id?: string; stepNumber: number; title: string; description: string; icon: string; stepLabel: string }
export interface HowItWorksData { lang: string; steps: HowItWorksStep[] }
export const fetchHowItWorks = (lang = "en") =>
  fetchApiData<HowItWorksData>(API_ENDPOINTS.HOW_IT_WORKS, normalizeLanguage(lang));

// Final CTA
export interface FinalCTAData { title: string; subtitle: string; ctaText: string; ctaUrl: string }
export const fetchFinalCTA = (lang = "en") =>
  fetchApiData<FinalCTAData>(API_ENDPOINTS.FINAL_CTA, normalizeLanguage(lang));

// FAQ
export interface FAQItem { _id?: string; question: string; answer: string; order: number }
export interface FAQResponse { faqs: FAQItem[] }
export const fetchFAQ = (lang = "en") =>
  fetchApiData<FAQResponse>(API_ENDPOINTS.FAQ, normalizeLanguage(lang));

// Case Studies
export interface CaseStudy { _id?: string; title: string; description: string; image: string; results: string; link?: string; order: number }
export interface CaseStudiesResponse { caseStudies: CaseStudy[] }
export const fetchCaseStudies = (lang = "en") =>
  fetchApiData<CaseStudiesResponse>(API_ENDPOINTS.CASE_STUDIES, normalizeLanguage(lang));

// Blog
export interface BlogPost { blogId: number; title: string; excerpt: string; content: string; image: string; author: string; date: string; readTime: string; category: string; order?: number }
export interface BlogResponse { blogs: BlogPost[] }
export const fetchBlog = (lang = "en") =>
  fetchApiData<BlogResponse>(API_ENDPOINTS.BLOGS, normalizeLanguage(lang));
