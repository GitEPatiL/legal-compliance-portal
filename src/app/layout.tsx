import '@/styles/globals.css';
import '@/styles/tokens.css';
import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';

export const metadata: Metadata = {
  title: 'Antigravity Pages Site',
  description: 'Dynamic pages generated from JSON manifest',
};

import ProgressBar from '@/components/ui/ProgressBar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ProgressBar />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
