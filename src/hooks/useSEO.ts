import { useEffect } from "react";
import { applySEO, injectStructuredData, type SEOMeta } from "@/lib/seo";

export function useSEO(meta: SEOMeta, structuredData?: object) {
  useEffect(() => {
    applySEO(meta);
    if (structuredData) injectStructuredData(structuredData);
  }, [meta.title, meta.description, meta.canonical]);
}
