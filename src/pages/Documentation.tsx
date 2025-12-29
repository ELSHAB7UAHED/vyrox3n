import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  BookOpen, 
  Download, 
  Settings, 
  Terminal, 
  Wifi, 
  Shield, 
  Server,
  ChevronRight,
  Copy,
  Check
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

interface CodeBlockProps {
  code: string;
  onCopy: (code: string) => void;
  isCopied: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, onCopy, isCopied }) => (
  <div className="relative group">
    <pre className="p-4 rounded-lg bg-background border border-border font-mono text-sm overflow-x-auto">
      <code className="text-primary">{code}</code>
    </pre>
    <button
      onClick={() => onCopy(code)}
      className="absolute top-2 right-2 p-2 rounded-md bg-primary/20 hover:bg-primary/30 transition-colors opacity-0 group-hover:opacity-100"
    >
      {isCopied ? (
        <Check className="w-4 h-4 text-green-400" />
      ) : (
        <Copy className="w-4 h-4 text-primary" />
      )}
    </button>
  </div>
);

const Documentation: React.FC = () => {
  const { t, isRTL, language } = useLanguage();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const sections = [
    {
      id: 'installation',
      title: language === 'ar' ? 'التثبيت' : 'Installation',
      icon: Download,
    },
    {
      id: 'configuration',
      title: language === 'ar' ? 'الإعدادات' : 'Configuration',
      icon: Settings,
    },
    {
      id: 'scanning',
      title: language === 'ar' ? 'فحص الشبكات' : 'Network Scanning',
      icon: Wifi,
    },
    {
      id: 'deauth',
      title: language === 'ar' ? 'هجمات Deauth' : 'Deauth Attacks',
      icon: Shield,
    },
    {
      id: 'api',
      title: language === 'ar' ? 'مرجع API' : 'API Reference',
      icon: Server,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Documentation - VYROXEN</title>
        <meta name="description" content="Complete documentation for VYROXEN network reconnaissance toolkit. Learn installation, configuration, and usage." />
      </Helmet>

      <div className="relative min-h-screen bg-background">
        <Navbar />

        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="mb-12">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                {language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
              </Link>
              <h1 className="font-orbitron text-4xl md:text-5xl font-bold text-primary text-glow-cyan mb-4">
                <BookOpen className="inline-block w-12 h-12 mr-4" />
                {t('docs.title')}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t('docs.subtitle')}
              </p>
            </div>

            {/* Content */}
            <div className={`grid grid-cols-1 lg:grid-cols-4 gap-8 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 p-4 rounded-xl border border-primary/20 bg-card/50 backdrop-blur-sm">
                  <h3 className="font-orbitron text-lg font-bold text-foreground mb-4">
                    {language === 'ar' ? 'المحتويات' : 'Contents'}
                  </h3>
                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                      >
                        <section.icon className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {section.title}
                        </span>
                        <ChevronRight className={`w-4 h-4 text-muted-foreground/50 ${isRTL ? 'rotate-180 mr-auto' : 'ml-auto'} group-hover:text-primary transition-colors`} />
                      </a>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3 space-y-12">
                {/* Installation Section */}
                <section id="installation" className="p-6 md:p-8 rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-sm scroll-mt-24">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Download className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="font-orbitron text-2xl font-bold text-foreground">
                      {language === 'ar' ? 'التثبيت' : 'Installation'}
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {language === 'ar' 
                      ? 'اتبع هذه الخطوات لتثبيت VYROXEN على نظام Linux الخاص بك:' 
                      : 'Follow these steps to install VYROXEN on your Linux system:'}
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {language === 'ar' ? '1. تثبيت المتطلبات' : '1. Install Dependencies'}
                      </h4>
                      <CodeBlock 
                        code="sudo apt update && sudo apt install python3 python3-pip aircrack-ng" 
                        onCopy={copyCode}
                        isCopied={copiedCode === "sudo apt update && sudo apt install python3 python3-pip aircrack-ng"}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {language === 'ar' ? '2. تثبيت مكتبات Python' : '2. Install Python Libraries'}
                      </h4>
                      <CodeBlock 
                        code="pip3 install PyQt5 scapy" 
                        onCopy={copyCode}
                        isCopied={copiedCode === "pip3 install PyQt5 scapy"}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {language === 'ar' ? '3. تحميل وتشغيل الأداة' : '3. Download and Run'}
                      </h4>
                      <CodeBlock 
                        code="chmod +x vyroxen.py && sudo python3 vyroxen.py" 
                        onCopy={copyCode}
                        isCopied={copiedCode === "chmod +x vyroxen.py && sudo python3 vyroxen.py"}
                      />
                    </div>
                  </div>
                </section>

                {/* Configuration Section */}
                <section id="configuration" className="p-6 md:p-8 rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-sm scroll-mt-24">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Settings className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="font-orbitron text-2xl font-bold text-foreground">
                      {language === 'ar' ? 'الإعدادات' : 'Configuration'}
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {language === 'ar' 
                      ? 'قم بتكوين VYROXEN حسب احتياجاتك:' 
                      : 'Configure VYROXEN according to your needs:'}
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg border border-border bg-card/50">
                      <h4 className="font-semibold text-primary mb-2">
                        {language === 'ar' ? 'إعدادات خادم API' : 'API Server Settings'}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        {language === 'ar' ? 'المنفذ الافتراضي: 5000' : 'Default port: 5000'}
                      </p>
                      <CodeBlock 
                        code="API_PORT = 5000" 
                        onCopy={copyCode}
                        isCopied={copiedCode === "API_PORT = 5000"}
                      />
                    </div>
                    <div className="p-4 rounded-lg border border-border bg-card/50">
                      <h4 className="font-semibold text-secondary mb-2">
                        {language === 'ar' ? 'إعدادات قاعدة البيانات' : 'Database Settings'}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        {language === 'ar' ? 'SQLite مسار قاعدة البيانات' : 'SQLite database path'}
                      </p>
                      <CodeBlock 
                        code='DB_PATH = "vyroxen_data.db"' 
                        onCopy={copyCode}
                        isCopied={copiedCode === 'DB_PATH = "vyroxen_data.db"'}
                      />
                    </div>
                  </div>
                </section>

                {/* Scanning Section */}
                <section id="scanning" className="p-6 md:p-8 rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-sm scroll-mt-24">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Wifi className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="font-orbitron text-2xl font-bold text-foreground">
                      {language === 'ar' ? 'فحص الشبكات' : 'Network Scanning'}
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {language === 'ar' 
                      ? 'VYROXEN يدعم عدة طرق للفحص:' 
                      : 'VYROXEN supports multiple scanning methods:'}
                  </p>
                  <div className="grid gap-4">
                    <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
                      <h4 className="font-semibold text-primary mb-2">
                        {language === 'ar' ? 'فحص nmcli (الافتراضي)' : 'nmcli Scanning (Default)'}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {language === 'ar' 
                          ? 'يستخدم NetworkManager للفحص السريع والموثوق' 
                          : 'Uses NetworkManager for quick and reliable scanning'}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg border border-secondary/30 bg-secondary/5">
                      <h4 className="font-semibold text-secondary mb-2">
                        {language === 'ar' ? 'فحص iwlist' : 'iwlist Scanning'}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {language === 'ar' 
                          ? 'الطريقة البديلة عندما لا يكون nmcli متاحًا' 
                          : 'Fallback method when nmcli is not available'}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg border border-accent/30 bg-accent/5">
                      <h4 className="font-semibold text-accent mb-2">
                        {language === 'ar' ? 'فحص Scapy' : 'Scapy Scanning'}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {language === 'ar' 
                          ? 'للتحليل المتقدم على مستوى الحزم' 
                          : 'For advanced packet-level analysis'}
                      </p>
                    </div>
                  </div>
                </section>

                {/* Deauth Section */}
                <section id="deauth" className="p-6 md:p-8 rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-sm scroll-mt-24">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="font-orbitron text-2xl font-bold text-foreground">
                      {language === 'ar' ? 'هجمات Deauth' : 'Deauth Attacks'}
                    </h2>
                  </div>
                  <div className="p-4 rounded-lg border border-accent bg-accent/10 mb-4">
                    <p className="text-accent font-semibold">
                      {language === 'ar' 
                        ? '⚠️ تحذير: للاستخدام التعليمي والاختبار المصرح به فقط' 
                        : '⚠️ Warning: For educational and authorized testing only'}
                    </p>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {language === 'ar' 
                      ? 'VYROXEN يدعم هجمات إلغاء المصادقة للاختبار الأمني:' 
                      : 'VYROXEN supports deauthentication attacks for security testing:'}
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {language === 'ar' ? 'تفعيل وضع المراقبة' : 'Enable Monitor Mode'}
                      </h4>
                      <CodeBlock 
                        code="sudo airmon-ng start wlan0" 
                        onCopy={copyCode}
                        isCopied={copiedCode === "sudo airmon-ng start wlan0"}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {language === 'ar' ? 'تشغيل هجوم Deauth' : 'Run Deauth Attack'}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        {language === 'ar' 
                          ? 'حدد الهدف من واجهة الرادار واضغط على زر Deauth' 
                          : 'Select target from radar interface and click Deauth button'}
                      </p>
                    </div>
                  </div>
                </section>

                {/* API Section */}
                <section id="api" className="p-6 md:p-8 rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-sm scroll-mt-24">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Server className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="font-orbitron text-2xl font-bold text-foreground">
                      {language === 'ar' ? 'مرجع API' : 'API Reference'}
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {language === 'ar' 
                      ? 'VYROXEN يوفر خادم REST API مدمج:' 
                      : 'VYROXEN provides a built-in REST API server:'}
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg border border-border bg-card/50">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 rounded text-xs font-mono bg-green-500/20 text-green-400">GET</span>
                        <code className="text-primary font-mono">/api/scan</code>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {language === 'ar' 
                          ? 'بدء فحص الشبكة وإرجاع النتائج' 
                          : 'Start network scan and return results'}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg border border-border bg-card/50">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 rounded text-xs font-mono bg-green-500/20 text-green-400">GET</span>
                        <code className="text-primary font-mono">/api/networks</code>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {language === 'ar' 
                          ? 'الحصول على قائمة الشبكات المكتشفة' 
                          : 'Get list of discovered networks'}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg border border-border bg-card/50">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 rounded text-xs font-mono bg-yellow-500/20 text-yellow-400">POST</span>
                        <code className="text-primary font-mono">/api/deauth</code>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {language === 'ar' 
                          ? 'تنفيذ هجوم deauth (يتطلب صلاحيات root)' 
                          : 'Execute deauth attack (requires root)'}
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Documentation;
