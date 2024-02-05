import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import Arrow from "./../../assets/images/arrow.png";

interface Arrow2SecProps {
    className?: string;
}

const Arrow2Sec = (props: Arrow2SecProps) => {
    return (
        <div className={`${props.className} cursor-pointer`}>
            <HashLink smooth to={"#about"}>
                <motion.img
                    variants={{
                        start: {
                            opacity: 1,
                            y: 0,
                        },
                        end: {
                            opacity: 0,
                            y: 30,
                        },
                    }}
                    initial="start"
                    animate="end"
                    transition={{
                        repeat: Infinity,
                        duration: 3,
                    }}
                    src={Arrow}
                    alt="More"
                    className="h-[70px] text-red-500"
                />
            </HashLink>
        </div>
    );
};

export default Arrow2Sec;
