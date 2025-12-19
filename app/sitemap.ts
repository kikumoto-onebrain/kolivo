import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: 'https://kolivo.com.br',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://kolivo.com.br/framework',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://kolivo.com.br/framework/quiz',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
