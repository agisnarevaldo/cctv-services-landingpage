/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://jasainstalcctv.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/admin/*', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    additionalSitemaps: [],
  },
  additionalPaths: async (config) => {
    const result = [];
    // Dynamic pages untuk kota-kota di Jawa Barat
    const cities = ['tasikmalaya', 'bandung', 'garut', 'ciamis', 'banjar', 'cirebon', 'sukabumi', 'bogor'];
    cities.forEach((city) => {
      result.push({
        loc: `/wilayah/${city}`,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      });
    });
    return result;
  },
  transform: async (config, path) => {
    // Custom priority untuk halaman tertentu
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.startsWith('/layanan')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.startsWith('/wilayah')) {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path.startsWith('/blog')) {
      priority = 0.7;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
