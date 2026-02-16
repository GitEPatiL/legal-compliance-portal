import React from 'react';
import { BlockProps } from '@/types/page';

interface TwoColumnContent {
  heading?: string;
  left_content: string;
  right_content: string;
  left_image?: string;
  right_image?: string;
}

const TwoColumn: React.FC<BlockProps> = ({ content, style, theme }) => {
  const { heading, left_content, right_content, left_image, right_image } = content as TwoColumnContent;
  const cardClass = theme?.card_style === 'elevated' ? 'bg-white rounded-xl shadow-lg p-8' : 'bg-gray-50 rounded-lg p-8';

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {heading && <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">{heading}</h2>}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className={style === 'card' ? cardClass : ''}>
            {left_image && (
              <img
                src={left_image}
                alt="Left column"
                className="w-full h-64 object-cover rounded-lg mb-6"
                loading="lazy"
              />
            )}
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: left_content }} />
          </div>
          <div className={style === 'card' ? cardClass : ''}>
            {right_image && (
              <img
                src={right_image}
                alt="Right column"
                className="w-full h-64 object-cover rounded-lg mb-6"
                loading="lazy"
              />
            )}
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: right_content }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoColumn;
