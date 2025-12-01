import { motion } from "framer-motion";
import { Server, Shield, Zap, GitBranch, TestTube, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EngineeringPhilosophy = () => {
    const philosophies = [
        {
            icon: <Layers className="w-8 h-8 text-blue-500" />,
            title: "Scalable Architecture",
            description: "I design systems that grow. From microservices to modular monoliths, I prioritize clean separation of concerns and maintainability."
        },
        {
            icon: <Zap className="w-8 h-8 text-yellow-500" />,
            title: "Performance First",
            description: "Speed is a feature. I optimize critical rendering paths, implement efficient caching strategies, and minimize bundle sizes."
        },
        {
            icon: <Shield className="w-8 h-8 text-green-500" />,
            title: "Security Mindset",
            description: "Security isn't an afterthought. I implement OWASP best practices, secure authentication flows, and data encryption by default."
        },
        {
            icon: <GitBranch className="w-8 h-8 text-purple-500" />,
            title: "CI/CD & Automation",
            description: "I automate the boring stuff. Robust CI/CD pipelines using GitHub Actions, Docker, and AWS ensure code quality and seamless deployments."
        },
        {
            icon: <TestTube className="w-8 h-8 text-red-500" />,
            title: "Testing Strategy",
            description: "Confidence in code. I advocate for a balanced testing pyramid with Unit, Integration, and E2E tests to catch regressions early."
        },
        {
            icon: <Server className="w-8 h-8 text-cyan-500" />,
            title: "Real-time Systems",
            description: "Building alive applications. Expertise in WebSockets and event-driven architectures for instant data synchronization."
        }
    ];

    return (
        <section className="py-24 px-4 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                        Engineering <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">Philosophy</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        My approach to building software that stands the test of time
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {philosophies.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full bg-card/50 backdrop-blur-sm border-muted/40 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                                <CardContent className="p-8 flex flex-col items-start h-full">
                                    <div className="mb-6 p-3 rounded-2xl bg-muted/50 group-hover:bg-primary/10 transition-colors">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EngineeringPhilosophy;
