"use client"

import React from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Server, Layout, Database, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projectsData: Record<string, any> = {
    "qemer-lms": {
        title: "Qemer Learning Management System (LMS)",
        description: "A full-stack learning management platform designed to help instructors create and manage courses while allowing students to enroll, track progress, and engage with content.",
        tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Cloudinary"],
        role: "Full-Stack Developer",
        overview: "Qemer LMS is a scalable, modern, and customizable solution for small institutions and independent instructors. It provides a robust platform for course delivery and management.",
        problem: "Many learning platforms are either too complex or too expensive for small institutions and independent instructors. Qemer LMS provides a scalable, modern, and customizable solution.",
        solution: "I built a full-stack platform using Next.js and Node.js with a PostgreSQL backend. It features separate portals for students, instructors, and admins, ensuring a tailored experience for each user role.",
        architecture: "Frontend: Next.js (App Router), TypeScript, shadcn/ui. Backend: Node.js + Express, Sequelize ORM, PostgreSQL. Integrations: Cloudinary for image uploads, JWT Authentication.",
        features: [
            "Browse and enroll in courses",
            "Video-based lessons with progress tracking",
            "Instructor dashboard for course management",
            "Admin panel for user and system configuration",
            "Role-based access control (RBAC)",
        ],
        outcome: "Fully functional LMS with real-world architecture, clean dashboard-based UI, and production-ready structure. Designed a scalable role-based system and optimized API responses.",
        repoUrl: "https://github.com/abela2112/Qemer-Academy",
        liveUrl: "https://qemer-academy-git-master-abel-ayalews-projects.vercel.app/dashboard",
    },
    "admin-panel": {
        title: "Admin Panel System",
        description: "A centralized admin dashboard built to manage users, content, and system configurations for web applications.",
        tags: ["Next.js", "TypeScript", "Shadcn UI", "PostgreSQL", "Sequelize"],
        role: "Lead Developer",
        overview: "A modular and reusable admin dashboard that provides a structured backend control panel for various web applications.",
        problem: "Most projects need a structured backend control panel. Instead of hardcoding management features, this admin system provides a modular and reusable solution.",
        solution: "Developed a secure and flexible admin architecture with role-based permissions, user CRUD operations, and dashboard analytics.",
        architecture: "Next.js, TypeScript, Shadcn UI, RESTful APIs, PostgreSQL / Sequelize.",
        features: [
            "Secure authentication with role-based permissions",
            "Comprehensive User CRUD operations",
            "Dashboard analytics cards and data visualization",
            "Search & filtering for complex datasets",
            "Modular page structure for easy expansion",
        ],
        outcome: "Created a reusable admin architecture with a clean SaaS-style UI, easily adaptable for multiple projects. Ensured secure API communication and built reusable table & form components.",
        repoUrl: "https://github.com/abela2112/admin-dashboard",
        liveUrl: "https://shoppfy-admin-dashboard.netlify.app/",
    },
    "thread-clone": {
        title: "Thread Clone (Social Platform)",
        description: "A social media platform inspired by Threads, allowing users to post short text content, interact, and engage in discussions.",
        tags: ["Next.js", "Node.js", "Express", "PostgreSQL", "JWT"],
        role: "Full-Stack Developer",
        overview: "A lightweight text-based discussion platform focused on simplicity, performance, and user engagement.",
        problem: "Modern communities need lightweight text-based discussion platforms. This project addresses the need for simple, high-performance interaction tools.",
        solution: "Built a functional social platform architecture using Next.js and Express, with optimized data modeling for social interactions.",
        architecture: "Next.js, Node.js / Express, PostgreSQL, JWT Authentication. Optimized relational database design for feed queries.",
        features: [
            "User authentication and profile pages",
            "Create, edit, and delete posts (threads)",
            "Like and comment functionality",
            "Follow system for user discovery",
            "Optimized feed with nested comments handling",
        ],
        outcome: "Functional social platform with optimized relational database design. Built a clean modern UI and handled complex challenges like nested comments and scalable feed queries.",
        repoUrl: "https://github.com/abela2112/Threads_clone",
        liveUrl: "https://threads-clone-12ttk808b-abel-ayalews-projects.vercel.app/",
    },
    "one-card-system": {
        title: "OneCard System (ID + Access Control)",
        description: "A digital + physical ID card management system that allows students to use a single card to access services.",
        tags: ["Next.js", "Golang", "PostgreSQL", "Go", "Hardware Ready"],
        role: "Backend & Systems Architect",
        overview: "A centralized identity management system that consolidates multiple identification systems into a single digital identity.",
        problem: "Institutions often use multiple identification systems. OneCard centralizes access using a single digital identity system.",
        solution: "Architected a full-stack cross-language system (Next.js + Go) for secure ID generation and identity management.",
        architecture: "Next.js frontend, Golang backend, PostgreSQL, Role-based authentication. Designed for potential hardware integration.",
        features: [
            "Student registration and unique ID generation",
            "Card data management and admin control panel",
            "Printable student ID cards",
            "Secure backend validation in Go",
            "Production-style backend logic with RBAC",
        ],
        outcome: "Implemented a full-stack cross-language architecture. Developed production-style backend logic in Go and a scalable identity management structure ready for hardware integration.",
        repoUrl: "https://github.com",
        liveUrl: "https://vercel.com",
    }
}

export default function ProjectCaseStudy() {
    const params = useParams()
    const slug = params.slug as string
    const project = projectsData[slug] || projectsData["qemer-lms"] // Default to one for demo

    return (
        <div className="pb-20">
            {/* Hero Header */}
            <section className="bg-muted/30 py-20 border-b">
                <div className="container mx-auto px-4">
                    <Button variant="ghost" className="mb-8 gap-2 group" asChild>
                        <Link href="/projects">
                            <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Projects
                        </Link>
                    </Button>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag: string) => (
                                    <Badge key={tag} variant="secondary">{tag}</Badge>
                                ))}
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold font-outfit">{project.title}</h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 gap-2"
                                >
                                    <ExternalLink size={18} /> Visit Live Project
                                </a>
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 gap-2"
                                >
                                    <Github size={18} /> View Source Code
                                </a>
                            </div>
                        </div>
                        <div className="aspect-video bg-muted rounded-2xl overflow-hidden border border-muted-foreground/10 flex items-center justify-center text-muted-foreground/20">
                            <Layout size={120} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Study Content */}
            <section className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2 space-y-16">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold font-outfit">Overview</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                {project.overview}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold font-outfit flex items-center gap-2">
                                    <span className="text-destructive font-bold text-3xl">!</span> The Problem
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {project.problem}
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold font-outfit flex items-center gap-2">
                                    <span className="text-primary font-bold text-3xl">✓</span> The Solution
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {project.solution}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold font-outfit">Detailed Features</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.features.map((feature: string, i: number) => (
                                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-muted/20">
                                        <CheckCircle2 className="text-primary mt-1 size-5 flex-shrink-0" />
                                        <span className="font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4 p-8 bg-primary rounded-3xl text-primary-foreground">
                            <h2 className="text-3xl font-bold font-outfit">Outcome & Impact</h2>
                            <p className="text-lg leading-relaxed opacity-90">
                                {project.outcome}
                            </p>
                        </div>
                    </div>

                    <aside className="space-y-12">
                        <div className="p-6 rounded-2xl border bg-muted/10 space-y-6">
                            <h3 className="font-bold text-xl font-outfit border-b pb-4">Project Details</h3>

                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Role</p>
                                    <p className="font-medium text-lg">{project.role}</p>
                                </div>

                                <div className="pt-4 space-y-4 font-medium">
                                    <div className="flex items-center gap-3">
                                        <div className="size-8 rounded bg-primary/10 flex items-center justify-center text-primary">
                                            <Code2 size={16} />
                                        </div>
                                        Frontend: Next.js, React
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="size-8 rounded bg-primary/10 flex items-center justify-center text-primary">
                                            <Server size={16} />
                                        </div>
                                        Backend: Node.js, API
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="size-8 rounded bg-primary/10 flex items-center justify-center text-primary">
                                            <Database size={16} />
                                        </div>
                                        Database: PostgreSQL
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-3xl border border-dashed border-primary/40 bg-primary/5 text-center space-y-4">
                            <h4 className="font-bold text-lg font-outfit">Interested in something similar?</h4>
                            <p className="text-sm text-muted-foreground italic truncate">
                                Let&apos;s talk about your next project.
                            </p>
                            <Button className="w-full" asChild>
                                <Link href="/contact">Get in touch</Link>
                            </Button>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    )
}
