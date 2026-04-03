import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css'; // Global styles

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DevShowcase - Discover Developer Projects',
  description: 'A platform for developers to showcase and sell their projects.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans bg-black text-white antialiased selection:bg-white/30" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
