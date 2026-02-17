'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BlockProps } from '@/types/page';

interface TextContent {
  heading?: string;
  body: string;
  alignment?: 'left' | 'center' | 'right';
}

const TextBlock: React.FC<BlockProps> = ({ content }) => {
  const { heading, body, alignment = 'left' } = content as TextContent;
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[alignment];

  return (
    <section className={`py-16 px-6 ${alignClass} text-white`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {heading && <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">{heading}</h2>}
        <div
          className="prose prose-lg max-w-none text-gray-300 prose-headings:text-white prose-strong:text-white prose-a:text-blue-400"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </motion.div>
    </section>
  );
};

export default TextBlock;
