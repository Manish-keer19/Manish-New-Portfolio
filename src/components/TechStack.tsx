import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiGit,
  SiDocker,
  SiPostgresql,
  SiNextdotjs,
  SiSpring,
  SiReact as SiReactNative,
  SiSocketdotio,
  SiElectron,
  SiGithub,
  SiMysql,
  SiAndroid,
  SiNginx,
  SiAmazon,
  SiGithubactions
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const technologies = [
    { name: 'HTML 5', icon: <SiHtml5 className="text-orange-500" />, category: 'Frontend' },
    { name: 'CSS 3', icon: <SiCss3 className="text-blue-500" />, category: 'Frontend' },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, category: 'Language' },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" />, category: 'Language' },
    { name: 'React JS', icon: <SiReact className="text-cyan-500" />, category: 'Frontend' },
    { name: 'Redux Toolkit', icon: <SiRedux className="text-purple-500" />, category: 'State' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" />, category: 'Styling' },
    { name: 'Node JS', icon: <SiNodedotjs className="text-green-500" />, category: 'Backend' },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" />, category: 'Database' },
    { name: 'Python', icon: <SiPython className="text-blue-400" />, category: 'Language' },
    { name: 'Git', icon: <SiGit className="text-orange-600" />, category: 'DevOps' },
    { name: 'Docker', icon: <SiDocker className="text-blue-400" />, category: 'DevOps' },
    { name: 'Nginx', icon: <SiNginx className="text-green-500" />, category: 'DevOps' },
    { name: 'AWS EC2', icon: <SiAmazon className="text-orange-500" />, category: 'DevOps' },
    { name: 'GitHub Actions', icon: <SiGithubactions className="text-blue-500" />, category: 'DevOps' },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700" />, category: 'Database' },
    { name: 'SQL', icon: <SiMysql className="text-blue-600" />, category: 'Database' },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" />, category: 'Fullstack' },
    { name: 'Java', icon: <FaJava className="text-orange-500 text-3xl" />, category: 'Language' },
    { name: 'Spring Boot', icon: <SiSpring className="text-green-600" />, category: 'Backend' },
    { name: 'JWT', icon: <span className="text-pink-500 text-3xl">🔐</span>, category: 'Security' },
    { name: 'React Native', icon: <SiReactNative className="text-cyan-500" />, category: 'Mobile' },
    { name: 'Electron.js', icon: <SiElectron className="text-blue-400" />, category: 'Desktop' },
    { name: 'GitHub', icon: <SiGithub className="text-black dark:text-white" />, category: 'DevOps' },
    { name: 'Android', icon: <SiAndroid className="text-green-600" />, category: 'Mobile' }
  ];

  // Get unique categories
  const categories = [...new Set(technologies.map(tech => tech.category))];

  // Filter technologies based on active category
  const filteredTechs = activeCategory
    ? technologies.filter(tech => tech.category === activeCategory)
    : technologies;

  // Core Skills Data
  const coreSkills = [
    {
      name: 'MERN Stack',
      icon: <SiReact className="text-cyan-500 text-4xl" />,
      description: 'MongoDB, Express.js, React, Node.js - Full-stack JavaScript development for scalable web apps.',
      category: 'Fullstack'
    },
    {
      name: 'Spring Boot Java Full Stack',
      icon: <SiSpring className="text-green-600 text-4xl" />,
      description: 'Spring Boot, Java, REST APIs, integrated with frontend frameworks for enterprise-grade applications.',
      category: 'Fullstack'
    },
    {
      name: 'React Native Android Developer',
      icon: <SiReactNative className="text-cyan-500 text-4xl" />,
      description: 'Cross-platform mobile development with React Native, focusing on Android for native-like performance.',
      category: 'Mobile'
    }
  ];

  return (
    <section id="tech" className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Core Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center text-foreground">
            Core Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-primary/5 transition-all duration-300 text-center group"
              >
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  {skill.icon}
                </div>
                <h4 className="font-bold text-xl mb-4 text-foreground">
                  {skill.name}
                </h4>
                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  {skill.description}
                </p>
                <Badge variant="secondary" className="px-4 py-1.5 text-sm">
                  {skill.category}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${!activeCategory ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105' : 'bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground'}`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === category ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105' : 'bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground'}`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Tech Grid */}
        <div className="min-h-[400px]">
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
            layout
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            {filteredTechs.map((tech, index) => (
              <motion.div
                layout
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-white/5 hover:border-primary/30 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
              >
                <div className="w-14 h-14 mb-4 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="font-medium text-sm sm:text-base text-center text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Empty State */}
        {filteredTechs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground text-lg">No technologies found in this category</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TechStack;