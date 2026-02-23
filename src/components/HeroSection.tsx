import {
  Download,
  ExternalLink,
  Smartphone,
  Server,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CodeParticles from "./CodeParticles";

const HeroSection = () => {
  const roles = [
    { label: "Backend Engineer", icon: <Server className="w-3 h-3" /> },
    { label: "Full-Stack Developer", icon: <Globe className="w-3 h-3" /> },
    { label: "Android Developer", icon: <Smartphone className="w-3 h-3" /> },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background particles */}
      <CodeParticles />

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="animate-slide-up">
          {/* Role badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {roles.map((role) => (
              <Badge
                key={role.label}
                variant="outline"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border-primary/30 text-primary bg-primary/5 backdrop-blur-sm"
              >
                {role.icon}
                {role.label}
              </Badge>
            ))}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight">
            <span className="block text-xl md:text-2xl font-medium text-muted-foreground mb-3 tracking-wider uppercase">
              Hi, I'm
            </span>
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-600">
              Manish Keer
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed max-w-3xl mx-auto">
            Entry-level Software Engineer specializing in{" "}
            <span className="text-foreground font-semibold">
              scalable backend systems
            </span>
            ,{" "}
            <span className="text-foreground font-semibold">
              real-time web applications
            </span>
            , and{" "}
            <span className="text-foreground font-semibold">
              Android development
            </span>
            .
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Building with{" "}
            <span className="text-primary font-semibold">Node.js</span> ·{" "}
            <span className="text-purple-400 font-semibold">NestJS</span> ·{" "}
            <span className="text-blue-400 font-semibold">React</span> ·{" "}
            <span className="text-cyan-400 font-semibold">React Native</span> ·{" "}
            <span className="text-green-400 font-semibold">Spring Boot</span> ·{" "}
            <span className="text-orange-400 font-semibold">AWS</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-6 text-lg rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
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

          {/* Location & contact info */}
          <p className="mt-8 text-sm text-muted-foreground/70 tracking-wide">
            📍 Indore, India &nbsp;·&nbsp; Open to Remote & Relocation
          </p>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background pointer-events-none" />
    </section>
  );
};

export default HeroSection;
