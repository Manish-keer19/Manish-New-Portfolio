import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  GitBranch,
  Star,
  BookOpen,
  Users,
  Rocket,
  Building2,
  Layers,
  CalendarDays,
} from "lucide-react";

type Stat = {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
  bg: string;
};

const BraggingRights = () => {
  const [github, setGithub] = useState({
    repos: 0,
    followers: 0,
    stars: 0,
    loading: true,
  });

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch("https://api.github.com/users/Manish-keer19"),
          fetch(
            "https://api.github.com/users/Manish-keer19/repos?per_page=100",
          ),
        ]);
        const userData = await userRes.json();
        const reposData = await reposRes.json();
        const totalStars = Array.isArray(reposData)
          ? reposData.reduce(
              (acc: number, repo: { stargazers_count: number }) =>
                acc + repo.stargazers_count,
              0,
            )
          : 0;
        setGithub({
          repos: userData.public_repos || 0,
          followers: userData.followers || 0,
          stars: totalStars,
          loading: false,
        });
      } catch {
        setGithub((prev) => ({ ...prev, loading: false }));
      }
    };
    fetchGitHubData();
  }, []);

  const achievements: Stat[] = [
    {
      icon: <Rocket className="w-5 h-5" />,
      value: "7+",
      label: "Projects Shipped",
      color: "text-primary",
      bg: "bg-primary/10 border-primary/20",
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      value: "2",
      label: "Companies Worked",
      color: "text-blue-400",
      bg: "bg-blue-500/10 border-blue-500/20",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      value: "3",
      label: "Tech Ecosystems",
      color: "text-purple-400",
      bg: "bg-purple-500/10 border-purple-500/20",
    },
    {
      icon: <CalendarDays className="w-5 h-5" />,
      value: "3+",
      label: "Years Building",
      color: "text-orange-400",
      bg: "bg-orange-500/10 border-orange-500/20",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/10 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[35%] h-[70%] bg-primary/4 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[35%] h-[70%] bg-blue-500/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            By the Numbers
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Coding{" "}
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Activity
            </span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Real numbers from my GitHub and development journey — no fluff.
          </p>
        </div>

        {/* Achievement cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {achievements.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className={`flex flex-col items-center text-center p-5 rounded-2xl border ${stat.bg} backdrop-blur-sm hover:scale-[1.03] transition-transform duration-300`}
            >
              <span className={`${stat.color} mb-2`}>{stat.icon}</span>
              <span className={`text-3xl font-bold ${stat.color}`}>
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground font-medium mt-1">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* GitHub section */}
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Contribution graph */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-5 rounded-2xl bg-card/50 border border-white/8 backdrop-blur-sm hover:border-primary/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-primary/10">
                <GitBranch className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">
                  GitHub Contributions
                </h3>
                <p className="text-xs text-muted-foreground">@Manish-keer19</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden bg-muted/10">
              <img
                src="https://ghchart.rshah.org/Manish-keer19"
                alt="GitHub Contributions Graph"
                loading="lazy"
                className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </motion.div>

          {/* Live GitHub stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {/* README-style stat image */}
            <div className="p-5 rounded-2xl bg-card/50 border border-white/8 backdrop-blur-sm hover:border-primary/20 transition-all duration-300">
              <img
                src="https://github-readme-stats.vercel.app/api?username=Manish-keer19&show_icons=true&theme=transparent&hide_border=true&title_color=6366f1&icon_color=6366f1&text_color=94a3b8&bg_color=00000000"
                alt="Manish Keer GitHub Stats"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>

            {/* Live stat pills */}
            <div className="grid grid-cols-3 gap-3">
              {[
                {
                  icon: <BookOpen className="w-4 h-4" />,
                  value: github.repos,
                  label: "Repos",
                  color: "text-primary",
                  bg: "bg-primary/10 border-primary/15",
                },
                {
                  icon: <Star className="w-4 h-4" />,
                  value: github.stars,
                  label: "Stars",
                  color: "text-yellow-400",
                  bg: "bg-yellow-500/10 border-yellow-500/15",
                },
                {
                  icon: <Users className="w-4 h-4" />,
                  value: github.followers,
                  label: "Followers",
                  color: "text-green-400",
                  bg: "bg-green-500/10 border-green-500/15",
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className={`flex flex-col items-center p-3 rounded-xl border ${s.bg} text-center`}
                >
                  <span className={`${s.color} mb-1`}>{s.icon}</span>
                  <span className={`text-xl font-bold ${s.color}`}>
                    {github.loading ? "…" : s.value}
                  </span>
                  <span className="text-[10px] text-muted-foreground font-medium">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BraggingRights;
