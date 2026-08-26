import { ReactNode } from "react";
import BackToTop from "./BackToTop";
import Footer from "./Footer";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-background">
            <main id="main-content">{children}</main>
            <Footer />
            <BackToTop />
        </div>
    );
}
