export function getImagePath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production (GitHub Pages), prepend the base path
  if (process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS) {
    return `/portfolio/${cleanPath}`;
  }
  
  // In development, just return the path with leading slash
  return `/${cleanPath}`;
}