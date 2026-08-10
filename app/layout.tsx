import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Amaze Travel — South India\'s #1 Travel Company',
  description:
    'Discover the magic of South India with Amaze Travel. Explore Kerala, Tamil Nadu, Karnataka, Andaman & more with expertly curated tour packages.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background overflow-x-hidden">{children}</body>
    </html>
  );
}
