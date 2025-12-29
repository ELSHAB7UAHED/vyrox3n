import React from 'react';
import { Mail, Phone, Globe, MapPin, Heart, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import vyroxenLogo from '@/assets/vyroxen-logo.png';

const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <footer id="contact" className="relative py-16 overflow-hidden border-t border-primary/20">
      {/* Background */}
      <div className="absolute inset-0 circuit-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-t from-card to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 ${isRTL ? 'text-right' : ''}`}>
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={vyroxenLogo} alt="VYROXEN" className="h-16 w-auto" />
              <span className="font-orbitron text-3xl font-bold text-primary text-glow-cyan">VYROXEN</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Advanced Linux Network Reconnaissance & Deauth Toolkit with a unique radar-style interface for professional security testing.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10">
              <span className="text-sm text-accent">{t('footer.educational')}</span>
            </div>
          </div>

          {/* Developer Info */}
          <div>
            <h4 className="font-orbitron text-lg font-bold text-foreground mb-6 flex items-center gap-2">
              <Heart className="w-5 h-5 text-accent" />
              {t('footer.developer')}
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Ahmed Noor Ahmed</p>
                  <p className="text-sm">{t('footer.location')} 🇪🇬</p>
                </div>
              </div>
              <a 
                href="https://ahmednour.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Globe className="w-4 h-4 text-primary" />
                </div>
                <span className="flex items-center gap-1">
                  ahmednour.vercel.app
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-orbitron text-lg font-bold text-foreground mb-6">
              {t('nav.contact')}
            </h4>
            <div className="space-y-4">
              <a 
                href="mailto:amedelshab7@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span>amedelshab7@gmail.com</span>
              </a>
              <a 
                href="tel:+201014812328"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span dir="ltr">+20 101 481 2328</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50">
          <div className={`flex flex-col md:flex-row justify-between items-center gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} VYROXEN. {t('footer.rights')}
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {t('footer.developer')} <span className="text-primary font-semibold">Ahmed Noor Ahmed</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
