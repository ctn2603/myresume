interface Timeline {
    id: string;
    from: string;
    to: string;
    descriptions: string[];
}

export interface WorkTimeline extends Timeline {
    position: string;
    company: string;
}

export interface EducationTimeline extends Timeline {
    major: string;
    school: string;
}

export const workTimelines: WorkTimeline[] = [
    {
        id: 'posto social',
        position: 'Software Engineer Intern',
        company: 'Posto Social',
        from: '06/2023',
        to: '08/2023',
        descriptions: [
            'Designed and implemented a full-stack and cross-platform (Android, iOS) social media app that encourages discoveries, learning, cultural exchanges, and communications between users.',
            'Conducted extensive research on cutting-edge technologies and applied frameworks to strengthen the application backbone and enhance its efficiency.',
            'Performed testing across different devices and simulated platforms to ensure consistency and optimal performance.',
            'Tech stack: Typescript, NodeJS, Dart, Flutter, Google Firebase.',
        ]
    }
];

export const educationTimelines: EducationTimeline[] = [
    {
        id: 'uc berkeley',
        major: 'Computer Science (BA)',
        school: 'University of California - Berkeley',
        from: '08/2022',
        to: 'Present',
        descriptions: [
            'Focus on Computer Architecture, Software Development, and Web Development courses.',
            'Serve as a member and technical leader at Codify Berkeley, a student organization dedicated to software development.',
            'Engaged in music rehearsals at Cal Community Music.',
            'Coursework: Data Structures, Computer Architecture, Structure and Interpretation of Computer Programs, Web Design, Full Stack Development, Operating Systems, Database Systems, Linux Sys Admin, Deep Learning for Visual Data, Introduction to Artificial Intelligence.'
        ]
    },
    {
        id: 'msjc',
        major: 'Computer Science (ADT)',
        school: 'Mt. San Jacinto College',
        from: '08/2020',
        to: '08/2022',
        descriptions: [
            'Fulfilled Intersegmental General Education Transfer Curriculum and fundamental programming courses as part of the Computer Science major.',
            'Worked as a Student Peer Tutor, providing assistance to students in Math and Programming Courses.',
            'Coursework: Data Structure, C++ Programming Language, Computer Organization.',
        ]
    }
];
