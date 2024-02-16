import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getLocales, setLocales } from '~/cookie'

const locales = ['en', 'zh'] as const
export type Locales = (typeof locales)[number]

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathnameHasLocale(pathname)) return

  request.nextUrl.pathname = await getRedirectUrl(pathname)

  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /fonts (inside /public)
     * 4. /examples (inside /public)
     * 5. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api|_next|fonts|examples|[\\w-]+\\.\\w+).*)',
  ],
}

function pathnameHasLocale(pathname: string) {
  return locales.some((locale) => {
    return pathname.startsWith(`/${locale}`) || pathname === `/${locale}`
  })
}

async function getRedirectUrl(pathname: string) {
  const localesCookie = await getLocales()
  let curLocale = ''

  if (!localesCookie?.value) {
    curLocale = locales[0]
  } else {
    curLocale = localesCookie?.value
  }

  return `/${curLocale}${pathname}`
}
