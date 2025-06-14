
import { Download, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import CodeParticles from './CodeParticles';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">

      {/* Background particles */}
      <CodeParticles />

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="block text-2xl md:text-3xl font-normal text-muted-foreground mb-4">
              Hi, I'm
            </span>
            <span className="text-gradient">Manish Keer</span>
            <span className="text-4xl md:text-6xl ml-4">👋</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Full-Stack & Android Developer | MERN Stack | Spring Boot | React Native
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-full glow-green transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View Projects
            </Button>

            <a
              href="/manishresume.pdf"
              download="manishresume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 hover:bg-primary/10 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>

          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background pointer-events-none" />
    </section>
  );
};

export default HeroSection;
