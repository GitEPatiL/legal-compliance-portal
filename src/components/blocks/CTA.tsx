import React from 'react';
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
  const { heading, description, cta_text, cta_url, secondary_cta_text, secondary_cta_url } = content as CTAContent;
  const primary = theme?.color_palette[0] || '#1a56db';

  return (
    <section className="py-20 px-6" style={{ backgroundColor: primary }}>
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">{heading}</h2>
        {description && <p className="text-lg md:text-xl mb-10 opacity-90">{description}</p>}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={cta_url}
            className="inline-block px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100"
          >
            {cta_text}
          </a>
          {secondary_cta_text && secondary_cta_url && (
            <a
              href={secondary_cta_url}
              className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900"
            >
              {secondary_cta_text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTA;
