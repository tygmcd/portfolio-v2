import { motion } from  "framer-motion"

const Projects = () => {
    return (
        <motion.p
            initial={{x: "-100vw"}}
            animate={{x: 0}}
            transition={{duration: 0.5}}
            exit={{x: "-100vw", transition: { duration: 0.5 }}}>
            Projects
        </motion.p>
    );
}
 
export default Projects;