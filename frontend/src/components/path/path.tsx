import { motion } from "framer-motion";

const Path = (props: any) => {
  return (
    <motion.path
      className="stroke-white stroke-[3]"
      strokeLinecap={"round"}
      {...props}
    />
  );
};

export default Path;
