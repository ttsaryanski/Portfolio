import Layout from "@/components/Layout";
import Navigation from "@/components/Navigation";
import HeaderSection from "@/components/sections/HeaderSection";
import AboutSection from "@/components/sections/AboutSection";
import WorkSection from "@/components/sections/WorkSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import ProjectsPage from "../components/sections/ProjectSection";

export default function Index() {
    return (
        <Layout>
            <Navigation />
            <HeaderSection />
            <AboutSection />
            <WorkSection />
            <EducationSection />
            <ProjectsPage />
            <SkillsSection />
            <ContactSection />
        </Layout>
    );
}
