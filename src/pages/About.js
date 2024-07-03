import pic1 from '..//images/lulu.jpg';

import { motion } from "framer-motion";

import { IoLocation } from "react-icons/io5";
import { IoMdSchool } from "react-icons/io";
import { MdWork } from "react-icons/md";

// Framer Motion variants 
const containerVariants = {
    hidden: {
        x: "-100vw"
    },
    visible: {
        x: 0,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.25
        }
    }    
};

// More Famer Motion variants 
const childVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
};

// TODO : Fix sizing for XL screens
const About = () => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{x: "-100vw", transition: { duration: 0.5 }}}
            className="w-10/12 h-full flex flex-col mx-auto py-16 justify-center">
                <div className='flex flex-col items-center gap-3 p-4'>
                    <h1 className='text-4xl sm:text-6xl'><b>About Me</b></h1>
                    <h3 className='text-xl sm:text-2xl text-center'>A little bit of background on me</h3>
                </div>
                <div className='flex justify-center w-full rounded-xl backdrop-blur-lg bg-white/30 p-4 shadow-lg'>
                    <div className='flex flex-col smp:flex-row justify-evenly w-full items-center'>
                        <motion.div variants={childVariants} className='text-lg md:text-xl lg:text-2xl flex gap-3 h-12 items-center'><IoLocation size={30} />Rochester Hills, MI</motion.div>
                        <motion.div variants={childVariants} className='text-lg md:text-xl lg:text-2xl flex gap-3 h-12 items-center'><IoMdSchool size={30} />Michigan State University</motion.div>
                        <motion.div variants={childVariants} className='text-lg md:text-xl lg:text-2xl flex gap-3 h-12 items-center'><MdWork size={30} />Stellantis</motion.div>
                    </div>
                </div>
                <div className='flex flex-col smp:flex-row w-full justify-center gap-10 p-6'>
                    <div className='flex flex-col w-full text-center smp:text-left smp:w-1/2 lg:w-3/5 h-72 smp:h-96 pr-6 overflow-auto text-lg'>
                        <p>
                            I’ve always been known as the “tech kid” of the family, the go-to person when someone needed to transfer 
                            photos from an iPhone to a laptop. From a young age, I loved experimenting with computers. There’s something 
                            so fascinating to me about accomplishing complex tasks with just a few clicks and keystrokes. 
                        </p>
                        <br></br>
                        <p>
                            My passion for technology never really found its way into the classroom and didn't initially prompt me to 
                            consider it as a career option. I started as a business-preference major at Michigan State University in 
                            2020—not because working in business was my dream, but because it seemed like the easiest and most conventional 
                            path. Then, CSE 102 came along, an introductory Python course required for entry into the business college. 
                            This class reignited my spark for computers and made me realize I was pretty good at programming. Within two 
                            weeks, I switched my major to Computer Science, finally figuring out what I truly wanted to study.
                        </p>
                        <br></br>
                        <p>
                            Fast forward to today, I’m approaching my ninth and final semester at MSU, having developed a diverse 
                            skill set and a multitude of interests, including full-stack development, object-oriented programming, 
                            and more.
                        </p>
                        

                    </div>
                    <div className='flex w-full smp:w-1/2 lg:w-2/5 justify-center smp:justify-end items-center'>
                        <img src={pic1} alt="My dog, Lulu" className='w-64 smp:w-72 lg:w-80 rounded-lg shadow-lg'></img>
                    </div>

                </div>
        </motion.div>
    )
}
 
export default About;