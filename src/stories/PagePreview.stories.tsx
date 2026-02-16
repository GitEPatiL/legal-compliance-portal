import type { Meta, StoryObj } from '@storybook/react';
import BlockRenderer from '@/components/BlockRenderer';

const meta: Meta<typeof BlockRenderer> = {
  title: 'Pages/Page Preview',
  component: BlockRenderer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BlockRenderer>;

const defaultTheme = {
  color_palette: ['#1a56db', '#7c3aed'],
  font_pair: 'Inter',
  card_style: 'elevated',
};

export const CompanyRegistrationPage: Story = {
  args: {
    blocks: [
      {
        type: 'hero',
        style: 'split',
        content: {
          heading: 'Company Registration Services',
          subheading: 'Register your business quickly and easily',
          cta_text: 'Get Started',
          cta_url: '#contact',
        },
      },
      {
        type: 'two_column',
        style: 'card',
        content: {
          heading: 'Why Choose Us',
          left_content: '<h3>Fast Processing</h3><p>Get your company registered in 7-15 days</p>',
          right_content: '<h3>Expert Support</h3><p>Guidance from experienced professionals</p>',
        },
      },
      {
        type: 'faq',
        style: 'default',
        content: {
          heading: 'Common Questions',
          questions: [
            { question: 'What is required?', answer: 'PAN, address proof, and office documents' },
            { question: 'How much does it cost?', answer: 'Pricing varies by service type' },
          ],
        },
      },
    ],
    theme: defaultTheme,
  },
};
