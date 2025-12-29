import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Github, Globe, Mail, Phone, MapPin, Code, Terminal, Cpu, Zap } from 'lucide-react';
import developerPhoto from '@/assets/developer-photo.png';

const DeveloperSection: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Meet The Developer',
      subtitle: 'The Mind Behind VYROXEN',
      name: 'Ahmed Nour Ahmed',
      role: 'Cybersecurity Expert & Developer',
      location: 'Qena, Egypt',
      bio: 'Passionate about cybersecurity, network security, and building powerful tools that help security professionals protect digital infrastructure.',
      skills: ['Python', 'Network Security', 'Penetration Testing', 'Linux', 'Ethical Hacking'],
      contact: 'Get In Touch'
    },
    ar: {
      title: 'تعرف على المطور',
      subtitle: 'العقل المدبر وراء VYROXEN',
      name: 'أحمد نور أحمد',
      role: 'خبير أمن سيبراني ومطور',
      location: 'قنا، مصر',
      bio: 'شغوف بالأمن السيبراني وأمن الشبكات وبناء أدوات قوية تساعد محترفي الأمن في حماية البنية التحتية الرقمية.',
      skills: ['بايثون', 'أمن الشبكات', 'اختبار الاختراق', 'لينكس', 'القرصنة الأخلاقية'],
      contact: 'تواصل معي'
    }
  };

  const t = content[language];

  return (
    <section id="developer" className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 animate-pulse">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-primary font-mono text-sm">{t.subtitle}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse">
              {t.title}
            </span>
          </h2>
        </div>

        {/* Developer Card */}
        <div className="max-w-5xl mx-auto">
          <div className="relative group">
            {/* Outer glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
            
            {/* Card */}
            <div className="relative bg-card/80 backdrop-blur-xl border-2 border-primary/30 rounded-3xl overflow-hidden group-hover:border-primary/60 transition-all duration-500">
              {/* Scanning line animation */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line opacity-50" />
              </div>

              <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                {/* Photo Side */}
                <div className="relative flex items-center justify-center">
                  <div className="relative">
                    {/* Rotating border */}
                    <div className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/50 animate-spin-slow" />
                    <div className="absolute -inset-8 rounded-full border border-secondary/30 animate-reverse-spin" />
                    
                    {/* Glowing orbs */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full blur-lg animate-pulse" />
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full blur-lg animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute top-1/2 -right-8 w-4 h-4 bg-accent rounded-full blur-md animate-pulse" style={{ animationDelay: '1s' }} />
                    
                    {/* Photo container */}
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/50 group-hover:border-primary transition-all duration-500">
                      <img
                        src={developerPhoto}
                        alt={t.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Floating icons */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 p-3 bg-card border border-primary/50 rounded-xl animate-float">
                      <Code className="w-6 h-6 text-primary" />
                    </div>
                    <div className="absolute top-1/4 -right-12 p-3 bg-card border border-secondary/50 rounded-xl animate-float" style={{ animationDelay: '0.5s' }}>
                      <Cpu className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="absolute bottom-1/4 -left-12 p-3 bg-card border border-accent/50 rounded-xl animate-float" style={{ animationDelay: '1s' }}>
                      <Zap className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                </div>

                {/* Info Side */}
                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {t.name}
                    </h3>
                    <p className="text-xl text-primary font-mono">{t.role}</p>
                    <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>{t.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {t.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {t.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-mono text-primary hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 cursor-default"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Contact Links */}
                  <div className="pt-4">
                    <h4 className="text-lg font-semibold text-foreground mb-4">{t.contact}</h4>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="mailto:amedelshab7@gmail.com"
                        className="group/link flex items-center gap-2 px-4 py-3 bg-card border border-primary/30 rounded-xl hover:border-primary hover:bg-primary/10 transition-all duration-300"
                      >
                        <Mail className="w-5 h-5 text-primary group-hover/link:scale-110 transition-transform" />
                        <span className="text-muted-foreground group-hover/link:text-foreground transition-colors">amedelshab7@gmail.com</span>
                      </a>
                      <a
                        href="tel:01014812328"
                        className="group/link flex items-center gap-2 px-4 py-3 bg-card border border-secondary/30 rounded-xl hover:border-secondary hover:bg-secondary/10 transition-all duration-300"
                      >
                        <Phone className="w-5 h-5 text-secondary group-hover/link:scale-110 transition-transform" />
                        <span className="text-muted-foreground group-hover/link:text-foreground transition-colors">01014812328</span>
                      </a>
                      <a
                        href="https://ahmednour.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-2 px-4 py-3 bg-card border border-accent/30 rounded-xl hover:border-accent hover:bg-accent/10 transition-all duration-300"
                      >
                        <Globe className="w-5 h-5 text-accent group-hover/link:scale-110 transition-transform" />
                        <span className="text-muted-foreground group-hover/link:text-foreground transition-colors">ahmednour.vercel.app</span>
                      </a>
                      <a
                        href="https://github.com/ELSHAB7UAHED"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-2 px-4 py-3 bg-card border border-muted/30 rounded-xl hover:border-foreground hover:bg-muted/10 transition-all duration-300"
                      >
                        <Github className="w-5 h-5 text-foreground group-hover/link:scale-110 transition-transform" />
                        <span className="text-muted-foreground group-hover/link:text-foreground transition-colors">GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom terminal */}
              <div className="border-t border-primary/20 p-4 bg-card/50">
                <div className="font-mono text-sm text-muted-foreground flex items-center gap-2">
                  <span className="text-primary animate-pulse">●</span>
                  <span className="text-primary">$</span>
                  <span className="typing-animation">whoami</span>
                  <span className="text-secondary mx-2">→</span>
                  <span className="text-foreground">{t.name}</span>
                  <span className="text-muted-foreground">|</span>
                  <span className="text-accent">{t.role}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
