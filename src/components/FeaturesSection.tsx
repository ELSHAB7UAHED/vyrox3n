import React from 'react';
import { Radar, Scan, Zap, Server, Database, Activity } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FeaturesSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    {
      icon: Radar,
      title: t('features.radar.title'),
      description: t('features.radar.desc'),
      color: 'primary',
      delay: 0,
    },
    {
      icon: Scan,
      title: t('features.scan.title'),
      description: t('features.scan.desc'),
      color: 'secondary',
      delay: 0.1,
    },
    {
      icon: Zap,
      title: t('features.deauth.title'),
      description: t('features.deauth.desc'),
      color: 'accent',
      delay: 0.2,
    },
    {
      icon: Server,
      title: t('features.api.title'),
      description: t('features.api.desc'),
      color: 'primary',
      delay: 0.3,
    },
    {
      icon: Database,
      title: t('features.export.title'),
      description: t('features.export.desc'),
      color: 'secondary',
      delay: 0.4,
    },
    {
      icon: Activity,
      title: t('features.realtime.title'),
      description: t('features.realtime.desc'),
      color: 'accent',
      delay: 0.5,
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          border: 'border-primary/30 hover:border-primary',
          bg: 'bg-primary/5 hover:bg-primary/10',
          icon: 'text-primary',
          glow: 'group-hover:shadow-[0_0_30px_hsl(180_100%_50%/0.3)]',
        };
      case 'secondary':
        return {
          border: 'border-secondary/30 hover:border-secondary',
          bg: 'bg-secondary/5 hover:bg-secondary/10',
          icon: 'text-secondary',
          glow: 'group-hover:shadow-[0_0_30px_hsl(280_80%_50%/0.3)]',
        };
      case 'accent':
        return {
          border: 'border-accent/30 hover:border-accent',
          bg: 'bg-accent/5 hover:bg-accent/10',
          icon: 'text-accent',
          glow: 'group-hover:shadow-[0_0_30px_hsl(350_90%_55%/0.3)]',
        };
      default:
        return {
          border: 'border-primary/30',
          bg: 'bg-primary/5',
          icon: 'text-primary',
          glow: '',
        };
    }
  };

  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-primary text-glow-cyan">{t('features.title')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
          {/* Decorative line */}
          <div className="flex justify-center mt-8">
            <div className="w-24 h-1 rounded-full gradient-cyber" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl border ${colors.border} ${colors.bg} backdrop-blur-sm transition-all duration-500 hover:scale-105 ${colors.glow} animate-fade-in`}
                style={{ animationDelay: `${feature.delay}s` }}
              >
                {/* Corner accents */}
                <div className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} w-8 h-8 border-t-2 border-l-2 ${colors.border.replace('hover:', '')} rounded-tl-2xl`} />
                <div className={`absolute bottom-0 ${isRTL ? 'left-0' : 'right-0'} w-8 h-8 border-b-2 border-r-2 ${colors.border.replace('hover:', '')} rounded-br-2xl`} />

                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl ${colors.bg} mb-6 transition-all duration-300 group-hover:scale-110`}>
                  <feature.icon className={`w-8 h-8 ${colors.icon}`} />
                </div>

                {/* Content */}
                <h3 className="font-orbitron text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Animated line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden rounded-b-2xl">
                  <div 
                    className={`h-full w-full gradient-cyber transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
