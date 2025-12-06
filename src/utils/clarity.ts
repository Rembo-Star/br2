// Microsoft Clarity tracking utilities

declare global {
  interface Window {
    clarity?: (action: string, ...args: any[]) => void;
  }
}

let clarityInitialized = false;

// Initialize Clarity script - optimized for WebView compatibility
export const initClarity = () => {
  if (typeof window === 'undefined' || clarityInitialized) return;
  
  clarityInitialized = true;
  
  // For WebView (Telegram, Facebook, Instagram) - load immediately
  // These browsers often cut off deferred scripts
  const isWebView = /WebView|Instagram|FBAV|FBAN|MessengerForiOS|Telegram/i.test(navigator.userAgent);
  
  if (isWebView) {
    // Load immediately for WebView browsers
    loadClarityScript();
  } else {
    // Defer for regular browsers to optimize performance
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(() => {
        loadClarityScript();
      });
    } else {
      setTimeout(loadClarityScript, 1000);
    }
  }
};

const loadClarityScript = () => {
  // Add Clarity script to document head (critical for WebView)
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.innerHTML = `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ugb68nlz07");
  `;
  document.head.appendChild(script);
  
  // Log initialization for debugging
  console.log('[Clarity] Initialized for:', isWebView ? 'WebView' : 'Regular Browser');
};

// Detect if running in WebView
const isWebView = typeof window !== 'undefined' && /WebView|Instagram|FBAV|FBAN|MessengerForiOS|Telegram/i.test(navigator.userAgent);

// Track custom events
export const trackClarityEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.clarity) {
    window.clarity('event', eventName, eventData);
  }
};

// Specific event trackers for our landing page
export const trackLogoClick = () => {
  trackClarityEvent('logo_click', { location: 'top_left', webview: isWebView });
};

export const trackBrazilBadgeClick = (isMobile: boolean) => {
  trackClarityEvent('brazil_badge_click', { device: isMobile ? 'mobile' : 'desktop', webview: isWebView });
};

export const trackOnlineCounterClick = (isMobile: boolean) => {
  trackClarityEvent('online_counter_click', { device: isMobile ? 'mobile' : 'desktop', webview: isWebView });
};

export const trackGamingVisualClick = () => {
  trackClarityEvent('gaming_visual_click', { location: 'center_right', webview: isWebView });
};

export const trackCTAButtonClick = () => {
  trackClarityEvent('cta_button_click', { button_text: 'JOGAR AGORA', webview: isWebView });
};

export const trackTermsClick = () => {
  trackClarityEvent('terms_click', { location: 'footer', webview: isWebView });
};