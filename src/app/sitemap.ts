import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://paul-martin-nevot.com';
    const currentDate = new Date();

    // Static routes - manually defined pages
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 1.0,
        },
    ];

    // Future: Dynamic routes section
    // Example structure for dynamic routes.
    // const dynamicRoutes: MetadataRoute.Sitemap = await fetchDynamicPages().map((page) => ({
    //     url: `${baseUrl}/${page.slug}`,
    //     lastModified: page.updatedAt,
    //     changeFrequency: 'monthly',
    //     priority: 0.8,
    // }));

    // Combine all routes
    return [
        ...staticRoutes,
        // ...dynamicRoutes, // Uncomment when you add dynamic routes
    ];
}
