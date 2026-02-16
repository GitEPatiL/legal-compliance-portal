import { render, screen } from '@testing-library/react';
import Hero from '@/components/blocks/Hero';

describe('Hero', () => {
  const defaultTheme = {
    color_palette: ['#1a56db'],
    font_pair: 'Inter',
    card_style: 'elevated',
  };

  test('renders heading', () => {
    render(
      <Hero
        content={{ heading: 'Test Heading' }}
        style="text-only"
        theme={defaultTheme}
      />
    );
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
  });

  test('renders CTA button', () => {
    render(
      <Hero
        content={{ heading: 'Test', cta_text: 'Click', cta_url: '/test' }}
        style="text-only"
        theme={defaultTheme}
      />
    );
    const button = screen.getByText('Click');
    expect(button.closest('a')).toHaveAttribute('href', '/test');
  });

  test('renders image in split style', () => {
    render(
      <Hero
        content={{ heading: 'Test', image: '/test.jpg', image_alt: 'Test Alt' }}
        style="split"
        theme={defaultTheme}
      />
    );
    expect(screen.getByAltText('Test Alt')).toBeInTheDocument();
  });
});
