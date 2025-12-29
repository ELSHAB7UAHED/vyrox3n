import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Sun, Moon, Maximize, Minimize } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import vyroxenLogo from '@/assets/vyroxen-logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();
  const { toggleTheme, isDark } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/#features', label: t('nav.features') },
    { to: '/#download', label: t('nav.download') },
    { to: '/docs', label: t('nav.docs') },
    { to: '/#contact', label: t('nav.contact') },
  ];

  const handleNavClick = (to: string) => {
    setIsOpen(false);
    if (to.startsWith('/#')) {
      const id = to.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-xl border-b border-primary/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={vyroxenLogo} 
              alt="VYROXEN" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-110"
            />
            <span className="font-orbitron text-2xl font-bold text-primary text-glow-cyan hidden sm:block">
              VYROXEN
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => handleNavClick(link.to)}
                className={`font-rajdhani text-lg font-medium transition-all duration-300 hover:text-primary hover:text-glow-cyan ${
                  location.pathname === link.to ? 'text-primary text-glow-cyan' : 'text-foreground/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="p-2 rounded-lg border border-primary/30 bg-background/50 hover:bg-primary/20 hover:border-primary transition-all duration-300 group"
              title={language === 'en' ? 'العربية' : 'English'}
            >
              <Globe className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-primary/30 bg-background/50 hover:bg-primary/20 hover:border-primary transition-all duration-300 group"
              title={isDark ? t('controls.light_mode') : t('controls.dark_mode')}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors" />
              ) : (
                <Moon className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors" />
              )}
            </button>

            {/* Fullscreen Toggle */}
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-lg border border-primary/30 bg-background/50 hover:bg-primary/20 hover:border-primary transition-all duration-300 group"
              title={isFullscreen ? t('controls.exit_fullscreen') : t('controls.fullscreen')}
            >
              {isFullscreen ? (
                <Minimize className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors" />
              ) : (
                <Maximize className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg border border-primary/30 bg-background/50 hover:bg-primary/20 transition-all duration-300"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-foreground/80" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 border-t border-primary/20">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => handleNavClick(link.to)}
                className={`block px-4 py-3 rounded-lg font-rajdhani text-lg font-medium transition-all duration-300 hover:bg-primary/20 hover:text-primary ${
                  location.pathname === link.to ? 'text-primary bg-primary/10' : 'text-foreground/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
