"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Download, Code2, Globe, Heart, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { p } from "framer-motion/client"

const skills = [
    { category: "Web & Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"] },
    { category: "Backend & AI", items: ["Python", "FastAPI", "Django", "AI/LLM Integration", "SQL", "PostgreSQL/MongoDB", "Java"] },
    { category: "Mobile", items: ["React Native", "Flutter", "Native Android", "Mobile UI/UX"] },
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

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-20 space-y-24">
            {/* Bio Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
                <div className="space-y-8 order-2 lg:order-1">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-bold font-outfit">  👋</h1>
                        <h1 className="text-4xl md:text-6xl font-bold font-outfit">  Hi, I&apos;m <span className="text-primary italic">Abel</span>.</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            I&apos;m a Full-Stack Software Engineer based in Nairobi, Kenya. I spend my days and nights building digital products that solve real-world problems.
                        </p>
                    </div>

                    <div className="prose prose-zinc dark:prose-invert text-lg max-w-none text-muted-foreground space-y-4">
                        <p>
                            With over 3 years of experience in the industry, I&apos;ve worked with startups and scale-ups to design and implement robust, scalable web applications. My philosophy is simple: build things that last, focusing on clean architecture and intuitive user experiences.
                        </p>
                        <p>
                            I believe that Great Software is the intersection of high-performance code and delightful design. I&apos;m constantly exploring new technologies and patterns to sharpen my skills and deliver better results for my clients.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Button className="gap-2 rounded-full px-6" asChild>
                            <a href="/resume.pdf" download="Abel_Ayalew_Resume.pdf">
                                <Download size={18} /> Download Resume
                            </a>
                        </Button>
                        <div className="flex gap-2">
                            <Button variant="outline" size="icon" className="rounded-full" asChild>
                                <Link href="https://github.com/abela2112"><Github size={20} /></Link>
                            </Button>
                            <Button variant="outline" size="icon" className="rounded-full" asChild>
                                <Link href="mailto:abela9326@gmail.com"><Mail size={20} /></Link>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative size-64 md:size-96 bg-muted rounded-2xl overflow-hidden border">
                            <img
                                src="/abels_photo.jpg"
                                alt="Abel"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Philosophy / Values */}
            <motion.section
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-muted/30 rounded-3xl p-12 overflow-hidden relative"
            >
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Heart size={200} />
                </div>
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="space-y-4">
                        <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                            <Globe size={24} />
                        </div>
                        <h3 className="text-xl font-bold font-outfit">Product-First</h3>
                        <p className="text-muted-foreground">I don&apos;t just write code; I build products that serve a purpose and provide real value to users.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                            <Code2 size={24} />
                        </div>
                        <h3 className="text-xl font-bold font-outfit">Clean Architecture</h3>
                        <p className="text-muted-foreground">Writing maintainable and testable code is a non-negotiable standard for every project I touch.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                            <Coffee size={24} />
                        </div>
                        <h3 className="text-xl font-bold font-outfit">Continuous Learning</h3>
                        <p className="text-muted-foreground">The tech landscape evolved daily. I dedicate time every week to learn and experiment with new tools.</p>
                    </div>
                </div>
            </motion.section>

            {/* Tech Stack Grid */}
            <section className="space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold font-outfit">Tech Stack</h2>
                    <p className="text-muted-foreground">Tools and technologies I use to bring ideas to life.</p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {skills.map((skill, i) => (
                        <motion.div key={i} variants={item} className="p-8 rounded-2xl border bg-background space-y-6">
                            <h3 className="text-xl font-bold font-outfit flex items-center gap-2">
                                <div className="size-2 bg-primary rounded-full"></div>
                                {skill.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item, j) => (
                                    <Badge key={j} variant="secondary" className="px-3 py-1 font-medium">{item}</Badge>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Experience Timeline */}
            <section className="space-y-12">
                <h2 className="text-3xl font-bold font-outfit">Experience</h2>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    {[
                        { year: "2025 - Present", role: "Fullstack Developer", company: "Digital Oil Trade PLC", desc: "Building high-performance APIs and scaling backend services while integrating AI/LLM features for real-world automation." },
                        { year: "2024 - 2025", role: "Mobile Developer", company: "Draftbit", desc: "Building and customizing mobile applications for US-based clients with a focus on responsive layouts and touch interactions." },
                        { year: "2023 - 2024", role: "Fullstack Developer", company: "Ministry of Innovation & Tech", desc: "Built and maintained scalable web applications with a focus on enterprise stability and performance." },
                        { year: "2019 - 2024", role: "BSc in Electrical & Computer Engineering", company: "Addis Ababa University", desc: "Major in Computer Engineering. Focused on Data Structures, Algorithms, and system design." },
                    ].map((exp, i) => (
                        <motion.div key={i} variants={item} className="flex flex-col md:flex-row gap-4 md:gap-12 pb-8 border-b last:border-0">
                            <div className="text-muted-foreground font-medium md:w-32 flex-shrink-0">{exp.year}</div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold font-outfit">{exp.role} <span className="text-primary">@ {exp.company}</span></h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">{exp.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Call to Action */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center space-y-8 py-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold font-outfit">Want to work together?</h2>
                <div className="flex justify-center gap-4">
                    <Button size="lg" asChild>
                        <Link href="/contact">Let&apos;s talk</Link>
                    </Button>
                </div>
            </motion.div>
        </div>
    )
}
