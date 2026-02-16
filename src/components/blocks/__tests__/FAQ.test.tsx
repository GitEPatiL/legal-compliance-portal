import { render, screen, fireEvent } from '@testing-library/react';
import FAQ from '@/components/blocks/FAQ';

describe('FAQ', () => {
  const defaultTheme = {
    color_palette: ['#1a56db'],
    font_pair: 'Inter',
    card_style: 'elevated',
  };

  const questions = [
    { question: 'Q1?', answer: 'A1' },
    { question: 'Q2?', answer: 'A2' },
  ];

  test('renders all questions', () => {
    render(<FAQ content={{ questions }} style="default" theme={defaultTheme} />);
    expect(screen.getByText('Q1?')).toBeInTheDocument();
    expect(screen.getByText('Q2?')).toBeInTheDocument();
  });

  test('expands on click', () => {
    render(<FAQ content={{ questions }} style="default" theme={defaultTheme} />);
    const button = screen.getByText('Q1?').closest('button');
    
    expect(button).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(button!);
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });
});
