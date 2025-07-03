export function getImagePath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production with GitHub Actions, prepend the base path
  if (typeof window !== 'undefined') {
    // Client-side: check the current URL
    if (window.location.pathname.startsWith('/portfolio')) {
      return `/portfolio/${cleanPath}`;
    }
  } else if (process.env.GITHUB_ACTIONS) {
    // Server-side build: check environment variable
    return `/portfolio/${cleanPath}`;
  }
  
  // Development environment
  return `/${cleanPath}`;
}