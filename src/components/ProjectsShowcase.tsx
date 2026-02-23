import {
  ExternalLink,
  Github,
  ArrowRight,
  Globe,
  Smartphone,
  Monitor,
  Code2,
  X,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import Bet_app from "../assets/bet_app.png";
import InstaClone from "../assets/instagram2.jpg";
import Android_Chat from "../assets/androidChat.png";
import chat_desktop from "../assets/chat_desktop.png";
import chat_web from "../assets/chat_web.png";
import studyNotion from "../assets/study.png";
import nestApp from "../assets/nest_app.png";

import shell from "../assets/Shell.png";
import { useState } from "react";

type ProjectTag = { name: string; color: string };

type Project = {
  name: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  tags: ProjectTag[];
  image: string;
  imageStyle?: "cover" | "phone" | "contain";
  source_code_link: string;
  liveUrl: string;
  category: "web" | "mobile" | "desktop" | "fullstack";
  featured: boolean;
  liveLabel?: string;
};

const categoryIcon = {
  web: <Globe className="w-3.5 h-3.5" />,
  mobile: <Smartphone className="w-3.5 h-3.5" />,
  desktop: <Monitor className="w-3.5 h-3.5" />,
  fullstack: <Code2 className="w-3.5 h-3.5" />,
};

const categoryColor = {
  web: "from-blue-500 to-cyan-500",
  mobile: "from-green-500 to-emerald-500",
  desktop: "from-purple-500 to-violet-500",
  fullstack: "from-orange-500 to-amber-500",
};

const ProjectsShowcase = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<
    "all" | "web" | "mobile" | "desktop"
  >("all");

  const projects: Project[] = [
    {
      name: "Shell E-Learning Academy",
      subtitle: "Full-Stack LMS Platform",
      description:
        "A production-ready Learning Management System with student, instructor, and admin dashboards — fully deployed on AWS with SSL, Docker, and Nginx.",
      problem:
        "Educational platforms often lack robust role-based systems and reliable infrastructure, causing poor user experience for students and instructors alike.",
      solution:
        "Built a complete LMS using the MERN stack with JWT authentication, role-based access control (student/instructor/admin), containerised backend via Docker, and deployed on AWS EC2 with Nginx as reverse proxy for SSL and load handling.",
      result:
        "Live production LMS at shellelearningacademy.com — secure, scalable, and fully containerised with Docker and AWS infrastructure.",
      tags: [
        { name: "MERN Stack", color: "blue" },
        { name: "AWS EC2", color: "orange" },
        { name: "Docker", color: "blue" },
        { name: "Nginx", color: "green" },
        { name: "JWT", color: "pink" },
      ],
      image: shell,
      source_code_link: "https://github.com/Manish-keer19",
      liveUrl: "https://shellelearningacademy.com",
      category: "fullstack",
      featured: true,
    },
    {
      name: "Real-Time Communication Platform",
      subtitle: "Chat & Video Calling System",
      description:
        "A low-latency real-time system featuring instant messaging, presence indicators, read receipts, and peer-to-peer audio/video calling via WebRTC.",
      problem:
        "Teams need a self-hosted, low-latency communication platform that handles high concurrency with WebSocket and P2P video/audio capabilities.",
      solution:
        "Built with NestJS for a robust TypeScript backend, custom WebSocket signaling for WebRTC P2P calls, PostgreSQL for data persistence, Docker for containerised deployment, and Nginx for WebSocket reverse proxying.",
      result:
        "Live at nest-chat-frontend.vercel.app with seamless real-time messaging, online presence, read receipts, and WebRTC-based audio/video calling.",
      tags: [
        { name: "NestJS", color: "pink" },
        { name: "WebRTC", color: "purple" },
        { name: "PostgreSQL", color: "blue" },
        { name: "Docker", color: "blue" },
        { name: "WebSocket", color: "green" },
      ],
      image: nestApp,
      source_code_link: "https://github.com/Manish-keer19",
      liveUrl: "https://nest-chat-frontend.vercel.app",
      category: "web",
      featured: true,
    },
    {
      name: "Betting Platform",
      subtitle: "Real-Time Gaming & Wallet System",
      description:
        "A real-time betting platform with live odds updates, wallet transactions, and multiple fast-paced games. Built for concurrency and sub-second responsiveness.",
      problem:
        "Users need a platform for quick, engaging betting games with instant feedback, secure wallet management, and live updates for concurrent users.",
      solution:
        "Built a high-performance React frontend with a Node.js/WebSocket backend for real-time game state synchronisation. Deployed frontend and backend on AWS with environment-based configuration.",
      result:
        "Achieved sub-second latency for live game updates with reliable wallet transactions across multiple concurrent users.",
      tags: [
        { name: "React", color: "blue" },
        { name: "Node.js", color: "green" },
        { name: "WebSocket", color: "yellow" },
        { name: "MongoDB", color: "green" },
        { name: "AWS", color: "orange" },
      ],
      image: Bet_app,
      source_code_link: "https://github.com/Manish-keer19/Betting_App_Frontend",
      liveUrl: "https://manish-bet-app.vercel.app/",
      category: "web",
      featured: true,
    },
    {
      name: "Social Media Application",
      subtitle: "Android Mobile App",
      description:
        "A full-featured Android social media app with posts, likes, comments, follow system, and Cloudinary-powered media storage — built with React Native CLI.",
      problem:
        "Mobile users need a native-performance social platform with complex data relationships, real-time interactions, and optimised media delivery.",
      solution:
        "Used React Native CLI for native Android performance. Built a robust REST API with Express.js and MongoDB for user relationships. Integrated Cloudinary for media storage and content delivery optimisation.",
      result:
        "Delivered a smooth, responsive Android APK with core social features — demonstrating proficiency in mobile-first full-stack development.",
      tags: [
        { name: "React Native", color: "blue" },
        { name: "Express.js", color: "orange" },
        { name: "MongoDB", color: "green" },
        { name: "Cloudinary", color: "pink" },
      ],
      image: InstaClone,
      imageStyle: "phone",
      source_code_link:
        "https://github.com/Manish-keer19/Full_Stack-InstaClone-apk",
      liveUrl:
        "https://www.mediafire.com/file/lxamuh01o5ju2ea/instaclone.apk/file",
      category: "mobile",
      featured: true,
      liveLabel: "Download APK",
    },
    {
      name: "Chat Application — Web",
      subtitle: "Spring Boot + React",
      description:
        "Secure real-time web messaging platform with OAuth2 authentication and media sharing, powered by a Spring Boot backend.",
      problem:
        "Need for a secure, browser-based real-time communication tool with robust auth and instant message delivery.",
      solution:
        "Spring Boot backend with WebSocket for real-time messaging. OAuth2 for seamless, secure user authentication. React frontend for a responsive, modern UI.",
      result:
        "A reliable messaging platform with instant delivery, OAuth2 login, and secure user management.",
      tags: [
        { name: "Spring Boot", color: "green" },
        { name: "React", color: "blue" },
        { name: "JWT", color: "pink" },
        { name: "OAuth2", color: "orange" },
      ],
      image: chat_web,
      source_code_link: "https://github.com/Manish-keer19/chat-web-app",
      liveUrl: "https://manishchatapp.vercel.app/",
      category: "web",
      featured: false,
    },
    {
      name: "Chat Application — Android",
      subtitle: "React Native Mobile",
      description:
        "Native Android messaging app extending the chat ecosystem to mobile, sharing the same Spring Boot backend for a unified cross-platform experience.",
      problem:
        "Mobile users need native-performance access to the same chat ecosystem used on the web platform.",
      solution:
        "React Native for native Android performance, reusing shared business logic. Seamlessly connects to the existing Spring Boot backend.",
      result:
        "Cross-platform messaging — users switch between web and mobile without losing context or history.",
      tags: [
        { name: "React Native", color: "blue" },
        { name: "Spring Boot", color: "green" },
        { name: "JWT", color: "pink" },
        { name: "Android", color: "orange" },
      ],
      image: Android_Chat,
      imageStyle: "phone",
      source_code_link: "https://github.com/Manish-keer19/chatAndroidApp",
      liveUrl:
        "https://www.mediafire.com/file/s0rjh7hbh82hsda/manishchatappnew.apk/file",
      category: "mobile",
      featured: false,
      liveLabel: "Download APK",
    },
    {
      name: "Chat Application — Desktop",
      subtitle: "Electron.js Cross-Platform",
      description:
        "Cross-platform desktop app for Windows, Linux, and Mac — wrapping the web chat app with native desktop features via Electron.js.",
      problem:
        "Power users prefer standalone desktop apps with native OS integration over browser tabs.",
      solution:
        "Wrapped the web application with Electron.js to deliver native notifications, system tray access, and a dedicated desktop window.",
      result:
        "Full ecosystem coverage — Web, Android, and Desktop — giving users complete flexibility across every device.",
      tags: [
        { name: "Electron.js", color: "purple" },
        { name: "Spring Boot", color: "green" },
        { name: "JWT", color: "pink" },
        { name: "OAuth2", color: "orange" },
      ],
      image: chat_desktop,
      source_code_link: "https://github.com/Manish-keer19/chat-web-app",
      liveUrl:
        "https://www.mediafire.com/file/nwocbj0icjrjrn4/manishchatapp_Setup_1.0.0.exe/file",
      category: "desktop",
      featured: false,
      liveLabel: "Download .exe",
    },
  ];

  const tabs = [
    { key: "all", label: "All Projects" },
    { key: "web", label: "Web" },
    { key: "mobile", label: "Mobile" },
    { key: "desktop", label: "Desktop" },
  ] as const;

  const filtered =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  const featured = filtered.filter((p) => p.featured);
  const others = filtered.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-24 px-4 bg-background relative overflow-hidden"
    >
      {/* Background glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
        <div className="absolute top-[5%] left-[-15%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[5%] right-[-15%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-purple-500/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-5 text-foreground">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 via-primary to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Production-grade applications across web, mobile, and desktop —
            built with modern stacks and deployed at scale.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.key
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105"
                  : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground border border-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Featured Projects — Large horizontal cards */}
        {featured.length > 0 && (
          <div className="space-y-6 mb-12">
            {featured.map((project, i) => (
              <div
                key={project.name}
                className={`group flex flex-col md:flex-row ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                } rounded-2xl overflow-hidden border border-white/8 bg-card/40 backdrop-blur-sm hover:bg-card/70 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/8 transition-all duration-500`}
              >
                {/* Image */}
                <div
                  className="relative md:w-[45%] h-56 md:h-72 overflow-hidden cursor-pointer shrink-0"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.imageStyle === "phone" ? (
                    /* Phone mockup style for portrait/mobile screenshots */
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                      <div className="relative h-[90%] aspect-[9/19.5] rounded-[2rem] border-2 border-white/20 shadow-2xl overflow-hidden bg-black">
                        {/* Phone notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-6 bg-black rounded-b-2xl z-20" />
                        <img
                          src={project.image}
                          alt={project.name}
                          loading="lazy"
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      {/* Glow behind phone */}
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/30 backdrop-blur-[2px]">
                    <span className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      View Details <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                  {/* Featured badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-background/80 backdrop-blur-sm border border-white/10 text-yellow-400 px-2.5 py-1 rounded-full text-xs font-semibold">
                    <Star className="w-3 h-3 fill-yellow-400" /> Featured
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    {/* Category pill */}
                    <div
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-gradient-to-r ${categoryColor[project.category]} text-white`}
                    >
                      {categoryIcon[project.category]}
                      {project.category.charAt(0).toUpperCase() +
                        project.category.slice(1)}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="text-sm text-primary/70 font-medium mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-5">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag.name}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-muted/60 text-muted-foreground border border-white/5"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-semibold transition-all duration-200 border border-primary/20"
                      >
                        Case Study <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all duration-200 shadow-md shadow-primary/25"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          {project.liveLabel || "Live Demo"}
                        </a>
                      )}
                      <a
                        href={project.source_code_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:border-white/20 text-muted-foreground hover:text-foreground text-sm font-medium transition-all duration-200"
                      >
                        <Github className="w-3.5 h-3.5" /> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Other Projects — compact grid cards */}
        {others.length > 0 && (
          <>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-white/8" />
              <p className="text-muted-foreground text-sm font-medium">
                More Projects
              </p>
              <div className="h-px flex-1 bg-white/8" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {others.map((project) => (
                <div
                  key={project.name}
                  className="group flex flex-col rounded-xl overflow-hidden border border-white/8 bg-card/40 backdrop-blur-sm hover:bg-card/70 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden shrink-0 bg-gradient-to-br from-slate-900 to-slate-800">
                    {project.imageStyle === "phone" ? (
                      /* Compact phone mockup for grid cards */
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="relative h-[85%] aspect-[9/19.5] rounded-2xl border border-white/20 shadow-xl overflow-hidden bg-black">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-4 bg-black rounded-b-xl z-20" />
                          <img
                            src={project.image}
                            alt={project.name}
                            loading="lazy"
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/8 via-transparent to-cyan-500/8 pointer-events-none" />
                      </div>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
                    <div
                      className={`absolute top-2.5 right-2.5 flex items-center gap-1 bg-gradient-to-r ${categoryColor[project.category]} text-white text-[10px] font-semibold px-2 py-0.5 rounded-full z-10`}
                    >
                      {categoryIcon[project.category]}
                      {project.category.charAt(0).toUpperCase() +
                        project.category.slice(1)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-4">
                    <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors mb-0.5 line-clamp-1">
                      {project.name}
                    </h3>
                    <p className="text-xs text-primary/60 font-medium mb-2">
                      {project.subtitle}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag.name}
                          className="px-2 py-0.5 rounded text-[10px] font-medium bg-muted/60 text-muted-foreground border border-white/5"
                        >
                          {tag.name}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-primary/10 text-primary border border-primary/20">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <div
                      className="flex gap-2 mt-auto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          {project.liveLabel || "Live"}
                        </a>
                      )}
                      <a
                        href={project.source_code_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 text-muted-foreground hover:text-foreground text-xs font-medium transition-colors"
                      >
                        <Github className="w-3 h-3" /> Code
                      </a>
                      <button
                        className="ml-auto flex items-center gap-1 px-3 py-1.5 rounded-lg bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary text-xs font-medium transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                      >
                        Details <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            No projects found in this category yet.
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative bg-card border border-white/10 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal image header */}
            <div className="relative h-48 md:h-64 shrink-0 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
              {selectedProject.imageStyle === "phone" ? (
                <div className="w-full h-full flex items-center justify-center gap-4">
                  {/* Center phone */}
                  <div className="relative h-[88%] aspect-[9/19.5] rounded-[2rem] border-2 border-white/25 shadow-2xl overflow-hidden bg-black z-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-6 bg-black rounded-b-2xl z-20" />
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {/* Second blurred copy for aesthetic bg */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt=""
                      className="w-full h-full object-cover blur-2xl opacity-20 scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/15 via-transparent to-cyan-500/15 pointer-events-none" />
                </div>
              ) : (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-white/20 transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Title overlay */}
              <div className="absolute bottom-4 left-6 right-12">
                <div
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold mb-2 bg-gradient-to-r ${categoryColor[selectedProject.category]} text-white`}
                >
                  {categoryIcon[selectedProject.category]}
                  {selectedProject.category.charAt(0).toUpperCase() +
                    selectedProject.category.slice(1)}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  {selectedProject.name}
                </h2>
                <p className="text-primary/80 text-sm font-medium">
                  {selectedProject.subtitle}
                </p>
              </div>
            </div>

            {/* Scrollable content */}
            <ScrollArea className="flex-1">
              <div className="p-6 md:p-8 space-y-6">
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag: ProjectTag) => (
                    <span
                      key={tag.name}
                      className="px-3 py-1 rounded-full text-xs font-semibold border border-primary/20 text-primary bg-primary/5"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

                {/* Problem / Solution / Result */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/10">
                    <h4 className="text-rose-400 font-semibold text-sm mb-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 inline-block" />
                      Problem
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                    <h4 className="text-blue-400 font-semibold text-sm mb-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
                      Solution
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                    <h4 className="text-green-400 font-semibold text-sm mb-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                      Result
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {selectedProject.result}
                    </p>
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-3 pt-2 border-t border-white/8">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[140px]"
                    >
                      <button className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/25">
                        <ExternalLink className="w-4 h-4" />
                        {selectedProject.liveLabel || "View Live Demo"}
                      </button>
                    </a>
                  )}
                  <a
                    href={selectedProject.source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[140px]"
                  >
                    <button className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20 font-semibold text-sm transition-all">
                      <Github className="w-4 h-4" />
                      Source Code
                    </button>
                  </a>
                </div>
              </div>
            </ScrollArea>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsShowcase;
