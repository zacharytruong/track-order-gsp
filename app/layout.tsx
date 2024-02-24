import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactElement } from 'react';

import Hydrate from './_components/Hydrate';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactElement;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Hydrate>{children}</Hydrate>
      </body>
    </html>
  );
}
