import { z } from 'zod';

// Theme schema
export const ThemeSchema = z.object({
  color_palette: z.array(z.string()).min(1),
  font_pair: z.string(),
  card_style: z.string(),
});

export type Theme = z.infer<typeof ThemeSchema>;

// Meta schema
export const MetaSchema = z.object({
  description: z.string(),
  keywords: z.array(z.string()),
  canonical: z.string(),
});

export type Meta = z.infer<typeof MetaSchema>;

// Content block schemas
export const HeroContentSchema = z.object({
  heading: z.string(),
  subheading: z.string().optional(),
  cta_text: z.string().optional(),
  cta_url: z.string().optional(),
  image: z.string().optional(),
  image_alt: z.string().optional(),
});

export const TextContentSchema = z.object({
  heading: z.string().optional(),
  body: z.string(),
  alignment: z.enum(['left', 'center', 'right']).optional(),
});

export const TwoColumnContentSchema = z.object({
  heading: z.string().optional(),
  left_content: z.string(),
  right_content: z.string(),
  left_image: z.string().optional(),
  right_image: z.string().optional(),
});

export const FAQQuestionSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

export const FAQContentSchema = z.object({
  heading: z.string().optional(),
  questions: z.array(FAQQuestionSchema),
});

export const CTAContentSchema = z.object({
  heading: z.string(),
  description: z.string().optional(),
  cta_text: z.string(),
  cta_url: z.string(),
  secondary_cta_text: z.string().optional(),
  secondary_cta_url: z.string().optional(),
});

// Generic content block schema
export const ContentBlockSchema = z.object({
  type: z.enum([
    'hero',
    'text',
    'two_column',
    'three_column',
    'faq',
    'process',
    'table',
    'grid',
    'cta',
    'testimonial',
    'gallery',
  ]),
  style: z.string(),
  content: z.record(z.any()), // Flexible content object
  props: z.record(z.any()).optional(),
});

export type ContentBlock = z.infer<typeof ContentBlockSchema>;

// Page schema
export const PageSchema = z.object({
  slug: z.string(),
  page_name: z.string(),
  title: z.string(),
  meta: MetaSchema,
  layout_style: z.string().optional(),
  theme: ThemeSchema.optional(),
  content_blocks: z.array(ContentBlockSchema),
  published: z.boolean().optional(),
  last_generated_at: z.string().optional(),
  needs_human_review: z.boolean().optional(),
});

export type Page = z.infer<typeof PageSchema>;

// TypeScript interfaces (for better IDE support)
export interface BlockProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
  style: string;
  theme?: Theme;
}
