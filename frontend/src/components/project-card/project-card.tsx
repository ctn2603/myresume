import { motion } from "framer-motion";
import { projectVariants } from "../../constants/variants";

interface ProjectCardProps {
    name: string;
    thumbnail: string;
    description: string;
    tags: string[];
    repo: string;
}

const ProjectCard = (props: ProjectCardProps) => {
    return (
        <motion.div
            variants={projectVariants}
            whileHover={{ scale: 1.02 }}
            className="border-1 w-full flex-none border-gray-300 p-4 md:w-1/2 lg:w-1/3 max-w-[450px]"
        >
            <div className="rounded-xl bg-gradient-to-t from-[#212130] to-[#39304A] p-3">
                <div className="h-[230px]">
                    <img
                        src={props.thumbnail}
                        alt="thumbnail"
                        className="h-full w-full rounded-lg object-fill"
                    />
                </div>
                <div>
                    <p className="my-4 font-poppins text-2xl font-bold text-white">
                        {props.name}
                    </p>
                </div>
                <div>
                    <p className="mb-5 font-poppins text-sm font-thin text-white">
                        {props.description}
                    </p>
                </div>
                <div className="mb-5 flex gap-2">
                    {props.repo && (
                        <a
                            className="text-sm text-white"
                            href={props.repo}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button
                                type="submit"
                                className="rounded-xl border border-gray-300 bg-[#345D95] px-4 font-bold outline-none hover:bg-[#2b558f] active:bg-[#49515c]"
                            >
                                {"Code"}
                            </button>
                        </a>
                    )}
                    <a
                        className="text-sm text-white"
                        href={props.repo}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button
                            type="submit"
                            className="rounded-xl border border-gray-300 bg-[#345D95] px-4 font-bold outline-none hover:bg-[#2b558f] active:bg-[#49515c]"
                        >
                            {"Detail"}
                        </button>
                    </a>
                </div>

                <fieldset className="rounded-lg border border-orange-300 px-2 pb-2 pt-1 shadow-md">
                    <legend className="text-sm font-bold text-orange-300">
                        Stack
                    </legend>
                    <div className="flex list-none flex-wrap gap-2">
                        {props.tags.map((tag) => {
                            return (
                                <li
                                    key={tag}
                                    className="rounded-2xl border border-orange-300 bg-orange-200 px-2"
                                >
                                    <p
                                        className={`text-black-400 font-poppins text-xs text-black`}
                                    >
                                        {tag}
                                    </p>
                                </li>
                            );
                        })}
                    </div>
                </fieldset>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
