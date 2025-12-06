import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users } from 'lucide-react';
import { trackOnlineCounterClick } from '../utils/clarity';
import { prefersReducedMotion } from '../utils/performance';

interface OnlineCounterProps {
  url?: string;
  isMobile?: boolean;
}

export function OnlineCounter({ url, isMobile = false }: OnlineCounterProps) {
  const [count, setCount] = useState(2487);
  const reducedMotion = prefersReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        const change = Math.floor(Math.random() * 30) - 15; // Random change between -15 and +15
        const newCount = prev + change;
        return Math.max(2400, Math.min(2600, newCount)); // Keep between 2400 and 2600
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString('pt-BR');
  };

  const handleClick = () => {
    trackOnlineCounterClick(isMobile);
  };

  const content = (
    <div className="inline-flex flex-col items-center gap-1.5 md:gap-2 px-4 py-3 md:px-5 md:py-3.5 lg:px-6 lg:py-4 bg-gradient-to-br from-[#00C853]/10 to-[#FFEA00]/10 rounded-xl md:rounded-2xl border border-[#00C853]/30 backdrop-blur-sm">
      <div className="flex items-center gap-1.5 md:gap-2 text-[#B0BEC5] text-xs md:text-sm">
        <Users className="w-3 h-3 md:w-4 md:h-4" />
        <span>Jogadores online agora</span>
      </div>
      
      {reducedMotion ? (
        <div className="text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-[#00C853] to-[#FFEA00] bg-clip-text text-transparent">
          {formatNumber(count)}
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={count}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-[#00C853] to-[#FFEA00] bg-clip-text text-transparent"
            style={{ willChange: 'transform, opacity' }}
          >
            {formatNumber(count)}
          </motion.div>
        </AnimatePresence>
      )}

      <div className="flex items-center gap-1.5 md:gap-2">
        {reducedMotion ? (
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#00C853] rounded-full" />
        ) : (
          <motion.div
            className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#00C853] rounded-full"
            animate={{ 
              opacity: [1, 0.5, 1],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut"
            }}
            style={{ willChange: 'transform, opacity' }}
          />
        )}
        <span className="text-[#B0BEC5] text-xs">Brasileiros jogando neste momento</span>
      </div>
    </div>
  );

  if (url) {
    return (
      <a 
        href={url} 
        data-clarity-click="online_counter"
        data-clarity-region="counter_section"
        aria-label="Ver jogadores online - Ir para cassino"
        className="cursor-pointer hover:opacity-90 transition-opacity" 
        onClick={handleClick}
        style={{
          touchAction: 'manipulation',
          WebkitTapHighlightColor: 'transparent'
        }}
      >
        {content}
      </a>
    );
  }

  return content;
}