import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: 'https://kolivo.com.br',
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1,
    },
  ];
}
