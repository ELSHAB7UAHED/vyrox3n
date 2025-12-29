import React from 'react';

const CircuitLines: React.FC = () => {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="circuitGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(180 100% 50%)" stopOpacity="0" />
          <stop offset="50%" stopColor="hsl(180 100% 50%)" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(180 100% 50%)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="circuitGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(280 80% 50%)" stopOpacity="0" />
          <stop offset="50%" stopColor="hsl(280 80% 50%)" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(280 80% 50%)" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {/* Horizontal lines */}
      <path d="M 0 100 H 150 L 180 130 H 300" stroke="url(#circuitGradient1)" strokeWidth="1" fill="none">
        <animate attributeName="stroke-dashoffset" from="300" to="0" dur="3s" repeatCount="indefinite" />
      </path>
      <path d="M 0 200 H 100 L 120 180 H 250 L 280 200 H 400" stroke="url(#circuitGradient2)" strokeWidth="1" fill="none">
        <animate attributeName="stroke-dashoffset" from="400" to="0" dur="4s" repeatCount="indefinite" />
      </path>
      
      {/* Vertical lines */}
      <path d="M 100 0 V 80 L 120 100 V 200" stroke="url(#circuitGradient1)" strokeWidth="1" fill="none">
        <animate attributeName="stroke-dashoffset" from="280" to="0" dur="2.5s" repeatCount="indefinite" />
      </path>
      
      {/* Right side lines */}
      <path d="M 100% 150 H calc(100% - 200px) L calc(100% - 230px) 180 V 300" stroke="url(#circuitGradient2)" strokeWidth="1" fill="none">
        <animate attributeName="stroke-dashoffset" from="350" to="0" dur="3.5s" repeatCount="indefinite" />
      </path>
      
      {/* Dots at intersections */}
      <circle cx="150" cy="100" r="3" fill="hsl(180 100% 50%)" opacity="0.8">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="200" r="3" fill="hsl(280 80% 50%)" opacity="0.8">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="250" cy="180" r="3" fill="hsl(180 100% 50%)" opacity="0.8">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
};

export default CircuitLines;
