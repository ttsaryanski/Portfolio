import { personalInfo } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";

export default function ContactSection() {
    return (
        <SplitSection title="Contacts" id="contact">
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-32 items-center">
                <div className="contact-reponsive flex items-center lg:pl-16">
                    <div className="space-y-6">
                        <div className="mb-10">
                            <img
                                src={personalInfo.avatar}
                                alt={personalInfo.name}
                                className="full w-48 h-64 object-cover"
                            />
                        </div>

                        <p className="text-large">{personalInfo.name}</p>

                        <p className="text-2xl">
                            {personalInfo.location.city}{" "}
                            {personalInfo.location.country}
                        </p>

                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="text-body underline block"
                        >
                            {personalInfo.email}
                        </a>

                        {personalInfo.website && (
                            <a
                                href={`https://${personalInfo.website}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-body underline block"
                            >
                                {personalInfo.website}
                            </a>
                        )}

                        <div className="social flex flex-row justify-start">
                            <div className="space-y-6">
                                <a
                                    href="https://linkedin.com/in/tsvetan-tsaryanski-765775327"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </div>

                            <div className="space-y-6 ml-6">
                                <a
                                    href="https://github.com/ttsaryanski"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa-brands fa-square-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SplitSection>
    );
}
