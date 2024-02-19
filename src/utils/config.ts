import { Pathnames } from 'next-intl/navigation'

export const locales = ['en', 'zh'] as const

export const pathnames = {
  '/': '/',
  // '/profile': {
  //   en: '/profile',
  //   zh: '/ge-ren-xin-xi',
  // },
} satisfies Pathnames<typeof locales>

// Use the default: `always`; auto: `undefined`
export const localePrefix = 'always'

export type AppPathnames = keyof typeof pathnames
