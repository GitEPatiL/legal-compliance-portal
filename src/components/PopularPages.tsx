import { ManifestItem } from '@/types/manifest';
import PageCard from './PageCard';

interface PopularPagesProps {
  items: ManifestItem[];
}

export default function PopularPages({ items }: PopularPagesProps) {
  // In a real app, this would use a 'views' field or similar. Picking first 12 for demo.
  const popular = items.slice(0, 12);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {popular.map((page) => (
        <PageCard key={page.slug} page={page} />
      ))}
    </div>
  );
}
