import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface Translations {
  [key: string]: {
    en: string;
    ar: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', ar: 'الرئيسية' },
  'nav.features': { en: 'Features', ar: 'المميزات' },
  'nav.download': { en: 'Download', ar: 'التحميل' },
  'nav.docs': { en: 'Documentation', ar: 'التوثيق' },
  'nav.contact': { en: 'Contact', ar: 'تواصل' },

  // Hero Section
  'hero.title': { en: 'VYROXEN', ar: 'VYROXEN' },
  'hero.subtitle': { en: 'Advanced Network Reconnaissance Toolkit', ar: 'مجموعة أدوات استطلاع الشبكات المتقدمة' },
  'hero.description': { 
    en: 'Unleash the power of next-generation network analysis with our cutting-edge radar-style interface. Monitor, analyze, and secure your network infrastructure like never before.',
    ar: 'أطلق العنان لقوة تحليل الشبكات من الجيل التالي مع واجهتنا المتطورة بأسلوب الرادار. راقب وحلل وأمّن بنيتك التحتية للشبكات كما لم يحدث من قبل.'
  },
  'hero.cta.download': { en: 'Download Now', ar: 'حمّل الآن' },
  'hero.cta.docs': { en: 'View Documentation', ar: 'عرض التوثيق' },
  'hero.stats.networks': { en: 'Networks Scanned', ar: 'الشبكات الممسوحة' },
  'hero.stats.users': { en: 'Active Users', ar: 'المستخدمون النشطون' },
  'hero.stats.countries': { en: 'Countries', ar: 'الدول' },

  // Features Section
  'features.title': { en: 'Powerful Features', ar: 'مميزات قوية' },
  'features.subtitle': { en: 'Everything you need for advanced network reconnaissance', ar: 'كل ما تحتاجه لاستطلاع الشبكات المتقدم' },
  
  'features.radar.title': { en: 'Radar Interface', ar: 'واجهة الرادار' },
  'features.radar.desc': { en: 'Visualize network nodes in real-time with our unique radar-style display system', ar: 'تصور عقد الشبكة في الوقت الفعلي مع نظام العرض الفريد بأسلوب الرادار' },
  
  'features.scan.title': { en: 'Deep Scanning', ar: 'المسح العميق' },
  'features.scan.desc': { en: 'Comprehensive Wi-Fi and network scanning using nmcli, iwlist, and scapy', ar: 'مسح شامل لشبكات Wi-Fi والشبكات باستخدام nmcli و iwlist و scapy' },
  
  'features.deauth.title': { en: 'Deauth Attacks', ar: 'هجمات Deauth' },
  'features.deauth.desc': { en: 'Advanced deauthentication capabilities for security testing purposes', ar: 'قدرات إلغاء المصادقة المتقدمة لأغراض اختبار الأمان' },
  
  'features.api.title': { en: 'HTTP API', ar: 'واجهة برمجة HTTP' },
  'features.api.desc': { en: 'Built-in REST API server for external control and automation', ar: 'خادم REST API مدمج للتحكم الخارجي والأتمتة' },
  
  'features.export.title': { en: 'Data Export', ar: 'تصدير البيانات' },
  'features.export.desc': { en: 'Export scan results to JSON, CSV, or SQLite database', ar: 'تصدير نتائج المسح إلى JSON أو CSV أو قاعدة بيانات SQLite' },
  
  'features.realtime.title': { en: 'Real-time Updates', ar: 'تحديثات فورية' },
  'features.realtime.desc': { en: 'Live network monitoring with automatic refresh and alerts', ar: 'مراقبة الشبكة المباشرة مع التحديث التلقائي والتنبيهات' },

  // Download Section
  'download.title': { en: 'Download VYROXEN', ar: 'تحميل VYROXEN' },
  'download.subtitle': { en: 'Get started with the most advanced network reconnaissance toolkit', ar: 'ابدأ مع أكثر مجموعة أدوات استطلاع الشبكات تقدماً' },
  'download.version': { en: 'Version 1.0.0', ar: 'الإصدار 1.0.0' },
  'download.requirements': { en: 'Requirements', ar: 'المتطلبات' },
  'download.req1': { en: 'Linux Operating System', ar: 'نظام تشغيل لينكس' },
  'download.req2': { en: 'Python 3.11+', ar: 'بايثون 3.11+' },
  'download.req3': { en: 'PyQt5 & Scapy', ar: 'PyQt5 و Scapy' },
  'download.req4': { en: 'Root privileges for deauth', ar: 'صلاحيات Root للـ deauth' },
  'download.btn': { en: 'Download Python Script', ar: 'تحميل سكربت بايثون' },
  'download.size': { en: 'File Size: ~50KB', ar: 'حجم الملف: ~50KB' },

  // Documentation
  'docs.title': { en: 'Documentation', ar: 'التوثيق' },
  'docs.subtitle': { en: 'Learn how to use VYROXEN effectively', ar: 'تعلم كيفية استخدام VYROXEN بفعالية' },
  'docs.getting_started': { en: 'Getting Started', ar: 'البدء' },
  'docs.installation': { en: 'Installation', ar: 'التثبيت' },
  'docs.configuration': { en: 'Configuration', ar: 'الإعدادات' },
  'docs.api_reference': { en: 'API Reference', ar: 'مرجع API' },
  'docs.examples': { en: 'Examples', ar: 'أمثلة' },
  'docs.faq': { en: 'FAQ', ar: 'الأسئلة الشائعة' },

  // Footer
  'footer.developer': { en: 'Developed by', ar: 'تم التطوير بواسطة' },
  'footer.location': { en: 'Qena, Egypt', ar: 'قنا، مصر' },
  'footer.rights': { en: 'All Rights Reserved', ar: 'جميع الحقوق محفوظة' },
  'footer.educational': { en: 'For Educational Purposes Only', ar: 'للأغراض التعليمية فقط' },

  // Controls
  'controls.fullscreen': { en: 'Fullscreen', ar: 'ملء الشاشة' },
  'controls.exit_fullscreen': { en: 'Exit Fullscreen', ar: 'إنهاء ملء الشاشة' },
  'controls.dark_mode': { en: 'Dark Mode', ar: 'الوضع المظلم' },
  'controls.light_mode': { en: 'Light Mode', ar: 'الوضع الفاتح' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      <div dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'font-cairo' : 'font-rajdhani'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
