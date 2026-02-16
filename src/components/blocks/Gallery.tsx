import React from 'react';
import { BlockProps } from '@/types/page';

const Gallery: React.FC<BlockProps> = ({ content }) => {
  const { heading, images } = content as any;

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {heading && <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{heading}</h2>}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images?.map((img: any, i: number) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
              <img
                src={img.src || img}
                alt={img.alt || `Gallery image ${i + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
