import { motion } from "framer-motion"

const Contact = () => {
    return (
        <motion.p
            initial={{x: "-100vw"}}
            animate={{x: 0}}
            transition={{duration: 0.5}}
            exit={{x: "-100vw", transition: { duration: 0.5 }}}>
            Contact
        </motion.p>
    );
}
 
export default Contact;