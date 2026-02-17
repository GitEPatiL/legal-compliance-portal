'use client';
import React from 'react';
import { BlockProps } from '@/types/page';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, scaleIn } from '@/config/animations';

interface Card {
  icon?: string;
  title: string;
  description: string;
}

interface GridCardsContent {
  heading?: string;
  cards: Card[];
}

const GridCards: React.FC<BlockProps> = ({ content }) => {
  const { heading, cards } = content as unknown as GridCardsContent;

  return (
    <section className="py-16 px-6 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto">
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
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {cards?.map((card, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-slate-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border border-gray-100 dark:border-slate-700"
            >
              {card.icon && (
                <div className="text-4xl mb-4 text-blue-600 dark:text-blue-400">{card.icon}</div>
              )}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {card.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GridCards;
