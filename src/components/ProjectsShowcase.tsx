



import { ExternalLink, Github, ImageOff, ArrowRight, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import Bet_app from "../assets/bet_app.png"
import InstaClone from "../assets/instagram1.png";
import Android_Chat from "../assets/androidChat.png"
import chat_desktop from "../assets/chat_desktop.png"
import chat_web from "../assets/chat_web.png"
import studyNotion from '../assets/study.png'
import { useState } from 'react';

const ProjectsShowcase = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      name: "Manish's Bet App",
      description: "A dynamic real-time betting platform offering multiple fast-paced games including Head or Tail, Wheel Spin, and Forex Trading.",
      problem: "Users needed a platform for quick, engaging betting games with instant feedback and secure transaction handling.",
      solution: "Built a high-performance React frontend coupled with a Node.js backend using WebSockets for real-time game state synchronization. Implemented secure wallet management for seamless transactions.",
      result: "Achieved sub-second latency for game updates, supporting multiple concurrent users with a smooth, responsive UI.",
      tags: [
        { name: "React", color: "blue-text-gradient" },
        { name: "Node.js", color: "green-text-gradient" },
        { name: "WebSocket", color: "pink-text-gradient" },
        { name: "MongoDB", color: "orange-text-gradient" },
      ],
      image: Bet_app,
      source_code_link: "https://github.com/Manish-keer19/Betting_App_Frontend",
      liveUrl: "https://manish-bet-app.vercel.app/",
      featured: true
    },
    {
      name: "InstaClone",
      description: "A full-featured social media mobile application allowing users to share posts, follow others, and interact via likes and comments.",
      problem: "Creating a native-like social media experience on mobile with complex data relationships and real-time interactions.",
      solution: "Leveraged React Native CLI for native performance. Designed a robust REST API with Express.js and MongoDB to handle complex user relationships and media content.",
      result: "Delivered a smooth, responsive mobile app with core social features, demonstrating proficiency in mobile-first full-stack development.",
      tags: [
        { name: "React Native CLI", color: "blue-text-gradient" },
        { name: "Express Js", color: "orange-text-gradient" },
        { name: "MongoDB", color: "green-text-gradient" },
      ],
      image: InstaClone,
      source_code_link: "https://github.com/Manish-keer19/Full_Stack-InstaClone-apk",
      liveUrl: "https://www.mediafire.com/file/lxamuh01o5ju2ea/instaclone.apk/file",
      featured: true
    },
    {
      name: "Manish Chat App (Web)",
      description: "Real-time web messaging platform with secure authentication and media sharing capabilities.",
      problem: "Need for a secure, real-time communication tool that works seamlessly across web browsers.",
      solution: "Implemented a Spring Boot backend with WebSocket support for real-time messaging. Integrated OAuth2 for secure and convenient user authentication.",
      result: "Created a reliable messaging platform with instant delivery and secure user management.",
      tags: [
        { name: "Spring Boot", color: "green-text-gradient" },
        { name: "React", color: "blue-text-gradient" },
        { name: "JWT", color: "pink-text-gradient" },
        { name: "OAuth2", color: "orange-text-gradient" },
      ],
      image: chat_web,
      source_code_link: "https://github.com/Manish-keer19/chat-web-app",
      liveUrl: "https://manishchatapp.vercel.app/",
      featured: false
    },
    {
      name: "Manish Chat App (Android)",
      description: "Native Android messaging application extending the chat ecosystem to mobile devices.",
      problem: "Extending the chat experience to mobile users with native performance and feel.",
      solution: "Developed using React Native to share logic with the web platform while ensuring native performance. Connected to the same Spring Boot backend for a unified ecosystem.",
      result: "Seamless cross-platform messaging experience allowing users to switch between web and mobile without losing context.",
      tags: [
        { name: "Spring Boot", color: "green-text-gradient" },
        { name: "React Native", color: "blue-text-gradient" },
        { name: "JWT", color: "pink-text-gradient" },
        { name: "Spring Boot", color: "orange-text-gradient" },
      ],
      image: Android_Chat,
      source_code_link: "https://github.com/Manish-keer19/chatAndroidApp",
      liveUrl: "https://www.mediafire.com/file/s0rjh7hbh82hsda/manishchatappnew.apk/file",
      featured: false
    },
    {
      name: "Manish Chat App (Desktop)",
      description: "Cross-platform desktop application for the chat ecosystem, supporting Windows, Linux, and Mac.",
      problem: "Providing a dedicated desktop experience for power users who prefer standalone apps over browser tabs.",
      solution: "Wrapped the web application using Electron.js to provide native desktop integration like notifications and system tray access.",
      result: "Complete ecosystem coverage (Web, Mobile, Desktop), offering users flexibility in how they access the platform.",
      tags: [
        { name: "Spring Boot", color: "green-text-gradient" },
        { name: "Electron.js", color: "purple-text-gradient" },
        { name: "JWT", color: "pink-text-gradient" },
        { name: "OAuth2", color: "orange-text-gradient" },
      ],
      image: chat_desktop,
      source_code_link: "https://github.com/Manish-keer19/chat-web-app",
      liveUrl: "https://www.mediafire.com/file/nwocbj0icjrjrn4/manishchatapp_Setup_1.0.0.exe/file",
      featured: false
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my work showcasing full-stack development skills across web, mobile, and desktop platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.name}
              className="group relative flex flex-col overflow-hidden border-muted/40 bg-card/50 hover:bg-card hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project)}>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-medium flex items-center gap-2">
                    View Details <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold line-clamp-1 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                    <a href={project.source_code_link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge
                      key={tag.name}
                      variant="secondary"
                      className="text-xs font-normal"
                    >
                      {tag.name}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">+{project.tags.length - 3}</Badge>
                  )}
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <Button
                  variant="ghost"
                  className="w-full group/btn hover:bg-primary/10 hover:text-primary"
                  onClick={() => setSelectedProject(project)}
                >
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col p-0 gap-0">
          <div className="relative h-48 md:h-64 w-full shrink-0 overflow-hidden bg-muted">
            {selectedProject && (
              <>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

              </>
            )}
          </div>

          <ScrollArea className="flex-grow">
            <div className="p-6 md:p-8 space-y-8">
              {selectedProject && (
                <>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{selectedProject.name}</h2>
                    <p className="text-xl text-muted-foreground">{selectedProject.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag: any) => (
                      <Badge
                        key={tag.name}
                        variant="outline"
                        className="px-3 py-1 text-sm border-primary/20 text-primary"
                      >
                        {tag.name}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg text-primary flex items-center gap-2">
                        Problem
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {selectedProject.problem}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg text-blue-500 flex items-center gap-2">
                        Solution
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg text-green-500 flex items-center gap-2">
                        Result
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {selectedProject.result}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4 border-t">
                    {selectedProject.liveUrl && (
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button className="w-full gap-2" size="lg">
                          <ExternalLink className="h-5 w-5" />
                          View Live Demo
                        </Button>
                      </a>
                    )}
                    <a href={selectedProject.source_code_link} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" className="w-full gap-2" size="lg">
                        <Github className="h-5 w-5" />
                        Source Code
                      </Button>
                    </a>
                  </div>
                </>
              )}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsShowcase;