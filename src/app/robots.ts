import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://salarx.com' // TBD: replace with actual domain later

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/cart', '/checkout'], // Prevent indexing of cart/checkout flows
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
