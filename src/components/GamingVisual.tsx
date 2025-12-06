import { motion } from 'motion/react';
import { Zap, Star, Trophy, Coins } from 'lucide-react';
import { trackGamingVisualClick } from '../utils/clarity';
import { prefersReducedMotion } from '../utils/performance';

interface GamingVisualProps {
  url?: string;
}

export function GamingVisual({ url }: GamingVisualProps) {
  const reducedMotion = prefersReducedMotion();
  
  const handleClick = () => {
    if (url) {
      trackGamingVisualClick();
      window.location.href = url;
    }
  };

  return (
    <div 
      data-clarity-click={url ? "gaming_visual" : undefined}
      data-clarity-region="hero_visual"
      className={`relative w-full max-w-md aspect-square flex items-center justify-center ${url ? 'cursor-pointer' : ''}`}
      onClick={handleClick}
      style={{ 
        transform: 'translateZ(0)',
        touchAction: url ? 'manipulation' : 'auto',
        WebkitTapHighlightColor: 'transparent'
      }}
    >
      {/* Background glow layers */}
      <div className="absolute inset-0 bg-gradient-radial from-[#00C853]/30 via-[#FFEA00]/20 to-transparent rounded-full blur-3xl" style={{ willChange: 'auto' }}></div>
      
      {/* Rotating outer ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-[#00C853]/40"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 200, 83, 0.1), rgba(255, 234, 0, 0.1))',
          willChange: 'transform',
        }}
        animate={reducedMotion ? {} : { rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {/* Decorative dots on ring */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#00C853] rounded-full shadow-[0_0_20px_rgba(0,200,83,0.8)]"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-[#FFEA00] rounded-full shadow-[0_0_20px_rgba(255,234,0,0.8)]"></div>
      </motion.div>

      {/* Counter-rotating inner ring */}
      <motion.div
        className="absolute inset-12 rounded-full border-2 border-[#FFEA00]/40"
        style={{ willChange: 'transform' }}
        animate={reducedMotion ? {} : { rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-[#FFEA00] rounded-full shadow-[0_0_15px_rgba(255,234,0,0.8)]"></div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-[#00C853] rounded-full shadow-[0_0_15px_rgba(0,200,83,0.8)]"></div>
      </motion.div>

      {/* Central trophy/win element */}
      <div className="relative z-10 flex items-center justify-center">
        <motion.div
          className="relative"
          style={{ willChange: 'transform' }}
          animate={reducedMotion ? {} : {
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Main trophy icon */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#FFEA00] to-[#00C853] rounded-full blur-xl opacity-60"
              style={{ willChange: 'transform, opacity' }}
              animate={reducedMotion ? {} : {
                scale: [1, 1.2, 1],
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <Trophy className="relative z-10 w-24 h-24 md:w-32 md:h-32 text-[#FFEA00] drop-shadow-[0_0_30px_rgba(255,234,0,0.8)]" strokeWidth={1.5} />
          </div>

          {/* Orbiting elements - reduced */}
          {/* Top-left star */}
          <motion.div
            className="absolute -top-8 -left-8"
            style={{ willChange: 'transform' }}
            animate={reducedMotion ? {} : {
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 10, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Star className="w-8 h-8 md:w-10 md:h-10 text-[#FFEA00] fill-[#FFEA00] drop-shadow-[0_0_15px_rgba(255,234,0,0.8)]" />
          </motion.div>

          {/* Top-right zap */}
          <motion.div
            className="absolute -top-6 -right-10"
            style={{ willChange: 'transform' }}
            animate={reducedMotion ? {} : {
              rotate: -360,
              y: [0, -5, 0],
            }}
            transition={{
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Zap className="w-10 h-10 md:w-12 md:h-12 text-[#00C853] fill-[#00C853] drop-shadow-[0_0_20px_rgba(0,200,83,0.8)]" />
          </motion.div>

          {/* Bottom-left coins */}
          <motion.div
            className="absolute -bottom-8 -left-6"
            style={{ willChange: 'transform' }}
            animate={reducedMotion ? {} : {
              rotate: 360,
              scale: [1, 1.15, 1],
            }}
            transition={{
              rotate: { duration: 12, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Coins className="w-9 h-9 md:w-11 md:h-11 text-[#FFEA00] drop-shadow-[0_0_20px_rgba(255,234,0,0.8)]" />
          </motion.div>

          {/* Bottom-right star */}
          <motion.div
            className="absolute -bottom-6 -right-8"
            style={{ willChange: 'transform' }}
            animate={reducedMotion ? {} : {
              rotate: -360,
              scale: [1, 1.3, 1],
            }}
            transition={{
              rotate: { duration: 9, repeat: Infinity, ease: "linear" },
              scale: { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Star className="w-7 h-7 md:w-9 md:h-9 text-[#00C853] fill-[#00C853] drop-shadow-[0_0_15px_rgba(0,200,83,0.8)]" />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles - reduced count for performance */}
      {!reducedMotion && [...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-br from-[#FFEA00] to-[#00C853] rounded-full"
          style={{
            left: `${20 + (i * 60) % 80}%`,
            top: `${15 + (i * 70) % 70}%`,
            willChange: 'transform, opacity',
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + (i * 0.3),
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Energy beams - simplified */}
      {!reducedMotion && (
        <motion.div
          className="absolute inset-0 overflow-hidden rounded-full"
          style={{ mixBlendMode: 'screen' }}
        >
          <motion.div
            className="absolute top-1/2 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-[#00C853] to-transparent"
            style={{ transformOrigin: 'top center', willChange: 'transform' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-[#FFEA00] to-transparent"
            style={{ transformOrigin: 'top center', willChange: 'transform' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      )}

      {/* Pulsing light rays */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,234,0,0.15) 0%, transparent 50%)',
          willChange: reducedMotion ? 'auto' : 'transform, opacity',
        }}
        animate={reducedMotion ? {} : {
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}