import type { Meta, StoryObj } from '@storybook/react';
import FAQ from '@/components/blocks/FAQ';

const meta: Meta<typeof FAQ> = {
  title: 'Blocks/FAQ',
  component: FAQ,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FAQ>;

const defaultTheme = {
  color_palette: ['#1a56db', '#7c3aed'],
  font_pair: 'Inter',
  card_style: 'elevated',
};

export const Default: Story = {
  args: {
    content: {
      heading: 'Frequently Asked Questions',
      questions: [
        {
          question: 'What services do you offer?',
          answer: 'We provide comprehensive business registration and compliance services.',
        },
        {
          question: 'How long does registration take?',
          answer: 'Typically 7-15 business days depending on the service.',
        },
        {
          question: 'What documents are needed?',
          answer: 'Requirements vary by service. We provide a complete checklist.',
        },
      ],
    },
    style: 'default',
    theme: defaultTheme,
  },
};
