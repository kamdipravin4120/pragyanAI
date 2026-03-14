import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

interface PageMetaOptions {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}

export function createPageMetadata({ title, description, path = "", keywords = [] }: PageMetaOptions): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;
  const fullTitle = path === "" ? `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}` : title;

  return {
    title: fullTitle,
    description,
    keywords: [
      "Pragyan AI",
      "AI solutions",
      "artificial intelligence",
      "enterprise AI",
      "AI consulting",
      "AI automation",
      ...keywords,
    ],
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_CONFIG.name,
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: `${SITE_CONFIG.url}/images/og/og-default.png`,
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${SITE_CONFIG.url}/images/og/og-default.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
