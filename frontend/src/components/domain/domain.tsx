import { motion } from "framer-motion";
import Skill from "../skill/skill";
import { domainVariants } from "../../constants/variants";

export interface DomainProps {
    domainName: string;
    techs: {
        techId: string;
        techName: string;
    }[];
    className: string;
}

const Domain = (props: DomainProps) => {
    return (
        <div
            className={`${props.className} flex h-full w-full flex-col items-center justify-start
            rounded-3xl border border-gray-100 bg-opacity-10 bg-clip-padding backdrop-blur-sm backdrop-filter sm:w-3/4 sm:flex-row`}
        >
            <div className="flex w-[150px] flex-shrink-0 items-center justify-center rounded-bl-xl rounded-tl-xl py-2">
                <p className="text-center text-[#EAA79C]">{props.domainName}</p>
            </div>
            <motion.div
                className="px-auto flex grow flex-wrap items-start justify-center sm:justify-start"
                variants={domainVariants}
                initial="start"
                transition={{
                    staggerChildren: 0.05,
                }}
                whileInView="stop"
                viewport={{ once: true }}
            >
                {props.techs.map((tech) => {
                    return (
                        <Skill
                            key={tech.techId}
                            techName={tech.techName}
                            className="m-3"
                        />
                    );
                })}
            </motion.div>
        </div>
    );
};

export default Domain;
