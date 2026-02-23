import manish from "../assets/manish.png";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  GraduationCap,
  Briefcase,
  MapPin,
  Mail,
  Phone,
  CalendarDays,
  ExternalLink,
  Code2,
  Server,
  Smartphone,
  CheckCircle2,
} from "lucide-react";

const AboutSection = () => {
  const stats = [
    { value: "7+", label: "Projects Shipped", icon: "🚀" },
    { value: "4+", label: "Live Productions", icon: "🌐" },
    { value: "3", label: "Tech Ecosystems", icon: "⚡" },
    { value: "7.7", label: "CGPA / 10", icon: "🎓" },
  ];

  const highlights = [
    {
      icon: <Code2 className="w-4 h-4 text-primary" />,
      text: "Full-Stack MERN Development — REST APIs, JWT Auth, WebSockets",
    },
    {
      icon: <Server className="w-4 h-4 text-purple-400" />,
      text: "NestJS & Spring Boot — enterprise-grade backend architecture",
    },
    {
      icon: <Smartphone className="w-4 h-4 text-green-400" />,
      text: "React Native Android Developer — native-performance mobile apps",
    },
    {
      icon: <CheckCircle2 className="w-4 h-4 text-blue-400" />,
      text: "Cloud Deployments — AWS EC2, Docker, Nginx, CI/CD pipelines",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-4 bg-muted/20 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-primary/4 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] bg-blue-500/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section label */}
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            The Developer{" "}
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Behind the Code
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* ─── LEFT COLUMN — Photo + Stats + Contact ─── */}
          <div className="flex flex-col items-center gap-8">
            {/* Photo */}
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-br from-primary via-purple-500 to-blue-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-700" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-background ring-1 ring-white/10">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src={manish}
                    alt="Manish Keer"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Status badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-2 bg-card border border-white/10 px-4 py-2 rounded-full shadow-xl backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-semibold text-foreground">
                  Open to Opportunities
                </span>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center p-4 rounded-2xl bg-card/50 border border-white/8 backdrop-blur-sm hover:border-primary/20 hover:bg-card/80 transition-all duration-300 text-center"
                >
                  <span className="text-2xl mb-1">{stat.icon}</span>
                  <span className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="w-full max-w-sm space-y-2.5">
              {[
                {
                  icon: <MapPin className="w-3.5 h-3.5" />,
                  text: "Indore, Madhya Pradesh, India",
                  color: "text-primary",
                },
                {
                  icon: <Mail className="w-3.5 h-3.5" />,
                  text: "manishkeer530@gmail.com",
                  color: "text-blue-400",
                },
                {
                  icon: <Phone className="w-3.5 h-3.5" />,
                  text: "+91 9691636336",
                  color: "text-green-400",
                },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-card/40 border border-white/6"
                >
                  <span className={item.color}>{item.icon}</span>
                  <span className="text-sm text-muted-foreground">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ─── RIGHT COLUMN — Bio + Education + Experience + Skills ─── */}
          <div className="space-y-8">
            {/* Professional Summary */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Professional Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm an entry-level Software Engineer with hands-on experience
                building{" "}
                <span className="text-foreground font-semibold">
                  scalable, real-time web applications
                </span>
                . My foundation is strong in backend development — REST APIs,
                WebSockets, authentication systems, and cloud deployments using{" "}
                <span className="text-primary font-semibold">Node.js</span>,{" "}
                <span className="text-purple-400 font-semibold">NestJS</span>,
                and{" "}
                <span className="text-green-400 font-semibold">
                  Spring Boot
                </span>
                .
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I've shipped production-ready systems — from a full LMS deployed
                on <span className="text-orange-400 font-semibold">AWS</span>{" "}
                and containerised with{" "}
                <span className="text-blue-400 font-semibold">Docker</span>, to
                a real-time communication platform with{" "}
                <span className="text-cyan-400 font-semibold">WebRTC</span>{" "}
                audio/video calling and a live betting platform with
                WebSocket-based concurrency. I also build native{" "}
                <span className="text-green-400 font-semibold">
                  Android apps
                </span>{" "}
                with React Native.
              </p>
            </div>

            {/* What I Do */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                What I Bring to the Table
              </h3>
              <div className="space-y-2.5">
                {highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 px-4 py-3 rounded-xl bg-card/40 border border-white/6 hover:border-primary/15 hover:bg-card/60 transition-all duration-200"
                  >
                    <span className="mt-0.5 shrink-0">{h.icon}</span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {h.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education
              </h3>
              <div className="relative pl-5 border-l-2 border-primary/20">
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary" />
                <div className="p-4 rounded-xl bg-card/40 border border-white/6 hover:border-primary/20 transition-all duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <h4 className="font-bold text-foreground">
                      Bachelor of Computer Applications (BCA)
                    </h4>
                    <span className="text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full whitespace-nowrap self-start">
                      CGPA: 7.7 / 10
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-muted-foreground">
                    Medi-Caps University — Indore, India
                  </p>
                  <div className="flex items-center gap-1.5 mt-1.5 text-xs text-muted-foreground/70">
                    <CalendarDays className="w-3.5 h-3.5" />
                    Aug 2022 – May 2025
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blue-400" />
                Experience
              </h3>

              {/* Timeline */}
              <div className="relative pl-5 border-l-2 border-blue-500/25 space-y-5">
                {/* ── Current: Inspire Transoft Pvt Ltd ── */}
                <div className="relative">
                  <div className="absolute -left-[22px] top-1.5 w-3 h-3 rounded-full bg-green-400 ring-4 ring-green-400/20" />
                  <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/15 hover:border-green-500/30 transition-all duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <h4 className="font-bold text-foreground">
                        Full-Stack Developer
                      </h4>
                      <div className="flex items-center gap-2 self-start shrink-0">
                        <span className="flex items-center gap-1 text-xs font-bold text-green-400 bg-green-500/10 border border-green-500/20 px-2.5 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                          Current
                        </span>
                        <span className="text-xs font-semibold text-muted-foreground bg-muted/60 border border-white/8 px-2.5 py-0.5 rounded-full">
                          Oct 2025 – Present
                        </span>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-muted-foreground mb-3">
                      Inspire Transoft Pvt Ltd — India
                    </p>
                    <ul className="space-y-1.5">
                      {[
                        "Building and maintaining full-stack web applications with modern JavaScript/TypeScript stacks.",
                        "Designed and implemented CI/CD pipelines for automated testing and zero-downtime deployments.",
                        "Containerised services with Docker and orchestrated automated deployments across environments.",
                        "Collaborated with cross-functional teams to ship production-ready features end-to-end.",
                        "Handled DevOps responsibilities — server configuration, Nginx reverse proxy, and cloud infrastructure.",
                      ].map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    {/* DevOps tech pills */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {[
                        "Docker",
                        "CI/CD",
                        "Nginx",
                        "Git",
                        "Full-Stack",
                        "DevOps",
                      ].map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[10px] font-semibold bg-green-500/10 text-green-400 border border-green-500/15"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── Previous: Singaji Software Solutions ── */}
                <div className="relative">
                  <div className="absolute -left-[22px] top-1.5 w-3 h-3 rounded-full bg-blue-400 ring-4 ring-blue-400/20" />
                  <div className="p-4 rounded-xl bg-card/40 border border-white/6 hover:border-blue-400/20 transition-all duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                      <h4 className="font-bold text-foreground">
                        Full-Stack Developer Trainee
                      </h4>
                      <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-full whitespace-nowrap self-start">
                        Aug – Oct 2025
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">
                      Singaji Software Solutions — Bengaluru, India
                    </p>
                    <ul className="space-y-1">
                      {[
                        "Developed backend APIs and collaborated with frontend teams to deliver production-ready features.",
                        "Worked with authentication systems, database integration, and API performance optimisation.",
                      ].map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Traits */}
            <div className="flex flex-wrap gap-2.5">
              {[
                {
                  label: "Problem Solver",
                  color: "text-primary border-primary/20 bg-primary/5",
                },
                {
                  label: "Backend-First",
                  color: "text-purple-400 border-purple-500/20 bg-purple-500/5",
                },
                {
                  label: "Continuous Learner",
                  color: "text-blue-400 border-blue-500/20 bg-blue-500/5",
                },
                {
                  label: "Open to Remote",
                  color: "text-green-400 border-green-500/20 bg-green-500/5",
                },
                {
                  label: "Team Collaborator",
                  color: "text-orange-400 border-orange-500/20 bg-orange-500/5",
                },
              ].map((trait) => (
                <span
                  key={trait.label}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold border ${trait.color}`}
                >
                  {trait.label}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                className="rounded-full px-6 group"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Let's Work Together
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <a
                href="/manishresume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="rounded-full px-6 border-primary/20 hover:border-primary hover:bg-primary/5 group"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
