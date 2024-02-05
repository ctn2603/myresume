import LinkedIn from '../assets/icons/linkedin.png';
import Github from '../assets/icons/github.png';

interface Contact {
    id: string;
    icon: string;
    link: string;
}

export const contacts: Contact[] = [
    {
        id: 'linkedin',
        icon: LinkedIn,
        link: "https://www.linkedin.com/in/tamcn"
    },
    {
        id: 'github',
        icon: Github,
        link: "https://github.com/ctn2603"
    }
];