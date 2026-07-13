/** Prefix internal paths with Astro `base` (needed for GitHub project Pages). */
export function withBase(path: string): string {
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("#")
  ) {
    return path;
  }
  const base = import.meta.env.BASE_URL; // always ends with /
  const [pathname, hash] = path.split("#");
  const cleaned = pathname.replace(/^\//, "");
  return `${base}${cleaned}${hash ? `#${hash}` : ""}`;
}
