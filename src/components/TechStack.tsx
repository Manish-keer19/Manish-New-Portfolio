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
  SiAndroid
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
    <section id="tech" className="py-20 px-4 bg-gradient-to-b from-background to-muted/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Core Skills Section - Responsive: Single column on mobile, grid on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">
            Core Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-6 rounded-xl bg-background border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                  {skill.icon}
                </div>
                <h4 className="font-semibold text-lg md:text-xl mb-3 text-foreground">
                  {skill.name}
                </h4>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  {skill.description}
                </p>
                <Badge variant="outline" className="px-3 py-1">
                  {skill.category}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!activeCategory ? 'bg-primary text-primary-foreground shadow-md' : 'bg-muted/50 hover:bg-muted'}`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category ? 'bg-primary text-primary-foreground shadow-md' : 'bg-muted/50 hover:bg-muted'}`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Tech Grid - Optimized for Mobile: Horizontal scrollable list on small screens */}
        <div className="overflow-hidden">
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            {filteredTechs.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: index * 0.03
                }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                className="flex flex-col items-center p-4 rounded-xl bg-background border border-muted/50 hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-300 cursor-default min-w-[140px] sm:min-w-0"
              >
                <div className="w-12 h-12 mb-3 flex items-center justify-center text-3xl sm:text-4xl">
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-1 text-center text-foreground  line-clamp-2">
                  {tech.name}
                </h3>
                <Badge variant="secondary" className="text-xs hidden sm:block">
                  {tech.category}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Horizontal Scroll Indicator (Optional subtle hint) */}
          <div className="sm:hidden flex justify-center mt-4">
            <motion.div
              className="flex space-x-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              
            </motion.div>
          </div>
        </div>

        {/* Empty State */}
        {filteredTechs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">No technologies found in this category</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TechStack;