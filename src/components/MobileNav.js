import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion"
import { Link } from "react-router-dom"

import { ImMenu } from "react-icons/im";
import { IoMdCloseCircle } from "react-icons/io";
import MobileNavLink from "./MobileNavLink";


const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: isOpen ? 1 : 0,
            transition: {
                duration: 0.25,
                when: "beforeChildren",
                staggerChildren: 0.15
            }
        }
    };

    const childVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1
        }
    };

    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden fixed top-6 left-6 z-20 text-black">{isOpen ? <IoMdCloseCircle size={40} /> : <ImMenu size={40} />}</button>
            <AnimatePresence>
                {isOpen && (
                <motion.div className={`sm:hidden ${isOpen ? 'fixed' : 'hidden'} bg-neutral-200 h-screen w-screen z-10 flex flex-col gap-10 justify-center items-center`}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{scale: 0, opacity: 0, transition: { duration: 0.25 }}}
                >
                    <Link to="/">
                        <motion.button onClick={() => setIsOpen(!isOpen)} className="text-6xl border-b-4 border-neutral-500 pb-2" 
                            variants={childVariants}
                            whileHover={{ opacity: 0.5 }}>
                            Home
                        </motion.button>
                    </Link>
                    <Link to="/about">
                        <motion.button  onClick={() => setIsOpen(!isOpen)} className="text-6xl border-b-4 border-neutral-500 pb-2" 
                            variants={childVariants}
                            whileHover={{ opacity: 0.5 }}>
                            About
                        </motion.button>
                    </Link>
                    <Link to="/projects">
                        <motion.button onClick={() => setIsOpen(!isOpen)} className="text-6xl border-b-4 border-neutral-500 pb-2" 
                            variants={childVariants}
                            whileHover={{ opacity: 0.5 }}>
                            Projects
                        </motion.button>
                    </Link>
                    <Link to="/contact">
                        <motion.button onClick={() => setIsOpen(!isOpen)} className="text-6xl border-b-4 border-neutral-500 pb-2" 
                            variants={childVariants}
                            whileHover={{ opacity: 0.5 }}>
                            Contact
                        </motion.button>
                    </Link>

                </motion.div>
                )}
            </AnimatePresence>

        </>
    );
}
 
export default MobileNav;