"use client";

import { useState, useMemo, useEffect } from 'react';
import Fuse from 'fuse.js';
import { ManifestItem } from '@/types/manifest';

export function useSearchIndex(items: ManifestItem[]) {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);
    return () => clearTimeout(handler);
  }, [query]);

  const fuse = useMemo(() => {
    return new Fuse(items, {
      keys: ['title', 'slug', 'tags', 'category'],
      threshold: 0.3,
      ignoreLocation: true,
    });
  }, [items]);

  const results = useMemo(() => {
    if (!debouncedQuery) return [];
    return fuse.search(debouncedQuery).map((r) => r.item);
  }, [fuse, debouncedQuery]);

  return { query, setQuery, results, debouncedQuery };
}
