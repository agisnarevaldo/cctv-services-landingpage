import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICE_AREAS, BUSINESS_INFO, FAQ_DATA } from '@/lib/seo-schema';
import { SchemaMarkup } from '@/app/components/SchemaMarkup';

// Generate static params for all cities
export async function generateStaticParams() {
    return SERVICE_AREAS.map((area) => ({
        kota: area.slug,
    }));
}

// Generate metadata for each city page
export async function generateMetadata({
    params,
}: {
    params: { kota: string };
}): Promise<Metadata> {
    const city = SERVICE_AREAS.find((area) => area.slug === params.kota);

    if (!city) {
        return {
            title: 'Halaman Tidak Ditemukan',
        };
    }

    const title = `Jual & Jasa Pasang CCTV ${city.name} - Toko CCTV Terdekat & Bergaransi`;
    const description = `Jual kamera CCTV dan jasa instalasi profesional di ${city.name}, Jawa Barat. Tersedia CCTV Hikvision, Dahua, Ezviz dengan harga murah dan garansi resmi. Hubungi ${BUSINESS_INFO.telephone}`;

    return {
        title,
        description,
        keywords: [
            `jual cctv ${city.name.toLowerCase()}`,
            `toko cctv ${city.name.toLowerCase()}`,
            `harga cctv ${city.name.toLowerCase()}`,
            `jasa pasang cctv ${city.name.toLowerCase()}`,
            `instalasi cctv ${city.name.toLowerCase()}`,
            `cctv murah ${city.name.toLowerCase()}`,
            `kamera cctv ${city.name.toLowerCase()}`,
        ],
        openGraph: {
            title,
            description,
            type: 'website',
            locale: 'id_ID',
        },
        alternates: {
            canonical: `${BUSINESS_INFO.url}/wilayah/${city.slug}`,
        },
    };
}

// City-specific data
const CITY_DATA: Record<string, { tagline: string; highlights: string[] }> = {
    tasikmalaya: {
        tagline: 'Pusat Layanan CCTV Terpercaya di Priangan Timur',
        highlights: [
            'Teknisi lokal berpengalaman',
            'Respon cepat dalam hitungan jam',
            'Showroom di Mall Plaza Asia',
            'Garansi service 1 tahun penuh',
        ],
    },
    bandung: {
        tagline: 'Solusi Keamanan CCTV untuk Ibukota Jawa Barat',
        highlights: [
            'Melayani area Bandung Raya',
            'Tim teknisi profesional',
            'Konsultasi gratis',
            'Instalasi cepat & rapi',
        ],
    },
    garut: {
        tagline: 'Partner CCTV Terpercaya di Garut dan Sekitarnya',
        highlights: [
            'Jangkauan hingga pelosok Garut',
            'Harga kompetitif',
            'Support after-sales',
            'Produk bergaransi resmi',
        ],
    },
    ciamis: {
        tagline: 'Layanan Instalasi CCTV Profesional di Ciamis',
        highlights: [
            'Melayani Ciamis & sekitarnya',
            'Teknisi terlatih',
            'Berbagai pilihan paket',
            'Pembayaran fleksibel',
        ],
    },
    banjar: {
        tagline: 'Jasa CCTV Terpercaya di Kota Banjar',
        highlights: [
            'Respon cepat',
            'Instalasi profesional',
            'Produk berkualitas',
            'Harga terjangkau',
        ],
    },
    cirebon: {
        tagline: 'Solusi Keamanan CCTV untuk Wilayah Cirebon',
        highlights: [
            'Melayani Cirebon & Pantura',
            'Tim berpengalaman',
            'Garansi resmi',
            'Konsultasi gratis',
        ],
    },
    sukabumi: {
        tagline: 'Partner CCTV Andalan di Sukabumi',
        highlights: [
            'Jangkauan luas',
            'Harga bersaing',
            'Produk original',
            'Service berkala',
        ],
    },
    bogor: {
        tagline: 'Jasa Instalasi CCTV Profesional di Bogor',
        highlights: [
            'Melayani Bogor & sekitarnya',
            'Teknisi bersertifikat',
            'Instalasi rapi',
            'Support 24/7',
        ],
    },
    pangandaran: {
        tagline: 'Partner CCTV Terpercaya di Pangandaran dan Sekitarnya',
        highlights: [
            'Jangkauan hingga pelosok Pangandaran',
            'Harga kompetitif',
            'Support after-sales',
            'Produk bergaransi resmi',
        ],
    },
};

export default function WilayahPage({
    params,
}: {
    params: { kota: string };
}) {
    const city = SERVICE_AREAS.find((area) => area.slug === params.kota);

    if (!city) {
        notFound();
    }

    const cityData = CITY_DATA[city.slug] || {
        tagline: `Jasa Instalasi CCTV Profesional di ${city.name}`,
        highlights: ['Teknisi berpengalaman', 'Garansi resmi', 'Harga kompetitif', 'Konsultasi gratis'],
    };

    // FAQ khusus untuk kota ini
    const cityFAQs = [
        {
            question: `Berapa harga kamera CCTV di ${city.name}?`,
            answer: `Harga kamera CCTV di toko kami ${city.name} mulai dari Rp350.000 untuk indoor hingga Rp2.500.000+ untuk outdoor premium. Tersedia CCTV Hikvision, Dahua, dan Ezviz dengan garansi resmi.`,
        },
        {
            question: `Berapa biaya pasang CCTV di ${city.name}?`,
            answer: `Biaya instalasi CCTV di ${city.name} mulai dari Rp300.000 per titik, tergantung jenis kamera dan tingkat kesulitan instalasi. Hubungi kami di ${BUSINESS_INFO.telephone} untuk penawaran harga terbaik.`,
        },
        {
            question: `Apakah melayani penjualan dan instalasi CCTV di seluruh ${city.name}?`,
            answer: `Ya, kami melayani penjualan kamera CCTV dan instalasi di seluruh wilayah ${city.name} dan sekitarnya. Tim teknisi kami siap datang ke lokasi Anda untuk survei dan pemasangan.`,
        },
        ...FAQ_DATA.slice(0, 2),
    ];

    return (
        <>
            {/* Schema Markup */}
            <SchemaMarkup
                type="combined"
                includeLocalBusiness
                includeFAQ
                faqs={cityFAQs}
                breadcrumbs={[
                    { name: 'Home', url: BUSINESS_INFO.url },
                    { name: 'Wilayah Layanan', url: `${BUSINESS_INFO.url}/wilayah` },
                    { name: city.name },
                ]}
            />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <span className="inline-block bg-blue-700/50 text-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        Layanan Area {city.name}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Jual & Jasa Pasang CCTV {city.name}
                    </h1>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        {cityData.tagline}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`https://wa.me/6282228654835?text=Halo, saya tertarik dengan jasa instalasi CCTV di ${city.name}`}
                            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Hubungi via WhatsApp
                        </a>
                        <a
                            href={`tel:${BUSINESS_INFO.telephone}`}
                            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition-colors"
                        >
                            {BUSINESS_INFO.telephone}
                        </a>
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Mengapa Memilih Kami di {city.name}?
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {cityData.highlights.map((highlight, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
                            >
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-gray-700 font-medium">{highlight}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Layanan CCTV di {city.name}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: 'Jual Kamera CCTV',
                                desc: `Jual berbagai merk CCTV berkualitas di ${city.name}: Hikvision, Dahua, Ezviz dengan harga terbaik.`,
                                icon: '📹',
                            },
                            {
                                title: 'Instalasi CCTV Rumah',
                                desc: `Pemasangan sistem CCTV untuk rumah tinggal di ${city.name} dengan teknologi terkini.`,
                                icon: '🏠',
                            },
                            {
                                title: 'CCTV Kantor & Toko',
                                desc: `Solusi keamanan untuk bisnis dan perkantoran di wilayah ${city.name}.`,
                                icon: '🏢',
                            },
                            {
                                title: 'Service & Maintenance',
                                desc: `Layanan perawatan dan perbaikan CCTV untuk pelanggan di ${city.name}.`,
                                icon: '🔧',
                            },
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200 transition-colors"
                            >
                                <span className="text-4xl mb-4 block">{service.icon}</span>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                                <p className="text-gray-600">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        FAQ - Jasa CCTV {city.name}
                    </h2>
                    <div className="space-y-4">
                        {cityFAQs.map((faq, index) => (
                            <details
                                key={index}
                                className="bg-white rounded-xl shadow-sm border border-gray-100 group"
                            >
                                <summary className="cursor-pointer p-6 font-semibold text-gray-800 flex justify-between items-center">
                                    {faq.question}
                                    <span className="text-blue-600 group-open:rotate-180 transition-transform">
                                        ▼
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 text-gray-600">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 bg-blue-900 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Siap Pasang CCTV di {city.name}?
                    </h2>
                    <p className="text-blue-100 mb-8 text-lg">
                        Hubungi kami sekarang untuk konsultasi gratis dan penawaran harga terbaik!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`https://wa.me/6282228654835?text=Halo, saya ingin konsultasi pemasangan CCTV di ${city.name}`}
                            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
                        >
                            Chat WhatsApp Sekarang
                        </a>
                        <a
                            href="/"
                            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition-colors"
                        >
                            Lihat Paket CCTV
                        </a>
                    </div>
                </div>
            </section>

            {/* Other Cities */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
                        Layanan CCTV di Kota Lain
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {SERVICE_AREAS.filter((area) => area.slug !== city.slug).map((area) => (
                            <a
                                key={area.slug}
                                href={`/wilayah/${area.slug}`}
                                className="bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                            >
                                {area.name}
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
