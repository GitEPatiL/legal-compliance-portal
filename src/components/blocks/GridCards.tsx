import React from 'react';
import { BlockProps } from '@/types/page';

const GridCards: React.FC<BlockProps> = ({ content }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { heading, cards } = content as any;

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {heading && (
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{heading}</h2>
        )}
        <div className="grid md:grid-cols-3 gap-8">
          {cards?.map((card: any, i: number) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              {card.icon && <div className="text-4xl mb-4">{card.icon}</div>}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-gray-700">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridCards;
