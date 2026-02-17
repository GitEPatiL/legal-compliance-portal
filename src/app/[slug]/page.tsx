import { Metadata } from 'next';
import { readFile } from 'fs/promises';
import { join } from 'path';
import BlockRenderer from '@/components/BlockRenderer';
import Seo from '@/components/Seo';
import { Page as PageType, PageSchema } from '@/types/page';

interface PageProps {
  params: { slug: string };
}

// ISR: Revalidate every 60 seconds
export const revalidate = 60;

// Generate static params for all pages
export async function generateStaticParams() {
  try {
    const manifestPath = join(process.cwd(), 'public', 'pages', 'manifest.json');
    const manifestContent = await readFile(manifestPath, 'utf-8');
    const manifest = JSON.parse(manifestContent);

    return manifest.map((page: { slug: string }) => ({
      slug: page.slug,
    }));
  } catch (error) {
    console.error('Error reading manifest:', error);
    return [];
  }
}

// Fetch page data from public/pages/{slug}.json
async function getPageData(slug: string): Promise<PageType | null> {
  try {
    const pagePath = join(process.cwd(), 'public', 'pages', `${slug}.json`);
    const content = await readFile(pagePath, 'utf-8');
    const data = JSON.parse(content);

    // Validate against schema
    const result = PageSchema.safeParse(data);
    if (!result.success) {
      console.error(`Page ${slug} validation failed:`, result.error);
      return null;
    }

    return result.data;
  } catch (error) {
    console.error(`Error loading page ${slug}:`, error);
    return null;
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const pageData = await getPageData(params.slug);

  if (!pageData) {
    return { title: 'Page Not Found' };
  }

  return {
    title: pageData.title,
    description: pageData.meta.description,
    keywords: pageData.meta.keywords,
    openGraph: {
      title: pageData.title,
      description: pageData.meta.description,
      url: pageData.meta.canonical,
    },
  };
}

// Dynamic page component
export default async function Page({ params }: PageProps) {
  const pageData = await getPageData(params.slug);

  if (!pageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600">The page &quot;{params.slug}&quot; could not be found.</p>
        </div>
      </div>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const faqBlock = pageData.content_blocks.find((block) => block.type === 'faq');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const faqData = faqBlock?.content?.questions;

  return (
    <main>
      <Seo meta={pageData.meta} title={pageData.title} faq={faqData} />
      <BlockRenderer blocks={pageData.content_blocks} theme={pageData.theme} />
    </main>
  );
}
