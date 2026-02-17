import React from 'react';
import { Meta } from '@/types/page';

interface SeoProps {
  meta: Meta;
  title: string;
  faq?: Array<{ question: string; answer: string }>;
}

const Seo: React.FC<SeoProps> = ({ meta, title, faq }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: meta.description,
    keywords: meta.keywords.join(', '),
  };

  const faqJsonLd = faq
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
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
