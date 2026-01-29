'use client';

import Script from 'next/script';
import {
    generateLocalBusinessSchema,
    generateFAQPageSchema,
    generateServiceSchema,
    generateBreadcrumbSchema,
    FAQItem,
} from '@/lib/seo-schema';

interface SchemaMarkupProps {
    type: 'localBusiness' | 'faq' | 'service' | 'breadcrumb' | 'combined';
    // For FAQ schema
    faqs?: FAQItem[];
    // For Service schema
    serviceName?: string;
    serviceDescription?: string;
    serviceType?: string;
    // For Breadcrumb schema
    breadcrumbs?: Array<{ name: string; url?: string }>;
    // For combined (multiple schemas)
    includeLocalBusiness?: boolean;
    includeFAQ?: boolean;
}

/**
 * SchemaMarkup Component
 * Renders JSON-LD structured data for SEO
 * 
 * @example
 * // LocalBusiness schema (homepage)
 * <SchemaMarkup type="localBusiness" />
 * 
 * @example
 * // FAQ schema
 * <SchemaMarkup type="faq" faqs={customFaqs} />
 * 
 * @example
 * // Service page with breadcrumb
 * <SchemaMarkup 
 *   type="combined"
 *   includeLocalBusiness
 *   serviceName="Instalasi CCTV Rumah"
 *   serviceDescription="Layanan pemasangan CCTV untuk rumah tinggal"
 *   breadcrumbs={[
 *     { name: 'Home', url: 'https://jasainstalcctv.com' },
 *     { name: 'Layanan', url: 'https://jasainstalcctv.com/layanan' },
 *     { name: 'Instalasi CCTV Rumah' }
 *   ]}
 * />
 */
export function SchemaMarkup({
    type,
    faqs,
    serviceName,
    serviceDescription,
    serviceType,
    breadcrumbs,
    includeLocalBusiness = false,
    includeFAQ = false,
}: SchemaMarkupProps) {
    const schemas: object[] = [];

    // Generate schemas based on type
    switch (type) {
        case 'localBusiness':
            schemas.push(generateLocalBusinessSchema());
            break;

        case 'faq':
            schemas.push(generateFAQPageSchema(faqs));
            break;

        case 'service':
            if (serviceName && serviceDescription) {
                schemas.push(generateServiceSchema(serviceName, serviceDescription, serviceType));
            }
            break;

        case 'breadcrumb':
            if (breadcrumbs && breadcrumbs.length > 0) {
                schemas.push(generateBreadcrumbSchema(breadcrumbs));
            }
            break;

        case 'combined':
            if (includeLocalBusiness) {
                schemas.push(generateLocalBusinessSchema());
            }
            if (includeFAQ && faqs) {
                schemas.push(generateFAQPageSchema(faqs));
            } else if (includeFAQ) {
                schemas.push(generateFAQPageSchema());
            }
            if (serviceName && serviceDescription) {
                schemas.push(generateServiceSchema(serviceName, serviceDescription, serviceType));
            }
            if (breadcrumbs && breadcrumbs.length > 0) {
                schemas.push(generateBreadcrumbSchema(breadcrumbs));
            }
            break;
    }

    if (schemas.length === 0) {
        return null;
    }

    return (
        <>
            {schemas.map((schema, index) => (
                <Script
                    key={`schema-${index}`}
                    id={`schema-markup-${index}`}
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    );
}

/**
 * LocalBusinessSchema Component
 * Shorthand for LocalBusiness schema on homepage
 */
export function LocalBusinessSchema() {
    return <SchemaMarkup type="localBusiness" />;
}

/**
 * FAQSchema Component
 * Shorthand for FAQ schema
 */
export function FAQSchema({ faqs }: { faqs?: FAQItem[] }) {
    return <SchemaMarkup type="faq" faqs={faqs} />;
}

/**
 * ServiceSchema Component
 * Shorthand for Service schema on service pages
 */
export function ServiceSchemaComponent({
    name,
    description,
    serviceType,
}: {
    name: string;
    description: string;
    serviceType?: string;
}) {
    return (
        <SchemaMarkup
            type="service"
            serviceName={name}
            serviceDescription={description}
            serviceType={serviceType}
        />
    );
}
