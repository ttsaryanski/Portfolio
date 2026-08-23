import { personalInfo } from "@/data/portfolio-data";

export default function AboutSection() {
    const firstParagraph = personalInfo.bio.split("\n")[0];
    const secondParagraph = personalInfo.bio.split("\n")[1];
    const thirdParagraph = personalInfo.bio.split("\n")[2];

    return (
        <section
            id="about"
            className="flex items-center justify-center px-8 md:px-16 lg:px-24 py-20 md:py-24"
        >
            <div className="w-full max-w-4xl text-center space-y-12 md:space-y-16">
                <h2 className="text-tiny tracking-widest">ABOUT ME</h2>
                <p className="text-body leading-relaxed max-w-3xl mx-auto">
                    {firstParagraph}
                </p>
                <p className="text-body leading-relaxed max-w-3xl mx-auto">
                    {secondParagraph}
                </p>
                <p className="text-body leading-relaxed max-w-3xl mx-auto">
                    {thirdParagraph}
                </p>
            </div>
        </section>
    );
}
