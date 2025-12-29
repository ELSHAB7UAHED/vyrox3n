import React from 'react';

const RadarAnimation: React.FC = () => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse" />
      
      {/* Middle ring */}
      <div className="absolute inset-4 rounded-full border border-primary/40" />
      
      {/* Inner ring */}
      <div className="absolute inset-8 rounded-full border border-primary/50" />
      
      {/* Core ring */}
      <div className="absolute inset-12 rounded-full border border-primary/60" />
      
      {/* Center dot */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-primary animate-pulse-glow" />
      </div>
      
      {/* Radar sweep */}
      <div className="absolute inset-0 animate-radar">
        <div 
          className="absolute top-1/2 left-1/2 w-1/2 h-0.5 origin-left"
          style={{
            background: 'linear-gradient(90deg, hsl(180 100% 50%) 0%, transparent 100%)',
            transform: 'translateY(-50%)',
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-1/2 h-16 origin-left opacity-30"
          style={{
            background: 'conic-gradient(from 0deg, hsl(180 100% 50% / 0.3) 0deg, transparent 30deg)',
            transform: 'translateY(-50%)',
          }}
        />
      </div>
      
      {/* Blips */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-accent animate-pulse" />
      <div className="absolute top-2/3 right-1/4 w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '1.5s' }} />
      
      {/* Grid lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-full w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      </div>
    </div>
  );
};

export default RadarAnimation;
