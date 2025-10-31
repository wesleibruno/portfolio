import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['pt', 'en', 'es', 'fr'];

function getLocale(req: NextRequest): string {
  const header = req.headers.get('accept-language') ?? '';
  const preferred = header.split(',').map(p => p.split(';')[0].trim());
  for (const lang of preferred) {
    const base = lang.split('-')[0];
    if (locales.includes(base)) return base;
  }
  return 'pt';
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (!hasLocale && pathname === '/') {
    const locale = getLocale(req);
    const url = req.nextUrl.clone();
    url.pathname = `/${locale}`;
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = { matcher: ['/', '/(pt|en|es|fr)/:path*'] };


