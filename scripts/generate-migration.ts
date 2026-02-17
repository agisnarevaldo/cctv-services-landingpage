
import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';

// Define types for our data
interface Article {
    slug: string;
    title: string;
    description: string;
    category: string;
    publishDate: string;
    excerpt: string;
}

// Hardcoded data from src/lib/blog-data.ts
const ARTICLES = [
    {
        slug: 'panduan-memilih-cctv-untuk-rumah',
        title: 'Panduan Lengkap Memilih CCTV untuk Rumah: Dari Budget hingga Premium',
        description: 'Panduan lengkap cara memilih CCTV yang bagus untuk rumah. Dari kamera budget hingga premium, resolusi, fitur night vision, dan tips instalasi dari teknisi berpengalaman.',
        category: 'panduan',
        publishDate: '2026-02-01',
        excerpt: 'Memilih CCTV untuk rumah tidak boleh asal-asalan. Pelajari faktor penting seperti resolusi, jenis kamera, fitur night vision, dan budget yang tepat untuk keamanan rumah Anda.',
    },
    {
        slug: 'perbedaan-ip-camera-dan-cctv-analog',
        title: 'IP Camera vs CCTV Analog: Mana yang Lebih Cocok untuk Kebutuhan Anda?',
        description: 'Pahami perbedaan IP Camera dan CCTV Analog: kualitas gambar, instalasi, biaya, dan mana yang lebih cocok untuk rumah atau bisnis Anda.',
        category: 'teknologi',
        publishDate: '2026-02-05',
        excerpt: 'CCTV Analog lebih murah tapi IP Camera lebih canggih. Mana yang tepat untuk Anda? Simak perbandingan lengkap dari segi kualitas, instalasi, hingga biaya.',
    },
    {
        slug: 'berapa-titik-cctv-ideal-untuk-rumah',
        title: 'Berapa Titik CCTV yang Ideal untuk Rumah? Panduan Positioning Strategis',
        description: 'Panduan menentukan jumlah titik CCTV ideal untuk rumah berdasarkan tipe bangunan. Termasuk tips penempatan strategis dan blind spot yang harus dihindari.',
        category: 'panduan',
        publishDate: '2026-02-10',
        excerpt: 'Bingung menentukan berapa kamera CCTV yang dibutuhkan untuk rumah? Panduan ini membantu Anda menghitung jumlah ideal dan posisi strategis untuk keamanan maksimal.',
    },
    {
        slug: 'colorvu-vs-night-vision',
        title: 'ColorVu vs Night Vision: Teknologi Pengawasan Malam Terbaik',
        description: 'Perbandingan lengkap teknologi ColorVu dan Night Vision IR. Pelajari perbedaan, kelebihan, kekurangan, dan mana yang cocok untuk kebutuhan Anda.',
        category: 'teknologi',
        publishDate: '2026-02-15',
        excerpt: 'Night Vision IR atau ColorVu? Dua teknologi pengawasan malam dengan kelebihan masing-masing. Simak perbandingan lengkap untuk memilih yang tepat.',
    },
    {
        slug: 'cara-monitoring-cctv-dari-hp',
        title: 'Cara Monitoring CCTV dari HP: Setup Remote Viewing dalam 5 Menit',
        description: 'Tutorial lengkap setup remote viewing CCTV di smartphone. Panduan Hik-Connect, DMSS, dan aplikasi lainnya untuk monitoring dari mana saja.',
        category: 'tips',
        publishDate: '2026-02-20',
        excerpt: 'Pantau rumah atau bisnis dari mana saja melalui HP. Panduan step-by-step setup remote viewing untuk berbagai brand CCTV populer.',
    },
    {
        slug: 'tips-merawat-cctv-agar-awet',
        title: '7 Tips Merawat CCTV Agar Tetap Optimal dan Awet',
        description: 'Panduan perawatan CCTV agar tetap optimal. Tips membersihkan lensa, cek kabel, maintenance DVR, dan jadwal pengecekan berkala.',
        category: 'tips',
        publishDate: '2026-02-25',
        excerpt: 'CCTV yang terawat bisa bertahan 5-10 tahun. Pelajari 7 tips perawatan agar sistem keamanan Anda tetap optimal dan awet.',
    },
    {
        slug: 'cctv-dengan-ai-analytics',
        title: 'CCTV dengan AI Analytics: Masa Depan Sistem Keamanan Cerdas',
        description: 'Mengenal fitur AI dalam CCTV modern: human detection, face recognition, line crossing, dan lainnya. Apakah worth untuk investasi?',
        category: 'teknologi',
        publishDate: '2026-02-28',
        excerpt: 'AI mengubah cara CCTV bekerja. Dari detection cerdas hingga face recognition, pelajari fitur-fitur AI yang membuat sistem keamanan lebih pintar.',
    },
];

// --- AST Transformer Helpers ---

function generateKey() {
    return Math.random().toString(36).substring(2, 10);
}

// Convert phrasing content (text, strong, emphasis) to Portable Text spans
function mapPhrasingContent(nodes: any[], marks: string[] = []): any[] {
    let spans: any[] = [];

    nodes.forEach(node => {
        if (node.type === 'text') {
            spans.push({
                _type: 'span',
                _key: generateKey(),
                text: node.value,
                marks: [...marks],
            });
        } else if (node.type === 'strong') {
            spans = spans.concat(mapPhrasingContent(node.children, [...marks, 'strong']));
        } else if (node.type === 'emphasis') {
            spans = spans.concat(mapPhrasingContent(node.children, [...marks, 'em']));
        } else if (node.type === 'link') {
            // For simplicity, we treated links as plain text with link mark? 
            // Sanity links require markDefs. 
            // For now, let's just render the text, effectively stripping links to avoid complexity of markDefs unless needed.
            // Or better: flatten to text.
            spans = spans.concat(mapPhrasingContent(node.children, marks));
        } else if (node.type === 'inlineCode') {
            spans.push({
                _type: 'span',
                _key: generateKey(),
                text: node.value,
                marks: [...marks, 'code'],
            });
        }
        // Handle other inline types if necessary
    });

    return mergeSpans(spans);
}

function mergeSpans(spans: any[]) {
    if (spans.length === 0) return spans;
    const merged: any[] = [];
    let current = spans[0];

    for (let i = 1; i < spans.length; i++) {
        const next = spans[i];
        // If marks match, merge text
        if (JSON.stringify(current.marks.sort()) === JSON.stringify(next.marks.sort())) {
            current.text += next.text;
        } else {
            merged.push(current);
            current = next;
        }
    }
    merged.push(current);
    return merged;
}

// Initialize processor once to avoid OOM
const processor = remark().use(remarkGfm);

// Main function to convert Markdown to Portable Text
async function markdownToBlocks(markdown: string) {
    const tree = processor.parse(markdown);

    const blocks: any[] = [];

    // Traverse the root children
    const visit = (node: any) => {
        if (node.type === 'heading') {
            const style = `h${node.depth}`;
            blocks.push({
                _type: 'block',
                style: style,
                _key: generateKey(),
                children: mapPhrasingContent(node.children),
                markDefs: []
            });
        } else if (node.type === 'paragraph') {
            blocks.push({
                _type: 'block',
                style: 'normal',
                _key: generateKey(),
                children: mapPhrasingContent(node.children),
                markDefs: []
            });
        } else if (node.type === 'blockquote') {
            // Blockquotes in PT are simplified. 
            // Ideally it's a style 'blockquote'.
            // We need to extract the text content.
            const text = node.children.map((n: any) => n.children?.[0]?.value).join('\n');
            blocks.push({
                _type: 'block',
                style: 'blockquote',
                _key: generateKey(),
                children: [{ _type: 'span', _key: generateKey(), text: text || '', marks: [] }],
                markDefs: []
            });
        } else if (node.type === 'table') {
            // Transform table
            const rows = node.children.map((row: any) => {
                return {
                    _type: 'tableRow',
                    _key: generateKey(),
                    cells: row.children.map((cell: any) => {
                        // Extract text from cell (naive, takes first text node or concatenates)
                        // Sanity table cells are array of strings usually.
                        return cell.children.map((c: any) => c.value).join('') || '';
                    })
                };
            });
            blocks.push({
                _type: 'table',
                _key: generateKey(),
                rows: rows
            });
        } else if (node.type === 'list') {
            // Handle Lists
            const listItemType = node.ordered ? 'number' : 'bullet';

            node.children.forEach((listItem: any) => {
                // Each list item has children, usually paragraph
                listItem.children.forEach((child: any) => {
                    if (child.type === 'paragraph') {
                        blocks.push({
                            _type: 'block',
                            style: 'normal',
                            listItem: listItemType,
                            level: 1, // Naive level 1
                            _key: generateKey(),
                            children: mapPhrasingContent(child.children),
                            markDefs: []
                        });
                    }
                    // If nested list, we would need recursion, but assuming flat lists for now
                });
            });
        }
    };

    tree.children.forEach(visit);
    return blocks;
}


// --- Main Execution ---

const stream = fs.createWriteStream('sanity-data.ndjson', { flags: 'w' });

// Categories & Author Setup
const categories = ['panduan', 'teknologi', 'tips', 'komersial'];
const categoryIds: Record<string, string> = {};

categories.forEach(cat => {
    const id = `category-${cat}`;
    categoryIds[cat] = id;
    const doc = {
        _id: id,
        _type: 'category',
        title: cat.charAt(0).toUpperCase() + cat.slice(1),
        description: `Articles about ${cat}`
    };
    stream.write(JSON.stringify(doc) + '\n');
});

const authorId = 'author-mitra-asia-cctv';
const authorDoc = {
    _id: authorId,
    _type: 'author',
    name: 'Mitra Asia CCTV',
    slug: { _type: 'slug', current: 'mitra-asia-cctv' }
};
stream.write(JSON.stringify(authorDoc) + '\n');

// Process Articles
const contentDir = path.join(process.cwd(), 'content', 'blog');

(async () => {
    for (const article of ARTICLES) {
        console.log(`Processing: ${article.slug}`);
        const filePath = path.join(contentDir, `${article.slug}.md`);
        let body: any[] = [];

        if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf-8');
            const contentWithoutFrontmatter = content.replace(/^---[\s\S]*?---\n/, '');
            body = await markdownToBlocks(contentWithoutFrontmatter);
        }

        const doc = {
            _type: 'post',
            title: article.title,
            slug: { _type: 'slug', current: article.slug },
            publishedAt: new Date(article.publishDate).toISOString(),
            excerpt: article.excerpt,
            author: {
                _type: 'reference',
                _ref: authorId
            },
            categories: [
                {
                    _type: 'reference',
                    _ref: categoryIds[article.category]
                }
            ],
            body: body
        };
        stream.write(JSON.stringify(doc) + '\n');
    }

    stream.end();
    console.log('Migration data generated: sanity-data.ndjson');
})();
