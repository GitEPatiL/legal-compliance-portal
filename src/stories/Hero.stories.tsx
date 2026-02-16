import type { Meta, StoryObj } from '@storybook/react';
import Hero from '@/components/blocks/Hero';

const meta: Meta<typeof Hero> = {
  title: 'Blocks/Hero',
  component: Hero,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Hero>;

const defaultTheme = {
  color_palette: ['#1a56db', '#7c3aed'],
  font_pair: 'Inter',
  card_style: 'elevated',
};

export const TextOnly: Story = {
  args: {
    content: {
      heading: 'Welcome to Our Platform',
      subheading: 'Build amazing things with our tools',
      cta_text: 'Get Started',
      cta_url: '/signup',
    },
    style: 'text-only',
    theme: defaultTheme,
  },
};

export const Split: Story = {
  args: {
    content: {
      heading: 'Professional Services',
      subheading: 'Expert solutions for your business needs',
      cta_text: 'Learn More',
      cta_url: '/services',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      image_alt: 'Office building',
    },
    style: 'split',
    theme: defaultTheme,
  },
};

export const ImageBackground: Story = {
  args: {
    content: {
      heading: 'Transform Your Business',
      subheading: 'Partner with us for success',
      cta_text: 'Contact Us',
      cta_url: '/contact',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920',
      image_alt: 'Modern workspace',
    },
    style: 'image-background',
    theme: defaultTheme,
  },
};
