import '@/styles/globals.css';
import '@/styles/tokens.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Antigravity Pages Site',
  description: 'Dynamic pages generated from JSON manifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
