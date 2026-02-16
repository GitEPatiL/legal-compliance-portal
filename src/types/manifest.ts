export interface ManifestItem {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  last_modified: string;
}

export interface CategorySummary {
  name: string;
  count: number;
  slug: string;
}
