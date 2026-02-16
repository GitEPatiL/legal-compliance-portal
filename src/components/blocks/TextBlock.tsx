import React from 'react';
import { BlockProps } from '@/types/page';

interface TextContent {
  heading?: string;
  body: string;
  alignment?: 'left' | 'center' | 'right';
}

const TextBlock: React.FC<BlockProps> = ({ content, style }) => {
  const { heading, body, alignment = 'left' } = content as TextContent;
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[alignment];

  return (
    <section className={`py-16 px-6 ${alignClass}`}>
      <div className="max-w-4xl mx-auto">
        {heading && <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">{heading}</h2>}
        <div className="prose prose-lg max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </section>
  );
};

export default TextBlock;
