import { findChildProbe, findTopLevelProbe } from '../data/probes';

export function getHomePath() {
  return '/';
}

export function getProbePath(parentId, childId) {
  return childId ? `/probe/${parentId}/${childId}` : `/probe/${parentId}`;
}

export function readPathname() {
  return window.location.pathname || '/';
}

export function navigate(pathname) {
  if (pathname === readPathname()) {
    return;
  }

  window.history.pushState({}, '', pathname);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export function resolveRoute(pathname) {
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) {
    return { page: 'home' };
  }

  if (segments[0] !== 'probe' || segments.length < 2 || segments.length > 3) {
    return { page: 'home' };
  }

  const topLevelProbe = findTopLevelProbe(segments[1]);

  if (!topLevelProbe) {
    return { page: 'home' };
  }

  if (segments.length === 2) {
    return { page: 'probe', topLevelProbe, selectedProbe: topLevelProbe };
  }

  const selectedProbe = findChildProbe(segments[1], segments[2]) ?? topLevelProbe;

  return { page: 'probe', topLevelProbe, selectedProbe };
}
