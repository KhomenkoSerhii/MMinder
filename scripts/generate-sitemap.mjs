import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const baseUrl = (process.env.SITE_URL || "https://minuteminder.io").replace(/\/$/, "");
const today = new Date().toISOString().slice(0, 10);

const pages = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/online-calls-timer-and-AI-reminders", changefreq: "weekly", priority: "0.9" },
  { path: "/features", changefreq: "weekly", priority: "0.9" },
  { path: "/pricing", changefreq: "monthly", priority: "0.9" },
  { path: "/security", changefreq: "monthly", priority: "0.7" },
  { path: "/privacy", changefreq: "yearly", priority: "0.3" },
  { path: "/terms", changefreq: "yearly", priority: "0.3" },
];

const urlEntries = pages
  .map(
    ({ path, changefreq, priority }) => `  <url>\n    <loc>${baseUrl}${path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`,
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\n`;

writeFileSync(resolve("public/sitemap.xml"), sitemap, "utf8");
writeFileSync(resolve("public/robots.txt"), robots, "utf8");

console.log(`Generated sitemap.xml and robots.txt for ${baseUrl}`);
