import type { APIRoute } from "astro";
import { essayPath, getEssays, getSite } from "../../i18n";

export const GET: APIRoute = ({ site }) => {
  const locale = "en" as const;
  const origin = site ?? new URL("https://www.giuseppeaceto.org");
  const content = getSite(locale);
  const essays = getEssays(locale);
  const channelLink = new URL("/en/", origin).href;

  const items = essays
    .map((essay) => {
      const link = new URL(essayPath(locale, essay.slug), origin).href;
      const updated = essay.updated ?? essay.date;
      return `    <item>
      <title><![CDATA[${essay.title}]]></title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${new Date(essay.date).toUTCString()}</pubDate>
      <description><![CDATA[${essay.dek}]]></description>
      <dc:date>${updated}</dc:date>
    </item>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title><![CDATA[${content.name} — Writing]]></title>
    <link>${channelLink}</link>
    <description><![CDATA[${content.description}]]></description>
    <language>en</language>
    <atom:link href="${new URL("/en/rss.xml", origin).href}" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
};
