import { motion } from "framer-motion";
import ProjectCard from "../../components/project-card/project-card";
import { projects } from "../../constants/projects";
import { projectVariants } from "../../constants/variants";

interface ProjectsProps {}

const Projects = (props: ProjectsProps) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex h-[100px] items-center text-5xl text-black">
                Projects
            </div>
            <motion.div
                variants={projectVariants}
                initial="start"
                whileInView="stop"
                viewport={{ once: true }}
                transition={{
                    staggerChildren: 0.2,
                }}
                className="flex flex-col flex-wrap justify-center sm:w-3/4 sm:flex-row"
            >
                {projects.map((project) => {
                    return <ProjectCard key={project.id} {...project} />;
                })}
            </motion.div>
        </div>
    );
};

export default Projects;
