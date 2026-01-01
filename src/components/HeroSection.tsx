import React from 'react';
import { Link } from 'react-router-dom';
import { Download, FileText, Wifi, Shield, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import RadarAnimation from './RadarAnimation';
import vyroxenLogo from '@/assets/vyroxen-logo.png';

const HeroSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const stats = [
    { icon: Wifi, value: '10K+', label: t('hero.stats.networks') },
    { icon: Users, value: '5K+', label: t('hero.stats.users') },
    { icon: Shield, value: '50+', label: t('hero.stats.countries') },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 circuit-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`flex flex-col lg:flex-row items-center gap-12 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <div className={`flex-1 text-center lg:text-start ${isRTL ? 'lg:text-end' : ''}`}>
            {/* Logo - Enhanced with glow effects */}
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="relative group">
                {/* Multiple glow layers */}
                <div className="absolute inset-0 bg-primary/40 rounded-full blur-3xl animate-pulse scale-150" />
                <div className="absolute inset-0 bg-secondary/30 rounded-full blur-2xl animate-pulse scale-125" style={{ animationDelay: '0.5s' }} />
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
                <img 
                  src={vyroxenLogo} 
                  alt="VYROXEN" 
                  className="relative w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 animate-float drop-shadow-[0_0_30px_rgba(0,245,255,0.6)] group-hover:drop-shadow-[0_0_50px_rgba(0,245,255,0.8)] transition-all duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Title */}
            <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-black mb-4 animate-fade-in">
              <span className="text-primary text-glow-cyan">VYR</span>
              <span className="text-secondary text-glow-purple">O</span>
              <span className="text-accent text-glow-red">X</span>
              <span className="text-primary text-glow-cyan">EN</span>
            </h1>

            {/* Subtitle */}
            <h2 className="font-rajdhani text-xl md:text-2xl lg:text-3xl font-semibold text-foreground/90 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {t('hero.subtitle')}
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {t('hero.description')}
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'lg:justify-end' : 'lg:justify-start'} mb-12 animate-fade-in`} style={{ animationDelay: '0.6s' }}>
              <a 
                href="#download"
                className="group relative px-8 py-4 rounded-xl font-orbitron font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 gradient-cyber opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-secondary/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center justify-center gap-2 text-primary-foreground">
                  <Download className="w-5 h-5" />
                  {t('hero.cta.download')}
                </span>
              </a>
              <Link 
                to="/docs"
                className="group px-8 py-4 rounded-xl font-orbitron font-bold text-lg border-2 border-primary/50 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2 text-primary">
                  <FileText className="w-5 h-5" />
                  {t('hero.cta.docs')}
                </span>
              </Link>
            </div>

            {/* Stats */}
            <div className={`flex flex-wrap justify-center ${isRTL ? 'lg:justify-end' : 'lg:justify-start'} gap-8 animate-fade-in`} style={{ animationDelay: '0.8s' }}>
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="p-3 rounded-xl border border-primary/30 bg-primary/5 group-hover:bg-primary/20 group-hover:border-primary transition-all duration-300">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-orbitron text-2xl font-bold text-primary text-glow-cyan">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Radar Animation */}
          <div className="flex-1 flex justify-center items-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="relative">
              <RadarAnimation />
              {/* Glow effect behind radar */}
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
