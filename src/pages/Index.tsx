
import { useState, useEffect } from 'react';
import { Moon, Sun, Download, ExternalLink, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TechStack from '@/components/TechStack';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import AdminDashboard from '@/components/AdminDashboard';
import ContactForm from '@/components/ContactForm';
import Navigation from '@/components/Navigation';
import SocialSection from '@/components/SocialSection';

const Index = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">


      {/* Theme Toggle */}
      <Button
        onClick={() => setIsDark(!isDark)}
        variant="outline"
        size="icon"
        className="fixed bottom-6 right-6 z-50 glass hover:glow-green transition-all duration-300"
        style={{
          width: '3rem',
          height: '3rem',
          touchAction: 'manipulation' // improves touch responsiveness
        }}
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        )}
      </Button>

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Tech Stack */}
      <TechStack />

      {/* Projects Showcase */}
      <ProjectsShowcase />

      <SocialSection />

      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Manish Keer. Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
