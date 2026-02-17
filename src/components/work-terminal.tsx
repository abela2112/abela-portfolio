"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Terminal } from "lucide-react"

const experiences = [
    {
        role: "Fullstack Developer",
        company: "Digital Oil Trade PLC",
        period: "April 2025 - Present",
        description: "Building and scaling backend services while integrating cutting-edge AI features into production systems.",
        achievements: [
            "Architected high-performance APIs using Python, FastAPI, and Django for energy trading data.",
            "Implemented AI/LLM-powered features using GPT-style models for intelligent data extraction and automation.",
            "Developed end-to-end ML workflows including data preprocessing, model integration, and optimization."
        ]
    },
    {
        role: "Mobile Developer",
        company: "Draftbit",
        period: "July 2024 - Sept 2025",
        description: "Customized mobile applications using React Native, focusing on smooth interactions and responsive layouts.",
        achievements: [
            "Translated complex UI/UX concepts into functional mobile screens within a low-code ecosystem.",
            "Optimized touch interactions and layout responsiveness for US-based client applications.",
            "Implemented production-ready navigation patterns and state management using React Native."
        ]
    },
    {
        role: "Fullstack Developer",
        company: "Ministry of Innovation & Tech",
        period: "Oct 2023 - Jan 2024",
        description: "Developed scalable web applications focused on performance and reliability for government initiatives.",
        achievements: [
            "Wrote efficient backend logic and APIs ensuring strictly clean and documented codebases.",
            "Analyzed system data to proactively improve application stability and end-user experience.",
            "Translated business requirements into technical solutions for digital transformation projects."
        ]
    }
];

export function WorkTerminal() {
    const [activeTab, setActiveTab] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        setIsTyping(true);
        let currentText = "";
        const fullText = `cat experiences/${experiences[activeTab].company.toLowerCase().replace(/\s+/g, '_')}.md`;
        let i = 0;

        const interval = setInterval(() => {
            if (i < fullText.length) {
                currentText += fullText[i];
                setDisplayText(currentText);
                i++;
            } else {
                clearInterval(interval);
                setTimeout(() => setIsTyping(false), 500);
            }
        }, 30);

        return () => clearInterval(interval);
    }, [activeTab]);

    return (
        <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-xl border border-muted-foreground/20 bg-[#0d1117] shadow-2xl font-mono text-sm md:text-base">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-muted-foreground/10">
                <div className="flex gap-2">
                    <div className="size-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="size-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="size-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-xs md:text-sm">
                    <Terminal size={14} />
                    <span>visitor@portfolio: ~/work-experience</span>
                </div>
                <div className="w-12"></div> {/* Spacer to center title */}
            </div>

            <div className="flex flex-col md:flex-row h-[450px]">
                {/* Sidebar / Tabs */}
                <div className="w-full md:w-64 bg-[#0d1117] border-b md:border-b-0 md:border-r border-muted-foreground/10 p-2 flex md:flex-col gap-1 overflow-x-auto md:overflow-x-visible">
                    {experiences.map((exp, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`flex-shrink-0 text-left px-3 py-2 rounded-md transition-colors ${activeTab === index
                                ? "bg-primary/20 text-primary border-l-2 border-primary"
                                : "text-muted-foreground hover:bg-muted-foreground/5 hover:text-foreground"
                                }`}
                        >
                            <span className="truncate block">{exp.company}</span>
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="flex-1 p-6 overflow-y-auto custom-scrollbar bg-[#0d1117]">
                    <div className="flex items-center gap-2 text-[#7ee787] mb-4">
                        <span>$</span>
                        <span className="text-[#e2e8f0]">{displayText}</span>
                        {isTyping && <span className="w-2 h-5 bg-[#7ee787] animate-pulse"></span>}
                    </div>

                    <AnimatePresence mode="wait">
                        {!isTyping && (
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-6"
                            >
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-[#f0f6fc]">{experiences[activeTab].role}</h3>
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#79c0ff]">
                                        <span className="font-bold">@ {experiences[activeTab].company}</span>
                                        <span className="text-muted-foreground">|</span>
                                        <span>{experiences[activeTab].period}</span>
                                    </div>
                                </div>

                                <p className="text-[#8b949e] leading-relaxed italic">
                                    &quot;{experiences[activeTab].description}&quot;
                                </p>

                                <div className="space-y-3">
                                    <div className="text-[#ffa657] font-bold underline decoration-dotted underline-offset-4">Key Achievements:</div>
                                    <ul className="space-y-2">
                                        {experiences[activeTab].achievements.map((achievement, i) => (
                                            <li key={i} className="flex gap-3 text-[#c9d1d9] leading-relaxed">
                                                <span className="text-[#7ee787] flex-shrink-0 mt-1.5">
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 6L4 9L11 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Simulated footer */}
                                <div className="pt-4 border-t border-muted-foreground/10 flex items-center gap-2 text-xs text-muted-foreground">
                                    <span>EOF</span>
                                    <div className="flex-1 border-t border-dashed border-muted-foreground/10"></div>
                                    <span>Markdown Rendered</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}
