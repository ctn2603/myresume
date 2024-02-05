/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                home: "url('/src/assets/images/landing.jpg')",
                about: "url('/src/assets/images/about.jpg')",
                skills: "url('/src/assets/images/skills.jpg')",
                projects: "url('/src/assets/images/projects.jpg')",
                timeline: "url('/src/assets/images/timeline.jpg')",
                contact: "url('/src/assets/images/contact.jpg')",
            },
            fontFamily: {
                rubik: ["Rubik", "cursive"],
                poppins: ["Poppins", "cursive"],
            },
            fontWeight: {
                rubik: {
                    thin: "300",
                    normal: "700",
                },
                poppins: {
                    normal: "400",
                    large: "700",
                },
            },
        },
    },
    plugins: [],
};
