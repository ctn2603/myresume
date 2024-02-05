import About from "../pages/about/about";
import Contact from "../pages/contact/contact";
import Home from "../pages/home/home";
import Projects from "../pages/projects/projects";
import Skills from "../pages/skills/skills";
import Timeline from "../pages/timeline/timeline";

interface Section {
    id: string;
    name: string;
    link: string;
    background: string;
    child: React.ReactNode;
}

export const sections: Section[] = [
    {
        id: "home",
        name: "home",
        link: "#home",
        background: "bg-home",
        child: <Home />,
    },
    {
        id: "about",
        name: "about",
        link: "#about",
        background: "bg-about",
        child: <About />,
    },
    {
        id: "skills",
        name: "skills",
        link: "#skills",
        background: "bg-skills",
        child: <Skills />,
    },
    {
        id: "projects",
        name: "projects",
        link: "#projects",
        background: "bg-projects",
        child: <Projects />,
    },
    {
        id: "timeline",
        name: "timeline",
        link: "#timeline",
        background: "bg-timeline",
        child: <Timeline />,
    },
    {
        id: "contact",
        name: "contact",
        link: "#contact",
        background: "bg-contact",
        child: <Contact />,
    },
];
