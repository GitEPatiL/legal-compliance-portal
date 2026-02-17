'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BlockProps } from '@/types/page';

interface CTAContent {
  heading: string;
  description?: string;
  cta_text: string;
  cta_url: string;
  secondary_cta_text?: string;
  secondary_cta_url?: string;
}

const CTA: React.FC<BlockProps> = ({ content, theme }) => {
  const { heading, description, cta_text, cta_url, secondary_cta_text, secondary_cta_url } =
    content as CTAContent;
  const primary = theme?.color_palette[0] || '#1a56db';

  return (
    <section className="py-20 px-6 relative overflow-hidden" style={{ backgroundColor: primary }}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center text-white relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">{heading}</h2>
        {description && <p className="text-lg md:text-xl mb-10 opacity-90">{description}</p>}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href={cta_url}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 shadow-lg"
          >
            {cta_text}
          </motion.a>
          {secondary_cta_text && secondary_cta_url && (
            <motion.a
              href={secondary_cta_url}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              {secondary_cta_text}
            </motion.a>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
