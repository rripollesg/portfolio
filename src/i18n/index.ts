import type { Dictionary, Locale } from './types';
import { es } from './es';
import { en } from './en';

export const locales: Locale[] = ['es', 'en'];
export const defaultLocale: Locale = 'es';

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getTranslations(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'en';
  return 'es';
}

/** Prefijo de idioma para rutas (español sin prefijo). */
export function localePath(locale: Locale, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return clean === '/' ? '/' : clean;
  if (clean === '/') return `/${locale}/`;
  return `/${locale}${clean}`;
}

export type { Dictionary, Locale, ResumeItem, Job, PortfolioProject, SkillIcon } from './types';
