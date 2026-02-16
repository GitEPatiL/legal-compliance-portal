import React from 'react';
import { BlockProps } from '@/types/page';

const Process: React.FC<BlockProps> = ({ content }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { heading, steps } = content as any;

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {heading && (
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{heading}</h2>
        )}
        <div className="space-y-8">
          {steps?.map((step: any, i: number) => (
            <div key={i} className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                {i + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
