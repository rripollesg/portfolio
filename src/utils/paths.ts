/** Une la base de Astro (p.ej. /portfolio/) con una ruta relativa de public/. */
export function withBase(path: string): string {
  let base = import.meta.env.BASE_URL || '/';
  if (!base.endsWith('/')) base += '/';
  const [pathname, query] = path.split('?');
  const normalized = pathname.replace(/^\//, '');
  // Codifica cada segmento (espacios, acentos) sin romper las barras.
  const encoded = normalized
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/');
  return query ? `${base}${encoded}?${query}` : `${base}${encoded}`;
}
