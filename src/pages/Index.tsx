import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import DeveloperSection from '@/components/DeveloperSection';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';
import MatrixRain from '@/components/MatrixRain';
import CircuitLines from '@/components/CircuitLines';

const Index: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>VYROXEN - Advanced Network Reconnaissance Toolkit</title>
        <meta name="description" content="VYROXEN is an advanced Linux network reconnaissance and deauthentication toolkit with a unique radar-style interface. Powerful network scanning, real-time monitoring, and security testing capabilities." />
        <meta name="keywords" content="VYROXEN, network scanner, wifi security, deauth, linux tools, cybersecurity, network reconnaissance" />
        <meta property="og:title" content="VYROXEN - Advanced Network Reconnaissance Toolkit" />
        <meta property="og:description" content="Unleash the power of next-generation network analysis with our cutting-edge radar-style interface." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://vyroxen.lovable.app" />
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
          <DownloadSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
