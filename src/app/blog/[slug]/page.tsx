import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getArticleBySlug, getAllArticleSlugs, getRecentArticles } from '@/lib/blog-data';
import { BUSINESS_INFO } from '@/lib/seo-schema';
import { SchemaMarkup } from '@/app/components/SchemaMarkup';

// Generate static params for all articles
export async function generateStaticParams() {
    return getAllArticleSlugs().map((slug) => ({
        slug,
    }));
}

// Generate metadata for each article
export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const article = getArticleBySlug(params.slug);

    if (!article) {
        return {
            title: 'Artikel Tidak Ditemukan',
        };
    }

    return {
        title: article.metaTitle,
        description: article.metaDescription,
        keywords: article.keywords,
        openGraph: {
            title: article.metaTitle,
            description: article.metaDescription,
            type: 'article',
            locale: 'id_ID',
            publishedTime: article.publishDate,
            authors: ['Mitra Asia CCTV'],
        },
        twitter: {
            card: 'summary_large_image',
            title: article.metaTitle,
            description: article.metaDescription,
        },
        alternates: {
            canonical: `${BUSINESS_INFO.url}/blog/${article.slug}`,
        },
    };
}

// Generate article schema
function generateArticleSchema(article: { title: string; metaDescription: string; publishDate: string; slug: string }) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.metaDescription,
        author: {
            '@type': 'Organization',
            name: 'Mitra Asia CCTV',
            url: BUSINESS_INFO.url,
        },
        publisher: {
            '@type': 'Organization',
            name: 'Mitra Asia CCTV',
            logo: {
                '@type': 'ImageObject',
                url: `${BUSINESS_INFO.url}/images/logo.png`,
            },
        },
        datePublished: article.publishDate,
        dateModified: article.publishDate,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${BUSINESS_INFO.url}/blog/${article.slug}`,
        },
    };
}

const categoryLabels: Record<string, string> = {
    panduan: 'Panduan',
    teknologi: 'Teknologi',
    tips: 'Tips & Trik',
    komersial: 'Komersial',
};

export default function ArticlePage({
    params,
}: {
    params: { slug: string };
}) {
    const article = getArticleBySlug(params.slug);

    if (!article) {
        notFound();
    }

    const recentArticles = getRecentArticles(3).filter(
        (a) => a.slug !== article.slug
    );

    const articleSchema = generateArticleSchema(article);

    return (
        <>
            {/* Article Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            {/* Breadcrumb Schema */}
            <SchemaMarkup
                type="breadcrumb"
                breadcrumbs={[
                    { name: 'Home', url: BUSINESS_INFO.url },
                    { name: 'Blog', url: `${BUSINESS_INFO.url}/blog` },
                    { name: article.title },
                ]}
            />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Breadcrumb */}
                    <nav className="text-sm text-gray-400 mb-6">
                        <Link href="/" className="hover:text-white">
                            Home
                        </Link>
                        <span className="mx-2">/</span>
                        <Link href="/blog" className="hover:text-white">
                            Blog
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-300">{categoryLabels[article.category]}</span>
                    </nav>

                    {/* Category & Meta */}
                    <div className="flex items-center gap-4 mb-4 flex-wrap">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {categoryLabels[article.category]}
                        </span>
                        <span className="text-gray-400">
                            {new Date(article.publishDate).toLocaleDateString('id-ID', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                            })}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-400">{article.readTime} menit baca</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                        {article.title}
                    </h1>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            h1: ({ children }) => (
                                <h1 className="text-3xl font-bold text-gray-800 mt-8 mb-4">{children}</h1>
                            ),
                            h2: ({ children }) => (
                                <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">{children}</h2>
                            ),
                            h3: ({ children }) => (
                                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">{children}</h3>
                            ),
                            p: ({ children }) => (
                                <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
                            ),
                            ul: ({ children }) => (
                                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">{children}</ul>
                            ),
                            ol: ({ children }) => (
                                <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">{children}</ol>
                            ),
                            li: ({ children }) => (
                                <li className="text-gray-700">{children}</li>
                            ),
                            a: ({ href, children }) => (
                                <a href={href} className="text-blue-600 hover:underline">{children}</a>
                            ),
                            strong: ({ children }) => (
                                <strong className="font-bold text-gray-800">{children}</strong>
                            ),
                            blockquote: ({ children }) => (
                                <blockquote className="border-l-4 border-blue-500 bg-blue-50 py-2 px-4 my-4 italic text-gray-700">
                                    {children}
                                </blockquote>
                            ),
                            code: ({ children }) => (
                                <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{children}</code>
                            ),
                            hr: () => <hr className="my-8 border-gray-200" />,
                            table: ({ children }) => (
                                <div className="overflow-x-auto my-6">
                                    <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                                        {children}
                                    </table>
                                </div>
                            ),
                            thead: ({ children }) => (
                                <thead className="bg-gray-100">{children}</thead>
                            ),
                            tbody: ({ children }) => (
                                <tbody className="divide-y divide-gray-200">{children}</tbody>
                            ),
                            tr: ({ children }) => (
                                <tr className="hover:bg-gray-50">{children}</tr>
                            ),
                            th: ({ children }) => (
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800">{children}</th>
                            ),
                            td: ({ children }) => (
                                <td className="px-4 py-3 text-sm text-gray-700">{children}</td>
                            ),
                        }}
                    >
                        {article.content}
                    </ReactMarkdown>
                </div>
            </article>

            {/* CTA Section */}
            <section className="py-12 px-4 bg-blue-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Butuh Bantuan dengan CCTV?
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Tim ahli kami siap membantu Anda memilih dan memasang sistem CCTV yang tepat.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`https://wa.me/6285158228528?text=Halo, saya baru baca artikel "${article.title}" dan ingin konsultasi lebih lanjut`}
                            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg inline-flex items-center justify-center gap-2 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Konsultasi Gratis
                        </a>
                        <Link
                            href="/blog"
                            className="bg-white hover:bg-gray-100 text-gray-700 font-semibold px-6 py-3 rounded-lg border border-gray-300 transition-colors"
                        >
                            Baca Artikel Lainnya
                        </Link>
                    </div>
                </div>
            </section>

            {/* Related Articles */}
            {recentArticles.length > 0 && (
                <section className="py-12 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl font-bold text-gray-800 mb-8">
                            Artikel Terkait
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {recentArticles.map((relatedArticle) => (
                                <article
                                    key={relatedArticle.slug}
                                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                                >
                                    <div className="h-32 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                                        <span className="text-4xl">📹</span>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">
                                            <Link
                                                href={`/blog/${relatedArticle.slug}`}
                                                className="hover:text-blue-600"
                                            >
                                                {relatedArticle.title}
                                            </Link>
                                        </h3>
                                        <p className="text-gray-500 text-sm">
                                            {relatedArticle.readTime} menit baca
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
