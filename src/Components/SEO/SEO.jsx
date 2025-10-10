import { Helmet } from "react-helmet-async";
import { seoConfig, siteConfig } from "@/config/seo";

/**
 * SEO component for managing page metadata
 * @param {Object} props
 * @param {string} props.page - Key from seoConfig (e.g., 'home', 'features')
 * @param {Object} props.overrides - Optional overrides for any SEO field
 */
export default function SEO({ page = "default", overrides = {} }) {
  // Get page-specific config or fallback to default
  const pageConfig = seoConfig[page] || seoConfig.default;

  // Merge page config with overrides
  const seo = {
    ...seoConfig.default, // Start with defaults
    ...pageConfig, // Apply page-specific config
    ...overrides, // Apply any custom overrides
  };

  const fullTitle = seo.title;
  const canonicalUrl = `${siteConfig.siteUrl}${seo.canonical || ""}`;
  
  // Handle OG image - support both absolute and relative URLs
  const ogImage = seo.ogImage
    ? seo.ogImage.startsWith("http")
      ? seo.ogImage
      : `${siteConfig.siteUrl}${seo.ogImage}`
    : `${siteConfig.siteUrl}/web-app-manifest-512x512.png`;

  // Handle Twitter image separately (may differ from OG image)
  const twitterImage = seo.twitterImage
    ? seo.twitterImage.startsWith("http")
      ? seo.twitterImage
      : `${siteConfig.siteUrl}${seo.twitterImage}`
    : ogImage;

  // Use custom OG/Twitter titles if provided, otherwise use main title
  const ogTitle = seo.ogTitle || fullTitle;
  const ogDescription = seo.ogDescription || seo.description;
  const twitterTitle = seo.twitterTitle || fullTitle;
  const twitterDescription = seo.twitterDescription || seo.description;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={seo.description} />
      {seo.keywords && <meta name="keywords" content={seo.keywords} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={seo.ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      {seo.ogImageWidth && (
        <meta property="og:image:width" content={seo.ogImageWidth} />
      )}
      {seo.ogImageHeight && (
        <meta property="og:image:height" content={seo.ogImageHeight} />
      )}
      <meta property="og:site_name" content={siteConfig.siteName} />
      <meta property="og:locale" content={siteConfig.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content={seo.twitterCard || "summary_large_image"} />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:image" content={twitterImage} />
      {siteConfig.twitterHandle && (
        <meta name="twitter:site" content={siteConfig.twitterHandle} />
      )}

      {/* Canonical URL */}
      {seo.canonical && <link rel="canonical" href={canonicalUrl} />}

      {/* Additional Meta Tags */}
      {seo.robots && <meta name="robots" content={seo.robots} />}
      {seo.author && <meta name="author" content={seo.author} />}

      {/* Structured Data (JSON-LD) */}
      {seo.structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(seo.structuredData)}
        </script>
      )}
    </Helmet>
  );
}
