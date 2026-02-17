'use client';
import React from 'react';
import { BlockProps } from '@/types/page';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/config/animations';

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessContent {
  heading?: string;
  steps: ProcessStep[];
}

const Process: React.FC<BlockProps> = ({ content }) => {
  const { heading, steps } = content as unknown as ProcessContent;

  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto">
        {heading && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            {heading}
          </motion.h2>
        )}
        <motion.div
          className="space-y-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {steps?.map((step: any, i: number) => (
            <motion.div key={i} variants={fadeInUp} className="flex gap-6 group">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                {i + 1}
              </div>
              <div className="flex-1 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-slate-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
