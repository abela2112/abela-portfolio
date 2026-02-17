"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Home, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="container mx-auto px-4 min-h-[70vh] flex flex-col items-center justify-center text-center space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
            >
                <h1 className="text-9xl font-bold font-outfit text-primary/20">404</h1>
                <h2 className="text-4xl font-bold font-outfit">Page Not Found</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex gap-4"
            >
                <Button variant="default" className="gap-2" asChild>
                    <Link href="/">
                        <Home size={18} /> Back to Home
                    </Link>
                </Button>
                <Button variant="outline" className="gap-2" onClick={() => window.history.back()}>
                    <ArrowLeft size={18} /> Go Back
                </Button>
            </motion.div>
        </div>
    )
}
