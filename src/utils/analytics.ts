export const GA_MEASUREMENT_ID = 'G-87HKWPKG6C';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Tracks a page view event in Google Analytics 4
 */
export function trackPageView(pagePath: string, pageTitle: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_title: pageTitle,
      page_location: window.location.origin + pagePath,
      page_path: pagePath,
      send_to: GA_MEASUREMENT_ID,
    });
  }
}

/**
 * Tracks custom event in Google Analytics 4
 */
export function trackEvent(
  action: string,
  params?: Record<string, unknown>
) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, {
      ...params,
      send_to: GA_MEASUREMENT_ID,
    });
  }
}
