"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, MessageSquare, Linkedin, Github, Send, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [isSubmitted, setIsSubmitted] = React.useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    return (
        <div className="container mx-auto px-4 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-12"
                >
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-bold font-outfit">Let&apos;s build <span className="text-primary italic">something.</span></h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Have a project in mind? Want to hire me? Or just want to say hi? Feel free to reach out. I characteristically respond within 24 hours.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold font-outfit">Contact Details</h2>
                        <div className="space-y-4">
                            <Link href="mailto:abela9326@gmail.com" className="flex items-center gap-4 text-lg text-muted-foreground hover:text-primary transition-colors group">
                                <div className="size-12 rounded-xl bg-muted/50 border flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-all">
                                    <Mail size={20} />
                                </div>
                                abela9326@gmail.com
                            </Link>
                            <div className="flex items-center gap-4 text-lg text-muted-foreground group">
                                <div className="size-12 rounded-xl bg-muted/50 border flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-all">
                                    <MessageSquare size={20} />
                                </div>
                                Schedule a call in Calendly
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold font-outfit">Socials</h2>
                        <div className="flex gap-4">
                            {[
                                { icon: Github, link: "https://github.com/abela2112", name: "GitHub" },
                            ].map((social, i) => (
                                <Button key={i} variant="outline" className="gap-2 rounded-xl px-6" asChild>
                                    <Link href={social.link}>
                                        <social.icon size={18} /> {social.name}
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <div>
                    <Card className="border-muted/60 bg-muted/20 shadow-xl overflow-hidden">
                        <AnimatePresence mode="wait">
                            {!isSubmitted ? (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <CardHeader className="p-8 pb-4">
                                        <CardTitle className="text-2xl font-outfit">Send a Message</CardTitle>
                                        <CardDescription>Fill out the form below and I'll get back to you shortly.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-8 pt-4">
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Name</label>
                                                    <Input placeholder="John Doe" required className="bg-background" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Email</label>
                                                    <Input type="email" placeholder="john@example.com" required className="bg-background" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">Subject</label>
                                                <Input placeholder="New Project Idea" required className="bg-background" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">Message</label>
                                                <Textarea placeholder="Tell me about your project..." className="min-h-[150px] bg-background" required />
                                            </div>
                                            <Button type="submit" className="w-full gap-2 py-6 rounded-xl font-bold text-lg" disabled={isSubmitting}>
                                                {isSubmitting ? (
                                                    <>Processing...</>
                                                ) : (
                                                    <>
                                                        Send Message <Send size={18} />
                                                    </>
                                                )}
                                            </Button>
                                        </form>
                                    </CardContent>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="p-16 text-center space-y-6 flex flex-col items-center justify-center min-h-[400px]"
                                >
                                    <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                                        <CheckCircle2 size={48} />
                                    </div>
                                    <h3 className="text-3xl font-bold font-outfit">Message Sent!</h3>
                                    <p className="text-muted-foreground text-lg">
                                        Thank you for reaching out. I&apos;ve received your message and will get back to you as soon as possible.
                                    </p>
                                    <Button variant="outline" onClick={() => setIsSubmitted(false)}>Send another message</Button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Card>
                </div>
            </div>
        </div>
    )
}
