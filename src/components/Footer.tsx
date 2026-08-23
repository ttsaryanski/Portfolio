export default function Footer() {
    return (
        <footer className="max-w-[660px] mx-auto px-6 py-8 mt-16">
            <div className="text-center">
                © {new Date().getFullYear()} All rights reserved.
            </div>

            <div className="text-center">Design by Lovable.</div>
        </footer>
    );
}
