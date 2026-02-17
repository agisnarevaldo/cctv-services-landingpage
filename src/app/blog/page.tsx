import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { client } from '@/lib/sanity.client';
import { postsQuery } from '@/lib/sanity.queries';
import { urlFor } from '@/lib/sanity.image';
import { BUSINESS_INFO } from '@/lib/seo-schema';

export const revalidate = 60; // Revalidate every 60 seconds

export const metadata: Metadata = {
    title: 'Blog & Panduan CCTV - Tips, Tutorial, dan Informasi Terbaru',
    description: 'Baca artikel terbaru seputar CCTV: panduan memilih kamera, tips instalasi, perbandingan produk, dan informasi teknologi keamanan terkini dari ahli CCTV.',
    keywords: [
        'blog cctv',
        'panduan cctv',
        'tips pasang cctv',
        'tutorial cctv',
        'informasi keamanan',
    ],
    openGraph: {
        title: 'Blog & Panduan CCTV - Mitra Asia CCTV',
        description: 'Artikel terbaru seputar CCTV: panduan, tips, dan informasi teknologi keamanan.',
        type: 'website',
        locale: 'id_ID',
    },
    alternates: {
        canonical: `${BUSINESS_INFO.url}/blog`,
    },
};

const categoryLabels: Record<string, string> = {
    panduan: 'Panduan',
    teknologi: 'Teknologi',
    tips: 'Tips & Trik',
    komersial: 'Komersial',
};

const categoryColors: Record<string, string> = {
    panduan: 'bg-blue-100 text-blue-700',
    teknologi: 'bg-purple-100 text-purple-700',
    tips: 'bg-green-100 text-green-700',
    komersial: 'bg-orange-100 text-orange-700',
};

// Fallback color if category not found
const defaultCategoryColor = 'bg-gray-100 text-gray-700';

export default async function BlogPage() {
    const articles = await client.fetch(postsQuery);

    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Blog & Panduan CCTV
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Tips, tutorial, dan informasi terbaru seputar CCTV dan sistem keamanan dari tim ahli kami.
                    </p>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article: any) => {
                            // Handle category (array or string depending on schema, migration mapped as array)
                            const category = article.categories && article.categories.length > 0 ? article.categories[0].toLowerCase() : 'tips';
                            const catLabel = categoryLabels[category] || article.categories?.[0] || 'Tips';
                            const catColor = categoryColors[category] || defaultCategoryColor;

                            return (
                                <article
                                    key={article._id}
                                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group flex flex-col"
                                >
                                    {/* Thumbnail */}
                                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                                        {article.mainImage ? (
                                            <Image
                                                src={urlFor(article.mainImage).width(600).height(400).url()}
                                                alt={article.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                width={600}
                                                height={400}
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                                                <span className="text-6xl">📹</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col">
                                        {/* Category & Date */}
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${catColor}`}>
                                                {catLabel}
                                            </span>
                                            <span className="text-gray-400 text-sm">
                                                {new Date(article.publishedAt).toLocaleDateString('id-ID', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric'
                                                })}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                            <Link href={`/blog/${article.slug.current}`}>
                                                {article.title}
                                            </Link>
                                        </h2>

                                        {/* Excerpt */}
                                        <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
                                            {article.excerpt}
                                        </p>

                                        {/* Read More Link */}
                                        <Link
                                            href={`/blog/${article.slug.current}`}
                                            className="text-blue-600 font-medium text-sm hover:text-blue-700 inline-flex items-center gap-1 mt-auto"
                                        >
                                            Baca Selengkapnya
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </article>
                            )
                        })}
                    </div>

                    {/* Empty State */}
                    {articles.length === 0 && (
                        <div className="text-center py-16">
                            <span className="text-6xl mb-4 block">📝</span>
                            <h2 className="text-2xl font-bold text-gray-700 mb-2">
                                Belum Ada Artikel
                            </h2>
                            <p className="text-gray-500">
                                Artikel akan segera tersedia. Stay tuned!
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 bg-blue-900 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Butuh Konsultasi CCTV?
                    </h2>
                    <p className="text-blue-100 mb-8 text-lg">
                        Hubungi kami untuk konsultasi gratis seputar kebutuhan CCTV Anda.
                    </p>
                    <a
                        href={`https://wa.me/6282228654835?text=Halo, saya ingin konsultasi tentang CCTV`}
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg inline-flex items-center gap-2 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Hubungi via WhatsApp
                    </a>
                </div>
            </section>
        </>
    );
}
