import Skills from "../assets/images/posto.png";
import PostoManager from "../assets/images/posto-manager.png";
import Gypsy from "../assets/images/gypsy.png";
import Byow from "../assets/images/byow.png";
import PersonalWebsite from "../assets/images/personal-website.png";
import Dinozone from "../assets/images/dinozone.png";
import StudyBear from "../assets/images/study-bear.png";

interface Project {
    id: string;
    name: string;
    thumbnail: string;
    description: string;
    tags: string[];
    repo: string;
}

export const projects: Project[] = [
    {
        id: "personal website",
        name: "Personal Website",
        thumbnail: PersonalWebsite,
        description: "My personal website, a central hub showcasing my skills, projects associated with Full-Stack Development, Mobile Development, Software Engineering, as well as my academic journey.",
        tags: ["Typescript", "ReactJS", "Tailwind CSS", "S3", "Route 53", "CloudFront", "IAM", "CodePipeline", "Docker"],
        repo: "https://github.com/ctn2603/personal-website"
    },
    {
        id: "posto",
        name: "Posto",
        thumbnail: Skills,
        description: "A full-stack and cross-platform social media app designed for mobile, inspiring discoveries, learning, fostering cultural exchanges, and encouraging meaningful communications.",
        tags: ["Dart", "Flutter", "Typescript", "Firebase", "Node.js", "ExpressJS", "Restful API", "Android", "iOS"],
        repo: "https://github.com/ctn2603/Posto.git"
    },
    {
        id: "posto manager",
        name: "Posto Manager",
        thumbnail: PostoManager,
        description: "This in-house website serves as a secured portal for managing Posto, a social media app. Core features include user content management, analytics and insights, advertisement campaigns, and administration",
        tags: ["ReactJS", "MaterialUI", "Node.js", "ExpressJS", "Firebase", "Restful API"],
        repo: ""
    },
    {
        id: "study bear",
        name: "Study Bear",
        thumbnail: StudyBear,
        description: "A website designed to help Berkeley students find study groups at any time. Students can also form study sessions and specify location, time, subject, and other information. Those who look for existing study sessions could find them on the interactive map.",
        tags: ["ReactJS", "Google Map", "Typescript", "Node.js", "MongoDB", "Restful API"],
        repo: "https://github.com/ctn2603/study-bear"
    },
    {
        id: "gypsy",
        name: "Gypsy",
        thumbnail: Gypsy,
        description: "This is a revamped version of Gypsy's Trattoria Italiana website, a restaurant located near UC Berkeley. The redesign addresses current issues, such as poor typography, improper spacing, inharmonious color, offering a more polished and visually appealing alternative.",
        tags: ["HTML", "CSS", "Javascript"],
        repo: "https://github.com/ctn2603/gypsy"
    },
    {
        id: "byow",
        name: "Byow",
        thumbnail: Byow,
        description: "I built a 2D Java-based game engine that generates explorable worlds where objects - rooms, paths, fruits - were randomly generated. Additionally, the engine incorporates a feature allowing players to enhance the difficulty by toggling lights within the game.",
        tags: ["Java", "StdDraw",],
        repo: ""
    },
    {
        id: "dinozone",
        name: "Dinozone",
        thumbnail: Dinozone,
        description: "The website works as a hub for beginners, those who would like to learn about dinosaurs. It provides  information on various dinosaur species, their characteristics, habitant, and family trees.",
        tags: ["HTML", "CSS", "Javascript", "ParticleJS", "TypeIt", "TreantJS"],
        repo: "https://github.com/ctn2603/dinozone"
    }
];
