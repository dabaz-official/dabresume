import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const inter = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://resume.dabaz.me'),
  title: "DabAZ's Resume - Cyber Security Engineer Specializing in Penetration Testing",
  description: "DabAZ, a dedicated Cyber Security Engineer with a focus on vulnerability discovery and security strategies. Possesses in-depth knowledge and hands-on experience in identifying and resolving security vulnerabilities. Passionate about UI design and front-end development in his spare time, and also keen on music production, creatively blending technology with art.",
  keywords: 'DabAZ, Cyber Security Engineer, Vulnerability Discovery, Cyber Security, UI Design, Front-End Development, Music Production',

  icons: {
    icon: [{ url: '/icons/icon.png' }, new URL('/icons/icon.png', 'https://resume.dabaz.me')],
    shortcut: ['/icons/icon.png'],
    apple: ['/icons/apple-icon.png'],
  },

  openGraph: {
    title: "DabAZ's Resume - Cyber Security Engineer Specializing in Penetration Testing",
    description: "DabAZ, a dedicated Cyber Security Engineer with a focus on vulnerability discovery and security strategies. Possesses in-depth knowledge and hands-on experience in identifying and resolving security vulnerabilities. Passionate about UI design and front-end development in his spare time, and also keen on music production, creatively blending technology with art.",
    url: 'https://resume.dabaz.me',
    siteName: "DabAZ's Resume",
    images: [
      {
        url: 'https://resume.dabaz.me/opengraph-image.jpg',
        width: 1920,
        height: 1080,
        alt: "DabAZ's resume.",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  manifest: 'https://resume.dabaz.me/manifest.json',

  twitter: {
    card: 'summary_large_image',
    title: "DabAZ's Resume - Cyber Security Engineer Specializing in Penetration Testing",
    description: "DabAZ, a dedicated Cyber Security Engineer with a focus on vulnerability discovery and security strategies. Possesses in-depth knowledge and hands-on experience in identifying and resolving security vulnerabilities. Passionate about UI design and front-end development in his spare time, and also keen on music production, creatively blending technology with art.",
    creator: '@dabaz_official',
    images: {
      url: 'https://resume.dabaz.me/twitter-image.jpg',
      alt: "DabAZ's resume.",
    },
  },
};

import {notFound} from 'next/navigation';

const locales = ['en', 'zh-CN'];
 
export default function LocaleLayout({children, params: {locale}}) {
  if (!locales.includes(locale as any)) notFound();
 
  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}