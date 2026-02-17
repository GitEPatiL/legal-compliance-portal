'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlockProps } from '@/types/page';

interface Question {
  question: string;
  answer: string;
}

interface FAQContent {
  heading?: string;
  questions: Question[];
}

const FAQ: React.FC<BlockProps> = ({ content, theme }) => {
  const { heading, questions } = content as FAQContent;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const primary = theme?.color_palette[0] || '#1a56db';

  return (
    <section className="py-16 px-6 bg-transparent">
      <div className="max-w-4xl mx-auto">
        {heading && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
          >
            {heading}
          </motion.h2>
        )}
        <div className="space-y-4">
          {questions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg shadow-sm overflow-hidden border border-gray-800"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-gray-800 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-white pr-8">{item.question}</span>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6 flex-shrink-0"
                  style={{ color: primary }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-400 border-t border-gray-800 pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
