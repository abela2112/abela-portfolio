import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t bg-muted/30 dark:mesh-background">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
                                <span className="text-primary-foreground font-bold text-xl">P</span>
                            </div>
                            <span className="font-bold text-xl">Abel Ayalew</span>
                        </Link>
                        <p className="text-muted-foreground max-w-xs text-sm">
                            Full-stack engineer building scalable web applications that turn ideas into real products.
                            Specializing in Next.js, Node.js, and PostgreSQL.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="https://github.com/abela2112" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github size={20} />
                            </Link>
                            <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter size={20} />
                            </Link>
                            <Link href="mailto:abela9326@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                <Mail size={20} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Pages</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Get in touch</Link></li>
                            <li><Link href="mailto:abela9326@gmail.com" className="hover:text-primary transition-colors">abela9326@gmail.com</Link></li>
                            <li><span className="text-sm">Based in Nairobi, Kenya</span></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
                    <p>© {currentYear} Portfolio. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
