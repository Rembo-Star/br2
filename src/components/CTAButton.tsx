import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { trackCTAButtonClick } from '../utils/clarity';
import { prefersReducedMotion } from '../utils/performance';

interface CTAButtonProps {
  url: string;
}

export function CTAButton({ url }: CTAButtonProps) {
  const reducedMotion = prefersReducedMotion();
  
  const handleClick = () => {
    trackCTAButtonClick();
    window.location.href = url;
  };

  return (
    <motion.button
      onClick={handleClick}
      data-clarity-click="cta_jogar_agora"
      data-clarity-region="primary_cta"
      aria-label="Jogar Agora - Cadastre-se no cassino"
      className="relative group w-full md:w-auto px-12 md:px-14 lg:px-16 py-4 md:py-5 lg:py-6 rounded-2xl text-white text-lg md:text-xl lg:text-2xl tracking-wider overflow-hidden shadow-2xl cursor-pointer"
      style={{
        background: 'linear-gradient(135deg, #00C853 0%, #AEEA00 100%)',
        boxShadow: '0 0 40px rgba(0, 200, 83, 0.5), 0 10px 30px rgba(0, 0, 0, 0.3)',
        willChange: 'transform',
        touchAction: 'manipulation', // Optimize for touch in WebView
        WebkitTapHighlightColor: 'transparent', // Remove tap highlight in WebView
      }}
      whileHover={reducedMotion ? {} : { 
        scale: 1.05,
        boxShadow: '0 0 60px rgba(0, 200, 83, 0.7), 0 15px 40px rgba(0, 0, 0, 0.4)',
      }}
      whileTap={reducedMotion ? {} : { 
        scale: 0.97,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {/* Animated shine effect */}
      {!reducedMotion && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '200%' }}
          transition={{ 
            repeat: Infinity, 
            duration: 3,
            ease: "linear",
            repeatDelay: 2
          }}
          style={{ willChange: 'transform' }}
        />
      )}

      {/* Pulsing glow */}
      {!reducedMotion && (
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-2xl"
          animate={{ 
            opacity: [0, 0.3, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
          style={{ willChange: 'opacity' }}
        />
      )}

      <span className="relative z-10 flex items-center justify-center gap-2 md:gap-2.5 lg:gap-3 drop-shadow-lg">
        <Sparkles className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
        JOGAR AGORA
        <Sparkles className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
      </span>
    </motion.button>
  );
}