import { useState } from "react";
import { Menu, X } from "lucide-react";

import { personalInfo } from "@/data/portfolio-data";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border px-8 md:px-16 lg:px-24"
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto py-3">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                        <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
                            {personalInfo.name}
                        </span>
                        <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-muted-foreground">
                            {personalInfo.title}
                        </span>
                    </div>

                    <div className="nav hidden sm:flex items-center gap-6 sm:gap-8 md:gap-10">
                        <a
                            href="#work"
                            className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold hover:text-muted-foreground transition-colors"
                        >
                            Experience
                        </a>

                        <a
                            href="#education"
                            className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold hover:text-muted-foreground transition-colors"
                        >
                            Education
                        </a>

                        <a
                            href="#project"
                            className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold hover:text-muted-foreground transition-colors"
                        >
                            My Projects
                        </a>

                        <a
                            href="#contact"
                            className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold hover:text-muted-foreground transition-colors"
                        >
                            Contacts
                        </a>
                    </div>

                    <button
                        type="button"
                        className="sm:hidden p-2 rounded-md hover:bg-accent transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {isOpen && (
                    <div
                        id="mobile-menu"
                        className="sm:hidden mt-3 pb-3 border-t border-border pt-3"
                    >
                        <div className="flex flex-col items-end  gap-3">
                            <a
                                href="#work"
                                className="text-base font-semibold hover:text-muted-foreground transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Experience
                            </a>

                            <a
                                href="#education"
                                className="text-base font-semibold hover:text-muted-foreground transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Education
                            </a>

                            <a
                                href="#projects"
                                className="text-base font-semibold hover:text-muted-foreground transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                My Projects
                            </a>

                            <a
                                href="#contact"
                                className="text-base font-semibold hover:text-muted-foreground transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Contacts
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
