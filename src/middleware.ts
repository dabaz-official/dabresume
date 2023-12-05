import createMiddleware from 'next-intl/middleware';
import {pathnames, locales, localePrefix} from '@dr/config';

export default createMiddleware({
  defaultLocale: 'zh',
  locales,
  pathnames,
  localePrefix
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(zh-CN|en)/:path*']
};