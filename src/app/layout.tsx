// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import { Creepster } from 'next/font/google';

const creepster = Creepster({
  weight: '400',
  subsets: ['latin'],
});

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata = {
  title: 'Folklore App',
  description: 'Spooky ghost tales from Japan and Malaysia',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={creepster.className}>{children}</body>
    </html>
  );
}
