import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Instagram,
  ArrowUpRight,
  MapPin,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";

type Social = {
  name: string;
  username: string;
  tagline: string;
  url: string;
  icon: React.ReactNode;
  gradient: string;
  glow: string;
  border: string;
};

const SocialSection = () => {
  const socials: Social[] = [
    {
      name: "GitHub",
      username: "@Manish-keer19",
      tagline: "30+ repos · source code & projects",
      url: "https://github.com/Manish-keer19",
      icon: <Github className="w-6 h-6" />,
      gradient: "from-slate-700 to-slate-900",
      glow: "hover:shadow-white/10",
      border: "hover:border-white/25",
    },
    {
      name: "LinkedIn",
      username: "Manish Keer",
      tagline: "Professional network & career updates",
      url: "https://www.linkedin.com/in/manish-keer-4bb897293",
      icon: <Linkedin className="w-6 h-6" />,
      gradient: "from-blue-600 to-blue-800",
      glow: "hover:shadow-blue-500/20",
      border: "hover:border-blue-500/40",
    },
    {
      name: "Twitter / X",
      username: "@manishkeer_19",
      tagline: "Dev thoughts, tech & random takes",
      url: "https://x.com/manishkeer_19",
      icon: <Twitter className="w-6 h-6" />,
      gradient: "from-sky-500 to-sky-700",
      glow: "hover:shadow-sky-500/20",
      border: "hover:border-sky-500/40",
    },
    {
      name: "Instagram",
      username: "@manish.tsx",
      tagline: "Behind the scenes & life updates",
      url: "https://www.instagram.com/manish.tsx",
      icon: <Instagram className="w-6 h-6" />,
      gradient: "from-pink-500 via-rose-500 to-purple-600",
      glow: "hover:shadow-pink-500/20",
      border: "hover:border-pink-500/40",
    },
    {
      name: "Email",
      username: "manishkeer530@gmail.com",
      tagline: "Best way to reach me — I reply fast",
      url: "mailto:manishkeer530@gmail.com",
      icon: <Mail className="w-6 h-6" />,
      gradient: "from-primary to-purple-600",
      glow: "hover:shadow-primary/20",
      border: "hover:border-primary/40",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <section
      id="connect"
      className="py-20 px-4 bg-muted/10 relative overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-[-10%] w-[40%] h-[60%] bg-primary/4 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-[-10%] w-[40%] h-[60%] bg-purple-500/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Social
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-foreground"
          >
            Find Me{" "}
            <span className="bg-gradient-to-r from-primary via-purple-400 to-blue-500 bg-clip-text text-transparent">
              Online
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-muted-foreground mt-4 max-w-xl mx-auto"
          >
            Follow my journey, check out my code, or just say hello — I'm active
            on all of these.
          </motion.p>
        </div>

        {/* Social cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10"
        >
          {socials.map((social) => (
            <motion.a
              key={social.name}
              variants={cardVariant}
              href={social.url}
              target={social.url.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className={`group relative flex items-center gap-4 p-5 rounded-2xl bg-card/40 border border-white/8 backdrop-blur-sm transition-all duration-300 hover:bg-card/70 hover:-translate-y-0.5 hover:shadow-xl ${social.glow} ${social.border}`}
            >
              {/* Icon with gradient bg */}
              <div
                className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${social.gradient} flex items-center justify-center text-white shadow-lg`}
              >
                {social.icon}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-foreground text-base leading-tight">
                  {social.name}
                </h3>
                <p className="text-xs text-primary/80 font-semibold truncate mt-0.5">
                  {social.username}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                  {social.tagline}
                </p>
              </div>

              {/* Arrow */}
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative flex flex-col sm:flex-row items-center justify-between gap-6 p-7 rounded-2xl bg-gradient-to-r from-primary/10 via-purple-500/8 to-blue-500/10 border border-primary/15 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-500/5 pointer-events-none" />
          <div className="relative text-center sm:text-left">
            <h3 className="text-xl font-bold text-foreground mb-1">
              Open to Opportunities 🚀
            </h3>
            <p className="text-muted-foreground text-sm">
              Full-time roles, freelance projects, and collaborations in{" "}
              <span className="text-primary font-semibold">Web</span>,{" "}
              <span className="text-purple-400 font-semibold">Backend</span>, or{" "}
              <span className="text-green-400 font-semibold">Android</span>{" "}
              development.
            </p>
          </div>
          <a
            href="mailto:manishkeer530@gmail.com"
            className="relative shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-primary/25"
          >
            <Mail className="w-4 h-4" />
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialSection;
