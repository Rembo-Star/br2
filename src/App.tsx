import { CTAButton } from './components/CTAButton';
import { OnlineCounter } from './components/OnlineCounter';
import { BenefitsList } from './components/BenefitsList';
import { GamingVisual } from './components/GamingVisual';
import { BrazilLogo } from './components/BrazilLogo';
import { useEffect, useState } from 'react';
import { initClarity, trackBrazilBadgeClick, trackTermsClick } from './utils/clarity';
import { preloadCriticalResources } from './utils/performance';

export default function App() {
  const casinoUrl = "https://flagman-route-four.com/cbfffcdfe"; // URL казино
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Update page title
    document.title = "Welcome";
    
    // Add meta tags for in-app browsers compatibility
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (metaViewport) {
      metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover');
    }
    
    // Preload critical resources immediately
    preloadCriticalResources();

    // Mark as loaded for deferred animations
    setIsLoaded(true);

    // Initialize Microsoft Clarity (deferred)
    initClarity();
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-y-auto bg-gradient-to-br from-[#050816] via-[#071a3f] to-[#050816]" style={{ paddingBottom: 'max(env(safe-area-inset-bottom), 20px)' }}>
      {/* Animated background particles - deferred */}
      {isLoaded && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
          <div className="absolute w-64 h-64 bg-[#00C853] rounded-full blur-[100px] opacity-20 animate-pulse top-20 left-20" style={{ willChange: 'opacity' }}></div>
          <div className="absolute w-96 h-96 bg-[#FFEA00] rounded-full blur-[120px] opacity-10 animate-pulse bottom-20 right-20" style={{ animationDelay: '1s', willChange: 'opacity' }}></div>
          <div className="absolute w-48 h-48 bg-[#0036A5] rounded-full blur-[80px] opacity-15 animate-pulse top-1/2 left-1/2" style={{ animationDelay: '2s', willChange: 'opacity' }}></div>
        </div>
      )}

      {/* Top Bar */}
      <div className="relative z-10 flex items-center justify-between px-5 md:px-12 lg:px-32 py-5 md:py-6 lg:py-8">
        <BrazilLogo url={casinoUrl} />
        
        <a 
          href={casinoUrl}
          data-clarity-click="brazil_badge_desktop"
          data-clarity-region="header_badge"
          aria-label="Exclusivo para o Brasil - Ir para cassino"
          className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00C853]/20 to-[#FFEA00]/20 rounded-full border border-[#00C853]/30 cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => trackBrazilBadgeClick(false)}
          style={{
            touchAction: 'manipulation',
            WebkitTapHighlightColor: 'transparent'
          }}
        >
          <span className="text-xl leading-none">🇧🇷</span>
          <span className="text-white text-sm leading-none">Exclusivo para o Brasil</span>
        </a>
      </div>

      {/* Main Content Container - Extra padding bottom for safety */}
      <div className="relative z-10 flex flex-col items-center px-5 md:px-12 lg:px-32 pb-10 md:pb-12 lg:pb-16">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-start w-full max-w-7xl py-8 min-h-[600px]">
          
          {/* Left Column - Content */}
          <div className="flex flex-col gap-6 text-left">
            <h1 className="text-white text-6xl lg:text-7xl" style={{ 
              textShadow: '0 0 30px rgba(0, 200, 83, 0.5), 0 0 60px rgba(255, 234, 0, 0.3)' 
            }}>
              Sua nova sorte<br />
              <span className="bg-gradient-to-r from-[#00C853] to-[#FFEA00] bg-clip-text text-transparent">
                começa aqui
              </span>
            </h1>

            <h2 className="text-[#B0BEC5] text-xl lg:text-2xl max-w-xl">
              Cadastre-se agora e receba <span className="text-[#FFEA00]">150% de bônus</span> até <span className="text-[#FFEA00]">R$ 3.000</span> + freebet de até <span className="text-[#FFEA00]">R$ 500</span>.
            </h2>

            <BenefitsList />

            {/* Desktop Online Counter */}
            <div className="mt-4">
              <OnlineCounter url={casinoUrl} isMobile={false} />
            </div>
          </div>

          {/* Right Column - CTA & Character */}
          <div className="flex flex-col items-center justify-start gap-8 pt-12">
            {/* Premium gaming visual */}
            <GamingVisual url={casinoUrl} />

            <CTAButton url={casinoUrl} />
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:flex lg:hidden flex-col items-center w-full py-8 gap-10 min-h-[640px]">
          
          {/* Top Section - Headings */}
          <div className="flex flex-col gap-5 w-full max-w-2xl">
            <h1 className="text-white text-5xl text-center" style={{ 
              textShadow: '0 0 30px rgba(0, 200, 83, 0.5), 0 0 60px rgba(255, 234, 0, 0.3)',
              lineHeight: '1.2'
            }}>
              Sua nova sorte<br />
              <span className="bg-gradient-to-r from-[#00C853] to-[#FFEA00] bg-clip-text text-transparent">
                começa aqui
              </span>
            </h1>

            <h2 className="text-[#B0BEC5] text-lg text-center px-8">
              Cadastre-se agora e receba <span className="text-[#FFEA00]">150% de bônus</span> até <span className="text-[#FFEA00]">R$ 3.000</span> + freebet de até <span className="text-[#FFEA00]">R$ 500</span>.
            </h2>
          </div>

          {/* Middle Section - Benefits & Counter */}
          <div className="flex flex-col gap-6 w-full max-w-2xl items-center">
            <BenefitsList />
            <OnlineCounter url={casinoUrl} isMobile={false} />
          </div>

          {/* Bottom Section - Visual & CTA */}
          <div className="flex flex-col gap-6 w-full items-center">
            <div className="relative w-64 h-64 flex-shrink-0">
              <GamingVisual url={casinoUrl} />
            </div>

            <div className="w-full max-w-md px-8">
              <CTAButton url={casinoUrl} />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col items-center w-full py-6 gap-8 min-h-[580px]">
          
          {/* Top Section - Headings */}
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-white text-3xl text-center" style={{ 
              textShadow: '0 0 30px rgba(0, 200, 83, 0.5), 0 0 60px rgba(255, 234, 0, 0.3)',
              lineHeight: '1.2'
            }}>
              Sua nova sorte<br />
              <span className="bg-gradient-to-r from-[#00C853] to-[#FFEA00] bg-clip-text text-transparent">
                começa aqui
              </span>
            </h1>

            <h2 className="text-[#B0BEC5] text-sm text-center px-2">
              Cadastre-se agora e receba <span className="text-[#FFEA00]">150% de bônus</span> até <span className="text-[#FFEA00]">R$ 3.000</span> + freebet de até <span className="text-[#FFEA00]">R$ 500</span>.
            </h2>
          </div>

          {/* Middle Section - Decorative Visual (smaller) */}
          <div className="relative w-48 h-48 flex-shrink-0">
            <GamingVisual url={casinoUrl} />
          </div>

          {/* Bottom Section - Benefits, Counter, CTA */}
          <div className="flex flex-col gap-6 w-full items-center">
            <BenefitsList />

            <OnlineCounter url={casinoUrl} isMobile={true} />

            <div className="w-full px-4">
              <CTAButton url={casinoUrl} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Maximum safe spacing from content above */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between px-5 md:px-12 lg:px-32 py-8 md:py-10 lg:py-12 mt-10 md:mt-12 lg:mt-16 border-t border-white/5" style={{ marginBottom: 'env(safe-area-inset-bottom)' }}>
        <p className="text-[#B0BEC5] text-xs text-center md:text-left mb-3 md:mb-0">
          Jogue com responsabilidade. Somente para maiores de 18 anos.
        </p>
        <a 
          href={casinoUrl} 
          data-clarity-click="footer_terms"
          data-clarity-region="footer_link"
          aria-label="Ver Termos e Condições"
          className="text-[#00C853] hover:text-[#FFEA00] transition-colors text-xs underline"
          onClick={trackTermsClick}
          style={{
            touchAction: 'manipulation',
            WebkitTapHighlightColor: 'transparent'
          }}
        >
          Termos & Condições
        </a>
      </div>
    </div>
  );
}