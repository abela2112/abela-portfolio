"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon, Laptop } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
]

export function Navbar() {
    const pathname = usePathname()
    const { theme, setTheme } = useTheme()
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md dark:mesh-background">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-xl">P</span>
                        </div>
                        <span className="hidden font-bold sm:inline-block">Portfolio</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-1 text-sm font-medium relative">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "relative px-4 py-2 transition-colors hover:text-primary z-10",
                                    isActive ? "text-primary" : "text-muted-foreground"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                                        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                                    />
                                )}
                                {item.name}
                            </Link>
                        )
                    })}
                </nav>

                <div className="flex items-center space-x-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="size-9 rounded-full"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>

                    <div className="md:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="size-9">
                                    <Menu className="size-5" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="flex flex-col p-8 pt-16 dark:mesh-background">
                                <div className="flex flex-col gap-6">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                "text-2xl font-bold transition-colors hover:text-primary",
                                                pathname === item.href ? "text-foreground" : "text-muted-foreground"
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-auto">
                                    <Button className="w-full text-lg h-12" asChild>
                                        <Link href="/contact" onClick={() => setIsOpen(false)}>Hire Me</Link>
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    <Button className="hidden md:flex" asChild>
                        <Link href="/contact">Hire Me</Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}
