import {Pathnames} from 'next-intl/navigation';

export const locales = ['en', 'zh'] as const;

export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/en',
    zh: '/zh-CN'
  }
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;