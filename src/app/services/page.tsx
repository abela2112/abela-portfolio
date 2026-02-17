"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Rocket, Zap, Database, LayoutPanelLeft, Code2, ShieldCheck, ArrowRight, Gauge } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
    {
        icon: Rocket,
        title: "MVP Development",
        description: "Go from idea to a working product in weeks. I build lightweight but robust MVPs that allow you to validate your assumptions and start gathering user feedback quickly.",
        features: ["Rapid Prototyping", "Scalable Tech Stack", "User-Centric Design", "Feature Prioritization"],
    },
    {
        icon: Zap,
        title: "SaaS Applications",
        description: "Complex, multi-tenant web applications built for scale. I handle everything from database architecture and subscription management to frontend dashboards.",
        features: ["Multi-tenancy", "Subscription Systems", "Data Isolation", "Performance Optimization"],
    },
    {
        icon: LayoutPanelLeft,
        title: "Admin Dashboards",
        description: "Internal tools that make your operations smoother. Custom dashboards that integrate with your existing data sources and provide actionable insights.",
        features: ["Custom Reporting", "Role-Based Access", "Data Visualization", "CMS Integration"],
    },
    {
        icon: Database,
        title: "API Development",
        description: "Robust and secure backend systems and APIs. Whether you need a RESTful or GraphQL API, I design interfaces that are performant and easy for other developers to use.",
        features: ["Performance", "Security", "Documentation", "Integration Support"],
    },
    {
        icon: Gauge,
        title: "Performance Optimization",
        description: "Is your app slow? I specialize in auditing and fixing performance bottlenecks in web applications to improve SEO and user retention.",
        features: ["Core Web Vitals", "Database Query Tuning", "Asset Optimization", "Caching Strategies"],
    },
    {
        icon: ShieldCheck,
        title: "Full-Stack Security",
        description: "Ensuring your application and users are safe. I implement modern security best practices including encryption, sanitization, and secure auth flows.",
        features: ["Authentication", "SQLi/XSS Prevention", "Secret Management", "Security Audits"],
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

export default function ServicesPage() {
    return (
        <div className="container mx-auto px-4 py-20 space-y-24">
            <header className="text-center space-y-4 max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold font-outfit">Services</h1>
                <p className="text-xl text-muted-foreground">
                    I provide end-to-end development services to help founders and companies build high-quality digital products.
                </p>
            </header>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        whileHover={{ y: -5, scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Card className="h-full bg-muted/20 border-muted/60 hover:border-primary/50 transition-all group">
                            <CardHeader className="p-8">
                                <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                    <service.icon size={28} />
                                </div>
                                <CardTitle className="text-2xl font-outfit mb-4">{service.title}</CardTitle>
                                <CardDescription className="text-base leading-relaxed">
                                    {service.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="px-8 pb-8">
                                <ul className="space-y-2">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <div className="size-1.5 rounded-full bg-primary/40"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter className="px-8 pb-8 pt-0">
                                <Button variant="link" className="p-0 h-auto gap-2 group/link" asChild>
                                    <Link href="/contact">
                                        Inquire
                                        <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>

            {/* CTA Section */}
            <section className="bg-primary p-8 md:p-16 rounded-3xl text-primary-foreground text-center space-y-8 overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.1),transparent)]"></div>
                <div className="relative space-y-6 z-10">
                    <h2 className="text-3xl md:text-4xl font-bold font-outfit">Ready to start your next project?</h2>
                    <p className="text-primary-foreground/80 max-w-xl mx-auto text-lg leading-relaxed">
                        I&apos;m currently booking projects for the next quarter. Reach out today for a discovery call.
                    </p>
                    <Button size="lg" variant="secondary" className="px-10 rounded-full font-bold" asChild>
                        <Link href="/contact">Book a Discovery Call</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
