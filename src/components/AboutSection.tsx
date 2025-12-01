import manish from "../assets/manish.png"
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-1 bg-background ring-1 ring-white/10">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src={manish}
                    alt="Manish Keer"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-card border border-white/10 p-4 rounded-2xl shadow-xl backdrop-blur-sm animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                    <span className="text-xl">🚀</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Experience</p>
                    <p className="text-sm font-bold text-foreground">Full Stack Dev</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-8 order-1 md:order-2">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                More Than Just <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">Code</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My journey into software development wasn't just about learning syntax; it was about discovering the power to create. From my first "Hello World" to architecting complex, real-time applications, I've always been driven by one question: <span className="text-foreground font-medium italic">"How can I make this better?"</span>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, I leverage the power of the <span className="text-foreground font-semibold">MERN Stack</span>, <span className="text-foreground font-semibold">Spring Boot</span>, and <span className="text-foreground font-semibold">React Native</span> to build solutions that aren't just functional—they're intuitive, scalable, and built to last. Whether it's a seamless mobile app or a high-performance web platform, I bring technical depth and creative problem-solving to every project.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 rounded-full bg-primary/5 border border-primary/10 text-primary font-medium">
                Problem Solver
              </div>
              <div className="px-6 py-3 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-500 font-medium">
                Continuous Learner
              </div>
              <div className="px-6 py-3 rounded-full bg-purple-500/5 border border-purple-500/10 text-purple-500 font-medium">
                Tech Enthusiast
              </div>
            </div>

            <Button
              className="group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Work Together
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;