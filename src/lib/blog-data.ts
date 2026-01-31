// Blog Article Data for Topical Authority
// Content strategy: CCTV industry expertise
// Markdown content is stored in /content/blog/[slug].md

import fs from 'fs';
import path from 'path';

export interface Article {
    slug: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    category: 'panduan' | 'teknologi' | 'tips' | 'komersial';
    publishDate: string;
    readTime: number;
    excerpt: string;
}

export interface ArticleWithContent extends Article {
    content: string;
}

// Article metadata (without content)
export const ARTICLES: Article[] = [
    {
        slug: 'panduan-memilih-cctv-untuk-rumah',
        title: 'Panduan Lengkap Memilih CCTV untuk Rumah: Dari Budget hingga Premium',
        metaTitle: 'Panduan Memilih CCTV untuk Rumah 2024 - Tips dari Ahli',
        metaDescription: 'Panduan lengkap cara memilih CCTV yang bagus untuk rumah. Dari kamera budget hingga premium, resolusi, fitur night vision, dan tips instalasi dari teknisi berpengalaman.',
        keywords: ['cara memilih cctv yang bagus untuk rumah', 'cctv rumah terbaik', 'rekomendasi cctv rumah', 'tips beli cctv'],
        category: 'panduan',
        publishDate: '2026-02-01',
        readTime: 8,
        excerpt: 'Memilih CCTV untuk rumah tidak boleh asal-asalan. Pelajari faktor penting seperti resolusi, jenis kamera, fitur night vision, dan budget yang tepat untuk keamanan rumah Anda.',
    },
    {
        slug: 'perbedaan-ip-camera-dan-cctv-analog',
        title: 'IP Camera vs CCTV Analog: Mana yang Lebih Cocok untuk Kebutuhan Anda?',
        metaTitle: 'IP Camera vs CCTV Analog - Perbandingan Lengkap 2024',
        metaDescription: 'Pahami perbedaan IP Camera dan CCTV Analog: kualitas gambar, instalasi, biaya, dan mana yang lebih cocok untuk rumah atau bisnis Anda.',
        keywords: ['perbedaan cctv analog dan ip camera', 'ip camera vs analog', 'kelebihan ip camera', 'cctv analog atau digital'],
        category: 'teknologi',
        publishDate: '2026-02-05',
        readTime: 6,
        excerpt: 'CCTV Analog lebih murah tapi IP Camera lebih canggih. Mana yang tepat untuk Anda? Simak perbandingan lengkap dari segi kualitas, instalasi, hingga biaya.',
    },
    {
        slug: 'berapa-titik-cctv-ideal-untuk-rumah',
        title: 'Berapa Titik CCTV yang Ideal untuk Rumah? Panduan Positioning Strategis',
        metaTitle: 'Berapa Titik CCTV Ideal untuk Rumah? Panduan Lengkap',
        metaDescription: 'Panduan menentukan jumlah titik CCTV ideal untuk rumah berdasarkan tipe bangunan. Termasuk tips penempatan strategis dan blind spot yang harus dihindari.',
        keywords: ['berapa titik cctv yang ideal untuk rumah', 'jumlah cctv rumah', 'posisi cctv rumah', 'penempatan kamera cctv'],
        category: 'panduan',
        publishDate: '2026-02-10',
        readTime: 5,
        excerpt: 'Bingung menentukan berapa kamera CCTV yang dibutuhkan untuk rumah? Panduan ini membantu Anda menghitung jumlah ideal dan posisi strategis untuk keamanan maksimal.',
    },
    {
        slug: 'colorvu-vs-night-vision',
        title: 'ColorVu vs Night Vision: Teknologi Pengawasan Malam Terbaik',
        metaTitle: 'ColorVu vs Night Vision IR - Mana yang Lebih Baik? 2024',
        metaDescription: 'Perbandingan lengkap teknologi ColorVu dan Night Vision IR. Pelajari perbedaan, kelebihan, kekurangan, dan mana yang cocok untuk kebutuhan Anda.',
        keywords: ['colorvu vs night vision', 'cctv night vision terbaik', 'hikvision colorvu', 'kamera cctv malam hari'],
        category: 'teknologi',
        publishDate: '2026-02-15',
        readTime: 7,
        excerpt: 'Night Vision IR atau ColorVu? Dua teknologi pengawasan malam dengan kelebihan masing-masing. Simak perbandingan lengkap untuk memilih yang tepat.',
    },
    {
        slug: 'cara-monitoring-cctv-dari-hp',
        title: 'Cara Monitoring CCTV dari HP: Setup Remote Viewing dalam 5 Menit',
        metaTitle: 'Cara Pantau CCTV dari HP - Panduan Setup Remote Viewing',
        metaDescription: 'Tutorial lengkap setup remote viewing CCTV di smartphone. Panduan Hik-Connect, DMSS, dan aplikasi lainnya untuk monitoring dari mana saja.',
        keywords: ['cara monitoring cctv dari hp', 'remote viewing cctv', 'hik-connect setup', 'pantau cctv dari smartphone'],
        category: 'tips',
        publishDate: '2026-02-20',
        readTime: 6,
        excerpt: 'Pantau rumah atau bisnis dari mana saja melalui HP. Panduan step-by-step setup remote viewing untuk berbagai brand CCTV populer.',
    },
    {
        slug: 'tips-merawat-cctv-agar-awet',
        title: '7 Tips Merawat CCTV Agar Tetap Optimal dan Awet',
        metaTitle: 'Tips Merawat CCTV - 7 Cara Agar CCTV Awet dan Optimal',
        metaDescription: 'Panduan perawatan CCTV agar tetap optimal. Tips membersihkan lensa, cek kabel, maintenance DVR, dan jadwal pengecekan berkala.',
        keywords: ['tips merawat cctv', 'perawatan cctv', 'maintenance cctv', 'cctv awet'],
        category: 'tips',
        publishDate: '2026-02-25',
        readTime: 5,
        excerpt: 'CCTV yang terawat bisa bertahan 5-10 tahun. Pelajari 7 tips perawatan agar sistem keamanan Anda tetap optimal dan awet.',
    },
    {
        slug: 'cctv-dengan-ai-analytics',
        title: 'CCTV dengan AI Analytics: Masa Depan Sistem Keamanan Cerdas',
        metaTitle: 'CCTV AI Analytics - Teknologi Keamanan Masa Depan',
        metaDescription: 'Mengenal fitur AI dalam CCTV modern: human detection, face recognition, line crossing, dan lainnya. Apakah worth untuk investasi?',
        keywords: ['cctv ai', 'cctv artificial intelligence', 'hikvision acusense', 'dahua wizsense', 'smart cctv'],
        category: 'teknologi',
        publishDate: '2026-02-28',
        readTime: 8,
        excerpt: 'AI mengubah cara CCTV bekerja. Dari detection cerdas hingga face recognition, pelajari fitur-fitur AI yang membuat sistem keamanan lebih pintar.',
    },
];

// Get article content from markdown file
export function getArticleContent(slug: string): string {
    try {
        const contentDir = path.join(process.cwd(), 'content', 'blog');
        const filePath = path.join(contentDir, `${slug}.md`);
        return fs.readFileSync(filePath, 'utf-8');
    } catch (error) {
        console.error(`Error reading article content for ${slug}:`, error);
        return '';
    }
}

// Get article by slug with content
export function getArticleBySlug(slug: string): ArticleWithContent | undefined {
    const article = ARTICLES.find((a) => a.slug === slug);
    if (!article) return undefined;

    return {
        ...article,
        content: getArticleContent(slug),
    };
}

// Get all article slugs
export function getAllArticleSlugs(): string[] {
    return ARTICLES.map((article) => article.slug);
}

// Get recent articles (metadata only)
export function getRecentArticles(count: number = 5): Article[] {
    return [...ARTICLES]
        .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
        .slice(0, count);
}

// Get articles by category
export function getArticlesByCategory(category: Article['category']): Article[] {
    return ARTICLES.filter((article) => article.category === category);
}
