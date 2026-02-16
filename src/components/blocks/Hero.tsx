import React from 'react';
import { BlockProps } from '@/types/page';

interface HeroContent {
  heading: string;
  subheading?: string;
  cta_text?: string;
  cta_url?: string;
  image?: string;
  image_alt?: string;
}

const Hero: React.FC<BlockProps> = ({ content, style, theme }) => {
  const { heading, subheading, cta_text, cta_url, image, image_alt } = content as HeroContent;
  const primary = theme?.color_palette[0] || '#1a56db';

  if (style === 'image-background') {
    return (
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        {image && (
          <img
            src={image}
            alt={image_alt || heading}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">{heading}</h1>
          {subheading && <p className="text-xl md:text-2xl mb-8 opacity-90">{subheading}</p>}
          {cta_text && cta_url && (
            <a
              href={cta_url}
              className="inline-block px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100"
            >
              {cta_text}
            </a>
          )}
        </div>
      </section>
    );
  }

  if (style === 'split') {
    return (
      <section className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6 py-20">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{heading}</h1>
          {subheading && <p className="text-lg md:text-xl text-gray-600 mb-8">{subheading}</p>}
          {cta_text && cta_url && (
            <a
              href={cta_url}
              style={{ backgroundColor: primary }}
              className="inline-block px-8 py-4 text-white font-semibold rounded-lg hover:opacity-90"
            >
              {cta_text}
            </a>
          )}
        </div>
        {image && (
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img src={image} alt={image_alt || heading} className="w-full h-auto" />
          </div>
        )}
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">{heading}</h1>
      {subheading && <p className="text-lg md:text-xl text-gray-600 mb-8">{subheading}</p>}
      {cta_text && cta_url && (
        <a
          href={cta_url}
          style={{ backgroundColor: primary }}
          className="inline-block px-8 py-4 text-white font-semibold rounded-lg hover:opacity-90"
        >
          {cta_text}
        </a>
      )}
    </section>
  );
};

export default Hero;
