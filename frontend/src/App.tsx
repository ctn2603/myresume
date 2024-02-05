import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { sections } from "./constants/sections";
import Section from "./components/section/section";
import { useEffect, useState } from "react";

export default function App() {
    const [activeSection, setActiveSection] = useState("home");

    const handleScroll = () => {
        sections.forEach((section) => {
            const currentSection: HTMLElement | null = document.getElementById(
                section.id,
            );

            if (currentSection) {
                const { top } = currentSection.getBoundingClientRect();
                if (top - 60 <= 0) {
                    setActiveSection(section.id);
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <BrowserRouter>
            <div className="relative z-0 bg-white">
                <NavBar activeSection={activeSection} />
                {sections.map((section) => {
                    return (
                        <Section
                            key={section.id}
                            id={section.id}
                            background={section.background}
                        >
                            {section.child}
                        </Section>
                    );
                })}
                <Footer />
            </div>
        </BrowserRouter>
    );
}
