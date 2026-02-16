import React from 'react';
import NextImage from 'next/image';
import { BlockProps } from '@/types/page';

interface TwoColumnContent {
  heading?: string;
  left_content: string;
  right_content: string;
  center_content?: string;
  left_image?: string;
  right_image?: string;
  center_image?: string;
}

const TwoColumn: React.FC<BlockProps> = ({ content, style, theme }) => {
  const {
    heading,
    left_content,
    right_content,
    center_content,
    left_image,
    right_image,
    center_image,
  } = content as TwoColumnContent;

  const cardClass =
    theme?.card_style === 'elevated'
      ? 'bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-800'
      : 'bg-gray-900/50 rounded-lg p-8 border border-gray-800';

  const hasCenter = !!center_content;
  const gridCols = hasCenter ? 'md:grid-cols-3' : 'md:grid-cols-2';

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {heading && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            {heading}
          </h2>
        )}
        <div className={`grid ${gridCols} gap-8 md:gap-12`}>
          <div className={style === 'card' ? cardClass : ''}>
            {left_image && (
              <div className="relative w-full h-64 mb-6">
                <NextImage
                  src={left_image}
                  alt="Left column"
                  fill
                  className="object-cover rounded-lg"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: left_content }} />
          </div>

          {hasCenter && (
            <div className={style === 'card' ? cardClass : ''}>
              {center_image && (
                <div className="relative w-full h-64 mb-6">
                  <NextImage
                    src={center_image}
                    alt="Center column"
                    fill
                    className="object-cover rounded-lg"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: center_content }}
              />
            </div>
          )}

          <div className={style === 'card' ? cardClass : ''}>
            {right_image && (
              <div className="relative w-full h-64 mb-6">
                <NextImage
                  src={right_image}
                  alt="Right column"
                  fill
                  className="object-cover rounded-lg"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: right_content }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoColumn;
