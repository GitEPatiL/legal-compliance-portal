import React from 'react';
import { ContentBlock, Theme } from '@/types/page';
import Hero from './blocks/Hero';
import TextBlock from './blocks/TextBlock';
import TwoColumn from './blocks/TwoColumn';
import FAQ from './blocks/FAQ';
import CTA from './blocks/CTA';
import TableBlock from './blocks/TableBlock';
import Process from './blocks/Process';
import GridCards from './blocks/GridCards';
import Testimonial from './blocks/Testimonial';
import Gallery from './blocks/Gallery';

interface BlockRendererProps {
  blocks: ContentBlock[];
  theme?: Theme;
}

const defaultTheme: Theme = {
  color_palette: ['#1a56db', '#7c3aed'],
  font_pair: 'Inter',
  card_style: 'elevated',
};

/**
 * BlockRenderer - Safely maps JSON content blocks to React components
 * Includes error boundaries and fallback UI for invalid blocks
 */
const BlockRenderer: React.FC<BlockRendererProps> = ({ blocks, theme = defaultTheme }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const blockComponents: Record<string, React.ComponentType<any>> = {
    hero: Hero,
    text: TextBlock,
    two_column: TwoColumn,
    three_column: TwoColumn, // Fallback to TwoColumn
    faq: FAQ,
    cta: CTA,
    table: TableBlock,
    process: Process,
    grid: GridCards,
    testimonial: Testimonial,
    gallery: Gallery,
  };

  return (
    <div className="block-renderer">
      {blocks.map((block, index) => {
        const Component = blockComponents[block.type];

        if (!Component) {
          console.warn(`Unknown block type: ${block.type}`);
          return (
            <div
              key={`fallback-${index}`}
              className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg my-4"
            >
              <p className="text-yellow-800">
                ⚠️ Unknown block type: <code className="font-mono">{block.type}</code>
              </p>
            </div>
          );
        }

        try {
          return (
            <Component
              key={`block-${block.type}-${index}`}
              content={block.content}
              style={block.style}
              theme={theme}
              {...(block.props || {})}
            />
          );
        } catch (error) {
          console.error(`Error rendering block ${block.type}:`, error);
          return (
            <div
              key={`error-${index}`}
              className="bg-red-50 border border-red-200 p-4 rounded-lg my-4"
            >
              <p className="text-red-800">
                ❌ Error rendering block type: <code className="font-mono">{block.type}</code>
              </p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default BlockRenderer;
