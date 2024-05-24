import { motion } from  "framer-motion"

const Projects = () => {
    return (
        <motion.p
            initial={{x: "-100vw"}}
            animate={{x: 0}}
            transition={{duration: 0.5}}
            exit={{x: "-100vw", transition: { duration: 0.5 }}}
            className="flex flex-col w-10/12 h-full py-20 gap-12">
                <div className='flex flex-col items-center gap-3'>
                    <h1 className='text-6xl'><b>Projects</b></h1>
                    <h3 className='text-2xl'>What I've been working on</h3>
                </div>
        </motion.p>
    );
}
 
export default Projects;