import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://moluccus.vercel.app',
      lastModified: new Date(),
    },
    {
      url: 'https://moluccus.vercel.app/about',
      lastModified: new Date(),
    },
    {
      url: 'https://moluccus.vercel.app/blog',
      lastModified: new Date(),
    },
  ]
}