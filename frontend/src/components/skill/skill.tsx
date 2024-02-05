import { motion } from "framer-motion";
import { domainVariants } from "../../constants/variants";

interface SkillProps {
    techName: string;
    className: string;
}

const Skill = (props: SkillProps) => {
    return (
        <motion.div
            variants={domainVariants}
            className={`${props.className} ring-black-300 flex h-[60px] w-[80px] origin-center flex-col items-center justify-center rounded-xl bg-white bg-gradient-to-br from-white via-black to-green-800
            shadow-inner shadow-gray-500/50 ring ring-offset-1`}
        >
            <p className="text-center text-[1em] text-sm text-white">
                {props.techName}
            </p>
        </motion.div>
    );
};

export default Skill;
