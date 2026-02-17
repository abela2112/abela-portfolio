"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Code2, Cpu, Download, Globe, Rocket, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WorkTerminal } from "@/components/work-terminal"

const featuredProjects = [
  {
    title: "Qemer Learning Management System (LMS)",
    description: "A full-stack learning platform helping instructors manage courses and students track progress.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    image: "/project-1.jpg",
    slug: "qemer-lms",
  },
  {
    title: "Admin Panel System",
    description: "Centralized dashboard for managing users, content, and system configurations.",
    tags: ["Next.js", "Shadcn UI", "Sequelize"],
    image: "/project-2.jpg",
    slug: "admin-panel",
  },
  {
    title: "OneCard System",
    description: "Full-stack ID and access control system built with Next.js and Golang.",
    tags: ["Next.js", "Golang", "PostgreSQL"],
    image: "/project-4.jpg",
    slug: "one-card-system",
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

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-10 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,var(--color-primary-foreground)_0%,transparent_100%)] opacity-10 dark:opacity-20"></div>
        <div className="container mx-auto px-4 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* <Badge variant="outline" className="px-3 py-1 rounded-full text-sm font-medium border-primary/20 bg-primary/5">
              Available for new projects
            </Badge> */}
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight font-outfit max-w-4xl mx-auto">
              I build <span className="text-primary italic">scalable</span> web applications that turn ideas into <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">real products.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Full-stack engineer specializing in Next.js, Node.js, and PostgreSQL.
              I design systems that handle real-time data and SaaS architectures.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button size="lg" className="rounded-full px-8 gap-2 group" asChild>
              <Link href="/projects">
                View Projects
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 gap-2 group" asChild>
              <a href="/resume.pdf" download="Abel_Ayalew_Resume.pdf">
                <Download className="size-4" /> Download Resume
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
              <Link href="/contact">Hire Me</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-12 flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-50"
          >
            <div className="flex items-center gap-2"><Globe className="size-5" /> Next.js</div>
            <div className="flex items-center gap-2"><Cpu className="size-5" /> FastAPI</div>
            <div className="flex items-center gap-2"><Rocket className="size-5" /> AI/LLM</div>
            <div className="flex items-center gap-2"><Zap className="size-5" /> React Native</div>
            <div className="flex items-center gap-2"><Rocket className="size-5" /> SaaS</div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container mx-auto px-4 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-outfit">Featured Projects</h2>
            <p className="text-muted-foreground max-w-xl">
              Selected case studies highlighting architecture, problem-solving, and outcome-driven development.
            </p>
          </div>
          <Button variant="ghost" className="gap-2" asChild>
            <Link href="/projects">View all case studies <ArrowRight className="size-4" /></Link>
          </Button>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="group overflow-hidden border-muted/60 bg-muted/20 hover:bg-muted/40 transition-colors duration-300">
                <div className="aspect-video relative overflow-hidden bg-muted/50">
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20">
                    <Code2 size={64} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <Button size="sm" variant="secondary" className="gap-2" asChild>
                      <Link href={`/projects/${project.slug}`}>View Case Study</Link>
                    </Button>
                  </div>
                </div>
                <CardHeader className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-normal text-xs">{tag}</Badge>
                    ))}
                  </div>
                  <CardTitle className="font-outfit text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-base line-clamp-2 mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button variant="link" className="p-0 h-auto gap-2 group/link" asChild>
                    <Link href={`/projects/${project.slug}`}>
                      Read Case Study
                      <ArrowRight className="size-3 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Work Experience Terminal Section */}
      <section className="container mx-auto px-4 space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-outfit">Career Evolution</h2>
          <p className="text-muted-foreground max-w-xl">
            A technical breakdown of my professional journey and the impact I&apos;ve made at various organizations.
          </p>
        </div>
        <WorkTerminal />
      </section>

      {/* Services Tagline Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold font-outfit">Expertise that scales.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I specialize in building production-ready applications with a focus on performance, security, and user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Rocket, title: "MVP Dev", desc: "Speed to market without compromising code quality." },
              { icon: Zap, title: "SaaS Ops", desc: "Multi-tenant architectures and scalable infrastructure." },
              { icon: Code2, title: "API Design", desc: "Robust, documented, and developer-friendly interfaces." },
              { icon: Globe, title: "Full-Stack", desc: "End-to-end development from database to UI." },
            ].map((service, i) => (
              <div key={i} className="space-y-4 p-6 rounded-2xl border bg-background/50 text-center">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto">
                  <service.icon size={24} />
                </div>
                <h3 className="font-bold text-lg font-outfit">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>

          <Button size="lg" variant="outline" asChild>
            <Link href="/services">See All Services</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      {/* / <section className="container mx-auto px-4">
        <div className="relative rounded-3xl bg-primary p-8 md:p-16 text-center text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.2),transparent)]"></div>
          <div className="relative space-y-8 z-10">
            <h2 className="text-3xl md:text-5xl font-bold font-outfit">Let&apos;s build something great together.</h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto text-lg underline underline-offset-8 decoration-primary-foreground/30">
              Now accepting freelance projects and interesting full-time opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="rounded-full px-8 text-primary font-bold" asChild>
                <Link href="/contact">Get started</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-primary-foreground/30 hover:bg-primary-foreground/10" asChild>
                <Link href="/about">Learn more</Link>
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}
