import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import DeveloperSection from '@/components/DeveloperSection';
import ContactSection from '@/components/ContactSection';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';
import MatrixRain from '@/components/MatrixRain';
import CircuitLines from '@/components/CircuitLines';

const Index: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>VYROXEN - أداة استطلاع الشبكات المتقدمة | Advanced Network Reconnaissance Toolkit</title>
        <meta name="description" content="VYROXEN هي أداة لينكس متقدمة لاستطلاع الشبكات واختبار الأمان مع واجهة رادار فريدة. فحص الشبكات، المراقبة في الوقت الفعلي، واختبار الأمان. Advanced Linux network reconnaissance and deauthentication toolkit with radar-style interface." />
        <meta name="keywords" content="VYROXEN, network scanner, wifi security, deauth, linux tools, cybersecurity, network reconnaissance, أداة فحص الشبكات, أمان الواي فاي, اختبار الاختراق, لينكس, الأمن السيبراني, wifi hacking, penetration testing, network monitoring, deauthentication attack, aircrack, kali linux, parrot os, ethical hacking, wireless security, network analysis, packet sniffing, MITM, man in the middle, wifi audit, security testing, vulnerability scanning, network pentesting" />
        
        {/* Open Graph */}
        <meta property="og:title" content="VYROXEN - أداة استطلاع الشبكات المتقدمة | Advanced Network Toolkit" />
        <meta property="og:description" content="أطلق العنان لقوة تحليل الشبكات من الجيل التالي مع واجهة الرادار المتطورة. Unleash next-generation network analysis power." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vyroxen.lovable.app" />
        <meta property="og:image" content="https://vyroxen.lovable.app/icons/icon-512x512.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:alt" content="VYROXEN Logo - Network Reconnaissance Tool" />
        <meta property="og:site_name" content="VYROXEN" />
        <meta property="og:locale" content="ar_EG" />
        <meta property="og:locale:alternate" content="en_US" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VYROXEN - Advanced Network Reconnaissance Toolkit" />
        <meta name="twitter:description" content="Professional Linux network scanning and security testing tool with radar interface." />
        <meta name="twitter:image" content="https://vyroxen.lovable.app/icons/icon-512x512.png" />
        <meta name="twitter:creator" content="@ahmednour" />
        <meta name="twitter:site" content="@vyroxen" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Ahmed Nour Ahmed - أحمد نور أحمد" />
        <meta name="publisher" content="VYROXEN" />
        <meta name="copyright" content="VYROXEN 2024" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="1 days" />
        <meta name="language" content="Arabic, English" />
        <meta name="geo.region" content="EG-Qena" />
        <meta name="geo.placename" content="Qena, Egypt" />
        <meta name="geo.position" content="26.1551;32.7160" />
        <meta name="ICBM" content="26.1551, 32.7160" />
        
        {/* Verification */}
        <meta name="google-site-verification" content="vyroxen-verification" />
        <meta name="msvalidate.01" content="vyroxen-bing-verification" />
        <meta name="yandex-verification" content="vyroxen-yandex" />
        
        {/* App Links */}
        <meta name="application-name" content="VYROXEN" />
        <meta name="apple-mobile-web-app-title" content="VYROXEN" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="theme-color" content="#00ffff" />
        <meta name="msapplication-TileColor" content="#0a0a0a" />
        <meta name="msapplication-navbutton-color" content="#00ffff" />
        
        <link rel="canonical" href="https://vyroxen.lovable.app" />
        <link rel="alternate" hrefLang="ar" href="https://vyroxen.lovable.app?lang=ar" />
        <link rel="alternate" hrefLang="en" href="https://vyroxen.lovable.app?lang=en" />
        <link rel="alternate" hrefLang="x-default" href="https://vyroxen.lovable.app" />
      </Helmet>

      <div className="relative min-h-screen bg-background overflow-hidden">
        {/* Background Effects */}
        <MatrixRain />
        <CircuitLines />

        {/* Main Content */}
        <Navbar />
        
        <main>
          <HeroSection />
          <FeaturesSection />
          <DeveloperSection />
          <ContactSection />
          <DownloadSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
