
// // // import { Badge } from "@/components/ui/badge";

// // // const TechStack = () => {
// // //   const technologies = [
// // //     { name: 'React', icon: '⚛️', category: 'Frontend' },
// // //     { name: 'Node.js', icon: '🟢', category: 'Backend' },
// // //     { name: 'MongoDB', icon: '🍃', category: 'Database' },
// // //     { name: 'Spring Boot', icon: '🌱', category: 'Backend' },
// // //     { name: 'JWT', icon: '🔐', category: 'Security' },
// // //     { name: 'Tailwind CSS', icon: '🎨', category: 'Styling' },
// // //     { name: 'React Native', icon: '📱', category: 'Mobile' },
// // //     { name: 'WebSocket', icon: '🔌', category: 'Real-time' },
// // //     { name: 'Electron.js', icon: '⚡', category: 'Desktop' },
// // //     { name: 'GitHub', icon: '🐙', category: 'DevOps' }
// // //   ];

// // //   return (
// // //     <section id="tech" className="py-20 px-4">
// // //       <div className="max-w-6xl mx-auto">
// // //         <div className="text-center mb-16">
// // //           <h2 className="text-4xl md:text-5xl font-bold mb-6">
// // //             Tech <span className="text-gradient">Stack</span>
// // //           </h2>
// // //           <p className="text-xl text-muted-foreground">
// // //             Technologies I use to build amazing applications
// // //           </p>
// // //         </div>

// // //         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
// // //           {technologies.map((tech, index) => (
// // //             <div
// // //               key={tech.name}
// // //               className="glass rounded-xl p-6 text-center hover:glow-green transition-all duration-300 hover:scale-105 group cursor-pointer"
// // //               style={{ animationDelay: `${index * 0.1}s` }}
// // //             >
// // //               <div className="text-4xl mb-3 group-hover:animate-bounce">
// // //                 {tech.icon}
// // //               </div>
// // //               <h3 className="font-semibold text-foreground mb-2">{tech.name}</h3>
// // //               <Badge variant="secondary" className="text-xs">
// // //                 {tech.category}
// // //               </Badge>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default TechStack;




// // import { Badge } from "@/components/ui/badge";
// // // Replace icon imports with emoji strings or valid image paths as needed
// // const html = "🌐";
// // const css = "🎨";
// // const javascript = "🟨";
// // const typescript = "🔷";
// // const reactjs = "⚛️";
// // const redux = "🛠️";
// // const tailwind = "💨";
// // const nodejs = "🟢";
// // const mongodb = "🍃";
// // const python = "🐍";
// // const git = "🔧";
// // const docker = "🐳";
// // const postgres = "🐘";
// // const sql = "💾";
// // const next = "⏭️";
// // const java = "☕";
// // const spring = "🌱";

// // const TechStack = () => {
// //   const technologies = [
// //     { name: 'HTML 5', icon: html, category: 'Frontend' },
// //     { name: 'CSS 3', icon: css, category: 'Frontend' },
// //     { name: 'JavaScript', icon: javascript, category: 'Language' },
// //     { name: 'TypeScript', icon: typescript, category: 'Language' },
// //     { name: 'React JS', icon: reactjs, category: 'Frontend' },
// //     { name: 'Redux Toolkit', icon: redux, category: 'State' },
// //     { name: 'Tailwind CSS', icon: tailwind, category: 'Styling' },
// //     { name: 'Node JS', icon: nodejs, category: 'Backend' },
// //     { name: 'MongoDB', icon: mongodb, category: 'Database' },
// //     { name: 'Python', icon: python, category: 'Language' },
// //     { name: 'Git', icon: git, category: 'DevOps' },
// //     { name: 'Docker', icon: docker, category: 'DevOps' },
// //     { name: 'PostgreSQL', icon: postgres, category: 'Database' },
// //     { name: 'SQL', icon: sql, category: 'Database' },
// //     { name: 'Next.js', icon: next, category: 'Fullstack' },
// //     { name: 'Java', icon: java, category: 'Language' },
// //     { name: 'Spring Boot', icon: spring, category: 'Backend' },
// //     { name: 'React', icon: '⚛️', category: 'Frontend' },
// //     { name: 'JWT', icon: '🔐', category: 'Security' },
// //     { name: 'React Native', icon: '📱', category: 'Mobile' },
// //     { name: 'WebSocket', icon: '🔌', category: 'Real-time' },
// //     { name: 'Electron.js', icon: '⚡', category: 'Desktop' },
// //     { name: 'GitHub', icon: '🐙', category: 'DevOps' }
// //   ];

// //   // Group technologies by category for a more organized display
// //   type Technology = {
// //     name: string;
// //     icon: string;
// //     category: string;
// //   };

// //   const techByCategory = technologies.reduce((acc: Record<string, Technology[]>, tech) => {
// //     if (!acc[tech.category]) {
// //       acc[tech.category] = [];
// //     }
// //     acc[tech.category].push(tech);
// //     return acc;
// //   }, {} as Record<string, Technology[]>);

// //   const categories = Object.keys(techByCategory);

// //   return (
// //     <section id="tech" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
// //       <div className="max-w-7xl mx-auto">
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl md:text-5xl font-bold mb-6">
// //             My <span className="text-gradient">Technology</span> Stack
// //           </h2>
// //           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
// //             Tools and technologies I use to build robust, scalable, and modern applications
// //           </p>
// //         </div>

// //         {categories.map((category) => (
// //           <div key={category} className="mb-12">
// //             <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
// //               <span className="w-4 h-4 rounded-full bg-primary animate-pulse" />
// //               {category}
// //               <span className="flex-1 border-t border-muted ml-3" />
// //             </h3>
// //             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
// //               {techByCategory[category].map((tech, index) => (
// //                 <div
// //                   key={`${category}-${tech.name}`}
// //                   className="relative group overflow-hidden rounded-xl p-6 text-center bg-background border border-muted hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
// //                   style={{ animationDelay: `${index * 0.05}s` }}
// //                 >
// //                   <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// //                   <div className="relative z-10">
// //                     <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
// //                       <span>{tech.icon}</span>
// //                     </div>
// //                     <h3 className="font-medium text-foreground mb-2">{tech.name}</h3>
// //                     <Badge 
// //                       variant="outline" 
// //                       className="text-xs bg-background/80 backdrop-blur-sm"
// //                     >
// //                       {tech.category}
// //                     </Badge>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default TechStack;





// import { Badge } from "@/components/ui/badge";
// import { motion } from "framer-motion";
// import { useState } from "react";

// // Emoji icons
// const html = "🌐";
// const css = "🎨";
// const javascript = "🟨";
// const typescript = "🔷";
// const reactjs = "⚛️";
// const redux = "🛠️";
// const tailwind = "💨";
// const nodejs = "🟢";
// const mongodb = "🍃";
// const python = "🐍";
// const git = "🔧";
// const docker = "🐳";
// const postgres = "🐘";
// const sql = "💾";
// const next = "⏭️";
// const java = "☕";
// const spring = "🌱";

// const TechStack = () => {
//   const [activeCategory, setActiveCategory] = useState<string | null>(null);

//   const technologies = [
//     { name: 'HTML 5', icon: html, category: 'Frontend' },
//     { name: 'CSS 3', icon: css, category: 'Frontend' },
//     { name: 'JavaScript', icon: javascript, category: 'Language' },
//     { name: 'TypeScript', icon: typescript, category: 'Language' },
//     { name: 'React JS', icon: reactjs, category: 'Frontend' },
//     { name: 'Redux Toolkit', icon: redux, category: 'State' },
//     { name: 'Tailwind CSS', icon: tailwind, category: 'Styling' },
//     { name: 'Node JS', icon: nodejs, category: 'Backend' },
//     { name: 'MongoDB', icon: mongodb, category: 'Database' },
//     { name: 'Python', icon: python, category: 'Language' },
//     { name: 'Git', icon: git, category: 'DevOps' },
//     { name: 'Docker', icon: docker, category: 'DevOps' },
//     { name: 'PostgreSQL', icon: postgres, category: 'Database' },
//     { name: 'SQL', icon: sql, category: 'Database' },
//     { name: 'Next.js', icon: next, category: 'Fullstack' },
//     { name: 'Java', icon: java, category: 'Language' },
//     { name: 'Spring Boot', icon: spring, category: 'Backend' },
//     { name: 'JWT', icon: '🔐', category: 'Security' },
//     { name: 'React Native', icon: '📱', category: 'Mobile' },
//     { name: 'WebSocket', icon: '🔌', category: 'Real-time' },
//     { name: 'Electron.js', icon: '⚡', category: 'Desktop' },
//     { name: 'GitHub', icon: '🐙', category: 'DevOps' }
//   ];

//   // Get unique categories
//   const categories = [...new Set(technologies.map(tech => tech.category))];

//   // Filter technologies based on active category
//   const filteredTechs = activeCategory 
//     ? technologies.filter(tech => tech.category === activeCategory)
//     : technologies;

//   return (
//     <section id="tech" className="py-20 px-4 bg-gradient-to-b from-background to-muted/10">
//       <div className="max-w-7xl mx-auto">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Tech Stack</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Tools and technologies I use to build exceptional digital experiences
//           </p>
//         </motion.div>

//         {/* Category Filter */}
//         <motion.div 
//           className="flex flex-wrap justify-center gap-3 mb-12"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <button
//             onClick={() => setActiveCategory(null)}
//             className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!activeCategory ? 'bg-primary text-primary-foreground shadow-md' : 'bg-muted/50 hover:bg-muted'}`}
//           >
//             All
//           </button>
//           {categories.map(category => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category ? 'bg-primary text-primary-foreground shadow-md' : 'bg-muted/50 hover:bg-muted'}`}
//             >
//               {category}
//             </button>
//           ))}
//         </motion.div>

//         {/* Tech Grid */}
//         <motion.div 
//           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           viewport={{ once: true }}
//         >
//           {filteredTechs.map((tech, index) => (
//             <motion.div
//               key={tech.name}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               whileHover={{ y: -5, scale: 1.05 }}
//               transition={{ 
//                 type: "spring",
//                 stiffness: 300,
//                 damping: 20,
//                 delay: index * 0.03
//               }}
//               viewport={{ once: true, margin: "0px 0px -50px 0px" }}
//               className="flex flex-col items-center p-6 rounded-xl bg-background border border-muted/50 hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
//             >
//               <div className="w-16 h-16 mb-4 flex items-center justify-center text-4xl">
//                 {tech.icon}
//               </div>
//               <h3 className="font-semibold text-lg mb-2 text-center">{tech.name}</h3>
//               <Badge variant="secondary" className="text-xs">
//                 {tech.category}
//               </Badge>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Empty State */}
//         {filteredTechs.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center py-12"
//           >
//             <p className="text-muted-foreground">No technologies found in this category</p>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default TechStack;






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
  SiMysql
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
    { name: 'GitHub', icon: <SiGithub className="text-black dark:text-white" />, category: 'DevOps' }
  ];

  // Get unique categories
  const categories = [...new Set(technologies.map(tech => tech.category))];

  // Filter technologies based on active category
  const filteredTechs = activeCategory
    ? technologies.filter(tech => tech.category === activeCategory)
    : technologies;

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to build exceptional digital experiences
          </p>
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

        {/* Tech Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
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
              className="flex flex-col items-center p-6 rounded-xl bg-background border border-muted/50 hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center text-4xl">
                {tech.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2 text-center">{tech.name}</h3>
              <Badge variant="secondary" className="text-xs">
                {tech.category}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

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