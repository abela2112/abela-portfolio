"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Github, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
    {
        title: "Qemer Learning Management System (LMS)",
        description: "A full-stack learning management platform designed to help instructors create and manage courses while allowing students to enroll, track progress, and engage with content.",
        tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Cloudinary"],
        image: "/qemerdashboard.png",
        slug: "qemer-lms",
        role: "Full-Stack Developer",
        repoUrl: "https://github.com/abela2112/Qemer-Academy",
        liveUrl: "https://qemer-academy-git-master-abel-ayalews-projects.vercel.app/dashboard",
    },
    {
        title: "Admin Panel System",
        description: "A centralized admin dashboard built to manage users, content, and system configurations for web applications.",
        tags: ["Next.js", "TypeScript", "Shadcn UI", "PostgreSQL", "Sequelize"],
        image: "/adminpanel.png",
        slug: "admin-panel",
        role: "Lead Developer",
        repoUrl: "https://github.com/abela2112/admin-dashboard",
        liveUrl: "https://shoppfy-admin-dashboard.netlify.app/",
    },
    {
        title: "Thread Clone (Social Platform)",
        description: "A social media platform inspired by Threads, allowing users to post short text content, interact, and engage in discussions.",
        tags: ["Next.js", "Node.js", "Express", "PostgreSQL", "JWT Authentication"],
        image: "/thread.png",
        slug: "thread-clone",
        role: "Full-Stack Developer",
        repoUrl: "https://github.com/abela2112/Threads_clone",
        liveUrl: "https://threads-clone-12ttk808b-abel-ayalews-projects.vercel.app/",
    },
    {
        title: "OneCard System (ID + Access Control)",
        description: "A digital + physical ID card management system that allows students to use a single card to access services.",
        tags: ["Next.js", "Golang", "PostgreSQL", "Role-based auth"],
        image: "",
        slug: "one-card-system",
        role: "Backend & Systems Architect",
        repoUrl: "https://github.com",
        liveUrl: "https://vercel.com",
    },
]

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
}

export default function ProjectsPage() {
    return (
        <div className="container mx-auto px-4 py-20 space-y-16">
            <header className="space-y-4 max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold font-outfit">Projects</h1>
                <p className="text-xl text-muted-foreground">
                    A collection of case studies focusing on core architecture, technical challenges, and business impact.
                </p>
            </header>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Card className="flex flex-col h-full overflow-hidden border-muted/60 bg-muted/20 hover:bg-muted/40 transition-colors group">
                            <div className="aspect-video relative overflow-hidden bg-muted/50">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/10 group-hover:scale-110 transition-transform duration-500">
                                        <Layers size={120} />
                                    </div>
                                )}
                                <div className="absolute top-4 right-4 flex gap-2">
                                    <Badge className="bg-background/80 backdrop-blur text-foreground border-none px-3 py-1">{project.role}</Badge>
                                </div>
                            </div>
                            <CardHeader className="p-8">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="font-normal">{tag}</Badge>
                                    ))}
                                </div>
                                <CardTitle className="text-3xl font-outfit leading-tight mb-4">{project.title}</CardTitle>
                                <CardDescription className="text-lg leading-relaxed">
                                    {project.description}
                                </CardDescription>
                            </CardHeader>
                            <CardFooter className="p-8 pt-0 mt-auto flex flex-wrap gap-4">
                                <Button variant="default" className="gap-2" asChild>
                                    <Link href={`/projects/${project.slug}`}>
                                        View Case Study <ArrowRight size={16} />
                                    </Link>
                                </Button>
                                <div className="flex gap-2">
                                    <a
                                        href={project.repoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 transition-colors"
                                    >
                                        <Github size={18} />
                                    </a>
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 transition-colors"
                                    >
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>

            <section className="bg-muted/30 rounded-3xl p-8 md:p-12 text-center space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold font-outfit italic text-primary">&quot;Code is not just about solving problems; it&apos;s about creating experiences.&quot;</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    Interested in the technical details? Check out my GitHub for open-source contributions and experimentations.
                </p>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                    <Link href="https://github.com"><Github size={20} /> Visit GitHub Profile</Link>
                </Button>
            </section>
        </div>
    )
}
