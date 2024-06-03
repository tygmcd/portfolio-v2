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
            className="flex flex-col w-10/12 justify-center gap-12 my-16">
                <div className='flex flex-col items-center gap-2'>
                    <h1 className='text-4xl sm:text-6xl'><b>About Me</b></h1>
                    <h3 className='text-xl sm:text-2xl text-center'>A little bit of background on me</h3>
                </div>
                <div className='flex justify-center w-full rounded-xl backdrop-blur-lg bg-white/30 py-3 shadow-lg'>
                    <div className='flex flex-col smp:flex-row justify-evenly w-full items-center'>
                        <motion.div variants={childVariants} className='text-lg md:text-xl lg:text-2xl flex gap-3 h-12 items-center'><IoLocation size={30} />Rochester Hills, MI</motion.div>
                        <motion.div variants={childVariants} className='text-lg md:text-xl lg:text-2xl flex gap-3 h-12 items-center'><IoMdSchool size={30} />Michigan State University</motion.div>
                        <motion.div variants={childVariants} className='text-lg md:text-xl lg:text-2xl flex gap-3 h-12 items-center'><MdWork size={30} />Stellantis</motion.div>
                    </div>
                </div>
                <div className='flex flex-col smp:flex-row w-full justify-center gap-10'>
                    <div className='flex w-full smp:w-1/2 lg:w-3/5 h-56 smp:h-96 no-scrollbar overflow-auto text-lg'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit laoreet id donec ultrices tincidunt arcu non. Vulputate ut pharetra sit amet. Ultricies leo integer malesuada nunc vel risus. Nulla facilisi etiam dignissim diam quis. A erat nam at lectus urna duis convallis convallis tellus. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Vitae congue eu consequat ac felis donec. Molestie nunc non blandit massa enim. Tempus egestas sed sed risus pretium quam. Quisque non tellus orci ac auctor augue mauris augue. Egestas congue quisque egestas diam in arcu cursus euismod. Lacinia quis vel eros donec ac odio. Mauris ultrices eros in cursus turpis massa tincidunt. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Orci nulla pellentesque dignissim enim sit amet. Feugiat in ante metus dictum at tempor commodo ullamcorper a.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit laoreet id donec ultrices tincidunt arcu non. Vulputate ut pharetra sit amet. Ultricies leo integer malesuada nunc vel risus. Nulla facilisi etiam dignissim diam quis. A erat nam at lectus urna duis convallis convallis tellus. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Vitae congue eu consequat ac felis donec. Molestie nunc non blandit massa enim. Tempus egestas sed sed risus pretium quam. Quisque non tellus orci ac auctor augue mauris augue. Egestas congue quisque egestas diam in arcu cursus euismod. Lacinia quis vel eros donec ac odio. Mauris ultrices eros in cursus turpis massa tincidunt. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Orci nulla pellentesque dignissim enim sit amet. Feugiat in ante metus dictum at tempor commodo ullamcorper a.
                    </div>
                    <div className='flex w-full smp:w-1/2 lg:w-2/5 justify-center smp:justify-end items-center'>
                        <img src={pic1} alt="My dog, Lulu" className='w-64 smp:w-72 lg:w-80 rounded-lg shadow-lg'></img>
                    </div>

                </div>
        </motion.div>
    )
}
 
export default About;