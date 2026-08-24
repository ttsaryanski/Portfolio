import { useActiveSection } from "@/hooks/useActiveSection";

import Layout from "@/components/Layout";
import Navigation from "@/components/Navigation";
import HeaderSection from "@/components/sections/HeaderSection";
import AboutSection from "@/components/sections/AboutSection";
import WorkSection from "@/components/sections/WorkSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Index() {
    useActiveSection(100);
    return (
        <Layout>
            <Navigation />
            <HeaderSection />
            <AboutSection />
            <EducationSection />
            <WorkSection />
            <SkillsSection />
            <ContactSection />
        </Layout>
    );
}
