import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Star, GitCommit, Zap, Users } from "lucide-react";

const BraggingRights = () => {
    const [stats, setStats] = useState({
        repos: 0,
        followers: 0,
        stars: 0,
        loading: true
    });

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                // Fetch user data
                const userRes = await fetch('https://api.github.com/users/Manish-keer19');
                const userData = await userRes.json();

                // Fetch repos to calculate stars
                const reposRes = await fetch('https://api.github.com/users/Manish-keer19/repos?per_page=100');
                const reposData = await reposRes.json();

                const totalStars = Array.isArray(reposData)
                    ? reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0)
                    : 0;

                setStats({
                    repos: userData.public_repos || 0,
                    followers: userData.followers || 0,
                    stars: totalStars,
                    loading: false
                });
            } catch (error) {
                console.error("Error fetching GitHub data:", error);
                setStats(prev => ({ ...prev, loading: false }));
            }
        };

        fetchGitHubData();
    }, []);

    return (
        <section className="py-20 px-4 bg-muted/10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                        Coding <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">Activity</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A glimpse into my development journey and contributions
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* GitHub Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <Card className="bg-card/50 backdrop-blur-sm border-primary/10 overflow-hidden hover:border-primary/30 transition-colors">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                                        <GitCommit className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold">GitHub Contributions</h3>
                                </div>
                                <div className="relative w-full overflow-hidden rounded-lg">
                                    <img
                                        src="https://ghchart.rshah.org/Manish-keer19"
                                        alt="GitHub Contributions Graph"
                                        loading="lazy"
                                        className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <div className="grid grid-cols-2 gap-4">
                            <Card className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors">
                                <CardContent className="p-6 flex flex-col items-center text-center">
                                    <Trophy className="w-8 h-8 text-yellow-500 mb-2" />
                                    <span className="text-3xl font-bold text-foreground">
                                        {stats.loading ? "..." : stats.repos}
                                    </span>
                                    <span className="text-sm text-muted-foreground">Public Repos</span>
                                </CardContent>
                            </Card>
                            <Card className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors">
                                <CardContent className="p-6 flex flex-col items-center text-center">
                                    <Star className="w-8 h-8 text-purple-500 mb-2" />
                                    <span className="text-3xl font-bold text-foreground">
                                        {stats.loading ? "..." : stats.stars}
                                    </span>
                                    <span className="text-sm text-muted-foreground">Total Stars</span>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>

                    {/* Performance/Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <Card className="bg-card/50 backdrop-blur-sm border-primary/10 overflow-hidden hover:border-primary/30 transition-colors">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-full bg-green-500/10 text-green-500">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold">Performance First</h3>
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="font-medium">Performance</span>
                                            <span className="text-green-500 font-bold">98%</span>
                                        </div>
                                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                                            <div className="h-full bg-green-500 w-[98%]" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="font-medium">Accessibility</span>
                                            <span className="text-green-500 font-bold">100%</span>
                                        </div>
                                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                                            <div className="h-full bg-green-500 w-full" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="font-medium">Best Practices</span>
                                            <span className="text-green-500 font-bold">100%</span>
                                        </div>
                                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                                            <div className="h-full bg-green-500 w-full" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="font-medium">SEO</span>
                                            <span className="text-green-500 font-bold">100%</span>
                                        </div>
                                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                                            <div className="h-full bg-green-500 w-full" />
                                        </div>
                                    </div>
                                </div>

                                <p className="mt-6 text-sm text-muted-foreground italic">
                                    * Average Lighthouse scores across my deployed projects
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BraggingRights;
