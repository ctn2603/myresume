import profile from "../../assets/images/profile.png";
import { motion } from "framer-motion";

interface AboutProps {}

const About = (props: AboutProps) => {
    return (
        <>
            <div className="mb-10 flex h-[100px] items-center text-5xl">
                About me
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-10 md:w-3/4 md:flex-row">
                <div className="flex h-2 w-[150px] items-center justify-center sm:w-[250px]">
                    <img src={profile} alt="logo" />
                </div>
                <motion.div
                    className="flex w-2/3 flex-col items-start justify-center gap-2"
                    variants={{
                        off: {
                            y: 20,
                            opacity: 0,
                        },
                        on: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 1,
                            },
                        },
                    }}
                    initial="off"
                    whileInView="on"
                    viewport={{ once: true }}
                >
                    <h4 className="mb-2 text-2xl">Hi! I'm Chi Tam Nguyen</h4>
                    <p className="font-thin">
                        I was born in Vietnam, a country adorned with diverse
                        breathtaking landscapes - Ha Long Bay is such an
                        instance. In 2019, I immigrated to America and embarked
                        on a new chapter of my life in Riverside County,
                        Southern California. I had a great time experiencing
                        many cool aspects in the area before relocating to
                        Northern California, a technology hub of the world.
                    </p>
                    <p className="font-thin">
                        My journey in higher education commenced at Mt. San
                        Jacinto College, where I pursued an Associate Degree in
                        Computer Science. Then I transfered to{" "}
                        <span className="font-normal">
                            University of California - Berkeley,
                        </span>{" "}
                        continuing my studies and pursuing a Bachelor's Degree
                        in the same major.
                    </p>
                    <p className="font-thin">
                        <span className="font-normal">
                            Software Engineering
                        </span>
                        {", "}
                        <span className="font-normal">
                            Full Stack Development
                        </span>
                        {", "}
                        <span className="font-normal">
                            Mobile Programming
                        </span>{" "}
                        are my interests. I'm passionate about crafting
                        innovative solutions and building practical
                        applications. Having that being said, Machine Learning
                        is on the rise and I'm willing to learn and integrate
                        ML-based features into applications as needed...
                    </p>
                </motion.div>
            </div>
        </>
    );
};

export default About;
