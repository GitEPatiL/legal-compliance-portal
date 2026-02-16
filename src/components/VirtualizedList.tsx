"use client";
import { useRef, useState } from 'react';

interface VirtualizedListProps<T> {
  items: T[];
  height: number;
  itemHeight: number;
  renderItem: (item: T, index: number) => React.ReactNode;
}

export default function VirtualizedList<T>({ items, height, itemHeight, renderItem }: VirtualizedListProps<T>) {
  const [scrollTop, setScrollTop] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const totalHeight = items.length * itemHeight;
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - 2);
  const visibleCount = Math.ceil(height / itemHeight) + 4;
  const endIndex = Math.min(items.length, startIndex + visibleCount);
  const visibleItems = items.slice(startIndex, endIndex);

  return (
    <div
      ref={scrollRef}
      onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
      style={{ height, overflowY: 'auto' }}
      className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent pr-2"
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div
          style={{
            transform: `translateY(${startIndex * itemHeight}px)`,
            position: 'absolute',
            width: '100%',
            top: 0,
            left: 0,
          }}
        >
          {visibleItems.map((item, index) => renderItem(item, startIndex + index))}
        </div>
      </div>
    </div>
  );
}
