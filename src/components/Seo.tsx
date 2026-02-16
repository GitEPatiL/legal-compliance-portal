import React from 'react';
import { Meta } from '@/types/page';

interface SeoProps {
  meta: Meta;
  title: string;
  hasFAQ?: boolean;
}

const Seo: React.FC<SeoProps> = ({ meta, title, hasFAQ }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: meta.description,
    keywords: meta.keywords.join(', '),
  };

  const faqJsonLd = hasFAQ
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
    </>
  );
};

export default Seo;
