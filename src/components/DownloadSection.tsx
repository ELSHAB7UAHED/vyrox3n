import React from 'react';
import { Download, Terminal, Shield, Cpu, Lock, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const DownloadSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const requirements = [
    { icon: Terminal, text: t('download.req1') },
    { icon: Cpu, text: t('download.req2') },
    { icon: Shield, text: t('download.req3') },
    { icon: Lock, text: t('download.req4') },
  ];

  const handleDownload = () => {
    // Create a link to download the Python file
    const link = document.createElement('a');
    link.href = '/vyroxen.py';
    link.download = 'vyroxen.py';
    link.click();
  };

  return (
    <section id="download" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-primary text-glow-cyan">{t('download.title')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('download.subtitle')}
          </p>
          {/* Decorative line */}
          <div className="flex justify-center mt-8">
            <div className="w-24 h-1 rounded-full gradient-cyber" />
          </div>
        </div>

        {/* Download Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-3xl border-2 border-primary/30 bg-card/80 backdrop-blur-xl overflow-hidden group hover:border-primary transition-all duration-500">
            {/* Animated border */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 border-animated rounded-3xl p-[2px]">
                <div className="w-full h-full rounded-3xl bg-card" />
              </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-secondary rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-secondary rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-lg" />

            <div className="relative z-10">
              {/* Version badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-orbitron text-sm font-medium text-primary">{t('download.version')}</span>
              </div>

              {/* Requirements */}
              <div className="mb-10">
                <h3 className="font-orbitron text-xl font-bold text-foreground mb-6">
                  {t('download.requirements')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-xl border border-border/50 bg-background/50">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <req.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground/80">{req.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download Button */}
              <button
                onClick={handleDownload}
                className="group/btn relative w-full py-5 rounded-2xl font-orbitron font-bold text-xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 gradient-cyber opacity-90 group-hover/btn:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                <span className="relative flex items-center justify-center gap-3 text-primary-foreground">
                  <Download className="w-6 h-6 group-hover/btn:animate-bounce" />
                  {t('download.btn')}
                </span>
              </button>

              {/* File info */}
              <p className="text-center text-muted-foreground mt-4 font-mono text-sm">
                {t('download.size')}
              </p>

              {/* Terminal preview */}
              <div className="mt-8 p-4 rounded-xl bg-background border border-border font-mono text-sm overflow-hidden">
                <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-muted-foreground">terminal</span>
                </div>
                <div className="space-y-1">
                  <p><span className="text-primary">$</span> python3 vyroxen.py</p>
                  <p className="text-green-400">[*] Initializing VYROXEN v1.0.0...</p>
                  <p className="text-primary">[+] Radar interface loaded</p>
                  <p className="text-secondary">[+] Network scanner ready</p>
                  <p className="text-accent">[!] Root required for advanced features</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
