// Schema Markup Types and Utilities for SEO
// JSON-LD structured data for CCTV services website

export interface LocalBusinessSchema {
    '@context': 'https://schema.org';
    '@type': 'LocalBusiness';
    '@id': string;
    name: string;
    alternateName?: string;
    description: string;
    url: string;
    telephone: string;
    email?: string;
    image?: string;
    logo?: {
        '@type': 'ImageObject';
        url: string;
        width: number;
        height: number;
    };
    address: {
        '@type': 'PostalAddress';
        streetAddress: string;
        addressLocality: string;
        addressRegion: string;
        postalCode: string;
        addressCountry: string;
    };
    geo?: {
        '@type': 'GeoCoordinates';
        latitude: number;
        longitude: number;
    };
    openingHoursSpecification?: Array<{
        '@type': 'OpeningHoursSpecification';
        dayOfWeek: string | string[];
        opens: string;
        closes: string;
    }>;
    priceRange?: string;
    areaServed?: Array<{
        '@type': 'City' | 'State' | 'Country';
        name: string;
    }>;
    aggregateRating?: {
        '@type': 'AggregateRating';
        ratingValue: string;
        reviewCount: string;
        bestRating: string;
        worstRating: string;
    };
    sameAs?: string[];
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface FAQPageSchema {
    '@context': 'https://schema.org';
    '@type': 'FAQPage';
    mainEntity: Array<{
        '@type': 'Question';
        name: string;
        acceptedAnswer: {
            '@type': 'Answer';
            text: string;
        };
    }>;
}

export interface ServiceSchema {
    '@context': 'https://schema.org';
    '@type': 'Service';
    serviceType: string;
    provider: {
        '@type': 'LocalBusiness';
        '@id': string;
    };
    name: string;
    description: string;
    areaServed?: {
        '@type': 'Country' | 'State' | 'City';
        name: string;
    };
}

export interface BreadcrumbSchema {
    '@context': 'https://schema.org';
    '@type': 'BreadcrumbList';
    itemListElement: Array<{
        '@type': 'ListItem';
        position: number;
        name: string;
        item?: string;
    }>;
}

// Business Information Constants
export const BUSINESS_INFO = {
    name: 'Mitra Asia CCTV',
    alternateName: 'Toko & Jasa Instalasi CCTV Profesional Jawa Barat',
    description: 'Penjual kamera CCTV dan penyedia jasa instalasi, service, dan maintenance CCTV profesional untuk rumah, kantor, dan industri di Jawa Barat. Menjual dan memasang CCTV Hikvision, Dahua, Ezviz, dan berbagai brand terpercaya.',
    url: 'https://jasainstalcctv.com',
    telephone: '+62-822-2865-4835',
    email: 'jasainstalcctv@gmail.com',
    address: {
        streetAddress: 'Mall Plaza Asia, Lantai GF, Tugujaya, Kec. Cihideung, Kab. Tasikmalaya',
        addressLocality: 'Tasikmalaya',
        addressRegion: 'Jawa Barat',
        postalCode: '46122',
        addressCountry: 'ID',
    },
    geo: {
        latitude: -7.3274,
        longitude: 108.2207,
    },
    priceRange: 'Rp500.000 - Rp10.000.000',
    socialMedia: {
        facebook: 'https://www.facebook.com/jasainstalcctv',
        instagram: 'https://www.instagram.com/jasainstalcctv',
        youtube: 'https://www.youtube.com/@jasainstalcctv',
        tiktok: 'https://www.tiktok.com/@jasa_instal_cctv',
    },
} as const;

// Service Areas - Fokus Jawa Barat
export const SERVICE_AREAS = [
    { name: 'Tasikmalaya', slug: 'tasikmalaya' },
    { name: 'Bandung', slug: 'bandung' },
    { name: 'Garut', slug: 'garut' },
    { name: 'Ciamis', slug: 'ciamis' },
    { name: 'Banjar', slug: 'banjar' },
    { name: 'Cirebon', slug: 'cirebon' },
    { name: 'Sukabumi', slug: 'sukabumi' },
    { name: 'Bogor', slug: 'bogor' },
] as const;

// FAQ Data
export const FAQ_DATA: FAQItem[] = [
    {
        question: 'Berapa harga kamera CCTV?',
        answer: 'Harga kamera CCTV di toko kami mulai dari Rp350.000 untuk kamera indoor hingga Rp2.500.000+ untuk kamera outdoor dengan fitur premium. Kami menjual CCTV Hikvision, Dahua, dan Ezviz dengan garansi resmi.',
    },
    {
        question: 'Berapa biaya instalasi CCTV per titik?',
        answer: 'Biaya instalasi CCTV per titik bervariasi mulai dari Rp300.000 hingga Rp800.000 tergantung jenis kamera, panjang kabel, dan tingkat kesulitan instalasi. Hubungi kami untuk mendapatkan penawaran harga yang sesuai dengan kebutuhan Anda.',
    },
    {
        question: 'Apakah ada garansi untuk pembelian dan pemasangan CCTV?',
        answer: 'Ya, kami memberikan garansi produk 1-2 tahun sesuai ketentuan pabrik dan garansi pemasangan selama 1 tahun. Garansi meliputi penggantian komponen yang rusak akibat cacat produksi dan perbaikan instalasi gratis.',
    },
    {
        question: 'Berapa lama proses instalasi CCTV biasanya?',
        answer: 'Untuk instalasi standar 4-8 kamera, proses pemasangan biasanya memakan waktu 4-8 jam. Untuk proyek yang lebih besar seperti pabrik atau gedung perkantoran, bisa memakan waktu 2-5 hari kerja.',
    },
    {
        question: 'CCTV jenis apa yang paling cocok untuk rumah?',
        answer: 'Untuk rumah, kami merekomendasikan IP Camera dengan resolusi minimal 2MP atau CCTV ColorVu untuk pengawasan malam hari yang jernih. Pilihan populer termasuk Hikvision DS-2CD1023G0E dan Dahua IPC-HDW1230T1.',
    },
    {
        question: 'Apakah bisa melihat CCTV dari HP?',
        answer: 'Ya, semua sistem CCTV yang kami jual sudah dilengkapi dengan fitur remote viewing melalui smartphone. Anda bisa memantau rekaman secara real-time dari mana saja menggunakan aplikasi seperti Hik-Connect atau DMSS.',
    },
];

/**
 * Generate LocalBusiness JSON-LD schema
 */
export function generateLocalBusinessSchema(): LocalBusinessSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${BUSINESS_INFO.url}/#organization`,
        name: BUSINESS_INFO.name,
        alternateName: BUSINESS_INFO.alternateName,
        description: BUSINESS_INFO.description,
        url: BUSINESS_INFO.url,
        telephone: BUSINESS_INFO.telephone,
        email: BUSINESS_INFO.email,
        image: `${BUSINESS_INFO.url}/images/logo.png`,
        logo: {
            '@type': 'ImageObject',
            url: `${BUSINESS_INFO.url}/images/logo.png`,
            width: 600,
            height: 60,
        },
        address: {
            '@type': 'PostalAddress',
            ...BUSINESS_INFO.address,
        },
        geo: {
            '@type': 'GeoCoordinates',
            ...BUSINESS_INFO.geo,
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '17:00',
            },
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '08:00',
                closes: '14:00',
            },
        ],
        priceRange: BUSINESS_INFO.priceRange,
        areaServed: SERVICE_AREAS.map((area) => ({
            '@type': 'City' as const,
            name: area.name,
        })),
        sameAs: [
            BUSINESS_INFO.socialMedia.facebook,
            BUSINESS_INFO.socialMedia.instagram,
            BUSINESS_INFO.socialMedia.youtube,
            BUSINESS_INFO.socialMedia.tiktok,
        ],
    };
}

/**
 * Generate FAQPage JSON-LD schema
 */
export function generateFAQPageSchema(faqs: FAQItem[] = FAQ_DATA): FAQPageSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

/**
 * Generate Service JSON-LD schema
 */
export function generateServiceSchema(
    serviceName: string,
    serviceDescription: string,
    serviceType: string = 'Instalasi CCTV'
): ServiceSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType,
        provider: {
            '@type': 'LocalBusiness',
            '@id': `${BUSINESS_INFO.url}/#organization`,
        },
        name: serviceName,
        description: serviceDescription,
        areaServed: {
            '@type': 'Country',
            name: 'Indonesia',
        },
    };
}

/**
 * Generate Breadcrumb JSON-LD schema
 */
export function generateBreadcrumbSchema(
    items: Array<{ name: string; url?: string }>
): BreadcrumbSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            ...(item.url && index < items.length - 1 ? { item: item.url } : {}),
        })),
    };
}
