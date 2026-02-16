import React from 'react';
import { BlockProps } from '@/types/page';

const Testimonial: React.FC<BlockProps> = ({ content }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { heading, testimonials } = content as any;

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {heading && (
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{heading}</h2>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials?.map((test: any, i: number) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4 italic">&quot;{test.quote}&quot;</p>
              <div className="flex items-center gap-3">
                {test.avatar && (
                  <img src={test.avatar} alt={test.author} className="w-12 h-12 rounded-full" />
                )}
                <div>
                  <div className="font-semibold text-gray-900">{test.author}</div>
                  <div className="text-sm text-gray-600">{test.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
