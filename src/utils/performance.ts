// Performance optimization utilities

// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return;

  // Preconnect to external domains
  const preconnectLinks = [
    'https://www.clarity.ms',
  ];

  preconnectLinks.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = url;
    document.head.appendChild(link);
  });
};

// Defer non-critical scripts
export const deferNonCriticalScripts = (callback: () => void, delay: number = 1000) => {
  if (typeof window === 'undefined') return;

  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(() => {
      setTimeout(callback, delay);
    });
  } else {
    setTimeout(callback, delay);
  }
};

// Check if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Optimize images with intersection observer
export const lazyLoadImage = (img: HTMLImageElement) => {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target as HTMLImageElement;
          if (image.dataset.src) {
            image.src = image.dataset.src;
            image.removeAttribute('data-src');
          }
          observer.unobserve(image);
        }
      });
    });
    observer.observe(img);
  } else {
    // Fallback for browsers without IntersectionObserver
    if (img.dataset.src) {
      img.src = img.dataset.src;
    }
  }
};

// Web Vitals tracking helper
export const reportWebVitals = (metric: any) => {
  if (typeof window !== 'undefined' && window.clarity) {
    window.clarity('event', 'web_vital', {
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
    });
  }
};
