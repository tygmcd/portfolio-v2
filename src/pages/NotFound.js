import { BiSad } from "react-icons/bi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
    hidden: {
        x: "-100vw"
    },
    visible: {
        x: 0,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
        }
    }    
};


const NotFound = () => {
    return (
        <motion.div 
            className="flex flex-col items-center gap-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{x: "-100vw", transition: { duration: 0.5 }}}>
            <BiSad className="text-[10rem]" />
            <h1 className="text-4xl sm:text-5xl">Page not found</h1>
            <Link to="/">
                <motion.button className='w-48 h-12 mt-2 text-lg bg-neutral-200 rounded-lg shadow
                                        sm:w-56 sm:h-14'
                    whileHover={{scale: 1.1, originX: 0}}>
                    Return Home
                </motion.button>
            </Link>
        </motion.div>
    )
}

export default NotFound;