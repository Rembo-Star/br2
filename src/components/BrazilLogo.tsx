import brazilFlag from 'figma:asset/cfd2b7b710a2d6993511830d6b6fc70c15d5bb63.png';
import { trackLogoClick } from '../utils/clarity';

interface BrazilLogoProps {
  url: string;
}

export function BrazilLogo({ url }: BrazilLogoProps) {
  return (
    <a 
      href={url}
      data-clarity-click="logo_exclusivo_br"
      data-clarity-region="header_logo"
      aria-label="Exclusivo BR - Ir para cassino"
      className="flex items-center gap-2 lg:gap-3 cursor-pointer hover:opacity-90 transition-opacity"
      onClick={trackLogoClick}
      style={{
        touchAction: 'manipulation',
        WebkitTapHighlightColor: 'transparent'
      }}
    >
      {/* Brazil Flag Icon */}
      <div className="relative w-9 h-9 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg md:rounded-xl overflow-hidden shadow-lg" style={{
        boxShadow: '0 0 20px rgba(0, 156, 59, 0.4), 0 4px 12px rgba(0, 0, 0, 0.3)'
      }}>
        <img 
          src={brazilFlag} 
          alt="Bandeira do Brasil" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <span 
        className="text-white text-sm md:text-lg lg:text-xl tracking-wide"
        style={{
          textShadow: '0 0 15px rgba(0, 255, 120, 0.35), 0 2px 4px rgba(0, 0, 0, 0.3)'
        }}
      >
        Exclusivo BR
      </span>
    </a>
  );
}