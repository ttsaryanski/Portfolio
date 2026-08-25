import { projects } from "@/data/portfolio-data";
import { ArrowUpRight, Github } from "lucide-react";

import SplitSection from "@/components/ui/split-section";

export default function ProjectsPage() {
    return (
        <SplitSection title="My Projects" id="project">
            <div className="space-y-16 md:space-y-20">
                <div className="max-w-7xl mx-auto">
                    {projects.map((project) => (
                        <>
                            {project.singlePage ? (
                                <article
                                    key={project.id}
                                    className="group border border-foreground/15 p-8 mb-8 md:p-10 hover:border-foreground/30 transition-colors"
                                >
                                    <div className="space-y-6">
                                        <div className="flex items-start justify-between gap-4">
                                            <h2 className="text-large">
                                                {project.name}
                                            </h2>
                                            <span
                                                className={`text-tiny px-3 py-1 border ${
                                                    project.status === "active"
                                                        ? "border-foreground/30"
                                                        : "border-foreground/15 text-muted-foreground"
                                                }`}
                                            >
                                                {project.status === "active"
                                                    ? "Active"
                                                    : "Archived"}
                                            </span>
                                        </div>

                                        <p className="text-body leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="text-tiny px-3 py-1 bg-foreground/5"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-6 pt-4">
                                            {project.liveUrl && (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-body underline hover:text-muted-foreground transition-colors"
                                                >
                                                    Visit site
                                                    <ArrowUpRight className="w-4 h-4" />
                                                </a>
                                            )}
                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-body underline hover:text-muted-foreground transition-colors"
                                                >
                                                    Source
                                                    <Github className="w-4 h-4" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            ) : (
                                <>
                                    <article
                                        key={project.id}
                                        className="group border border-foreground/15 p-8 mb-8 md:p-10 hover:border-foreground/30 transition-colors"
                                    >
                                        <div className="space-y-6">
                                            <div className="flex items-start justify-between gap-4">
                                                <h2 className="text-large">
                                                    {project.name}
                                                </h2>
                                                <span
                                                    className={`text-tiny px-3 py-1 border ${
                                                        project.status ===
                                                        "active"
                                                            ? "border-foreground/30"
                                                            : "border-foreground/15 text-muted-foreground"
                                                    }`}
                                                >
                                                    {project.status === "active"
                                                        ? "Active"
                                                        : "Archived"}
                                                </span>
                                            </div>

                                            <p className="text-body leading-relaxed">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {project.techStack.map(
                                                    (tech) => (
                                                        <span
                                                            key={tech}
                                                            className="text-tiny px-3 py-1 bg-foreground/5"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ),
                                                )}
                                            </div>

                                            <div className="flex items-center gap-6 pt-4">
                                                {project.liveUrl && (
                                                    <a
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-body underline hover:text-muted-foreground transition-colors"
                                                    >
                                                        Visit site
                                                        <ArrowUpRight className="w-4 h-4" />
                                                    </a>
                                                )}
                                                {project.githubUrl && (
                                                    <a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-body underline hover:text-muted-foreground transition-colors"
                                                    >
                                                        Source
                                                        <Github className="w-4 h-4" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        {project.children.map(
                                            (childProject) => (
                                                <div
                                                    key={childProject.id}
                                                    className="mt-8 space-y-6"
                                                >
                                                    <div className="flex items-start justify-between gap-4">
                                                        <h2 className="text-large">
                                                            {childProject.name}
                                                        </h2>
                                                        <span
                                                            className={`text-tiny px-3 py-1 border ${
                                                                childProject.status ===
                                                                "active"
                                                                    ? "border-foreground/30"
                                                                    : "border-foreground/15 text-muted-foreground"
                                                            }`}
                                                        >
                                                            {childProject.status ===
                                                            "active"
                                                                ? "Active"
                                                                : "Archived"}
                                                        </span>
                                                    </div>

                                                    <p className="text-body leading-relaxed">
                                                        {
                                                            childProject.description
                                                        }
                                                    </p>

                                                    <div className="flex flex-wrap gap-2">
                                                        {childProject.techStack.map(
                                                            (tech) => (
                                                                <span
                                                                    key={tech}
                                                                    className="text-tiny px-3 py-1 bg-foreground/5"
                                                                >
                                                                    {tech}
                                                                </span>
                                                            ),
                                                        )}
                                                    </div>

                                                    <div className="flex items-center gap-6 pt-4">
                                                        {childProject.liveUrl && (
                                                            <a
                                                                href={
                                                                    childProject.liveUrl
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-2 text-body underline hover:text-muted-foreground transition-colors"
                                                            >
                                                                Visit site
                                                                <ArrowUpRight className="w-4 h-4" />
                                                            </a>
                                                        )}
                                                        {childProject.githubUrl && (
                                                            <a
                                                                href={
                                                                    childProject.githubUrl
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-2 text-body underline hover:text-muted-foreground transition-colors"
                                                            >
                                                                Source
                                                                <Github className="w-4 h-4" />
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                            ),
                                        )}
                                    </article>
                                </>
                            )}
                        </>
                    ))}
                </div>
            </div>
        </SplitSection>
    );
}
