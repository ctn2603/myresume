import { motion, useCycle } from "framer-motion";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/icons/logo.png";
import {
    menuItemVariants,
    menuItemsVariants,
    menuVariants,
} from "../../constants/variants";
import Path from "../path/path";
import { sections } from "../../constants/sections";

interface NavBarProps {
    activeSection: string;
}

const NavBar = (props: NavBarProps) => {
    const [open, toggleOpen] = useCycle<boolean>(false, true);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed top-0 z-20 flex w-full items-center justify-center font-rubik ${
                scrolled ? "bg-black" : "bg-transparent"
            }`}
        >
            <div className="flex h-[60px] w-5/6 items-center justify-between lg:justify-center">
                <HashLink smooth to={"#home"}>
                    <div className="flex h-[35px] justify-center pl-3">
                        <motion.img
                            whileFocus={{
                                scale: 1.1,
                            }}
                            whileTap={{
                                scale: 0.9,
                            }}
                            src={logo}
                            alt="logo"
                        />
                    </div>
                </HashLink>

                <div className="mx-10 hidden py-1 lg:flex">
                    <ul className="justify-between md:flex">
                        {sections.map((section) => {
                            return (
                                <motion.li
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    key={section.id}
                                >
                                    <HashLink
                                        smooth
                                        to={section.link}
                                        key={section.id}
                                        className={`mx-3 my-1.5 uppercase ${
                                            props.activeSection === section.name
                                                ? "text-[#EAA79C]"
                                                : "text-white"
                                        }`}
                                    >
                                        {section.name}
                                    </HashLink>
                                </motion.li>
                            );
                        })}
                        <a
                            className="mx-3 cursor-pointer text-white"
                            href={"/[Chi Tam Nguyen] Resume.pdf"}
                            download={"[Chi Tam Nguyen] Resume.pdf"}
                        >
                            <button
                                type="submit"
                                className="shadow-primary ml-10 rounded-xl bg-[#26CD71] px-4 font-bold shadow-md outline-none hover:bg-[#86cfa6] active:bg-[#05ad4f]"
                            >
                                RESUME
                            </button>
                        </a>
                    </ul>
                </div>

                <motion.div
                    animate={open ? "open" : "closed"}
                    onClick={() => toggleOpen()}
                    className="z-50 mr-4 flex lg:hidden"
                >
                    <button>
                        <svg width="23" height="23" viewBox="0 0 23 23">
                            <Path
                                variants={{
                                    closed: { d: "M 2 2.5 L 20 2.5" },
                                    open: { d: "M 3 16.5 L 17 2.5" },
                                }}
                            />
                            <Path
                                d="M 2 9.423 L 20 9.423"
                                variants={{
                                    closed: { opacity: 1 },
                                    open: { opacity: 0 },
                                }}
                                transition={{ duration: 0.1 }}
                            />
                            <Path
                                variants={{
                                    closed: { d: "M 2 16.346 L 20 16.346" },
                                    open: { d: "M 3 2.5 L 17 16.346" },
                                }}
                            />
                        </svg>
                    </button>
                </motion.div>
            </div>

            <motion.nav
                variants={menuVariants}
                initial={false}
                animate={open ? "opened" : "closed"}
                className="fixed flex h-[50vh] w-full items-center justify-center bg-[#212529] px-10 lg:hidden"
            >
                <motion.ul
                    variants={menuItemsVariants}
                    initial={false}
                    animate={open ? "open" : "closed"}
                    className="mt-[10px] flex w-full list-none flex-col items-center justify-center gap-3"
                >
                    {sections.map((section) => {
                        return (
                            <motion.li
                                key={section.id}
                                variants={menuItemVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="mx-3 block w-full rounded-md p-1 text-center uppercase hover:bg-blue-500"
                            >
                                <HashLink
                                    smooth
                                    to={section.link}
                                    key={section.id}
                                    className={`mx-3 my-1.5 uppercase ${
                                        props.activeSection === section.name
                                            ? "text-[#EAA79C]"
                                            : "text-white"
                                    }`}
                                    onClick={() => toggleOpen()}
                                >
                                    {section.name}
                                </HashLink>
                            </motion.li>
                        );
                    })}
                    <a
                        className="mx-3 cursor-pointer text-white"
                        href={"/[Chi Tam Nguyen] Resume.pdf"}
                        download={"[Chi Tam Nguyen] Resume.pdf"}
                    >
                        <button
                            type="submit"
                            className="shadow-primary ml-0 rounded-xl bg-[#26CD71] px-4 font-bold shadow-md outline-none hover:bg-[#86cfa6] active:bg-[#05ad4f] lg:ml-10"
                        >
                            RESUME
                        </button>
                    </a>
                </motion.ul>
            </motion.nav>
        </div>
    );
};

export default NavBar;
