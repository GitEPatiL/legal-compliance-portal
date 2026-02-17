'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BlockProps } from '@/types/page';
import { fadeInUp, staggerContainer, scaleIn } from '@/config/animations';

interface HeroContent {
  heading: string;
  subheading?: string;
  cta_text?: string;
  cta_url?: string;
  image?: string;
  image_alt?: string;
}

const Hero: React.FC<BlockProps> = ({ content, style, theme }) => {
  const { heading, subheading, cta_text, cta_url, image, image_alt } = content as HeroContent;
  const primary = theme?.color_palette[0] || '#1a56db';

  if (style === 'image-background') {
    return (
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden group">
        {image && (
          <div className="absolute inset-0">
            <Image
              src={image}
              alt={image_alt || heading}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
          </div>
        )}
        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            {heading}
          </motion.h1>
          {subheading && (
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-8 opacity-90 font-light"
            >
              {subheading}
            </motion.p>
          )}
          {cta_text && cta_url && (
            <motion.a
              href={cta_url}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 shadow-lg"
            >
              {cta_text}
            </motion.a>
          )}
        </motion.div>
      </section>
    );
  }

  if (style === 'split') {
    return (
      <section className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6 py-20 text-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6 text-white">
            {heading}
          </motion.h1>
          {subheading && (
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-400 mb-8">
              {subheading}
            </motion.p>
          )}
          {cta_text && cta_url && (
            <motion.a
              href={cta_url}
              style={{ backgroundColor: primary }}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
              className="inline-block px-8 py-4 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/25"
            >
              {cta_text}
            </motion.a>
          )}
        </motion.div>
        {image && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800 relative h-64 md:h-auto"
          >
            <Image
              src={image}
              alt={image_alt || heading}
              width={800}
              height={600}
              className="w-full h-auto transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        )}
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-center text-white">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6 text-white">
          {heading}
        </motion.h1>
        {subheading && (
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-400 mb-8">
            {subheading}
          </motion.p>
        )}
        {cta_text && cta_url && (
          <motion.a
            href={cta_url}
            style={{ backgroundColor: primary }}
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-4 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            {cta_text}
          </motion.a>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;
