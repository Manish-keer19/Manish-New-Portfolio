
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight">
            <span className="block text-xl md:text-2xl font-medium text-primary mb-4 tracking-wide uppercase">
              Full Stack Developer
            </span>
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-600">
              Manish Keer
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Building scalable, real-time applications with <span className="text-foreground font-semibold">React</span>, <span className="text-foreground font-semibold">Node.js</span>, and <span className="text-foreground font-semibold">Spring Boot</span>.
            Transforming ideas into high-performance digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-6 text-lg rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ExternalLink className="mr-2 h-6 w-6" />
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
                className="border-2 border-primary/20 hover:border-primary hover:bg-primary/5 text-foreground font-semibold px-10 py-6 text-lg rounded-full transition-all duration-300 hover:-translate-y-1"
              >
                <Download className="mr-2 h-6 w-6" />
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
