



import { ExternalLink, Github, ImageOff } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Bet_app from "../assets/bet_app.png"
import InstaClone from "../assets/instagram1.jpg";
import Android_Chat from "../assets/androidChat.png"
import chat_desktop from "../assets/chat_desktop.png"
import chat_web from "../assets/chat_web.png"
import studyNotion from '../assets/study.png'

const ProjectsShowcase = () => {
  const projects = [
    {
      name: "Manish's Bet App",
      description: "A dynamic real-time betting platform offering multiple fast-paced games including Head or Tail, Wheel Spin, and Forex Trading. Users can create accounts, manage wallet transactions, and participate in 1-minute live games.",
      tags: [
        { name: "React", color: "blue-text-gradient" },
        { name: "Node.js", color: "green-text-gradient" },
        { name: "WebSocket", color: "pink-text-gradient" },
        { name: "MongoDB", color: "orange-text-gradient" },
      ],
      image: Bet_app, // Replace with actual image
      source_code_link: "https://github.com/Manish-keer19/Betting_App_Frontend",
      liveUrl: "https://manish-bet-app.vercel.app/",
      featured: true
    },
    {
      name: "InstaClone",
      description: "A social media app built with React Native CLI that allows users to create and share posts, follow other users, like and comment on posts.",
      tags: [
        { name: "React Native CLI", color: "blue-text-gradient" },
        { name: "Express Js", color: "orange-text-gradient" },
        { name: "MongoDB", color: "green-text-gradient" },
      ],
      image: InstaClone, // Replace with actual image
      source_code_link: "https://github.com/Manish-keer19/Full_Stack-InstaClone-apk",
      liveUrl: "https://github.com/Manish-keer19/Full_Stack-InstaClone-apk/blob/main/README.md",
      featured: true
    },
    {
      name: "Manish Chat App (Web)",
      description: "Real-time web-based messaging app with secure authentication using JWT and OAuth2 (Google and GitHub). Users can send messages, share media, and reset passwords.",
      tags: [
        { name: "Spring Boot", color: "green-text-gradient" },
        { name: "React", color: "blue-text-gradient" },
        { name: "JWT", color: "pink-text-gradient" },
        { name: "OAuth2", color: "orange-text-gradient" },
      ],
      image: chat_web, // Replace with actual image
      source_code_link: "https://github.com/Manish-keer19/chat-web-app",
      liveUrl: "https://manishchatapp.vercel.app/",
      featured: false
    },
    {
      name: "Manish Chat App (Android)",
      description: "Real-time Android messaging app with JWT-based authentication, OAuth2 login (Google and GitHub), media sharing, and password reset.",
      tags: [
        { name: "Spring Boot", color: "green-text-gradient" },
        { name: "React Native", color: "blue-text-gradient" },
        { name: "JWT", color: "pink-text-gradient" },
        { name: "Spring Boot", color: "orange-text-gradient" },
      ],
      image: Android_Chat, // Replace with actual image
      source_code_link: "https://github.com/Manish-keer19/chatAndroidApp",
      liveUrl: "https://github.com/Manish-keer19/chatAndroidApp/blob/main/README.md",
      featured: false
    },
    {
      name: "Manish Chat App (Desktop)",
      description: "Cross-platform desktop messaging app with JWT authentication, OAuth2 login, and media sharing for Windows, Linux, and Mac.",
      tags: [
        { name: "Spring Boot", color: "green-text-gradient" },
        { name: "Electron.js", color: "purple-text-gradient" },
        { name: "JWT", color: "pink-text-gradient" },
        { name: "OAuth2", color: "orange-text-gradient" },
      ],
      image: chat_desktop, // Replace with actual image
      source_code_link: "https://github.com/Manish-keer19/chat-web-app",
      liveUrl: "https://github.com/Manish-keer19/chat-web-app",
      featured: false
    },
    {
      name: "StudyNotion",
      description: "Online learning platform that allows users to create, manage, and enroll in courses with secure authentication and progress tracking.",
      tags: [
        { name: "MERN Stack", color: "blue-text-gradient" },
        { name: "Redux", color: "purple-text-gradient" },
        { name: "MongoDB", color: "green-text-gradient" },
      ],
      image: studyNotion, // Replace with actual image
      source_code_link: "https://github.com/Manish-keer19/StudyNotion-Full-Stack-Project",
      liveUrl: "https://manishstudyportal.vercel.app/",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my work showcasing full-stack development skills across web, mobile, and desktop platforms
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project) => (
            <Card key={project.name} className="relative border-0 overflow-hidden group hover:shadow-lg transition-all duration-500 bg-gradient-to-br from-background to-muted/20">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full  group-hover:scale-105 transition-transform duration-500 object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
              </div>
              <CardContent className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    {project.name}
                  </h3>
                  <div className="flex space-x-2">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="rounded-full" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </a>
                    )}
                    <a href={project.source_code_link} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="rounded-full" variant="outline">
                        <Github className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag.name}
                      variant="outline"
                      className={`border-${tag.color.split('-')[0]}-500/20 text-${tag.color.split('-')[0]}-500`}
                    >
                      {tag.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-1 gap-8">
          {projects.filter(p => !p.featured).map((project) => (
            <Card key={project.name} className="border-0 overflow-hidden group hover:shadow-md transition-all duration-300 bg-muted/10">
              <div className="md:flex">
                <div className="md:w-1/3 relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-transparent md:hidden" />
                </div>
                <CardContent className="md:w-2/3 p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    <div className="flex space-x-2">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="rounded-full h-8 w-8 p-0" variant="ghost">
                            <ExternalLink className="h-3.5 w-3.5" />
                          </Button>
                        </a>
                      )}
                      <a href={project.source_code_link} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="rounded-full h-8 w-8 p-0" variant="ghost">
                          <Github className="h-3.5 w-3.5" />
                        </Button>
                      </a>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag.name}
                        variant="outline"
                        className={`text-xs border-${tag.color.split('-')[0]}-500/20 text-${tag.color.split('-')[0]}-500`}
                      >
                        {tag.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;