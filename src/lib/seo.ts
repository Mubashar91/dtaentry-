const SITE_NAME = "DataEntry Pro";
const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop";

export interface SEOMeta {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article";
  publishedAt?: string;
  author?: string;
  noindex?: boolean;
}

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function applySEO(meta: SEOMeta) {
  const fullTitle = `${meta.title} | ${SITE_NAME}`;
  const image = meta.image || DEFAULT_IMAGE;
  const url = meta.canonical || window.location.href;

  document.title = fullTitle;

  setMeta("description", meta.description);
  setMeta("robots", meta.noindex ? "noindex,nofollow" : "index,follow");

  // Open Graph
  setMeta("og:title", fullTitle, "property");
  setMeta("og:description", meta.description, "property");
  setMeta("og:type", meta.type || "website", "property");
  setMeta("og:url", url, "property");
  setMeta("og:image", image, "property");
  setMeta("og:site_name", SITE_NAME, "property");

  // Twitter
  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", fullTitle);
  setMeta("twitter:description", meta.description);
  setMeta("twitter:image", image);

  // Article-specific
  if (meta.type === "article") {
    if (meta.publishedAt) setMeta("article:published_time", meta.publishedAt, "property");
    if (meta.author) setMeta("article:author", meta.author, "property");
  }

  // Canonical
  setLink("canonical", url);
}

export function injectStructuredData(data: object) {
  const id = "structured-data-json-ld";
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: window.location.origin,
    logo: `${window.location.origin}/favicon.ico`,
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English", "German"],
    },
  };
}

export function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Professional Data Entry Services",
    provider: { "@type": "Organization", name: SITE_NAME },
    description:
      "Spreadsheet-style data entry with validation, clean-up, and QA. Forms, lists, catalogs, surveys, OCR docs, and bulk updates — accurately and on time.",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Data Entry Packages",
      itemListElement: [
        { "@type": "Offer", name: "Starter — Up to 1k records/mo" },
        { "@type": "Offer", name: "Growth — Up to 10k records/mo" },
        { "@type": "Offer", name: "Enterprise — 50k+ records & custom" },
      ],
    },
  };
}

export function buildFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildArticleSchema(post: {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: post.author },
    datePublished: post.date,
    image: post.image,
    url: post.url,
    publisher: { "@type": "Organization", name: SITE_NAME },
  };
}
