import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Instagram,
  MapPin,
  Heart,
  Code2,
  ArrowRight,
  Briefcase,
} from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  const navLinks = [
    { label: "Hero", href: "#hero" },
    { label: "Projects", href: "#projects" },
    { label: "Tech Stack", href: "#tech" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/Manish-keer19",
      label: "GitHub",
      hoverBg: "hover:bg-slate-700",
      hoverText: "hover:text-white",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/manish-keer-4bb897293",
      label: "LinkedIn",
      hoverBg: "hover:bg-blue-600",
      hoverText: "hover:text-white",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://x.com/manishkeer_19",
      label: "Twitter / X",
      hoverBg: "hover:bg-sky-500",
      hoverText: "hover:text-white",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/manish.tsx",
      label: "Instagram",
      hoverBg:
        "hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600",
      hoverText: "hover:text-white",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:manishkeer530@gmail.com",
      label: "Email",
      hoverBg: "hover:bg-primary",
      hoverText: "hover:text-primary-foreground",
    },
  ];

  const scroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-card/20 border-t border-white/8 overflow-hidden">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-[10%] top-[20%] w-[35%] h-[60%] bg-primary/4 rounded-full blur-3xl" />
        <div className="absolute -right-[10%] bottom-[10%] w-[35%] h-[60%] bg-blue-500/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* ── Top CTA banner ── */}
        <div className="py-12 border-b border-white/6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                Let's build something{" "}
                <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  great together
                </span>
              </h3>
              <p className="text-muted-foreground text-sm">
                Open for full-time roles, freelance projects & interesting
                collaborations.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available Now
              </span>
              <a
                href="mailto:manishkeer530@gmail.com"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-primary/20 group"
              >
                <Mail className="w-4 h-4" />
                Hire Me
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </div>

        {/* ── Main body: 2 columns ── */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-white/6">
          {/* LEFT — Brand */}
          <div className="space-y-5 max-w-sm">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center shadow-xl shadow-primary/30">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-extrabold text-foreground text-xl leading-tight">
                  Manish Keer
                </p>
                <p className="text-xs text-muted-foreground">
                  Full-Stack · Android · DevOps
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              I build scalable web applications, real-time systems, and native
              Android apps. Currently a Full-Stack Developer at{" "}
              <span className="text-foreground font-semibold">
                Inspire Transoft Pvt Ltd
              </span>
              , handling CI/CD and Docker deployments.
            </p>

            {/* Mini info cards */}
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                Indore, Madhya Pradesh, India
              </div>
              <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                <Briefcase className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                Full-Stack Developer @ Inspire Transoft · Oct 2025 – Present
              </div>
              <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                <Mail className="w-3.5 h-3.5 text-green-400 shrink-0" />
                manishkeer530@gmail.com
              </div>
            </div>
          </div>

          {/* RIGHT — Nav + Quick Contact */}
          <div className="grid grid-cols-2 gap-8">
            {/* Navigation */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5">
                Navigation
              </p>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scroll(link.href)}
                      className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-300 ease-out" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Contact */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5">
                Quick Links
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:manishkeer530@gmail.com"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  📧 Email Me
                </a>
                <a
                  href="https://github.com/Manish-keer19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  💻 GitHub Profile
                </a>
                <a
                  href="https://www.linkedin.com/in/manish-keer-4bb897293"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-muted-foreground hover:text-blue-400 transition-colors duration-200"
                >
                  🔗 LinkedIn
                </a>
                <a
                  href="/manishresume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  📄 Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Social icons row ── */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-white/6">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Follow Along
          </p>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                title={s.label}
                className={`group w-10 h-10 rounded-xl flex items-center justify-center border border-white/8 text-muted-foreground transition-all duration-200 ${s.hoverBg} ${s.hoverText} hover:border-transparent hover:scale-110 hover:shadow-lg`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground/50 flex items-center gap-1.5">
            Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> by{" "}
            <span className="text-foreground/60 font-semibold">
              Manish Keer
            </span>
          </p>
          <p className="text-xs text-muted-foreground/40">
            © {year} Manish Keer · All rights reserved
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs text-muted-foreground/50 hover:text-primary transition-colors duration-200"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
